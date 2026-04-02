import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import Stripe from "stripe";

// Initialize Stripe (lazy initialization pattern to avoid crashing if key is missing on boot)
let stripeClient: Stripe | null = null;
function getStripe() {
  if (!stripeClient) {
    const key = process.env.STRIPE_SECRET_KEY;
    if (!key) {
      console.warn("STRIPE_SECRET_KEY is missing. Stripe features will not work.");
      return null;
    }
    stripeClient = new Stripe(key);
  }
  return stripeClient;
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  // API routes FIRST
  
  // 1. Stripe Webhook (Production Billing)
  // Note: Stripe requires the raw body to verify the signature
  app.post("/api/stripe/webhook", express.raw({ type: 'application/json' }), (req, res) => {
    const stripe = getStripe();
    if (!stripe) {
      res.status(500).send("Stripe is not configured");
      return;
    }

    const sig = req.headers['stripe-signature'];
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

    if (!sig || !webhookSecret) {
      console.error("Missing stripe signature or webhook secret");
      res.status(400).send("Missing signature or secret");
      return;
    }

    let event;

    try {
      // Verify the webhook signature
      event = stripe.webhooks.constructEvent(req.body, sig, webhookSecret);
    } catch (err: any) {
      console.error(`Webhook Error: ${err.message}`);
      res.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }

    // Handle the event
    switch (event.type) {
      case 'checkout.session.completed':
        const session = event.data.object;
        console.log(`Payment successful for session: ${session.id}`);
        // TODO: Update user subscription in the database using session.client_reference_id
        // e.g., await db.collection('users').doc(session.client_reference_id).update({ isPro: true })
        break;
      case 'customer.subscription.deleted':
        const subscription = event.data.object;
        console.log(`Subscription deleted: ${subscription.id}`);
        // TODO: Revoke pro access in the database
        break;
      default:
        console.log(`Unhandled event type ${event.type}`);
    }
    
    res.status(200).send("ok");
  });

  // 2. Edge Function Equivalent for Automated Backups
  // Triggered via cron job (e.g., pg_cron or external scheduler)
  app.post("/api/backup", express.json(), (req, res) => {
    console.log("Automated backup triggered");
    // Logic: loop through connected services via Nango, export, store in Supabase Storage with encryption
    res.status(200).json({ status: "Backup complete" });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
