import { BrowserRouter as Router,Routes, Route} from 'react-router-dom'
// import HomePage from '../src/Components/HomePage/HomePage';
import LoginPage from '../src/Components/LoginPage/LoginPage'
import UploadFile from './Components/FilePage/UploadFile'

function App() {
  return (
    <div>
        <Router>
      <Routes>

      <Route exact path='/login' element= {<LoginPage/>} />
      <Route exact path='/upload' element={<UploadFile/>}></Route>

      </Routes>

    </Router>
 
    </div>

  );
}

export default App;
