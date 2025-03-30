var posts=["posts/hello-world.html","posts/C语言.html","posts/新手村.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };