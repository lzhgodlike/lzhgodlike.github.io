var posts=["2024/12/22/24122201/","2024/12/25/24122501/","2024/12/27/24122701/","2025/01/05/25010501/","2025/01/12/25011201/","2025/01/07/25010701/","2024/12/22/OS/","2024/12/12/CFjiedian/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };