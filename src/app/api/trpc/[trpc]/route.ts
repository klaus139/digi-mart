import { appRouter } from '@/trpc';
import { fetchRequestHandler } from '@trpc/server/adapters/fetch';

const handler = async (req: Request) => {
  // Ensure that you are handling the response correctly and returning it
  const response = await fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext: () => ({}),
  });

  // Return the response from the fetchRequestHandler
  return response;
};

export { handler as GET, handler as POST };
