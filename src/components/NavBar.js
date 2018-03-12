import React from 'react';
import { NavLink } from 'react-router-dom';
import CurrentDateTime from './CurrentDateTime';

function NavBar (props) {
  const { user, onSignOut = () => {} } = props;
  const handleSignOut = event => {
    event.preventDefault();
    onSignOut();
  }

  return (
    <nav className="NavBar">
      <NavLink exact to="/">Home</NavLink>
      <NavLink exact to="/questions/new">New Question</NavLink>
      <NavLink exact to="/questions">Questions</NavLink>
      {
        user ? (
          [ <span key="1">Hello, {user.full_name}</span>
          , <a key="2" href="/sign_out" onClick={handleSignOut}>Sign Out</a>
          ]
        ) : (
          <NavLink exact to="/sign_in">Sign In</NavLink>
        )
      }
      <CurrentDateTime />
    </nav>
  )
}

export default NavBar;
