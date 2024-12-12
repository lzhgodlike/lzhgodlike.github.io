var posts=["2024/12/12/如何在cloudflare中创建永久免费节点/","2024/12/06/My-New-Post/","2024/12/06/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };