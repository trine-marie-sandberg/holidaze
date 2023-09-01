import { useState } from 'react'
import Layout from './ui/layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/home'
import VenuesPage from './pages/venues'
import AccountPage from './pages/account'
import VenueDetailsPage from './pages/venue'
import ContactPage from './pages/contact'
import NotFound from './pages/404'

function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={ <HomePage /> } />
          <Route path="venues" element={ <VenuesPage /> } />
          <Route path="venue/:id" element={ <VenueDetailsPage /> } />
          <Route path="contact" element={ <ContactPage /> } />
          <Route path="account" element={ <AccountPage /> } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
