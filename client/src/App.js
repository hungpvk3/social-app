import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Facebook from './components/Facebook'
import AppContextProvider from './conotexts/AppContext'

const App = () => {
  return (
    <AppContextProvider>
      <Router>
        <Route path="/" exact component={Facebook} />
      </Router>
    </AppContextProvider>
  )
}

export default App
