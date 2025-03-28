var posts=["posts/hello-world.html","posts/每周大学习——初步学习HTML.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };