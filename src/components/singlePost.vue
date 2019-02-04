<template>
  <div class="single-post">
    <h1>{{blog.title}}</h1>
    <p>{{blog.content}}</p>
  </div>
</template>

<script>
export default {
  name: 'singlePost',
  data(){
    return {
      id: this.$route.params.id,
      blog: {}
    }
  },
  created(){
    this.$http.get('https://thebloghouse-32a74.firebaseio.com/posts/' + this.id + '.json').then(function(data){
      return data.json();
    }).then(function(data){
      this.blog = data;
    });
  }
}
</script>

<style>
  .single-post {
    min-height: 500px;
    background-color: var(--white-color);
    max-width: 500px;
    margin: 0 auto;
    padding: 30px;
    font-family: 'Source Serif Pro', serif;
    border: 5px solid var(--custard-color);
  }

  .single-post > h1 {
    margin-bottom: 30px;
    font-family: 'Lobster', cursive;
  }
</style>
