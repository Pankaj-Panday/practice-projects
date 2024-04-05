import React from 'react'
import { useSelector } from 'react-redux'
import { selectUserById } from '../users/usersSlice'

const PostAuthor = ({ userId }) => {
  const author = useSelector((state) => selectUserById(state, userId))
  return (
    <span className="post-author">
      {' '}
      by {author ? author.name : 'Unknown author'}
    </span>
  )
}

export default PostAuthor
