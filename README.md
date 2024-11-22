# Store Checkout System - JavaScript Kata

This is a solution for the **JavaScript Kata** challenge. It simulates a store checkout system where items can be added to a basket, and the total price is calculated, including special offers and discounts.

## Purpose

The system is designed to:

- **Handle pricing schemes** like regular prices and special offers (e.g., "3 for 130").
- **Allow multiple items** to be added to a basket, where prices are recalculated as items are added or removed.
- **Provide a simple interface** to view the basket contents and total price.

## Key Features

- **Add and remove items**: Users can add or remove items from the basket.
- **Special pricing**: Items with special offers (like "3 for 130") are handled correctly.
- **Basket total**: The total price is dynamically calculated, including both regular prices and special pricing.

## How It Works

1. **Item Prices**: Each item has a regular price and may have a special pricing offer. For example, item 'A' costs 50p each, but if you buy 3 of them, the price is 130p.
2. **Add to Basket**: When an item is added to the basket, the system checks if it has a special offer. If so, it calculates the price using that offer; otherwise, it uses the regular price.
3. **Remove from Basket**: Items can be removed from the basket, and the total price will update accordingly.
4. **Total Calculation**: The app calculates the total price for all items in the basket, considering any special offers.
5. **Discount Calculation**: The app also calculates the total ammount saved for all items in the basket.

## How to Run the Project

To run the project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/store-checkout.git
   ```

2. **Install dependencies**:
   Navigate to the project folder and install the necessary packages:
   ```bash
   npm install
   ```

3. **Start the application**:
   Run the following command to start the development server:
   ```bash
   npm start
   ```

    The application will be available at `http://localhost:3000` in your browser.

## Technologies Used

- **React**: For building the user interface, allowing the user to interact with the app.
- **TypeScript**: To add static types, ensuring better code quality and reducing runtime errors.
- **CSS**: For basic styling of the interface.
- **ProductPlaceholder.com**: For Product placeholder images
- **Typora** for editing this readme.

---

While the project doesn't directly use AWS in this particular implementation, but given that this is an **AWS-first company**, the solution can easily be extended to integrate with AWS services. For example:

- **AWS Lambda**: For handling checkout calculations or item price retrieval in a serverless environment.
- **DynamoDB**: To store item prices and special offers in a scalable, NoSQL database.
- **S3**: To serve static files efficiently.

---
Here are some of the key decisions I made, and what I would do differently or improve upon:

### 1. **State Management Strategy**
   **Decision I Made:** I chose to use React's `useState` hook to manage the basket items. For a small-scale app like this, it's quick and easy. It ensures that updates to the basket (adding/removing items) trigger re-renders automatically.
   
   **What I'd Do If I Had More Time:**  
   For a more robust app, I'd use a state management tool like **Redux** or **Recoil**. This would help manage complex states more efficiently and keep the logic organized as the app expands with more features. Redux would allow for global state management, which might be beneficial as the app evolves.

### 2. **Component Structure and Reusability**
   **Decision Made:** I created all components in a single file (`App.tsx`) for simplicity. This was a pragmatic decision to keep things fast and flexible for this demo, as the requirements were straightforward.

   **What I'd Do If I Had More Time:**  
   I would break the application into smaller, more reusable components. For example:
   - A `ItemCard` component for each item.
   - A `BasketItem` component to display items in the basket.
   - A `BasketSummary` component to show the total price.
   
   This would make the code more modular and easier to maintain, and add additional features like sorting, filtering, or product reviews were added.

### 3. **Handling of Discounts and Offers**
   **Decision Made:** I implemented special pricing logic directly in the `calculateTotalForItem` function. This works well for a small number of deals, like a "3 for £130" offer.

   **What I'd Do If I Had More Time:**  
   I would refactor the discount logic to handle more complex scenarios, including:
   - Tiered discounts (e.g., buy 1, get 10% off, buy 2, get 20% off, etc.).
   - Conditional discounts based on user type (e.g., members get a discount).
   
   A more advanced discount management system could be built, possibly integrating a database (e.g., via an API call) to fetch deals and manage them dynamically.

### 4. **Testing**
**Decision Made:** I did not implement any unit tests for the core business logic.

**What I'd Do If I Had More Time:**  
- **Unit Testing:** I'd add unit tests for the core business logic, such as calculating prices and applying discounts. This would ensure that the business rules are consistently applied and prevent regressions. I would use **Jest** for these tests to validate functions like `calculateTotalForItem` and `calculateTotalForAll`.  
- **UI Testing:** I'd integrate **React Testing Library** for testing the UI components. This would help ensure that UI interactions (like adding and removing items from the basket) work as expected.  
- **E2E Testing:** I'd set up **Cypress** for more comprehensive end-to-end tests. This would simulate full user interactions (e.g., adding/removing items and checking the total price) to verify the entire flow works as intended from start to finish.  


### 5. **UI/UX Design**
   **Decision Made:** I used basic HTML elements styled with CSS, along with a simple list layout for the product cards and basket. This keeps things lightweight and focused on functionality.

   **What I'd Do If I Had More Time:**  
   I'd spend more time refining the user interface and experience:
   - Make the design more polished and modern, probably using a UI library like **TailwindCSS** (which I would likely choose for its flexibility and ease of use).
   - Add animations to improve user interaction, like animating the addition/removal of items in the basket or a progress bar for checkout.
   - Ensure mobile responsiveness for different screen sizes and devices.
   - Add view filters for grid/list
Here's the updated version of sections 6, 7, 8, and 9, tailored to include AWS-specific recommendations:


### 6. **Backend and Data Storage**  
**Decision Made:** The project was designed as a simple front-end application without any backend integration. All product and basket data is stored in memory.  

**What I'd Do If I Had More Time:**  
- I would integrate a backend using **AWS Lambda** to handle serverless functions for processing basket data, product data, and discounts. This would scale automatically based on demand and reduce overhead.
- I would use **Amazon DynamoDB** for data storage, as it offers a fully managed, scalable NoSQL database. This would allow for persistent data storage (e.g., users can return to their basket after refreshing the page) and more complex features, like user authentication or order history.
- To handle payments, I would integrate **Stripe** or **PayPal** using their APIs, ensuring secure transaction processing.
- To manage user sessions and authentication, I’d use **Amazon Cognito** to enable secure sign-ups, logins, and multi-factor authentication (MFA).

### 7. **Accessibility**  
**Decision Made:** I ensured basic accessibility (e.g., button labels, readable fonts) was considered when building the app.  

**What I'd Do If I Had More Time:**  
- I would conduct an accessibility audit using tools like **axe-core** or **Lighthouse** to ensure the app is fully accessible across different devices and browsers.
- I’d improve keyboard navigation, add ARIA roles to important elements, and ensure the app works seamlessly with screen readers.
- To ensure accessibility in the AWS ecosystem, I’d also validate that any AWS-hosted pages or resources (via **AWS Amplify** or **S3 Static Hosting**) are also fully compliant with accessibility standards.


### 8. **Performance Optimization**  
**Decision Made:** Since the app is relatively small, I didn't focus too much on performance optimization during this stage.  

**What I'd Do If I Had More Time:**  
- I would optimize performance for larger apps by using **lazy-loading** components, **memoizing** functions with `useMemo`, and ensuring images are properly compressed.
- I’d utilize **React's Suspense** and **React Query** for efficient data fetching (if any) and caching.
- I would consider **code splitting** and **tree shaking** to reduce the bundle size and speed up load times.
- For scaling in a production environment, I’d ensure the backend on AWS (e.g., **Lambda**, **API Gateway**, and **DynamoDB**) is properly optimized for high availability and performance. I would also use **CloudFront** for content delivery and faster static asset loading.


### 9. **Deployment**  
**Decision Made:** I focused only on building the app without worrying about deployment.  

**What I'd Do If I Had More Time:**  
- I would deploy the app using **AWS Amplify**, which allows for quick and easy hosting of React apps and integrates well with serverless backends like **AWS Lambda** and **DynamoDB**.
- Set up **Continuous Deployment (CD)** using **AWS CodePipeline** and **GitHub Actions** to automatically deploy updates whenever I push new code to the repository.
- For monitoring and error tracking, I would integrate **AWS CloudWatch** for logs and performance metrics, and use **Sentry** or **LogRocket** for real-time error reporting.

### Final Thoughts

With more time, the primary focus would be on scalability, maintainability, and performance. I would place an emphasis on testing, ensuring both unit tests and end-to-end (E2E) tests are fully implemented to validate the core business logic and user flows. This would help catch edge cases and ensure the app behaves as expected in various scenarios. I’d also focus on introducing better error handling and validations, making the code more modular and reusable for future feature additions. Additionally, improving the user experience and ensuring accessibility would be key areas of improvement, ensuring the app is intuitive, performant, and accessible to all users.


