import worker from "./functions/worker.js";

export default {
  async fetch(request, env, ctx) {
    // Let your existing worker handle API routes
    return worker.fetch(request, env, ctx);
  }
};
