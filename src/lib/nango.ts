// Mock Nango Client for B2B Integrations
export const nango = {
  auth: async (integrationId: string, connectionId: string) => {
    console.log(`Authenticating ${integrationId} for ${connectionId}`);
    return { success: true };
  },
  getConfig: async () => ({ integrations: ['slack', 'google-drive', 'quickbooks'] }),
};
