import React, { Component } from 'react'
import css from './css/Content.module.css'
import { savedPosts } from '../posts.json'
import PostItem from './PostItem'
import Loader from './Loader'

export class Content extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoaded: false,
            posts: [],
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState(() => {
                return {
                    isLoaded: true,
                    posts: savedPosts,
                }
            })
        }, 2000)
    }

    handleSearchInputChange = (event) => {
        let name = event.target.value.toLowerCase();
        const filteredPosts = savedPosts.filter(el => {
            return el.name.toLowerCase().includes(name)
        })
        this.setState(() => {
            return {
                posts: filteredPosts
            }
        })
    }

    render() {
        return (
            <div className={css.Content}>
                <div className={css.TitleBar}>
                    <h1>My posts</h1>
                    <form>
                        <label for='searchInput'>Search</label>
                        <input onChange={this.handleSearchInputChange} type='search' id='searchInput' />
                        <h4>posts found:{this.state.posts.length}</h4>
                    </form>
                </div>
                <div className={css.SearchResults}>
                    {this.state.isLoaded ?
                        <PostItem savedPosts={this.state.posts} />
                        :
                        <Loader />
                    }
                </div>
            </div>
        )
    }
}

export default Content