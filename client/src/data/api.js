import axios from 'axios';
// import fileDownload from 'js-file-download'

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
        // const {data}= await axios.get(apiURL+'download' ,
        // {
        //     responseType : "blob",
        // })
        // fileDownload(data)

        axios({
            url: apiURL+'download', //your url
            method: 'GET',
            responseType: 'blob', // important
        }).then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'file.pdf'); //or any other extension
            document.body.appendChild(link);
            link.click();
        });
        
    } catch (error) {
        throw error;
    }
}


