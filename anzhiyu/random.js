var posts=["2025/02/04/hello-world/","2025/02/04/第一个文章/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };