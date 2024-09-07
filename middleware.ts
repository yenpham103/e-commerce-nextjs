import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// const isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)']);

const isProtectedRoute = createRouteMatcher(['/account(.*)']);

export default clerkMiddleware((auth, request) => {
  //if route is protected so redirect to login
  if (isProtectedRoute(request)) {
    auth().protect({
      unauthenticatedUrl: process.env.NEXT_PUBLIC_SERVER_URL,
      unauthorizedUrl: process.env.NEXT_PUBLIC_SERVER_URL,
    });
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
