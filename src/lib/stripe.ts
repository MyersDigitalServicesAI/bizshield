// Mock Stripe Client
export const stripe = {
  customers: {
    create: async () => ({ id: 'cus_123' }),
  },
  subscriptions: {
    list: async () => ({ data: [] }),
  },
};
