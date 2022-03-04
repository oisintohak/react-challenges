import React, { Component } from 'react'
import css from './css/NavBarForm.module.css'
import NavBarChild from './NavBarChild'

export class NavBarForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true,
        }
    }

    handleClick = (event) => {
        event.preventDefault();
        this.setState((prevState) => {
            return {
                isLoggedIn: prevState.isLoggedIn ? false : true,
            }
        })
    }

    render() {
        return (
            <div className={css.NavBarForm}>
                <h1>My Gallery</h1>
                <div>
                    {this.state.isLoggedIn ? 
                    <button onClick={this.handleClick}>Log out</button>
                    : <NavBarChild handleClick={this.handleClick} />}
                </div>
            </div>
        )
    }
}

export default NavBarForm