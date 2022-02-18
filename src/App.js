import React from 'react'
import { ChatEngine } from 'react-chat-engine'
import './App.css'

import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm'

function App() {
    if(!localStorage.getItem('username')) return <LoginForm />
  return (
    <ChatEngine 
        height='100vh'
        projectID='c1741e78-f923-4cc2-90cf-b80f890c1fc6'
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  )
}

export default App