import { serve } from "bun";

serve({
  fetch(request) {
    const url = new URL(request.url);
    if (url.pathname === "/") {
      return new Response("Hello koushik", { status: 200 });
    } else if (url.pathname === "/name") {
      return new Response("Hello koushik chowdhury", { status: 200 });
    } else {
      return new Response("404 not found", { status: 200 });
    }
  },
  port: 3000,
  hostname: "127.0.0.1",
});
