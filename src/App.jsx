
import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import RootLayouts from './layouts/RootLayouts'
import Landing from './Pages/Landing'
import Projects from './Pages/Projects'
import About from './Pages/About'
import Resume from './Pages/Resume'
import Contact from './Pages/Contact'

function App() {
 
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<RootLayouts/>}>
       <Route index={true} element={<Landing/>} />
       <Route path='/projects' element={<Projects/>}/>
       <Route path= '/about' element={<About/>}/>
       <Route path= '/resume' element= {<Resume/>}/>
       <Route path= '/contact' element= {<Contact/>}/>

      </Route>
    </Routes>
    
    </BrowserRouter>
  )
}

export default App
