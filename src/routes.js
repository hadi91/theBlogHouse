import showBlogs from './components/showBlogs.vue'
import newPost from './components/newPost.vue'
import singlePost from './components/singlePost.vue'
import featuredPost from './components/featuredPost.vue'

export default [
  {path: '/', component: showBlogs},
  {path: '/addPost', component: newPost},
  {path: '/blogposts/:id', component: singlePost},
  {path: '/featured', component: featuredPost}
]
