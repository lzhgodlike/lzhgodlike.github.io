var posts=["2024/12/12/CFjiedian/","2024/12/22/24122201/","2024/12/22/OS/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };