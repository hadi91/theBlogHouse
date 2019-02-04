<template>
  <div class="single-post">
    <h1>{{blogs.title}}</h1>
    <p>{{blogs.content}}</p>
  </div>

</template>

<script>
export default {
  name: 'featuredPost',
  data(){
    return {
      blogs: {}
    }
  },
  created(){
    this.$http.get('https://thebloghouse-32a74.firebaseio.com/posts.json').then(function(data){
      return data.json();
    }).then(function(data){
      let getBlogs = [];
      for(let key in data){
        getBlogs.push(data[key]);
      }
      this.blogs = getBlogs.pop();
    });
  }
}
</script>
