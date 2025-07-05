
## Overview

This project demonstrates the implementation of authentication and authorization in a backend application. It covers user registration, login, protected routes, and role-based access control.

## Installed Packages

- **express**: Web framework for Node.js
- **jsonwebtoken**: For generating and verifying JWT tokens
- **bcryptjs**: For hashing passwords
- **dotenv**: For environment variable management
- **mongoose**: MongoDB object modeling tool
- **cors**: Enable Cross-Origin Resource Sharing

## Getting Started

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Set up your `.env` file with the required environment variables.
4. Start the server with `npm start`.

## Features

- User registration and login
- Password hashing
- JWT-based authentication
- Middleware for protecting routes
- Role-based authorization

## Usage

- Register a new user via `/register`
- Login via `/login` to receive a JWT token
- Access protected routes by including the token in the `Authorization` header

## License

This project is licensed under the MIT License.