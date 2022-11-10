import {getFiles} from '../../data/api'
import {useState, useEffect} from 'react'
import { DownloadFile } from '../DownloadPage/DownloadFile'

import React from 'react'


export default function GetFilesList() {
    const [newFile, setNewFile] = useState([])

    const getFilesList = async()=>{
      try {
        const fileList = await getFiles()
        setNewFile(fileList)
        
      } catch (error) {
        throw error
        
      }
    }
  
    useEffect(()=>{
      getFilesList()
    },[])


  
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
                    <img src={`http://localhost:4000${file.path}`} height='100' className='card-img-top img-responsive mt-2' alt='img' /><br></br>
                  
                  </div>
                  <a href={`http://localhost:4000${file.path}`} className="btn btn-warning mt-4 mb-4" download={`${file.originalname}`} onClick={DownloadFile} target='blank'>Download</a>
                    {/* <button type="button" className="btn btn-warning mt-4" onClick={DownloadFile} >Download</button> */}
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
