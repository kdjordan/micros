import { useState } from "react"
import axios from "axios"

export default function PostCreate() {

  let [title, setTitle] = useState("")

  async function handleSubmit(event) {
    event.preventDefault()
    await axios.post("http://localhost:4000/posts", { title })
    
    setTitle("")
  }


  return (
    <div>
      <form onSubmit={ handleSubmit }>
        <div className="form-group">
          <label htmlFor="">Title</label>
          <input type="text" 
          value={title}
          className="form-control" 
          id="" 
          placeholder="Title" 
          onChange={e => setTitle(e.target.value)}
          />
        </div>
        <button className="btn btn-primary">SUBMIT</button>
      </form>
    </div>
  )
}