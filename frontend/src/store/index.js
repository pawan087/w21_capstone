import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import session from "./session";
import products from "./products";
import reviews from "./reviews";
import reviewLikes from "./reviewLikes";
import questions from "./questions";
import answers from "./answers";
import answerLikes from "./answerLikes";
import cartItems from "./cartItems";
import orders from "./orders";
import orderItems from "./orderItems";
import recentlyViewed from "./recentlyViewed";
import showAllReviewsReducer from "./ShowAllReviews";
// import deleteConfirmationReducer from "./deleteConfirmation";
import postOrderReducer from "./postOrderConfirmation";

const rootReducer = combineReducers({
  session,
  products,
  reviews,
  reviewLikes,
  questions,
  answers,
  answerLikes,
  cartItems,
  orders,
  orderItems,
  recentlyViewed,
  postOrderReducer,
  showAllReviewsReducer
});

let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
