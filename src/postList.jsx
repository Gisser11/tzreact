import React from 'react'

const postList = () => {
    return (
        <div>
            {posts.map((post) =>
            <postItem post = {post} key = {post.id}/>
            )}
        </div>
    )
}

export default postList;