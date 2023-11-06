# React Data Table Dashboard

This is a React application that displays data from an external API source in a table format. It allows you to edit and delete entries in the table, demonstrating knowledge of React, state management.

# Screenshot
![Screenshot 2023-11-06 190835](https://github.com/hotblooded058/Alippo_frontened_assignment/assets/88645562/10fcec48-6fbe-4748-9813-b10e73740f6b)

![Screenshot 2023-11-06 190847](https://github.com/hotblooded058/Alippo_frontened_assignment/assets/88645562/0127f5f4-4be5-4c9d-b015-721b5935b799)


# Live Link

https://bright-macaron-4fc43c.netlify.app

## Getting Started

To get started with this project on your local machine, follow these steps:

1. Clone the repository to your local machine using `git clone`.
2. Navigate to the project directory.
3. Install the required dependencies using `npm install`.
4. Start the development server using `npm start`.
5. Open your web browser and go to `http://localhost:3000` to see the application.

## Usage

The application fetches data from the [provided API](https://assets.alippo.com/catalog/static/data.json) and displays it in a table. You can perform the following actions:

- Edit: Click the "Edit" button to modify the name of an entry in the table.
- Delete: Click the "Delete" button to remove an entry from the table.

## Features

- Fetches data from an external API.
- Displays data in a table with edit and delete actions.
- Handles null/empty cases in data.
- Provides modals for editing and confirming deletions.
- Maintains state for the table entries.
- Built with React and TypeScript/JavaScript.

## Technologies Used

- React
- TypeScript/JavaScript
- HTML and CSS
- External API for data source

## Project Structure

The project structure is organized as follows:

- `src/` - Contains the source code for the React application.
  - `components/` - Contains React components.
  - `App.js` - The main application component.
  - `App.css` - Styles for the application.
- `public/` - Contains the public assets and HTML file.

