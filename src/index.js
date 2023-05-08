import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import { FavouritesContextProvider } from './store/favourites-context'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // wrapping context provider around the app
  <FavouritesContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavouritesContextProvider>
)
