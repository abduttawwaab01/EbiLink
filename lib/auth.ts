// NextAuth configuration boundary (ready for integration)
// Developer: Odebunmi Tawwab

export const authConfig = {
  providers: [
    // Email/password, OAuth providers can be added here
  ],
  session: { strategy: 'jwt' as const },
  pages: {
    signIn: '/auth/login',
    newUser: '/family/create',
  },
};
