import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { FaCheck } from "react-icons/fa";
import { motion } from "framer-motion/dist/framer-motion";
import ReactLoading from "react-loading";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import StarPicker from "react-star-picker";
import ReactPaginate from "react-paginate";

import RecentlyViewedCard from "../Product/RecentlyViewedCard";
import Footer from "../Footer/index";
import ProductsRow from "./ProductsRow";
import { setAllRecentlyViewed } from "../../store/recentlyViewed";
import { setAllProducts } from "../../store/products.js";
import { setAllReviews } from "../../store/reviews.js";
import "@szhsin/react-menu/dist/index.css";
import styles from "./styles.module.css";

export default function BrowseProducts() {
  const params = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector((state) => state.session.user);
  const products = useSelector((state) => state.products);

  let pageCategory;

  let videoGameSubCategories = new Set();

  const videoGames = products?.filter((product) => {
    if (params.category === "videogames") {
      if (product.Category.id === 1) {
        videoGameSubCategories.add(product.Subcategory.name);
      }

      pageCategory = "Video Games";

      if (
        params.subcategory === "switch" &&
        product.Subcategory.name === "Nintendo Switch"
      ) {
        return product.Category.id === 1;
      } else if (
        params.subcategory === "ps4" &&
        product.Subcategory.name === "PlayStation 4"
      ) {
        return product.Category.id === 1;
      } else if (
        params.subcategory === "ps5" &&
        product.Subcategory.name === "PlayStation 5"
      ) {
        return product.Category.id === 1;
      } else if (
        params.subcategory === "xbox1" &&
        product.Subcategory.name === "Xbox One"
      ) {
        return product.Category.id === 1;
      } else if (
        params.subcategory === "xboxx" &&
        product.Subcategory.name === "Xbox Series X"
      ) {
        return product.Category.id === 1;
      } else if (params.subcategory === "0") {
        return product.Category.id === 1;
      } else {
        return false;
      }
    }

    if (params.category === "toysgames") {
      if (product.Category.id === 2) {
        videoGameSubCategories.add(product.Subcategory.name);
      }

      pageCategory = "Toys & Games";

      // return product.Category.id === 2;

      if (
        params.subcategory === "art" &&
        product.Subcategory.name === "Arts & Crafts Toys"
      ) {
        return product.Category.id === 2;
      } else if (
        params.subcategory === "boardgames" &&
        product.Subcategory.name === "Board Games"
      ) {
        return product.Category.id === 2;
      } else if (
        params.subcategory === "construction" &&
        product.Subcategory.name === "Building & Construction Sets"
      ) {
        return product.Category.id === 2;
      } else if (
        params.subcategory === "dolls" &&
        product.Subcategory.name === "Dolls & Dollhouses"
      ) {
        return product.Category.id === 2;
      } else if (
        params.subcategory === "nerf" &&
        product.Subcategory.name === "NERF"
      ) {
        return product.Category.id === 2;
      } else if (
        params.subcategory === "vehicles" &&
        product.Subcategory.name === "Play Vehicles"
      ) {
        return product.Category.id === 2;
      } else if (
        params.subcategory === "puzzles" &&
        product.Subcategory.name === "Puzzles"
      ) {
        return product.Category.id === 2;
      } else if (
        params.subcategory === "scooters" &&
        product.Subcategory.name === "Scooters & Ride Ons"
      ) {
        return product.Category.id === 2;
      } else if (
        params.subcategory === "plush" &&
        product.Subcategory.name === "Stuffed Animals & Plush"
      ) {
        return product.Category.id === 2;
      } else if (
        params.subcategory === "cards" &&
        product.Subcategory.name === "Trading Cards"
      ) {
        return product.Category.id === 2;
      } else if (params.subcategory === "0") {
        return product.Category.id === 2;
      } else {
        return false;
      }
    }

    if (params.category === "electronics") {
      if (product.Category.id === 3) {
        videoGameSubCategories.add(product.Subcategory.name);
      }

      pageCategory = "Electronics";

      // return product.Category.id === 3;

      if (
        params.subcategory === "audio" &&
        product.Subcategory.name === "Audio"
      ) {
        return product.Category.id === 3;
      } else if (
        params.subcategory === "cameras" &&
        product.Subcategory.name === "Cameras"
      ) {
        return product.Category.id === 3;
      } else if (
        params.subcategory === "phones" &&
        product.Subcategory.name === "Cell Phones"
      ) {
        return product.Category.id === 3;
      } else if (
        params.subcategory === "drone" &&
        product.Subcategory.name === "Drone"
      ) {
        return product.Category.id === 3;
      } else if (
        params.subcategory === "home" &&
        product.Subcategory.name === "Smart Home Automation"
      ) {
        return product.Category.id === 3;
      } else if (
        params.subcategory === "theater" &&
        product.Subcategory.name === "TV & Home Theater"
      ) {
        return product.Category.id === 3;
      } else if (params.subcategory === "0") {
        return product.Category.id === 3;
      } else {
        return false;
      }
    }

    if (params.category === "consoles") {
      if (product.Category.id === 4) {
        videoGameSubCategories.add(product.Subcategory.name);
      }

      pageCategory = "Consoles & Hardware";

      if (
        params.subcategory === "switch" &&
        product.Subcategory.name === "Nintendo Switch"
      ) {
        return product.Category.id === 4;
      } else if (
        params.subcategory === "ps4" &&
        product.Subcategory.name === "PlayStation 4"
      ) {
        return product.Category.id === 4;
      } else if (
        params.subcategory === "pc" &&
        product.Subcategory.name === "PC Gaming"
      ) {
        return product.Category.id === 4;
      } else if (
        params.subcategory === "vr" &&
        product.Subcategory.name === "Virtual Reality"
      ) {
        return product.Category.id === 4;
      } else if (
        params.subcategory === "xbox1" &&
        product.Subcategory.name === "Xbox One"
      ) {
        return product.Category.id === 4;
      } else if (params.subcategory === "0") {
        return product.Category.id === 4;
      } else {
        return false;
      }
    }

    if (params.category === "accessories") {
      if (product.Category.id === 5) {
        videoGameSubCategories.add(product.Subcategory.name);
      }

      pageCategory = "Gaming Accessories";

      if (
        params.subcategory === "controllers" &&
        product.Subcategory.name === "Controllers"
      ) {
        return product.Category.id === 5;
      } else if (
        params.subcategory === "memory" &&
        product.Subcategory.name === "Memory"
      ) {
        return product.Category.id === 5;
      } else if (
        params.subcategory === "mounts" &&
        product.Subcategory.name === "Mounts"
      ) {
        return product.Category.id === 5;
      } else if (
        params.subcategory === "pc" &&
        product.Subcategory.name === "PC Gaming"
      ) {
        return product.Category.id === 5;
      } else if (
        params.subcategory === "xbox1" &&
        product.Subcategory.name === "Xbox One"
      ) {
        return product.Category.id === 5;
      } else if (params.subcategory === "0") {
        return product.Category.id === 5;
      } else {
        return false;
      }
    }

    if (params.category === "clothing") {
      if (product.Category.id === 6) {
        videoGameSubCategories.add(product.Subcategory.name);
      }

      pageCategory = "Clothing";

      // return product.Category.id === 6;

      if (
        params.subcategory === "accessories" &&
        product.Subcategory.name === "Accessories"
      ) {
        return product.Category.id === 6;
      } else if (
        params.subcategory === "bags" &&
        product.Subcategory.name === "Bags"
      ) {
        return product.Category.id === 6;
      } else if (
        params.subcategory === "footwear" &&
        product.Subcategory.name === "Footwear"
      ) {
        return product.Category.id === 6;
      } else if (
        params.subcategory === "jackets" &&
        product.Subcategory.name === "Jackets & Outerwear"
      ) {
        return product.Category.id === 6;
      } else if (
        params.subcategory === "pants" &&
        product.Subcategory.name === "Pants & Shorts"
      ) {
        return product.Category.id === 6;
      } else if (
        params.subcategory === "shirts" &&
        product.Subcategory.name === "T-Shirts"
      ) {
        return product.Category.id === 6;
      } else if (
        params.subcategory === "watches" &&
        product.Subcategory.name === "Watches"
      ) {
        return product.Category.id === 6;
      } else if (params.subcategory === "0") {
        return product.Category.id === 6;
      } else {
        return false;
      }
    }

    return false;
  });

  let videoGameSubcategoriesArr = Array.from(videoGameSubCategories);

  videoGameSubcategoriesArr.sort(function (a, b) {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  });

  videoGames.sort(function (a, b) {
    if (a.name < b.name) {
      return -1;
    }

    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  let sortedVideoGamesLowToHigh = [...videoGames];
  let sortedVideoGamesHighToLow = [...videoGames];

  sortedVideoGamesLowToHigh.sort(function (a, b) {
    if (+a.price < +b.price) {
      return -1;
    }

    if (+a.price > +b.price) {
      return 1;
    }

    return 0;
  });

  sortedVideoGamesHighToLow.sort(function (a, b) {
    if (+a.price > +b.price) {
      return -1;
    }

    if (+a.price < +b.price) {
      return 1;
    }

    return 0;
  });

  let videoGamesByFour = [];
  let videoGamesByFourSortedLowToHigh = [];
  let videoGamesByFourSortedHighToLow = [];

  for (let i = 0; i < sortedVideoGamesHighToLow.length; i += 4) {
    let arr = [];

    let first = sortedVideoGamesHighToLow[i];

    let second = sortedVideoGamesHighToLow[i + 1];

    if (second === undefined) {
      break;
    }

    let third = sortedVideoGamesHighToLow[i + 2];
    let fourth = sortedVideoGamesHighToLow[i + 3];

    arr.push(first);
    arr.push(second);
    arr.push(third);
    arr.push(fourth);

    videoGamesByFourSortedHighToLow.push(arr);
  }

  for (let i = 0; i < sortedVideoGamesLowToHigh.length; i += 4) {
    let arr = [];

    let first = sortedVideoGamesLowToHigh[i];
    let second = sortedVideoGamesLowToHigh[i + 1];

    if (second === undefined) {
      break;
    }

    let third = sortedVideoGamesLowToHigh[i + 2];
    let fourth = sortedVideoGamesLowToHigh[i + 3];

    arr.push(first);
    arr.push(second);
    arr.push(third);
    arr.push(fourth);

    videoGamesByFourSortedLowToHigh.push(arr);
  }

  for (let i = 0; i < videoGames.length; i += 4) {
    let arr = [];

    let first = videoGames[i];
    let second = videoGames[i + 1];

    // if (second === undefined) {
    //   break;
    // }

    let third = videoGames[i + 2];
    let fourth = videoGames[i + 3];

    arr.push(first);
    arr.push(second);
    arr.push(third);
    arr.push(fourth);

    videoGamesByFour.push(arr);
  }

  const [load, setLoad] = useState(false);
  const [bool, setBool] = useState(false);
  const [sortBy, setSortBy] = useState("Name");
  const [currentPage, setCurrentPage] = useState(0);

  const PER_PAGE = 3;

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  const offset = currentPage * PER_PAGE;

  const currentPageData = videoGamesByFour
    ?.slice(offset, offset + PER_PAGE)
    ?.map((products, i) => <ProductsRow products={products} key={i} />);

  const currentPageData2 = videoGamesByFourSortedHighToLow
    ?.slice(offset, offset + PER_PAGE)
    ?.map((products, i) => <ProductsRow products={products} key={i} />);

  const currentPageData3 = videoGamesByFourSortedLowToHigh
    ?.slice(offset, offset + PER_PAGE)
    ?.map((products, i) => <ProductsRow products={products} key={i} />);

  const pageCount = Math.ceil(videoGamesByFour?.length / PER_PAGE);

  const handleSortByName = () => {
    setSortBy("Name");
    setCurrentPage(0);
  };

  const handleSortByLowToHigh = () => {
    setSortBy("Price Low To High");
    setCurrentPage(0);
  };

  const handleSortByHighToLow = () => {
    setSortBy("Price High To Low");
    setCurrentPage(0);
  };

  useEffect(() => {
    (async () => {
      if (user) {
        await dispatch(setAllRecentlyViewed(user?.id));
      }

      await dispatch(setAllProducts());
      await dispatch(setAllReviews());

      setLoad(true);
    })();
  }, [user, user?.id, dispatch]);

  const [didMount, setDidMount] = useState(false);

  useEffect(() => {
    setDidMount(true);

    return () => setDidMount(false);
  }, []);

  if (!didMount) return null;

  if (!load) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={styles.loaderCotnainer}
      >
        <ReactLoading
          type={"spin"}
          color={"rgba(0,0,0,.75)"}
          height={"0px"}
          width={"57.5px"}
        />
      </motion.div>
    );
  }

  const handleCategorySelection = (category) => {
    if (category === "Nintendo Switch" && params.category === "videogames") {
      history.push(`/p/videogames/switch/${params.price}/${params.rating}`);
    }

    if (category === "PlayStation 4" && params.category === "videogames") {
      history.push(`/p/videogames/ps4/${params.price}/${params.rating}`);
    }

    if (category === "PlayStation 4" && params.category === "videogames") {
      history.push(`/p/videogames/ps4/${params.price}/${params.rating}`);
    }

    if (category === "PlayStation 5" && params.category === "videogames") {
      history.push(`/p/videogames/ps5/${params.price}/${params.rating}`);
    }

    if (category === "Xbox One" && params.category === "videogames") {
      history.push(`/p/videogames/xbox1/${params.price}/${params.rating}`);
    }

    if (category === "Xbox Series X" && params.category === "videogames") {
      history.push(`/p/videogames/xboxx/${params.price}/${params.rating}`);
    }

    if (category === "Nintendo Switch" && params.category === "consoles") {
      history.push(`/p/consoles/switch/${params.price}/${params.rating}`);
    }

    if (category === "PlayStation 4" && params.category === "consoles") {
      history.push(`/p/consoles/ps4/${params.price}/${params.rating}`);
    }

    if (category === "PlayStation 5" && params.category === "consoles") {
      history.push(`/p/consoles/ps5/${params.price}/${params.rating}`);
    }

    if (category === "PC Gaming" && params.category === "consoles") {
      history.push(`/p/consoles/pc/${params.price}/${params.rating}`);
    }

    if (category === "Virtual Reality" && params.category === "consoles") {
      history.push(`/p/consoles/vr/${params.price}/${params.rating}`);
    }

    if (category === "Xbox One" && params.category === "consoles") {
      history.push(`/p/consoles/xbox1/${params.price}/${params.rating}`);
    }

    if (category === "Controllers" && params.category === "accessories") {
      history.push(
        `/p/accessories/controllers/${params.price}/${params.rating}`
      );
    }

    if (category === "Memory" && params.category === "accessories") {
      history.push(`/p/accessories/memory/${params.price}/${params.rating}`);
    }

    if (category === "Memory" && params.category === "accessories") {
      history.push(`/p/accessories/memory/${params.price}/${params.rating}`);
    }

    if (category === "Mounts" && params.category === "accessories") {
      history.push(`/p/accessories/mounts/${params.price}/${params.rating}`);
    }

    if (category === "PC Gaming" && params.category === "accessories") {
      history.push(`/p/accessories/pc/${params.price}/${params.rating}`);
    }

    if (category === "Xbox One" && params.category === "accessories") {
      history.push(`/p/accessories/xbox1/${params.price}/${params.rating}`);
    }

    if (category === "Audio" && params.category === "electronics") {
      history.push(`/p/electronics/audio/${params.price}/${params.rating}`);
    }

    if (category === "Cameras" && params.category === "electronics") {
      history.push(`/p/electronics/cameras/${params.price}/${params.rating}`);
    }

    if (category === "Cell Phones" && params.category === "electronics") {
      history.push(`/p/electronics/phones/${params.price}/${params.rating}`);
    }

    if (category === "Drone" && params.category === "electronics") {
      history.push(`/p/electronics/drone/${params.price}/${params.rating}`);
    }

    if (
      category === "Smart Home Automation" &&
      params.category === "electronics"
    ) {
      history.push(`/p/electronics/home/${params.price}/${params.rating}`);
    }

    if (category === "TV & Home Theater" && params.category === "electronics") {
      history.push(`/p/electronics/theater/${params.price}/${params.rating}`);
    }

    if (category === "Arts & Crafts Toys" && params.category === "toysgames") {
      history.push(`/p/toysgames/art/${params.price}/${params.rating}`);
    }

    if (category === "Board Games" && params.category === "toysgames") {
      history.push(`/p/toysgames/boardgames/${params.price}/${params.rating}`);
    }

    if (
      category === "Building & Construction Sets" &&
      params.category === "toysgames"
    ) {
      history.push(
        `/p/toysgames/construction/${params.price}/${params.rating}`
      );
    }

    if (
      category === "Building & Construction Sets" &&
      params.category === "toysgames"
    ) {
      history.push(
        `/p/toysgames/construction/${params.price}/${params.rating}`
      );
    }

    if (category === "Dolls & Dollhouses" && params.category === "toysgames") {
      history.push(`/p/toysgames/dolls/${params.price}/${params.rating}`);
    }

    if (category === "NERF" && params.category === "toysgames") {
      history.push(`/p/toysgames/nerf/${params.price}/${params.rating}`);
    }

    if (category === "Play Vehicles" && params.category === "toysgames") {
      history.push(`/p/toysgames/vehicles/${params.price}/${params.rating}`);
    }

    if (category === "Puzzles" && params.category === "toysgames") {
      history.push(`/p/toysgames/puzzles/${params.price}/${params.rating}`);
    }

    if (category === "Scooters & Ride Ons" && params.category === "toysgames") {
      history.push(`/p/toysgames/scooters/${params.price}/${params.rating}`);
    }

    if (
      category === "Stuffed Animals & Plush" &&
      params.category === "toysgames"
    ) {
      history.push(`/p/toysgames/plush/${params.price}/${params.rating}`);
    }

    if (category === "Trading Cards" && params.category === "toysgames") {
      history.push(`/p/toysgames/cards/${params.price}/${params.rating}`);
    }

    if (
      category === "Accessories" &&
      params.category === "clothing"
    ) {
      history.push(
        `/p/clothing/accessories/${params.price}/${params.rating}`
      );
    }

    if (
      category === "Bags" &&
      params.category === "clothing"
    ) {
      history.push(
        `/p/clothing/bags/${params.price}/${params.rating}`
      );
    }

    if (
      category === "Footwear" &&
      params.category === "clothing"
    ) {
      history.push(
        `/p/clothing/footwear/${params.price}/${params.rating}`
      );
    }

    if (
      category === "Jackets & Outerwear" &&
      params.category === "clothing"
    ) {
      history.push(
        `/p/clothing/jackets/${params.price}/${params.rating}`
      );
    }

    if (
      category === "Pants & Shorts" &&
      params.category === "clothing"
    ) {
      history.push(
        `/p/clothing/pants/${params.price}/${params.rating}`
      );
    }

    if (
      category === "T-Shirts" &&
      params.category === "clothing"
    ) {
      history.push(
        `/p/clothing/shirts/${params.price}/${params.rating}`
      );
    }

    if (
      category === "Watches" &&
      params.category === "clothing"
    ) {
      history.push(
        `/p/clothing/watches/${params.price}/${params.rating}`
      );
    }

    return;
  };

  const handlePageCategory = () => {
    if (pageCategory === "Video Games") {
      history.push(`/p/videogames/0/${params.price}/${params.rating}`);
    }

    if (pageCategory === "Consoles & Hardware") {
      history.push(`/p/consoles/0/${params.price}/${params.rating}`);
    }

    if (pageCategory === "Gaming Accessories") {
      history.push(`/p/accessories/0/${params.price}/${params.rating}`);
    }

    if (pageCategory === "Electronics") {
      history.push(`/p/electronics/0/${params.price}/${params.rating}`);
    }

    if (pageCategory === "Toys & Games") {
      history.push(`/p/toysgames/0/${params.price}/${params.rating}`);
    }

    if (pageCategory === "Clothing") {
      history.push(`/p/clothing/0/${params.price}/${params.rating}`);
    }

    return;
  };

  let className1 = styles.categoryNames;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={styles.outerContainer}>
        {/* Left Side (sorting) */}
        <div className={styles.leftContainer}>
          <div className={styles.categoryName}>
            <span onClick={() => handlePageCategory()}>{pageCategory}</span>
          </div>

          <div className={styles.categorySelectorContainer}>
            <div className={styles.categorySpacer} />
            <div className={styles.categorySelectorTitle}>Category</div>

            <div className={styles.mappableCategoriesContainer}>
              {videoGameSubcategoriesArr?.map((category, i) => {
                const chooseClassName = () => {
                  if (
                    params.subcategory === "ps4" &&
                    category === "PlayStation 4"
                  ) {
                    className1 = styles.categoryNames2;
                  } else if (
                    params.subcategory === "switch" &&
                    category === "Nintendo Switch"
                  ) {
                    className1 = styles.categoryNames2;
                  } else if (
                    params.subcategory === "ps5" &&
                    category === "PlayStation 5"
                  ) {
                    className1 = styles.categoryNames2;
                  } else if (
                    params.subcategory === "xbox1" &&
                    category === "Xbox One"
                  ) {
                    className1 = styles.categoryNames2;
                  } else if (
                    params.subcategory === "xboxx" &&
                    category === "Xbox Series X"
                  ) {
                    className1 = styles.categoryNames2;
                  } else if (
                    params.subcategory === "pc" &&
                    category === "PC Gaming"
                  ) {
                    className1 = styles.categoryNames2;
                  } else if (
                    params.subcategory === "vr" &&
                    category === "Virtual Reality"
                  ) {
                    className1 = styles.categoryNames2;
                  } else if (
                    params.subcategory === "controllers" &&
                    category === "Controllers"
                  ) {
                    className1 = styles.categoryNames2;
                  } else if (
                    params.subcategory === "memory" &&
                    category === "Memory"
                  ) {
                    className1 = styles.categoryNames2;
                  } else if (
                    params.subcategory === "mounts" &&
                    category === "Mounts"
                  ) {
                    className1 = styles.categoryNames2;
                  } else if (
                    params.subcategory === "pc" &&
                    category === "PC Gaming"
                  ) {
                    className1 = styles.categoryNames2;
                  } else if (
                    params.subcategory === "xbox1" &&
                    category === "Xbox One"
                  ) {
                    className1 = styles.categoryNames2;
                  } else {
                    className1 = styles.categoryNames;
                  }

                  return;
                };

                chooseClassName();

                return (
                  <div className={className1} key={i}>
                    <span onClick={() => handleCategorySelection(category)}>
                      {category}
                    </span>
                  </div>
                );
              })}

              <div className={styles.categorySpacer} />
            </div>
          </div>

          <div className={styles.priceSelectorContainer}>
            <div className={styles.categorySpacer} />
            <div className={styles.priceSelectorTitle}>Price</div>

            <div className={styles.priceSelectionContainer}>
              <input
                onChange={() => {
                  return;
                }}
                checked={+params.price === 1 ? true : false}
                className={styles.fakeRadio}
                type="radio"
              />

              <div className={styles.priceSelection}>$0 - $10</div>
            </div>

            <div className={styles.priceSelectionContainer}>
              <input
                onChange={() => {
                  return;
                }}
                checked={+params.price === 2 ? true : false}
                className={styles.fakeRadio}
                type="radio"
              />

              <div className={styles.priceSelection}>$10 - $25</div>
            </div>

            <div className={styles.priceSelectionContainer}>
              <input
                onChange={() => {
                  return;
                }}
                checked={+params.price === 3 ? true : false}
                className={styles.fakeRadio}
                type="radio"
              />

              <div className={styles.priceSelection}>$50 - $75</div>
            </div>

            <div className={styles.priceSelectionContainer}>
              <input
                onChange={() => {
                  return;
                }}
                checked={+params.price === 4 ? true : false}
                className={styles.fakeRadio}
                type="radio"
              />

              <div className={styles.priceSelection}>$75 - $100</div>
            </div>

            <div className={styles.priceSelectionContainer}>
              <input
                onChange={() => {
                  return;
                }}
                checked={+params.price === 5 ? true : false}
                className={styles.fakeRadio}
                type="radio"
              />

              <div className={styles.priceSelection}>$100 - $200</div>
            </div>

            <div className={styles.priceSelectionContainer}>
              <input
                onChange={() => {
                  return;
                }}
                checked={+params.price === 6 ? true : false}
                className={styles.fakeRadio}
                type="radio"
              />

              <div className={styles.priceSelection}>$200 - $300</div>
            </div>

            <div className={styles.priceSelectionContainer}>
              <input
                onChange={() => {
                  return;
                }}
                checked={+params.price === 7 ? true : false}
                className={styles.fakeRadio}
                type="radio"
              />

              <div className={styles.priceSelection}>$300+</div>
            </div>

            <div className={styles.categorySpacer} />
          </div>

          <div className={styles.customerRatingSelectorContainer}>
            <div className={styles.customerRatingSelectorTopContainer}>
              <div className={styles.categorySpacer} />
              <div
                onClick={() => setBool(!bool)}
                className={styles.customerRatingSelectorTitle}
              >
                Customer Rating
              </div>

              {bool && (
                <div onClick={() => setBool(!bool)} className={styles.menuIcon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 12H4"
                    />
                  </svg>
                </div>
              )}

              {!bool && (
                <div onClick={() => setBool(!bool)} className={styles.menuIcon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </div>
              )}
            </div>

            {bool && (
              <div className={styles.ratingSelectionOuterContainer}>
                <div className={styles.starRatingSelectionContainer}>
                  <div className={styles.fourStarsSelectionContainer}>
                    <div className={styles.checkBoxContainer}>
                      <div className={styles.checkIconContainer}>
                        {+params.rating === 4 && (
                          <FaCheck
                            style={{
                              display: "inline",
                              color: "black",
                              width: "10px",
                              height: "10px",
                            }}
                          />
                        )}
                      </div>
                    </div>

                    <div className={styles.starsContainer}>
                      <div className={styles.stars}>
                        <StarPicker
                          starDimension="10px"
                          disabled={true}
                          value={4}
                          halfStars
                        />
                      </div>
                    </div>

                    <div className={styles.andUpContainer}>& Up</div>
                  </div>
                </div>

                <div className={styles.starRatingSelectionContainer}>
                  <div className={styles.fourStarsSelectionContainer}>
                    <div className={styles.checkBoxContainer}>
                      <div className={styles.checkIconContainer}>
                        {+params.rating === 3 && (
                          <FaCheck
                            style={{
                              display: "inline",
                              color: "black",
                              width: "10px",
                              height: "10px",
                            }}
                          />
                        )}
                      </div>
                    </div>

                    <div className={styles.starsContainer}>
                      <div className={styles.stars}>
                        <StarPicker
                          starDimension="10px"
                          disabled={true}
                          value={3}
                          halfStars
                        />
                      </div>
                    </div>

                    <div className={styles.andUpContainer}>& Up</div>
                  </div>
                </div>

                <div className={styles.starRatingSelectionContainer}>
                  <div className={styles.fourStarsSelectionContainer}>
                    <div className={styles.checkBoxContainer}>
                      <div className={styles.checkIconContainer}>
                        {+params.rating === 2 && (
                          <FaCheck
                            style={{
                              display: "inline",
                              color: "black",
                              width: "10px",
                              height: "10px",
                            }}
                          />
                        )}
                      </div>
                    </div>

                    <div className={styles.starsContainer}>
                      <div className={styles.stars}>
                        <StarPicker
                          starDimension="10px"
                          disabled={true}
                          value={2}
                          halfStars
                        />
                      </div>
                    </div>

                    <div className={styles.andUpContainer}>& Up</div>
                  </div>
                </div>

                <div className={styles.starRatingSelectionContainer}>
                  <div className={styles.fourStarsSelectionContainer}>
                    <div className={styles.checkBoxContainer}>
                      <div className={styles.checkIconContainer}>
                        {+params.rating === 1 && (
                          <FaCheck
                            style={{
                              display: "inline",
                              color: "black",
                              width: "10px",
                              height: "10px",
                            }}
                          />
                        )}
                      </div>
                    </div>

                    <div className={styles.starsContainer}>
                      <div className={styles.stars}>
                        <StarPicker
                          starDimension="10px"
                          disabled={true}
                          value={1}
                          halfStars
                        />
                      </div>
                    </div>

                    <div className={styles.andUpContainer}>& Up</div>
                  </div>
                </div>
              </div>
            )}

            {bool && <div className={styles.customerRatingSpacer} />}
          </div>
        </div>
        {/* End Left Side */}

        {/* Right Side (products) */}
        <div className={styles.rightContainer}>
          <div className={styles.rightTopContainer}>
            <div className={styles.rightSideTitle}>
              {currentPage === 0 ? 1 : currentPage * 12 + 1} -{" "}
              {videoGames.length > 11 &&
                (currentPage === 0 ? 12 : currentPage * 12 + 1 + 11)}{" "}
              {videoGames.length < 12 &&
                (currentPage === 0
                  ? videoGames.length
                  : currentPage * 12 + 1 + 11)}{" "}
              of {videoGames.length} Results for <span>"{pageCategory}"</span>
            </div>

            <div className={styles.topMiddleContainer}>
              <Menu
                arrow={true}
                align={"center"}
                className={styles.menu}
                menuButton={
                  <MenuButton className={styles.button}>
                    <span>Sort By:</span> {sortBy}
                    <div className={styles.downIcon}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </MenuButton>
                }
              >
                <MenuItem
                  onClick={() => handleSortByName()}
                  className={styles.menuItem}
                >
                  Name
                </MenuItem>
                <MenuItem
                  onClick={() => handleSortByLowToHigh()}
                  className={styles.menuItem}
                >
                  Price Low To High
                </MenuItem>
                <MenuItem
                  onClick={() => handleSortByHighToLow()}
                  className={styles.menuItem}
                >
                  Price High To Low
                </MenuItem>
              </Menu>
            </div>
          </div>

          {
            /* Start */
            sortBy === "Name" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className={styles.holder}>{currentPageData}</div>
                <ReactPaginate
                  previousLabel={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  }
                  nextLabel={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  }
                  marginPagesDisplayed={500}
                  pageCount={pageCount}
                  onPageChange={handlePageClick}
                  containerClassName={styles.pagination}
                  previousLinkClassName={styles.pagination__link}
                  nextLinkClassName={styles.next}
                  disabledClassName={styles.pagination__linkdisabled}
                  activeClassName={styles.pagination__linkactive}
                />
              </motion.div>
            )
            /* End */
          }

          {
            /* Start */
            sortBy === "Price High To Low" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className={styles.holder}>{currentPageData2}</div>
                <ReactPaginate
                  previousLabel={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  }
                  nextLabel={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  }
                  marginPagesDisplayed={500}
                  pageCount={pageCount}
                  onPageChange={handlePageClick}
                  containerClassName={styles.pagination}
                  previousLinkClassName={styles.pagination__link}
                  nextLinkClassName={styles.next}
                  disabledClassName={styles.pagination__linkdisabled}
                  activeClassName={styles.pagination__linkactive}
                />
              </motion.div>
            )
            /* End */
          }

          {
            /* Start */
            sortBy === "Price Low To High" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className={styles.holder}>{currentPageData3}</div>
                <ReactPaginate
                  previousLabel={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  }
                  nextLabel={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  }
                  marginPagesDisplayed={500}
                  pageCount={pageCount}
                  onPageChange={handlePageClick}
                  containerClassName={styles.pagination}
                  previousLinkClassName={styles.pagination__link}
                  nextLinkClassName={styles.next}
                  disabledClassName={styles.pagination__linkdisabled}
                  activeClassName={styles.pagination__linkactive}
                />
              </motion.div>
            )
            /* End */
          }
        </div>
        {/* End Right Side */}
      </div>

      {user && <RecentlyViewedCard />}

      <div className={styles.footerContainer}>
        <Footer />
      </div>
    </motion.div>
  );
}
