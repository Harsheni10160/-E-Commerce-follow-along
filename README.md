# ⭐ Ecommerce Follow Along Project ⭐

Welcome to the *Ecommerce Follow Along Project*! This hands-on project focuses on building a complete e-commerce application using the **MERN stack** (MongoDB, Express.js, React.js, and Node.js). The goal is to learn how to develop a full-stack web application step by step.

---

## ⭐ Milestone 1: Project Overview

### 🌟 M1. Understanding the MERN Stack
- **MongoDB**: A database for storing application data in a flexible, document-based format.
- **Express.js**: A backend web application framework for building APIs and handling server logic.
- **React.js**: A framework/library for building user interfaces.
- **Node.js**: A runtime environment that allows JavaScript to run on the server.

### 🌟 M2. REST API Structure
- **User Authentication**: Allowing users to register and log in.
- **Product Management**: Adding, updating, and retrieving product data.
- **Order Handling**: Managing customer orders.

### 🌟 M3. Database Schema Design
- Learn how to design and organize data using MongoDB.
- Define schemas to store and manage data relationships.

### 🌟 M4. Authentication
- Ensure users log in to access personal data and place orders.
- Enhance security by verifying user identities.

---

## ⭐ Milestone 2: Project Setup and Login Page Development

### 🌟 1. Project Folder Structure
- Organized the project into separate **frontend** and **backend** directories.
- Separated concerns for better maintainability.

### 🌟 2. React Frontend Setup
- Initialized a new React application for the user interface.

### 🌟 3. Node.js Backend Setup
- Created a simple Node.js server using **Express.js**.
- Established API routes for handling user authentication and data management.

### 🌟 4. Tailwind CSS Configuration
- Configured Tailwind CSS for utility-first styling.
- Enabled rapid and responsive design.

### 🌟 5. Login Page Development
- Developed a **functional login form** for user authentication.
- Ensured **responsive design** using Tailwind CSS.

---

## ⭐ Milestone 3: Backend Configuration & Database Setup
- Created dedicated folders to **organize backend code** efficiently.
- Initialized and configured a **Node.js server** for handling API requests.
- Connected the application to **MongoDB** for data storage.
- Implemented **basic error handling** for smooth server operation.

---

## ⭐ Milestone 4: User Model & File Uploads
- Created a **User Model** to define how user data is structured in MongoDB.
- Developed a **User Controller** to manage user interactions, such as adding or retrieving data.
- Configured **Multer** for file uploads, enabling users to store files such as images.

---

## ⭐ Milestone 5: Sign-Up Page Development
- Built a **user registration form** using HTML and CSS.
- Implemented **form validation** for:
  - Correct email format.
  - Secure password input.
- Enhanced user experience by preventing errors.
- Committed and pushed all changes to the repository.

---

## ⭐ Milestone 6: Backend Signup API
- Created a **secure signup API** for user registration.
- **Encrypted passwords** using bcrypt before saving them to MongoDB.
- Ensured **secure authentication** and **data privacy**.
- Committed and pushed all changes.

---

## ⭐ Milestone 7: User Login Authentication
- Implemented **secure user authentication** by:
  - Validating credentials.
  - Comparing encrypted passwords using **bcrypt**.
- Authentication flow:
  - Retrieve user data from the database.
  - Hash the entered password and compare it with the stored hash.
  - Grant access if credentials match; otherwise, return an error.
- **Enhances security** and protects user data.

---

## ⭐ Milestone 8: UI Components & Homepage Layout

### 🌟 1. Create the Card Component
- Design a **reusable card component** with props for product details (e.g., name, image, price).

### 🌟 2. Design the Homepage Layout
- Set up a **grid layout** or **flexbox** for displaying multiple cards neatly.

---

## ⭐ Milestone 9: Creating a Product Form

### Key Features of the Product Form:
- **Product Details Input**:
  - Product Name
  - Price
  - Category
  - Description
  - Stock Availability
- **Data Storage**: The entered data will be saved in MongoDB Atlas.

---

## ⭐ Milestone 10: Product Schema & Backend Endpoint
- Define the structure for product data (e.g., name, description, price) with validation.
- Build a POST endpoint to receive product data, validate it, and save it to MongoDB.

---

## ⭐ Milestone 11: My Products Page
- Created a **My Products** page that displays a list of products created by the user.

---

## ⭐ Milestone 12: Displaying Products on My Products Page
- Implemented logic to fetch and display products on the **My Products** page.

---

## ⭐ Milestone 13: Update Product Functionality
- Implemented an **Update Product** feature allowing users to edit product details.

---

## ⭐ Milestone 14: Delete Product Functionality
- Integrated **Delete Product** functionality with a confirmation prompt.

---

## ⭐ Milestone 15: Navbar Component

### Features:
- **Brand Logo**
- **Navigation Links**: Home, Products, My Products, Cart, Login/Logout

---

## ⭐ Milestone 16: Product Info Page

### Features:
- **Product Details Display**
- **Quantity Selection**
- **Add to Cart Button**

---

## ⭐ Milestone 17: Cart Schema & Backend Endpoint

### Steps for Milestone 17 📝
1. Write the **Cart Schema** to store products added to the cart.
2. Write a **backend endpoint** to receive and store product details in the cart.

---

## ⭐ Milestone 18: Cart Page Backend Endpoint

### Steps for Milestone 18 📝
1. Create a **backend endpoint** for fetching cart data.
2. Write an endpoint to **retrieve products** inside the cart for a user.


## ⭐ Milestone 19: Cart Page
- Created a **Cart Page** to display products in the user's cart.
- Added **+ and - buttons** to adjust product quantities.
- Implemented **PUT /cart/update-quantity** endpoint to update product quantities in the cart, ensuring seamless frontend-backend communication.

---

## ⭐ Milestone 20: User Profile Page
- Created a **GET /user/profile** endpoint to fetch user details (name, email, profile photo, addresses).
- Implemented functionality to send user data via email.
- Designed a **Profile Page** displaying the user’s photo, name, and email, with addresses in a separate section.
- If no addresses are found, a **"No address found"** message is shown, along with an **"Add Address"** button.

---

## ⭐ Milestone 21: Address Form
- Created a **frontend form** to collect user addresses.
- Included fields: **Country, City, Address Line 1, Address Line 2, Zip Code, Address Type**.
- Stored input values in **state** for efficient data management.
- Implemented **navigation** from the profile page to the address form.
- On form submission, data is currently logged in the console (backend integration planned).
- Added **form validation** for required fields to ensure a smooth user experience.

---

## ⭐ Milestone 22: Storing User Addresses
- Created a **POST /user/address** endpoint to store addresses in the user profile in the database.
- The endpoint receives address data from the frontend form and adds it to the **address array** in the user collection.

---


## ⭐ Milestone 23: Select Address & Product Schema
- Created a **select address page** in the frontend for users to choose their saved addresses.
- Developed the **product schema** in the backend for handling orders.

---

## ⭐ Milestone 24: Order Confirmation Page
- Built an **order confirmation page** in the frontend.
- Displays **ordered products**, **selected address**, and **total price details**.

## ⭐ Milestone 25: Created an endpoint :
- Built an endpoint "orders" in backend.
- Displays the product which is received by the endpoint.

## ⭐ Milestone 26: Create an backend endpoint for place order
- Create an endpoint that will receive the user mail.
- With the help of  the  mail we  need to retrive the _id of the user.
- Using that _id we need to get all the orders of that user.


# ⭐ Milestone 27: Create My Orders Page  
## Learning Goals 🎯  
By the end of this milestone, you will:  
- Create a frontend page that will display all the user orders.  

## Steps for Milestone 27 📝  
1. Create a *My Orders* page.  
2. Send a *GET request* to the my-orders endpoint created in the previous milestone.  
3. Pass the *user's email* to the endpoint to fetch all user orders.  
4. Display all the retrieved *user orders* on the page.  
5. Add the *My Orders* page to the navbar for better navigation.  

---

# ⭐ Milestone 28: Cancel Order Feature  
## Learning Goals 🎯  
By the end of this milestone, you will:  
- Allow users to *cancel* their placed orders.  

## Steps for Milestone 28 📝  
1. In the *My Orders* page, add a *"Cancel Order"* button for each order.  
2. If an order is *already canceled*, the button should not be displayed.  
3. Create an *API endpoint* that will receive the order_id.  
4. Fetch the order using this order_id, update its status to *"Canceled"*, and save the changes.

## 📝 Steps for Milestone 29: PayPal Integration  
1. Create a *PayPal Developer Account* and get *API credentials*.  
2. Install and configure the *PayPal SDK* in your application.  
3. Implement a *checkout page* where users can make payments using PayPal.  
4. Handle *successful* and *failed* transactions appropriately.  
5. Store transaction details in your database for future reference.






This concludes the roadmap for our **Ecommerce Follow Along Project**! Happy coding! 🚀

