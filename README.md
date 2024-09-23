# User Gen Pro

## Overview

**UserGen Pro** is a user-friendly frontend application that allows users to generate random user data for testing and development purposes. Users can customize parameters such as region, seed, and error rate, and easily export the generated data as a CSV file.

The backend for this app can be found [here](https://github.com/JusmeJr93/random-user-gen-backend).

## Key Features

- **Dynamic Data Generation**: Generate random user data based on selected region and custom seed values.
- **Error Simulation**: Introduce random errors into user records to simulate real-world data scenarios.
- **Infinite Scrolling**: Effortlessly load more data as you scroll through the list of generated users.
- **CSV Export**: Conveniently export generated data into a CSV format for easy access and analysis.

## Key Topics

- **State Management**: Utilizes React's useState and useEffect hooks for managing component state and lifecycle.
- **API Integration**: Fetches data from a backend API using Axios to generate and retrieve user data.
- **Dynamic Form Controls**: Implements controlled components for selecting regions, specifying error rates and seed.
- **Styling and Responsiveness**: Uses CSS for styling components with a focus on responsive design for various screen sizes.
- **BEM Methodology**: Follows the Block Element Modifier (BEM) naming convention for CSS classes to improve maintainability and readability of styles.
- **Error Handling**: Manages errors in API calls and data processing gracefully to enhance user experience.

## Technologies Used

- **React**: For building user interfaces.
- **Vite**: Build tool that provides fast development and optimized production builds.
- **Axios**: Promise-based HTTP client for making API requests.
- **React Infinite Scroll Component**: Library used to implement infinite scrolling functionality.

## Deployment

The application is deployed and accessible at [UserGen Pro by Junior Jusmé](https://user-gen-pro.vercel.app).
