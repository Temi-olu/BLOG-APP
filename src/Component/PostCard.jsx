import React from 'react'

function PostList({title, status}) {
  return (
    <div>
      <p>{title}</p>
      <p>{status}</p>
      <p>Edit|Delete</p>

    </div>
  )
}

export default PostList
