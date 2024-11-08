# Blog API

This is a RESTful API for managing blog posts. It allows you to create, update, and retrieve blog posts. The API is built using Express.js and MongoDB (via Mongoose) for a simple blog management system.

## Features

- **Create Blog Post**: Allows users to create a new blog post.
- **Get Single Blog Post**: Retrieve a blog post by its unique ID.
- **Update Blog Post**: Update the details of an existing blog post using its ID.

## Table of Contents

- [Installation](#installation)
- [API Endpoints](#api-endpoints)
  - [Create Blog Post](#create-blog-post)
  - [Get Single Blog Post](#get-single-blog-post)
  - [Update Blog Post](#update-blog-post)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation

To run this API locally, follow the steps below.

### Prerequisites

- Node.js (v14 or later)
- MongoDB (locally or cloud-based like MongoDB Atlas)

### Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/blog-api.git
Navigate into the project folder:

bash
Copy code
cd blog-api
Install the dependencies:

bash
Copy code
npm install
Create a .env file in the root directory and set your MongoDB connection string:

env
Copy code
MONGODB_URI=mongodb://localhost:27017/blog-api
Run the app:

bash
Copy code
npm start
API Endpoints
Create Blog Post
Endpoint: /api/v1/create-blog
Method: POST
Description: Creates a new blog post.
Request Body:
json
Copy code
{
  "title": "Sample Blog Title",
  "content": "Content of the blog post.",
  "author": "Author Name",
  "imgUrl": "https://example.com/image.png",
  "date": "2024-11-08"
}
Responses:
201 Created: Blog created successfully.
400 Bad Request: All fields must be filled.
500 Internal Server Error: Server error.
Get Single Blog Post
Endpoint: /api/v1/{id}
Method: GET
Description: Retrieves a single blog post by ID.
Path Parameter:
id: The unique identifier for the blog post.
Responses:
200 OK: Returns the blog post data.
400 Bad Request: No matching ID found.
500 Internal Server Error: Server error.
Update Blog Post
Endpoint: /api/v1/{id}
Method: PUT
Description: Updates an existing blog post by ID.
Path Parameter:
id: The unique identifier for the blog post to update.
Request Body:
json
Copy code
{
  "title": "Updated Blog Title",
  "content": "Updated content of the blog post.",
  "author": "Updated Author Name"
}
Responses:
200 OK: Blog updated successfully.
400 Bad Request: No matching ID found or request body not defined.
500 Internal Server Error: Server error.
Usage
Once the server is running, you can use tools like Postman or cURL to test the endpoints. Replace {id} with an actual blog post ID when making requests to the GET and PUT endpoints.

Contributing
Contributions are welcome! Please follow these steps:

Fork the repository.
Create a new branch.
Make your changes.
Submit a pull request.