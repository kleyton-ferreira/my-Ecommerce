import { FunctionComponent } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// PAGES
import Home from './pages/home/home.page'
import LoginPage from './pages/login/login.page'

interface AppProps {
  children?: string
}

const App: FunctionComponent<AppProps> = ({ children }) => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
