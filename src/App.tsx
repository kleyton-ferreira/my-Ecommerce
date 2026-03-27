import { FunctionComponent, use } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// UTILITZ
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './config/firebase.config'

// PAGES
import Home from './pages/home/home.page'
import LoginPage from './pages/login/login.page'
import SignUpPage from './pages/sign-up/sign-up-page'

const App: FunctionComponent = () => {
  onAuthStateChanged(auth, (user) => {
    console.log(user)
  })

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
