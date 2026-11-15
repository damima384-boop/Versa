/**
 * VERSA Cloudflare Worker entry point.
 * Static pages are served through the ASSETS binding.
 * API routes are handled here and will grow as features are implemented.
 */
export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/v1/health" && request.method === "GET") {
      return Response.json({
        ok: true,
        service: "versa-api",
        version: "1.0.0",
        timestamp: new Date().toISOString()
      }, {
        headers: { "Cache-Control": "no-store" }
      });
    }

    if (url.pathname.startsWith("/api/")) {
      return Response.json({
        error: "not_found",
        message: "This API endpoint has not been implemented yet."
      }, { status: 404 });
    }

    return env.ASSETS.fetch(request);
  }
};
