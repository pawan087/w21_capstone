<br />

<p align="center">
  <img src="/frontend/public/gamestop.jpg" alt="Logo" width="90" height="90">

  <h3 align="center">gameStop</h3>

  <p align="center">
    A pixel-perfect clone of <a target="_blank" href="https://www.gamestop.com/">Gamestop.com</a>
    <br />
    <a href="https://gamestopclone.herokuapp.com/" target="_blank"><strong>Explore the website »</strong></a>
    <br />
    <br />
  </p>
</p>

<details open="open">
  <summary id="table-of-contents">Table of Contents</summary>

  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#usage">Usage</a>
      <ul>
        <li><a href="#usage">User Authentication</a></li>
        <li><a href="#shopping">Shopping</a></li>
        <li><a href="#orders">Creating an Order</a></li>
        <li><a href="#reviews">Product Reviews</a></li>
      </ul>
    </li>
    <li>
      <a href="#features-to-implement-next">Features to Implement Next</a>
      <ul>
        <li><a href="#virtual-chat-assistant">Chat Assistant</a></li>
        <li><a href="#product-suggestions">Product Suggestions</a></li>
      </ul>
      <li><a href="#contact">Contact</a></li>
    </li>
  </ol>
</details>

<br>

## About The Project

![about](/frontend/public/splashPageGIF.gif)

gameStop is a full-stack web application built using the <a href="https://www.geeksforgeeks.org/what-is-pern-stack/" target="_blank">PERN Stack</a>. It is a near replica of the famous online e-commerce store <a href="https://www.gamestop.com/" target="_blank">Gamestop.com</a> and offers an enjoyable yet genuine shopping experience for all users alike.

### Built With

- [AWS - Amazon Web Services](https://aws.amazon.com/)
- [PostgreSQL](https://www.postgresql.org/docs/)
- [Sequelize](https://sequelize.org/)
- [ExpressJS](https://expressjs.com/)
- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)

<br>

# Usage

[Back to top](#table-of-contents)

<br>

## Create Account

To shop, users can sign-up on the "Create Account" page which offers a sign-up form with full error-handling!

<br>

![sign-up](/frontend/public/signUpGIF.gif)

<br>

## Log In

Returning customers can log-back into their existing accounts by visiting the "Sign In" page. This page also offers an option for guests to log-in as "Demo User," to test-drive the web app's functionality and features!

<br>

![log-in](/frontend/public/logInGIF.gif)

<br>

# Shopping

[Back to top](#table-of-contents)

<br>

## Browse Categories

Users can begin shopping right from the splash page or by using the left-side navigation bar labeled "Shop" to browse through their favorite categories. Go ahead and splurge, as each category is filled with an abundance of products to choose from!

<br>

![shopping1](/frontend/public/shoppingGIF1.gif)

<br>

## Filtering Products

Having trouble deciding upon a product to purchase? Users have the ability to filter by "Price" and "Rating" to better aid their decision-making process and overall ease of use. Thereafter, the user may further sort by name or price (ascending and descending).

<br>

![shopping2](/frontend/public/shoppingGIF2.gif)

<br>

## Search Bar

Got an idea of what you're looking for? Users can utilize the "Search Feature" found directly in the navigation menu! Products maybe searched for by name and/or description.

<br>

![shopping3](/frontend/public/shoppingGIF3.gif)

<br>

# Orders

[Back to top](#table-of-contents)

<br>

## Shopping Cart

Adding a product to a user's shopping cart is as easy as navigating to a desired product's page and clicking the "Add to Cart" button. Once pressed, the user has the option to view their cart by navigating to the "Shopping Cart" page, or to simply continue shopping. The user may also view his or her shopping cart anytime by opening the "Cart" submenu located in the navigation bar (onto the right). When the cart is not empty, the logged-in user will be notified through "Badges" corresponding to the number of items in their cart at that time. Through this submenu the user also has the ability to remove the product entirely from their shopping cart.

<br>

![shopping4](/frontend/public/shoppingGIF4.gif)

<br>

Users may update the quantity of items they would like to purchase as well as remove a product entirely directly from the "Shopping Cart" page. This page can be found through the "Cart" submenu located in the navigation bar. Once the user is satisfied with the state of their shopping cart, they may finalize their order by pressing "Proceed to Checkout."

<br>

![shopping5](/frontend/public/shoppingGIF5.gif)

<br>

## Order Confirmation

Upon proceeding to checkout, the user has the option to set the shipping address of the corresponding order if by chance they maybe shipping to a friend or family, and not to themselves. This information persists along with every order, and the user may further set the inputted information as their default shipping address without having to navigate to the user's account dashboard.

Thereafter the user is prompted for a pseudo-payment method. For ease of use, their is an option to pay with a "Demo Card" (...it's on the house) to by-pass the stringent validations. Once all details are set, the user may proceed by pressing "Place Order" to finalize their order!

<br>

![orders1](/frontend/public/orders1GIF.gif)

<br>

## Order History

Users can view their order history by utilizing the right-side navigation bar labeled "Account" which provides access to the user's account dashboard. In the account dashboard a user can checkout the past and persisted details of all the previous orders. Through the account dashboard a user may also update any of their user-profile information such as password and default shipping address.

<br>

![orders3](/frontend/public/orders3GIF.gif)

<br>

# Reviews

[Back to top](#table-of-contents)

<br>

## Viewing Reviews

To view a product's reviews, a user can navigate to a specific product's page and open the "Ratings and Reviews" subsection. This area will aid the user in determining whether a particular product is right for them. Visually, through the use of bar graphs, a user can easily gauge the level of ratings past users have given a product. Reviews may be further viewed by clicking the "Show All Reviews" link which allows for a more tabulated format of past reviews. Here a user can seamlessly sort reviews by rating (highest to lowest and lowest to highest) as well as by "Most Helpful" which presents reviews with the most likes!

<br>

![review1](/frontend/public/reviews1GIF.gif)

<br>

## Publish a Review

Leaving reviews is fun and provides valuable insight for future customers! To publish a review, click the "Write a Review" button in the "Ratings and Reviews" subsection on the product's page. Ratings are given using the "Star Rating" graphical selector; now with half-star precision! Thereafter a user is required to write their content regarding the product. Optionally, a user may also upload a picture of their liking to go along with their review. A picture is worth a thousand words and with AWS S3 integration, uploading photos is a breeze!

<br>

![review2](/frontend/public/reviews2GIF.gif)

<br>

## Edit/Delete Past Reviews

Sometimes we may wan't to reconsider what we say, especially publicly over the world wide web. Thankfully editing or removing past reviews is as simple as it gets. A user can find this functionality in the forementioned "Ratings and Reviews" subsection under "Show All Reviews." Here a user can edit their past rating, content as well as any image that they may have uploaded along with their review. Also, when editing a review, user's have the choice to add along a picture if they had forgotten to do so originally.

<br>

![review3](/frontend/public/reviews3GIF.gif)

<br>

# Features to Implement Next

[Back to top](#table-of-contents)

<br>

## Virtual Chat Assistant

Chat assistants are more prevalent than ever now on e-commerce websites. Behind the scenes, a set of preprogrammed responses attempt to help users navigate towards what they're looking for.

How I would do it: The frontend implementation of this feature would not be where difficulties arise. A simple floating component rendered on the splash page towards the right hand corner would suffice. This chat box of some sorts would temporarily store user inputs and pseudo-AI responses into a data structure that holds string values. From the inputs, I would attempt to parse through the information for keywords that'll allow me to match the user with what they're looking for. I believe the difficult arise in predetermining what sort of inputs to respond to and how.

<br>

## Product Suggestions

By learning from the users past interactions and engagement, offering suggestions to users would aid in the user discovering products that they may not have ever known of in the first place.

How I would do it: Similarly to how the "Recently Viewed" component is, a carousel would render information of products that are stored into a data structure such as an array. This array would be mutated constantly through the backend by adding and removing old data as the user proceeds to navigate throughout the application. The specificities of which products to offer makes this a difficult problem to solve. A good approach would be to further categorize the products by adding more columns in the Products table. This would allow for more dynamic and specific filtering processes when attempting to find the right product to suggest for a user.

<br>

# Contact

Pawan Chahal:

- LinkedIn: https://www.linkedin.com/in/pawanchahal/
- Email: chahal.pawanpreet@gmail.com

Project Repo Link: https://github.com/pawan087/w21_capstone

Project Link: https://gamestopclone.herokuapp.com/

<br>

[Back to top](#table-of-contents)
