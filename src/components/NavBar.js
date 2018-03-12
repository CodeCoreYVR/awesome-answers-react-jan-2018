import React from 'react';
import { NavLink } from 'react-router-dom';
import CurrentDateTime from './CurrentDateTime';

function NavBar (props) {
  const { user } = props;

  return (
    <nav className="NavBar">
      <NavLink exact to="/">Home</NavLink>
      <NavLink exact to="/questions/new">New Question</NavLink>
      <NavLink exact to="/questions">Questions</NavLink>
      {
        user ? (
          <span>Hello, {user.full_name}</span>
        ) : (
          <NavLink exact to="/sign_in">Sign In</NavLink>
        )
      }
      <CurrentDateTime />
    </nav>
  )
}

export default NavBar;
