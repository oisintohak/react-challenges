import React from 'react'

export default function NavBarChild(props) {
    return (
        <div>
            <form>
                <label htmlFor='username'>Username</label>
                <input name='username' id='username' type='text' />
                <label htmlFor='password'>Password</label>
                <input name='password' id='password' type='password' />
                <button onClick={props.handleClick} type='submit'>Submit</button>
            </form>
        </div>
    )
}
