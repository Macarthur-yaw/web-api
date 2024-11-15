import multer from 'multer';
import cloudinary from '../cloudinaryConfig';

import { Request, Response, NextFunction } from 'express';


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'upload/');  
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);  
  },
});


const upload = multer({ storage });


const uploadToCloudinary = (req: Request, res: Response, next: NextFunction) => {
  if (req.file) {
    
    cloudinary.uploader.upload(req.file.path, { folder: 'blogs' })
      .then(result => {
      
        req.body.imageUrl = result.secure_url; 
        next();  
      })
      .catch(err => {
        console.error('Cloudinary upload error:', err);
        res.status(500).json({ error: 'Error uploading image to Cloudinary' });
      });
  } else {
    next();  
  }
};

export { upload, uploadToCloudinary };
