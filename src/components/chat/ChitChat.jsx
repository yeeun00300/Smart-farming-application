import React from 'react';
import SignIn from './SignIn';
import Chat from './Chat';
import {auth} from '../../Firebase'
import {useAuthState} from 'react-firebase-hooks/auth'

function ChitChat() {
  const [user]=useAuthState(auth);
  return (
    <>
    {user ? <Chat/>: <SignIn />}
    </>
  );
}

export default ChitChat;