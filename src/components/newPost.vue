<template>
  <div class="new-post">
    <div class="new-post-container">
      <h1>Add a New Post</h1>
      <form>
        <label>Title:</label>
        <input type="text" v-model.lazy="blog.title" value="title" required>
        <label>Content:</label>
        <textarea type="text" v-model.lazy="blog.content" value="content" placeholder="What's your story?" required></textarea>
        <button v-on:click.prevent="post">Add Post</button>
      </form>
    </div>
    <div id="preview">
      <h1>Preview Blog</h1>
      <h2>{{blog.title}}</h2>
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

.new-post {
  text-align: center;
  margin-top: 30px;
}

.new-post-container, #preview {
  max-width: 600px;
  margin: 0 auto;
  padding: 30px;
  text-align: center;
  background-color: var(--white-color);
  font-family: 'Lobster', cursive;
  border: 5px solid var(--custard-color);
}

h1 {
  margin-bottom: 30px;
}

label {
  font-size: 20px;
}
input {
  padding: 5px 0;
  font-size: 16px;
  color: var(--black-color);
}
input, textarea {
  display: block;
  margin: 10px 0;
  width: 100%;
  font-family: 'Source Serif Pro', serif;
}

input[type=text]:focus, textarea:focus {
  background-color: var(--blush-color);
  color: var(--white-color);
  outline: none;
}
form {
  text-align: left;
}

textarea {
  height: 150px;
  resize: none;
  font-size: 16px;
}

button {
  background-color: var(--custard-color);
  padding: 15px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  margin-top: 20px;
  font-family: 'Lobster', cursive;
}

button:hover {
  color: var(--white-color);
}

#preview {
  border-top: 10px solid var(--custard-color);
  text-align: left;
}

p {
  font-size: 18px;
}

h2 {
  margin: 20px 0 30px 0;
}
</style>
