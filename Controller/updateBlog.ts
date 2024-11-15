import express, { Request, Response, Router } from 'express';
import { blogmodel } from '../Model/blogsSchema';
import { upload, uploadToCloudinary } from '../middleware/upload';  // Assuming you've set up these middlewares

const router = Router();

/**
 * @swagger
 * /api/v1/{id}:
 *   put:
 *     summary: Update an existing blog by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the blog to update
 *         example: "60d2b8f79b7b9d7a33b12b45"  # Example blog ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "book1"
 *               content:
 *                 type: string
 *                 example: "welcome to the capital city of Ghana"
 *               author:
 *                 type: string
 *                 example: "Jane Doe"
 *               imgUrl:
 *                 type: string
 *                 example: "https://example.com/images/kevin.png"
 *               date:
 *                 type: string
 *                 example: "2023-08-15"
 *     responses:
 *       200:
 *         description: Blog updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   description: The updated blog data
 *                   properties:
 *                     title:
 *                       type: string
 *                       example: "kevin"
 *                     content:
 *                       type: string
 *                       example: "welcome to the capital city of Ghana."
 *                     author:
 *                       type: string
 *                       example: "Jane Doe"
 *                     imgUrl:
 *                       type: string
 *                       example: "https://example.com/kevin.png"
 *                     date:
 *                       type: string
 *                       example: "2023-08-15"
 *       400:
 *         description: No ID found, request body not defined, or no matching ID found
 *       500:
 *         description: Internal server error
 */
export const updateRouter = router.put('/:id', upload.single('image'), uploadToCloudinary, async (req: Request, res: Response) => {
    const { id } = req.params;

    if (!id) {
     res.status(400).send({ message: 'No ID is found' });
    return;
    }

    // Ensure both body and file are present
    if (!req.body && !req.file) {
    res.status(400).send({ message: 'Request body or image is not defined' });
   return;
}

    const { title, content, author, date } = req.body;
    // Use the Cloudinary URL or existing imgUrl from the request body
    const imgUrl = req.body.imageUrl || req.body.imgUrl || '';  // You can set a default image URL here if needed

    if (!title || !content || !author || !date) {
        res.status(400).send({ message: 'All fields (title, content, author, date) must be filled' });
   return;
    }

    try {
        // Perform the update with the updated blog data
        const updatedBlog = await blogmodel.findByIdAndUpdate(
            id,
            { title, content, author, imgUrl, date },
            { new: true }  // Return the updated document
        );

        // If blog is updated successfully, return the updated data
        if (updatedBlog) {
            res.status(200).json({ data: updatedBlog });
            
        } else {
         res.status(400).send({ message: 'Cannot find matching ID' });
        }
    } catch (error) {
        console.error('Error updating blog:', error);
 res.status(500).send({ message: 'Internal server error' });
    }
});
