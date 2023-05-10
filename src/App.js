import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './Component/Home';
import Contact from './Component/Contact';
import Student from './Component/Student';
import './Component/style.css'
function App() {
  return (
    <div className='bg'>
       <BrowserRouter>
          <Routes>
             <Route path='/' element={<Home/>}/>
             <Route path='/Student' element={<Student/>}/>
             <Route path='/Contact' element={<Contact/>}/>
             <Route path='/*' element={<Contact/>}/>

          </Routes>
       </BrowserRouter>
   
     
    </div>
  );
}

export default App;
