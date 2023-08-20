import { useState } from 'react'
import Layout from './ui/layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/home'
import VenuesPage from './pages/venues'
import AccountPage from './pages/account'
import VenueDetailsPage from './pages/venue-details'
import ContactPage from './pages/contact'

function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={ <HomePage /> } />
          <Route path="venues" element={ <VenuesPage /> } />
          <Route path="venue-details" element={ <VenueDetailsPage /> } />
          <Route path="contact" element={ <ContactPage /> } />
          <Route path="account" element={ <AccountPage /> } />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
