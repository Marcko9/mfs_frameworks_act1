import React from 'react'
import { Post } from './Post'

export const PostList = () => {
  return (
    <div className="row row-cols-1 row-cols-md-2">
        <Post />
        <Post />
        <Post />
        <Post />
    </div>
  )
}
