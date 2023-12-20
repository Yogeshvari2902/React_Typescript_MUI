import React from 'react'
import UserGreetings from './UserGreetings';
import GuestGreetings from './GuestGreetings';

export default function Greetings(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreetings />;
    }
    return <GuestGreetings />;
}
