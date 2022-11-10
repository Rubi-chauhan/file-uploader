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

export const download = async()=>{
    try {
        const {data}= await axios.get(apiURL+'download' ,
        {
            responseType : "blob",
        })
        fileDownload(data)
        
    } catch (error) {
        throw error;
    }
}
