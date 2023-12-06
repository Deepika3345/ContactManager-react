import React from 'react'
import Navbar from './Components/Navbar'
import Form from './Components/Form'
import ListGroup from './Components/ListGroup'
import { ContextProvider } from './Context/ContactContext'

const App = () => {
  return (
    <ContextProvider>
      <Navbar />

      <div className="container p-5">
        <Form />
        <ListGroup />
      </div>

    </ContextProvider>
  )
}

export default App