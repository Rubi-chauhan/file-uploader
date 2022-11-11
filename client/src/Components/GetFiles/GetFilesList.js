import {download, getFiles} from '../../data/api'
import {useState, useEffect} from 'react'
// import {downloadHandler} from '../DownloadPage/DownloadFile'


import React from 'react'


export default function GetFilesList() {
    const [newFile, setNewFile] = useState([])
    console.log(newFile)

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
                    <a href={`http://localhost:4000/${file.fileName}`} height='100' className='card-img-top img-responsive mt-2' /><br></br>
                  
                  </div>
                  <a href={`http://localhost:4000/${file.fileName}`} className="btn btn-warning mt-4 mb-4" download={`${file.fileURL}`} onClick={download} >Download</a>
                    
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
