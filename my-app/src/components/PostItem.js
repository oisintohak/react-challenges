import React from 'react'
import css from './css/Content.module.css'


export default function PostItem(props) {
    return (
        props.savedPosts.map((post) => {
            return <div className={css.SearchItem}>
                <p>{post.title}</p>
                <p>{post.name}</p>
                <img src={post.image} alt="alt-tag" />
                <p>{post.description}</p>
            </div>
        })
    )
}
