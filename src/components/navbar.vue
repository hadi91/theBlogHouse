<template>
  <div class="nav-container">
    <nav>
      <ul>
        <li><router-link to="/" exact>Home</router-link></li>
        <li>-|-</li>
        <li><router-link to="/featured" exact>Featured</router-link></li>
        <li>-|-</li>
        <li><router-link to="/addPost" exact>Add Post</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
  .nav-container {
    text-align: center;
    margin-bottom: 10px;
  }

  nav {
    display: inline-block;
    font-family: 'Source Serif Pro', serif;
    padding: 20px 25px 30px 25px;
    background-color: var(--aqua-color);
    background-image: linear-gradient(45deg, #fff 50%, rgba(255,255,255,0) 50%), linear-gradient(-45deg, #E9B000 50%, rgba(255,255,255,0) 50%);
    background-position: bottom center, bottom center;
    background-size: 25px 25px, 25px 25px;
    background-repeat: repeat-x;
  }
  li {
    list-style-type: none;
    float: left;
    color: #fff;
    margin: 5px;
  }
  li > a {
    text-decoration: none;
    font-size: 24px;
    display: inline-block;
    color: #fff;
  }

  li > a:hover {
    color: var(--custard-color);
  }

  .router-link-active {
    color: var(--custard-color);
  }

  #menu {
    text-decoration: none;
    font-size: 24px;
    display: inline-block;
    color: #fff;
    padding: 0 10px;
    display: none;
  }
</style>
