// Mock Supabase Client
export const supabase = {
  auth: {
    getUser: async () => ({ data: { user: { id: '1', email: 'admin@bizshield.com' } }, error: null }),
    signOut: async () => ({ error: null }),
  },
  from: (table: string) => ({
    select: () => ({
      eq: () => ({
        single: async () => ({ data: {}, error: null }),
      }),
    }),
  }),
};
