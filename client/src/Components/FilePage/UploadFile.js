import React, {useState} from 'react'
// import  FileServices from '../../Services/FileServices'
import './UploadFile.css'
import {singleFile} from '../../data/api'

// ,getUploadedFiles

export default function UploadFile() {
    const [file, setFile] = useState('')

    // const handleSubmit = async(event)=>{
    //     event.preventDefault()

    //     const formData = new FormData()
    //     formData.append('file', file)

    //     const response = await FileServices.create(formData)
    //     console.log(response)

    //     event.target.reset()
    // }


    // onSubmit={handleSubmit}

    const fileChange = async(e)=>{
      e.preventDefault()
      setFile(e.target.files[0])
    
    }

    const singleFileUpload = async(e)=>{
      const formData = new FormData();
      formData.append('file', file)
      await singleFile(formData)
      e.target.reset()

    }
    


  return (
    <div className='file-uploader-box'>
      <h3 className='heading mt-4 border-bottom'>File Uploader</h3>
        <form className ='form' >
            <input type="file" name='file' onChange={e => fileChange(e)} required/>
        <button type='button' className="btn-primary" onClick={()=>{singleFileUpload()}}>Upload</button>
        </form>





    </div>
  )
}
