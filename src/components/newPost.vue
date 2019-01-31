<template>
  <div class="new-post-container">
    <h1>Add a New Post</h1>
    <form>
      <label>Title:</label>
      <input type="text" v-model.lazy="blog.title" value="title" required>
      <label>Content:</label>
      <textarea type="text" v-model.lazy="blog.content" value="content" required></textarea>
      <button v-on:click.prevent="post">Add Post</button>
    </form>
    <div id="preview">
      <h3>Preview Blog</h3>
      <h5>{{blog.title}}</h5>
      <p>{{blog.content}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'newPost',
  data(){
    return {
      blog: {
        title: "",
        content: ""
      },
      submitted: false
    }
  },
  methods: {
    post:function(){
      this.$http.post('https://thebloghouse-32a74.firebaseio.com/posts.json', this.blog).then(function(data){
        console.log(data);
        this.submitted = true;
      });
    }
  }
}
</script>

<style scoped>
  input {
    padding: 5px;
    font-size: 16px;
    color: #000;
  }
</style>
