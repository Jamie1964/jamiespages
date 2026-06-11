import worker from "./functions/worker.js";

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // API routes → your worker
    if (url.pathname.startsWith("/api/")) {
      return worker.fetch(request, env, ctx);
    }

    // Everything else → static assets
    return env.ASSETS.fetch(request);
  }
};
