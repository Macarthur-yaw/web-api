
# Blog API

This is a RESTful API for managing blog posts. It allows you to create, update, and retrieve blog posts. The API is built using Express.js and MongoDB (via Mongoose) for a simple blog management system.

## Features

- **Create Blog Post**: Allows users to create a new blog post, including image uploads.
- **Get All Blog Posts**: Retrieve all blog posts.
- **Get Single Blog Post**: Retrieve a blog post by its unique ID.
- **Update Blog Post**: Update the details of an existing blog post using its ID.
- **Delete Blog Post**: Delete an existing blog post by ID.

## Table of Contents

- [Installation](#installation)
- [API Endpoints](#api-endpoints)
  - [Create Blog Post](#create-blog-post)
  - [Get All Blog Posts](#get-all-blog-posts)
  - [Get Single Blog Post](#get-single-blog-post)
  - [Update Blog Post](#update-blog-post)
  - [Delete Blog Post](#delete-blog-post)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation

To run this API locally, follow the steps below.

### Prerequisites

- Node.js (v14 or later)
- MongoDB (locally or cloud-based like MongoDB Atlas)

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/Macarthur-yaw/web-api.git
   ```

2. Navigate into the project folder:

   ```bash
   cd web-api
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and set your MongoDB connection string:

   ```env
   MONGODB_URI=mongodb://localhost:27017/web-api
   ```

5. Run the app:

   ```bash
   npm start
   ```

## API Endpoints

### Create Blog Post

- **Endpoint**: `/api/v1/create-blog`
- **Method**: `POST`
- **Description**: Creates a new blog post with an image upload.

#### Request Headers

- `Content-Type`: `multipart/form-data`

#### Request Body

Use `multipart/form-data` encoding, as shown below. The `imgUrl` field should be uploaded as a file.

- **title** (string) - Title of the blog post.
- **content** (string) - Content of the blog post.
- **author** (string) - Author's name.
- **image** (file) - Image file for the blog post.
- **date** (string) - Date of the post (optional).

#### Example

```json
{
  "title": "Sample Blog Title",
  "content": "Content of the blog post.",
  "author": "Author Name",
  "date": "2024-11-08"
}
```

_Note: When testing with tools like Postman, select "form-data" in the body section and add `image` as a file input._

#### Responses

- `201 Created`: Blog created successfully.
- `400 Bad Request`: All fields must be filled.
- `500 Internal Server Error`: Server error.

### Get All Blog Posts

- **Endpoint**: `/api/v1/blogs`
- **Method**: `GET`
- **Description**: Retrieves all blog posts.

#### Responses

- `200 OK`: Returns a list of all blog posts.
- `500 Internal Server Error`: Server error.

### Get Single Blog Post

- **Endpoint**: `/api/v1/{id}`
- **Method**: `GET`
- **Description**: Retrieves a single blog post by ID.

#### Path Parameter

- `id`: The unique identifier for the blog post.

#### Responses

- `200 OK`: Returns the blog post data.
- `400 Bad Request`: No matching ID found.
- `500 Internal Server Error`: Server error.

### Update Blog Post

- **Endpoint**: `/api/v1/{id}`
- **Method**: `PUT`
- **Description**: Updates an existing blog post by ID.

#### Path Parameter

- `id`: The unique identifier for the blog post to update.

#### Request Body

```json
{
  "title": "Updated Blog Title",
  "content": "Updated content of the blog post.",
  "author": "Updated Author Name"
}
```

#### Responses

- `200 OK`: Blog updated successfully.
- `400 Bad Request`: No matching ID found or request body not defined.
- `500 Internal Server Error`: Server error.

### Delete Blog Post

- **Endpoint**: `/api/v1/{id}`
- **Method**: `DELETE`
- **Description**: Deletes an existing blog post by ID.

#### Path Parameter

- `id`: The unique identifier for the blog post to delete.

#### Responses

- `200 OK`: Blog deleted successfully.
- `400 Bad Request`: No matching ID found.
- `500 Internal Server Error`: Server error.

## Usage

Once the server is running, you can use tools like Postman or cURL to test the endpoints. Replace `{id}` with an actual blog post ID when making requests to the GET, PUT, or DELETE endpoints.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
