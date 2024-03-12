import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

export const CreateTagForm = () => {
  const [tagName, setTagName] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch("http://localhost:8000/tags", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ label: tagName }),
    })
      .then((response) => {
        if (response.ok) {
          navigate("/tags")
        } else {
          // Handle error
        }
      })
      .catch((error) => console.error("Error:", error))
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="tagName">Tag Name:</label>
      <input id="tagName" type="text" value={tagName} onChange={(e) => setTagName(e.target.value)} />
      <button type="submit">Save</button>
    </form>
  )
}
