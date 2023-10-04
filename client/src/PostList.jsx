import axios from 'axios'
import { useState, useEffect } from 'react'
import { redirect } from 'react-router-dom'

export default function PostList() {
  const [posts, setPosts] = useState({})

  async function getPosts() {
    const res = await axios.get('http://localhost:4000/posts')
    setPosts(res.data)
    setPosts(res.data)
  }

  useEffect(() => {
    getPosts()
  }, [])

  const renderedPosts = Object.values(posts).map(post => {
    return (
      <div key={post.id}
        className="card"
        style={{ width: '30%', marginBottom: '20px' }}
      >
        <div className='card-body'>
          {post.title}
        </div>
      </div>
    )
  })

  return <div className='d-flex flex-wrap flex-row justify-content-between'>
    {renderedPosts}
  </div>

}