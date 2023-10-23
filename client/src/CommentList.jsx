import { useEffect, useState } from "react"
import axios from "axios"

export default function CommentList({ postId }) {

  const [comments, setComments] = useState([])

  async function getComments() {
    const { data } = await axios.get(`http://localhost:4001/posts/${postId}/comments`)
    setComments(data)
  }

  useEffect(() => {
    getComments()
  }, [])

  const renderedComments = comments.map(c => {
    return <li key={c.id}>{c.content}</li>
  })

  return (
    <ul>
      {renderedComments}
    </ul>
  )


}
