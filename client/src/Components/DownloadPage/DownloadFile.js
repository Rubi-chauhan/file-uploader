import React, {useState} from 'react'
import './DownloadFile.css'
import { download } from '../../data/api'

// import { saveAs } from 'file-saver'

export const DownloadFile = (e)=>{
    const [url , setUrl] = useState('')
    // e.prevent

    return (
        <div>
            <input value= {url} onChange ={(e)=>{setUrl(e.target.value)}}/>
            <button type="button" className="btn btn-warning mt-4" onClick={download} >Download</button>
        </div>
    )
}







// export const DownloadPage = () => {
//   const downloadFile = () => {
//     FileDownload()
//       .then(blob => saveAs(blob, 'file.pdf'))
//   }
  
//   return (
//     <button type='submit' onClick={downloadFile}>Download</button>
//   )
// }



// export default function DownloadFile() {
//     const [file, newFile] = useState('')

//     const handleDownload = async(event)=>{
//         event.preventDefault()

//         const formData = new FormData()
//         formData.append('file', file)

//         const response = await FileServices.find(formData)
//         console.log(response)

//         event.target.download()

//     }

//     return (
//         <div className='file-downloader-box'>
//             <form class ='form' onSubmit={handleDownload}>
//                 <input type="file" name='file' onChange={event => newFile(event.target.files[0])} required/>
//             <button type='submit' class="btn-primary">Download</button>
//             </form>
//         </div>
//       )
// }


// import fileDownload from 'js-file-download'


// handleDownload = (url, filename) => {
//   axios.get(url, {
//     responseType: 'blob',
//   })
//   .then((res) => {
//     fileDownload(res.data, filename)
//   })
// }

// <button onClick={() => {this.handleDownload('https://your-website.com/your-image.jpg', 'test-download.jpg')
// }}>Download Image</button>