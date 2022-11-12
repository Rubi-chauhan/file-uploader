import { BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import HomePage from './Components/HomePage/HomePage';
import LoginPage from './Components/LoginPage/LoginPage';

// import UploadFile from './Components/FilePage/UploadFile'
// import GetFilesList from './Components/GetFiles/GetFilesList'

function App() {

  return (
       <Router>
      <Routes>

      <Route exact path='/login' element= {<LoginPage/>} />
      <Route exact path='/upload' element={<HomePage/>}></Route>
      

      </Routes>

    </Router> 

    // <div>
   
    //   <UploadFile />
    //   <GetFilesList />
      

    // </div>

  );
}

export default App;