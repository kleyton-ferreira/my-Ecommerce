import { FunctionComponent } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// PAGES
import Home from './pages/home.page'

interface AppProps {
  children?: string
}

const App: FunctionComponent<AppProps> = ({ children }) => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
