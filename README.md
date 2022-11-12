# Sign In using google and file uploader


1)create a web page and implement sign-in using google authentication. 
2) After login, users should be able to upload any kind of file on AWS s3 bucket or in a local directory of a web server. 
3) list all the files uploaded using the same uploader
4) Clicking on a file should download that file.
 

## Installation
```bash
npm i
```

## packages used
```python
"dependencies": {
     "cloudinary": "^1.32.0",
    "cookie-session": "^2.0.0",
    "cors": "^2.8.5",
    "dotenv": "^16.0.3",
    "express": "^4.18.2",
    "express-session": "^1.17.3",
    "js-file-download": "^0.4.12",
    "mongoose": "^6.7.1",
    "multer": "^1.4.5-lts.1",
    "nodemon": "^2.0.20",
    "passport": "^0.6.0",
    "passport-google-oauth20": "^2.0.0"
  }
  ```
  
  ```python
"dependencies": {
    "axios": "^1.1.3",
    "cloudinary-react": "^1.8.1",
    "file-saver": "^2.0.5",
    "js-file-download": "^0.4.12",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.4.3",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
  }
  ```
  
  ## request
 
```python
router.get('/login', createUserAccount)
router.post('/upload', upload.single('file'), uploadFile)
router.get('/getFiles', getAllFiles)
router.get('/download/:file(*)', downloadFile)
```


  
  
  ## response
  implemented sign-in using google authentication. After login user can upload and download any file .


## Created by
Rubi

