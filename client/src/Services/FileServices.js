import axios from  'axios'

class FileUpload{
    create(formData){
        const url = 'http://localhost:4000/upload';
        const config = {
            headers:{

                'content-type' : 'multipart/form-data'
            }
        }
        return axios.post(url, config, formData)
    }
}

export default new FileUpload()