import React from 'react'

function PostCard({createdat, title, status,excerpt, Author, Tags}) {
  return (
    <div className='ml-4 '>
      <table className=''>
        <tr>
      <td className=''>{title}</td>
      <td className=''>{status}</td>
      <td className=''></td>
        <td>{excerpt}</td>
        <td>{Author}</td>
        <td>{Tags}</td>
        <td>{createdat}</td>

      </tr>
      </table>

    </div>
  )
}

export default PostCard
