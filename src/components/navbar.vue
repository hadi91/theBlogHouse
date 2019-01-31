<template>
  <nav>
    <ul>
      <li><router-link to="/" exact>Home</router-link></li>
      <li><router-link to="/" exact>Blogs</router-link></li>
      <li><router-link to="/blogposts" exact>Add Post</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
  nav {
    display: inline-block;
    font-family: sans-serif;
    padding: 20px;
    background-color: #008F95;
    border: 1px solid #f3f3f3;
  }
  li {
    list-style-type: none;
  }
  li > a {
    text-decoration: none;
    font-size: 24px;
    display: inline-block;
    margin: 5px 0;
    color: #fff;
  }

  li > a:hover {
    color: #EB6E80;
  }

  .router-link-active {
    color: #EB6E80;
  }
</style>
