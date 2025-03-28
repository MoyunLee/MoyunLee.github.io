var posts=["2025/03/28/hello-world/","2024/11/04/每周大学习——初步学习HTML/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };