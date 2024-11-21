
# Stealth Assignment

This project is  developed as part of an assignment for Stealth(milir/velvee). This project implements a filter service for fashion items, using React for the frontend and Express.js for the backend. The service allows users to filter fashion items based on various criteria such as category, price range, size, color, brand, and rating. It also supports sorting and pagination for improved usability.


**Important Note**: The application requires both the backend and frontend to be run simultaneously for proper functionality.

- You can find the backend repository [here](https://github.com/vaseemGit7/stealth-assignment-backend) 
- Please follow the instructions provided in the documentation to set up and run the backend while using the app in the frontend.
Similarly, the frontend setup must be active for backend interactions to work seamlessly.


## Features

### 1. **Filter Functionality:**
- **Category**: Filter items by categories such as dresses, shoes, accessories.
- **Price Range**: Filter fashion items within a specific price range.
- **Size**: Filter by available sizes.
- **Color**: Filter by color options available for fashion items.
- **Brand**: Filter by specific brands.
- **Rating**: Filter by customer ratings (1-5 stars).

### 2. **Multiple Filters Support:**
- Apply **multiple filters simultaneously** for more refined search results.

### 3. **Sorting:**
- Sort the filtered items by **Price** (ascending/descending).

### 4. **Infinite Scrolling Pagination:**
- **Infinite scrolling** allows the page to load more items automatically as the user scrolls down.
- Pagination is handled smoothly, loading items dynamically to improve the user experience and avoid page reloads.

### 5. **Backend:**
- **RESTful APIs** using **Express.js** to handle filter, sort, and pagination requests.
- Postman is used to test api endpoints

### 6. **Mock Data:**
- A mock dataset of  **60 fashion items** is used for testing and demonstrating the service.
- **In-memory data storage** is used to simulate a real-time database, with items being served directly from memory.
## Built with

### Languages

- HTML
- CSS
- JavaScript

### Libraries / Frameworks

- React JS
- Redux
- Tailwind CSS

### Tools

- ESLint + Airbnb Style Guide
- Git and Github
- Linux terminal
- Prettier
- Visual Studio Code
- Vite

### Dependencies

- [ionicons](https://www.npmjs.com/package/ionicons)
- [react-redux](https://www.npmjs.com/package/react-redux)
- [redux](https://www.npmjs.com/package/redux)

## Run Locally

Clone the project

```bash
  git clone https://github.com/vaseemGit7/stealth-assignment-frontend.git
```

Go to the project directory

```bash
  cd stealth-assignment-frontend
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

Access the server

```bash
  http://localhost:5173/
```


## Author

Vaseem Ahamed

- Github: [Vaseem-Ahamed](https://github.com/)
- LinkedIn: [Vaseem-Ahamed](https://www.linkedin.com/in/vaseem-ahamed-va/)
