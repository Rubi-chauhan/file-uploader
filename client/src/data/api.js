import axios from 'axios';

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
        await axios.get(apiURL+'download')
        
    } catch (error) {
        throw error;
    }
}
