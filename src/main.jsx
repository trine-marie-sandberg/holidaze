import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Theme from './styles/theme.jsx'
import GlobalStyle from './styles/global.jsx'
import './styles/theme.jsx'
import 'react-date-range/dist/styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Theme>
      <GlobalStyle />
        <App />
    </Theme>
  </React.StrictMode>
)
