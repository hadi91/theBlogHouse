import showBlogs from './components/showBlogs.vue'
import newPost from './components/newPost.vue'

export default [
  {path: '/', component: showBlogs},
  {path: '/blogposts', component: newPost}
]
