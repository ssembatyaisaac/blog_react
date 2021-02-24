import React from 'react'
import './style.css';
import Card from '../UI/Card'
import PostImage from '../../blogPostImages/memories-from.jpg'
/**
* @author
* @function BlogPost
**/

const BlogPost = (props) => {
  return(
        <div className='blogPostContainer'>
          <Card>
            <div className='blogHeader'>
              
                <span className='blogCategory'>Featured</span>
                <h1 className='postTitle'>Beautiful is Always Beautiful</h1>
                <span className='postedBy'>posted on July 21, 2016 by Sora Blogging</span>
            </div>
            <div className='postImageContainer'>
              <img src={PostImage} alt='Post' />
            </div>
          </Card>
        </div>
   )

 }

export default BlogPost