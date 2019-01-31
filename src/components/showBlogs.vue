<template>
  <div class="blog-container">
    <div class="blog-card" v-for="blog in blogs" v-colourful>
      <h2>{{blog.title}}</h2>
      <p>{{blog.content}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'showBlog',
  data(){
    return {
      blogs: []
    }
  },
  methods: {
  },
  created(){
    this.$http.get('https://thebloghouse-32a74.firebaseio.com/posts.json').then(function(data){
      return data.json();
    }).then(function(data){
      let postsArray = [];
      for(let key in data){
        postsArray.push(data[key]);
      }
      this.blogs = postsArray;
    });
  }
}
</script>

<style scoped>
  .blog-container {
    display: inline-block;
  }
  .blog-card {
    border: 2px solid #000;
    padding: 15px;
    display: inline-block;
    margin: 5px;
    font-family: sans-serif;
    min-height: 200px;
  }

  .blog-card > p {
    font-family: monospace;
    margin: 5px 0;

  }
</style>
