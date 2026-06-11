import worker from "./functions/worker.js";

export default {
  async fetch(request, env, ctx) {
    // Let your existing worker handle API routes
    const url = new URL(request.url);
    const path = url.pathname;

    // If it's an API route, pass it to your worker
    if (path.startsWith("/api/")) {
      return worker.fetch(request, env, ctx);
    }

    // Otherwise serve static assets from Cloudflare Pages
    return env.ASSETS.fetch(request);
  }
};
