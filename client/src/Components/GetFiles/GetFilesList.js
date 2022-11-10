import {download, getFiles} from '../../data/api'
import {useState, useEffect} from 'react'


import React from 'react'


export default function GetFilesList() {
    const [newFile, setNewFile] = useState([])

    const getFileList = async()=>{
      try {
        const fileList = await getFiles()
        setNewFile(fileList)
        
      } catch (error) {
        throw error
        
      }
    }
  
    useEffect(()=>{
        getFileList();
    },[]);


  
  return (
    <>
          <div className='container-fluid mt-4'>
          <div className='row'>
            <div className='col-6'>
              <h4 className='text-success font-weight-bold'>Uploaded Files List</h4>
              <div className='row'>
                {newFile.map((file, index)=>
                <div className='col-6'>
                  <div className='card mb-3 border-0 p-0'>
                    <img src={`http://localhost:4000/${file.filePath}`} height='100' className='card-img-top img-responsive mt-2' alt='img' /><br></br>
                  
                  </div>
                  <a href={`http://localhost:4000/${file.filePath}`} className="btn btn-warning mt-4 mb-4" download={`${file.filePath}`} onClick={download} >Download</a>
                    {/* <button type="button" className="btn btn-warning mt-4" onClick={download} >Download</button> */}
                </div>
                )}

              </div>

            </div>
            <div className='col-6'>

            </div>

          </div>

        </div>
       

      
    </>
  )
}
