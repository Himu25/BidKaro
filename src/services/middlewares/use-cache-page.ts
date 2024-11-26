import type { Handle } from "@sveltejs/kit";
import { getCachedPage, setCachedPage } from "$services/queries/page-cache";
import { streamToString } from "$lib/util/stream-to-string";

const cacheableRoutes = ["/about", "/privacy", "/auth/signin", "/auth/signup"];

export const useCachePage: Handle = async ({ event, resolve }) => {
  if (!cacheableRoutes.includes(event.url.pathname)) {
    return resolve(event);
  }

  // Try to fetch the cached page from Redis
  const page = await getCachedPage(event.url.pathname);

  if (page) {
    return new Response(page, {
      headers: {
        "content-type": "text/html",
      },
    });
  }

  // Set the cache-busting header for the request
  event.request.headers.set("if-none-match", Math.random().toString());

  // Resolve the response
  const res = await resolve(event);

  // If the response has no body (empty or error response), return it directly
  if (!res.body) {
    return res;
  }

  // Clone the response so we can read its body without consuming the original
  const resCache = res.clone();

  try {
    // Attempt to read the body as a stream
    const body = await streamToString(resCache.body);

    // Only cache if the body is non-empty
    if (body) {
      await setCachedPage(event.url.pathname, body);
    }
  } catch (error) {
    console.error("Error reading response body:", error);
  }

  return res;
};
