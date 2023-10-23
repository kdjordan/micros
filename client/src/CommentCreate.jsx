
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
          <label htmlFor="">New Comment</label>
          <input
            className="form-control my-4"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></input>
        </div>
        <button className="btn btn-primary">SUBMIT</button>
      </form>
    </div>
  )

}