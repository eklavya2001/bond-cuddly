# Romantic Bond App

## Overview
The Romantic Bond App is a web application designed to help users explore the potential bond between them and their partners. By inputting their names, users can receive a randomly generated percentage chance of a close bond in the future. The application features a romantic user interface with heart symbols and an engaging design.

## Project Structure
The project is organized into three main directories: `backend`, `frontend`, and `database`.

### Backend
- **Directory:** `backend`
  - **src/server.js:** Entry point for the Node.js backend application, setting up the Express server and connecting routes.
  - **src/routes/bond.js:** Route handler that processes incoming requests to generate a random bond percentage based on user input.
  - **package.json:** Configuration file for npm, listing dependencies and scripts for the backend.
  - **README.md:** Documentation for the backend, including setup instructions and API usage.

### Frontend
- **Directory:** `frontend`
  - **public/index.html:** Main HTML file for the React application, serving as the entry point and including styles and scripts.
  - **src/App.js:** Main component of the React application, rendering the BondForm component and managing application state.
  - **src/components/BondForm.js:** React component containing the form for user input, handling submissions and displaying results.
  - **src/styles/romantic.css:** CSS styles for the application, focusing on a romantic theme with heart symbols.
  - **src/assets:** Directory for images or other assets used in the frontend.
  - **package.json:** Configuration file for npm, listing dependencies and scripts for the frontend.
  - **README.md:** Documentation for the frontend, including setup instructions and usage details.

### Database
- **Directory:** `database`
  - **placeholder.txt:** Placeholder for future database integration, indicating where connection details will be added.

## Setup Instructions

### Backend
1. Navigate to the `backend` directory.
2. Install dependencies using:
   ```
   npm install
   ```
3. Start the server with:
   ```
   npm start
   ```

### Frontend
1. Navigate to the `frontend` directory.
2. Install dependencies using:
   ```
   npm install
   ```
3. Start the React application with:
   ```
   npm start
   ```

## Usage
- Open the frontend application in your browser.
- Input your name and your partner's name in the form.
- Submit the form to receive a randomly generated percentage chance of a close bond.

## Future Enhancements
- Integrate a database for storing user inputs and bond results.
- Enhance the user interface with additional romantic themes and animations.

## License
This project is open-source and available for modification and distribution.