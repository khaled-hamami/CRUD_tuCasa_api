# CRUD_tuCasa_api
this is an api for my 'tuCasa' site to handle and manage requests
# tuCasa_api - Home Rental API

tuCasa_api is an API designed specifically for the tuCasa website to handle and manage requests related to home rentals. It provides CRUD (Create, Read, Update, Delete) functionality for property listings and users.

## Installation

1. Clone the project repository:

2. Provide a valid URL in the .env file for database connection.

3. Install the dependencies:

4. Start the server with auto-restart on file changes: node --watch --trace-warnings index.js



## Usage

### API Endpoints

- **POST /users**: Create a new user. The request body should include the following fields: `firstname`, `lastname`, `email`, `password`, and an array of `posts` IDs.
- **POST /posts**: Create a new post. The request body should include the relevant information for a property listing.

Refer to the `models/` directory for the structure.

## Dependencies

The following dependencies are required to run the tuCasa_api:
- body-parser
- cors
- dotenv
- express
- mongoose

## Contribution

Contributions to tuCasa_api are welcome! If you want to contribute to the project, please follow the guidelines outlined in the CONTRIBUTING.md file.

## License

tuCasa_api is an open-source project distributed under the [MIT License](LICENSE).
