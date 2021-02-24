import React from 'react'
import BlogPost from '../../component/BlogPost'
import Sidebar from '../../component/Sidebar'
import './style.css'
/**
* @author
* @function Post
**/

const Post = (props) => {
  return(
    <section className="container">
      <BlogPost />
      <Sidebar />
    </section>
   )

 }

export default Post