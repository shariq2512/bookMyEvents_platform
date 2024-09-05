import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isPublicRoute = createRouteMatcher([
    '/',
    '/events/:id',
    '/api/webhook/clerk',
    '/api/webhook/stripe',
    '/api/uploadthing',
    '/sign-in(.*)',
    '/sign-up(.*)'
]);

export default clerkMiddleware((auth, request) => {
  const url = request.url;

  // Directly allow the webhook route
  if (url.startsWith('/api/webhook/stripe')) {
    return;
  }

  // Protect all other non-public routes
  if (!isPublicRoute(request)) {
    auth().protect();
  }
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};