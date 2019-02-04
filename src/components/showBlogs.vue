<template>
  <div class="blog-container">
    <h1 class="main-header">Latest News</h1>
    <input type="text" v-model="search" placeholder="Search for">
    <div class="blog-card" v-for="blog in filteredBlogs" v-colourful>
      <h2>{{blog.title}}</h2>
      <p>{{blog.content | wordsDisplay}}</p>
      <router-link v-bind:to="'/blogposts/' + blog.id">Read more</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'showBlog',
  data(){
    return {
      blogs: [],
      search: ''
    }
  },
  methods: {
    wordsDisplay: function(){
      this.blogs.content()
    }
  },
  created(){
    this.$http.get('https://thebloghouse-32a74.firebaseio.com/posts.json').then(function(data){
      return data.json();
    }).then(function(data){
      let postsArray = [];
      for(let key in data){
        postsArray.push(data[key]);
        data[key].id = key;
      }
      this.blogs = postsArray;
    });
  },
  computed: {
    filteredBlogs: function(){
      return this.blogs.filter((blog)=> {
        let title = blog.title.toLowerCase();
        let searchedWord = this.search.toLowerCase();
        return title.match(searchedWord);
      });
    }
  }
}
</script>

<style scoped>
  .blog-container {
    max-width: 1050px;
    margin: 0 auto;
    text-align: center;
  }

  .main-header {
    font-size: 40px;
    font-family: 'Lobster', cursive;
  }
  .blog-card {
    border: 5px solid #000;
    padding: 15px;
    display: inline-block;
    margin: 5px;
    font-family: 'Lobster', cursive;
    min-height: 200px;
    width: 300px;
    background-color: #fff;
    vertical-align: text-top;
    position: relative;
  }

  .blog-card > p {
    font-family: 'Source Serif Pro', serif;
    margin: 5px 0;
  }

  .blog-card > a {
    text-decoration: none;
    position: absolute;
    bottom: 10px;
    right: 10px;
    padding: 10px;
    background-color: var(--papaya-color);
    color: #fff;
    transition: 0.5s;
  }

  .blog-card > a:hover {
    background-color: #fff;
    border: 2px solid var(--papaya-color);
    color: var(--papaya-color);
  }

  input {
    display: block;
    font-size: 20px;
    padding: 5px;
    max-width: 200px;
    margin: 15px auto 10px auto;
    font-family: 'Source Serif Pro', serif;
  }
</style>
