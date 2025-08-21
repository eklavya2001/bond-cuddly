# Romantic Bond App Backend

## Overview
The Romantic Bond App is a web application designed to calculate the percentage chance of a close bond between two users based on their names. The backend is built using Node.js and Express, providing a simple API for the frontend to interact with.

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd romantic-bond-app/backend
   ```

2. **Install Dependencies**
   Run the following command to install the required packages:
   ```bash
   npm install
   ```

3. **Start the Server**
   To start the backend server, use the following command:
   ```bash
   npm start
   ```
   The server will run on `http://localhost:3000` by default.

## API Usage

### Generate Bond Percentage

- **Endpoint:** `/api/bond`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "userName": "Your Name",
    "partnerName": "Partner's Name"
  }
  ```

- **Response:**
  ```json
  {
    "bondPercentage": 75
  }
  ```
  The `bondPercentage` is a randomly generated value representing the chance of a close bond in the future.

## Future Enhancements
- Integrate a database for storing user data and bond history.
- Implement user authentication for personalized experiences.

## License
This project is licensed under the MIT License.