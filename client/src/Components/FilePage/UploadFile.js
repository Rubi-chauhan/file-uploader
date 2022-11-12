import React, {useState} from 'react'
// import  FileServices from '../../Services/FileServices'
import './UploadFile.css'
import {singleFile} from '../../data/api'

// ,getUploadedFiles

export default function UploadFile() {
    const [file, setFile] = useState('')



    const fileChange = async(e)=>{
      e.preventDefault()
      setFile(e.target.files[0])
      
    
    }

    const singleFileUpload = async(e)=>{
      const formData = new FormData();
      formData.append('file', file)
      await singleFile(formData)
       setFile('')

    }
    


  return (
    <div className='file-uploader-box'>
      <h3 className='heading mt-4 border-bottom'>File Uploader</h3>
        <form className ='form' >
            <input type="file"  name='file' onChange={e => fileChange(e)} required/>
            
        <button type='submit' className="btn-primary" onClick={(e)=>{singleFileUpload(e)}}>Upload</button>
        </form>





    </div>
  )
}
