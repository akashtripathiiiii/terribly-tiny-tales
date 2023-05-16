# Terribly Tiny Tales Assignment

This is a web application for counting the frequency of words in a text document and displaying the results in a histogram and a word frequency table.

## How To Create

To use the application, follow these steps:

1. Open your terminal or command prompt.

2. Run the following command to create a new React application using npx and create-react-app: `npx create-react-app terribly-tiny-tales`

3. Navigate to the project directory: `cd terribly-tiny-tales-assignment`

4. Start the development server: `npm start`

5. Install the dependencies: `npm install <library-name>`

6. Open your browser and visit `http://localhost:3000` to access the application.

7. Click the "Submit" button.

8. The histogram and word frequency table will be displayed with the results.

9. Click on "Export" button to download csv file.

10. Click on "Back" button to go to "Submit" button page.

## Components

The application consists of the following components:

- `App`: The main component that handles the fetching of word frequency data and renders the Histogram and WordFrequencyTable components.

- `Histogram`: Renders a histogram chart based on the word frequency data.

- `WordFrequencyTable`: Displays a table showing the word frequency data.

- `SubmitButton`: Renders a button for submitting the text document and triggering the word frequency calculation.

## Libraries and Plugins Used

The application utilizes the following libraries and plugins:

- React: A JavaScript library for building user interfaces.

- react-chartjs-2: A React wrapper for Chart.js, used for rendering the histogram chart.

- react-csv: A lightweight library for creating and downloading CSV files in React applications.
