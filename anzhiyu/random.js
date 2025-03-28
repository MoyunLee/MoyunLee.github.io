var posts=["posts/每周大学习——初步学习HTML.html","posts/hello-world.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };