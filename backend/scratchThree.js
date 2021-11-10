var faker = require("faker");

// let randomParagraph = faker.lorem.paragraph();

// let randomUsersIndex = Math.floor(Math.random() * 3);

// let randomRatingsIndex = Math.floor(Math.random() * 10);

// let randomImgUrl = faker.image.imageUrl();

// console.log(faker.internet.userName())
// console.log(faker.address.city(), faker.address.state(), faker.address.zipCode());

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let users = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let ratings = [0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0];
let reviewsArr = [];

for (let i = 1; i <= 154; i++) {
  const rndInt = randomIntFromInterval(6, 30);

  for (let j = 1; j <= rndInt; j++) {
    let review = {};
    let randomUsersIndex = Math.floor(Math.random() * 12);
    let randomRatingsIndex = Math.floor(Math.random() * 10);
    let randomParagraph = faker.lorem.paragraph();

    review["userId"] = users[randomUsersIndex];
    review["productId"] = i;
    review["content"] = randomParagraph;
    review["rating"] = ratings[randomRatingsIndex];

    if (j === rndInt) {
      let randomImgUrl4 = faker.image.imageUrl();
      review["imageUrl"] = randomImgUrl4;
    }

    reviewsArr.push(review);
  }
}

let numReviews = 2835;

let reviewLikes = [];

for (let i = 1; i <= 12; i++) {
  for (let j = 1; j < 2835; j++) {
    let randomNum = randomIntFromInterval(1, 100);
    let reviewLike = {};

    if (randomNum <= 50) {
      continue;
    } else {
      reviewLike["userId"] = i;
      reviewLike["reviewId"] = j;

      let randomNum2 = randomIntFromInterval(1, 100);

      if (randomNum2 <= 50) {
        // like
        reviewLike["like"] = true;
      } else {
        // dislike
        reviewLike["like"] = false;
      }
    }

    reviewLikes.push(reviewLike);
  }
}
