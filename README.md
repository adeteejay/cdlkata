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

---

While the project doesn't directly use AWS in this particular implementation, but given that this is an **AWS-first company**, the solution can easily be extended to integrate with AWS services. For example:

- **AWS Lambda**: For handling checkout calculations or item price retrieval in a serverless environment.
- **DynamoDB**: To store item prices and special offers in a scalable, NoSQL database.
- **S3**: To serve static files efficiently.

