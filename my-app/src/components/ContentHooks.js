import React, { useEffect, useState } from 'react'
import css from './css/Content.module.css'
import { savedPosts } from '../posts.json'
import PostItem from './PostItem'
import Loader from './Loader'


export default function ContentHooks() {
    const [isLoaded, setIsLoaded] = useState(false)
    const [posts, setPosts] = useState([])

    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true);
            setPosts(savedPosts);
        }, 2000)
    }, [])


    const handleSearchInputChange = (event) => {
        let name = event.target.value.toLowerCase();
        const filteredPosts = savedPosts.filter(el => {
            return el.name.toLowerCase().includes(name)
        })
        setPosts(filteredPosts)
    }

    return (
        <div className={css.Content}>
            <div className={css.TitleBar}>
                <h1>My posts</h1>
                <form>
                    <label for='searchInput'>Search</label>
                    <input onChange={handleSearchInputChange} type='search' id='searchInput' />
                    <h4>posts found:{posts.length}</h4>
                </form>
            </div>
            <div className={css.SearchResults}>
                {isLoaded ?
                    <PostItem savedPosts={posts} />
                    :
                    <Loader />
                }
            </div>
        </div>)
}
