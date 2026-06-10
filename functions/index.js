export async function onRequestGet() {
  // 处理 www 重定向
  const url = new URL(request.url);
  if (url.hostname.startsWith("www.")) {
    url.hostname = url.hostname.replace("www.", "");
    return Response.redirect(url.href, 301);
  }

  // 正常响应内容
  return new Response("✅ 恭喜！你的 steven123.site 已成功绑定到 Cloudflare Pages!", {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-cache"
    }
  });
}
