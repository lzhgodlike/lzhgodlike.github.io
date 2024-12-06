var posts=["2024/12/06/hello-world/","2024/12/06/My-New-Post/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };