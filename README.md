# react-live-coding-test
## Follow these steps
Application Setup (DO THIS FIRST)
- Fork this repository into your GitHub account (You can create a GitHub account if you don't have one)
- Clone the repository from your repository
- Checkout main branch
- Install dependencies
- To start development use npm start

## Project Overview
This project is about a frontend ecommerce application. the expected time to finish the project is around 12 hours (4 days, 3 hours each).

### Required knowledge
1. Tailwind
2. Typescript
3. NextJS
4. Docker (BONUS)
5. Any Free deployment platform Experience (Bonus)

we are open to any /components if it is needed in the test.

### **IMPORTANT**
After implementing each feature for each test in the respective branch, create a Pull Request and merge to the main branch, then delete the merged branch.

### First Test - Landing page
1. create a new branch name - `feature/landing-page`
2. create a clone of this page https://www.lazada.com.my/
3. use this when product details is needed : https://fakestoreapi.com/
4. this page should be in http://localhost:3000/

PS: clone as similiar as you can. As long as you are able to showcase your skill.

### Second Test  -  Product listing
1. create a new branch name - `feature/product-listing`
2. use https://fakestoreapi.com/ as API for listing.
3. create filterable, sortable and paginated table.
4. the products can be filtered by categories - list of categories can be found at https://fakestoreapi.com/products/categories
5. has floating button that when clicked, shows the current items in cart. (data is retained even if the page is refreshed).
6. there will also be a quick buy button that redirects the user to receipts page.
7. this page should be in http://localhost:3000/products

### Third Test -  Receipts page
1. create a new branch name - `feature/receipts` based on  `feature/product-listing` after you are done with second test.
2. user will be redirected to this page once user click quick buy at http://localhost:3000/products
3. user should be presented with a the items in the cart.
4. user should be able to view a pie chart of the price of the items.
5. user should be able to download a pdf of the receipts.
6. this page should be in http://localhost:3000/receipts

### Fourth test - Dashboard
1. create a new branch name - `feature/dashboard`
2. use https://randomuser.me/api/ as API for showing user profile.
3. try to utilize every field in the `result` from the response.
4. this page should be in http://localhost:3000/dashboard

### Bonus
1. Dockerize this application.
2. Deploy this application online and share the link for viewing.
