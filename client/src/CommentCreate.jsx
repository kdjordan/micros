
import { useState } from "react"
import axios from "axios"

export default function CommentCreate({ postId }) {

  const [content, setContent] = useState("")

  async function onSubmit(e) {
    e.preventDefault()

    await axios.post(`http://localhost:4001/posts/${postId}/comments`, { content })

    setContent("")
  }



  return (
        <div>
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <label htmlFor=""
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                >
                  New Comment</label>
              </div>
              <button className="btn btn-primary"></button>
            </form>
        </div>
    )

}