import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './Routes/Home'
import Contact from './Routes/Contact'
import Notfound from './Routes/Notfound'
import Shop from './Routes/Shop'
import Bar from './Parts/Bar'
import './App.scss'

function App() {
  return (
    <>
    
    
    
   
   <Router>
   <Bar/>
   
     <Routes>
     <Route path='/' element={<Home />} />
     <Route path='/home' element={<Home />} />
     <Route path='/shop' element={<Shop />} />
     <Route path='/contact' element={<Contact />} />
     <Route path='/notfound' element={<Notfound />} />
     <Route path='/*' element={<Notfound />} />
     </Routes>
   </Router>
   <div className="bottom"> 
   {/* Footer will go here */}




   
      </div>

   
   </>
  );
}

export default App;
