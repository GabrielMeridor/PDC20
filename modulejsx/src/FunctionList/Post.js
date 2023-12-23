import React from 'react'

function Post(props) {
  return (
    <div>
        <h1>{props.Title}</h1>
        <h3>{props.Content}</h3>
    </div>
  )
}

export default Post