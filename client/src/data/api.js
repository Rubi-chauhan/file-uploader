import axios from 'axios';
import fileDownload from 'js-file-download'

const apiURL = 'http://localhost:4000/'


export const singleFile = async(data)=>{
    try {
        await axios.post(apiURL+'upload', data)
        
    } catch (error) {
        throw error 
        
    }
}

export const getFiles =  async()=> {
    try {
        const {data} = await axios.get(apiURL+'getFiles')
        return data;
        
    } catch (error) {
        throw error;
        
    }
 
}

export const download = async(e)=>{
    try {
        const fileName = e.target.parentElement.id;
        console.log(fileName)
        const {data}= await axios.get(apiURL+'download'+fileName ,
        {
            responseType : "blob",
        })
        fileDownload(data)


        
    } catch (error) {
        throw error;
    }
}


