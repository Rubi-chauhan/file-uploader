// import { BrowserRouter as Router,Routes, Route} from 'react-router-dom'

import UploadFile from './Components/FilePage/UploadFile'
import GetFilesList from './Components/GetFiles/GetFilesList'

function App() {


    //   {/* <Router>
    //   <Routes>

    //   <Route exact path='/login' element= {<LoginPage/>} />
    //   <Route exact path='/upload' element={<UploadFile/>}></Route>

    //   </Routes>

    // </Router> */}

  return (
    <div>
      <UploadFile />
      <GetFilesList />
      

    </div>

  );
}

export default App;