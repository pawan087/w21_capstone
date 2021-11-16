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

import { SortPriceRating } from "./ProductSorting";
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
        return SortPriceRating(1, product);
      } else if (
        params.subcategory === "ps4" &&
        product.Subcategory.name === "PlayStation 4"
      ) {
        return SortPriceRating(1, product);
      } else if (
        params.subcategory === "ps5" &&
        product.Subcategory.name === "PlayStation 5"
      ) {
        return SortPriceRating(1, product);
      } else if (
        params.subcategory === "xbox1" &&
        product.Subcategory.name === "Xbox One"
      ) {
        return SortPriceRating(1, product);
      } else if (
        params.subcategory === "xboxx" &&
        product.Subcategory.name === "Xbox Series X"
      ) {
        return SortPriceRating(1, product);
      } else if (
        params.subcategory === "cod" &&
        product.name.includes("Duty")
      ) {
        return SortPriceRating(1, product);
      } else if (params.subcategory === "0") {
        return SortPriceRating(1, product);
      } else {
        return false;
      }
    }

    if (params.category === "toysgames") {
      if (product.Category.id === 2) {
        videoGameSubCategories.add(product.Subcategory.name);
      }

      pageCategory = "Toys & Games";

      if (
        params.subcategory === "art" &&
        product.Subcategory.name === "Arts & Crafts Toys"
      ) {
        return SortPriceRating(2, product);
      } else if (
        params.subcategory === "boardgames" &&
        product.Subcategory.name === "Board Games"
      ) {
        return SortPriceRating(2, product);
      } else if (
        params.subcategory === "construction" &&
        product.Subcategory.name === "Building & Construction Sets"
      ) {
        return SortPriceRating(2, product);
      } else if (
        params.subcategory === "dolls" &&
        product.Subcategory.name === "Dolls & Dollhouses"
      ) {
        return SortPriceRating(2, product);
      } else if (
        params.subcategory === "nerf" &&
        product.Subcategory.name === "NERF"
      ) {
        return SortPriceRating(2, product);
      } else if (
        params.subcategory === "vehicles" &&
        product.Subcategory.name === "Play Vehicles"
      ) {
        return SortPriceRating(2, product);
      } else if (
        params.subcategory === "puzzles" &&
        product.Subcategory.name === "Puzzles"
      ) {
        return SortPriceRating(2, product);
      } else if (
        params.subcategory === "scooters" &&
        product.Subcategory.name === "Scooters & Ride Ons"
      ) {
        return SortPriceRating(2, product);
      } else if (
        params.subcategory === "plush" &&
        product.Subcategory.name === "Stuffed Animals & Plush"
      ) {
        return SortPriceRating(2, product);
      } else if (
        params.subcategory === "cards" &&
        product.Subcategory.name === "Trading Cards"
      ) {
        return SortPriceRating(2, product);
      } else if (params.subcategory === "0") {
        return SortPriceRating(2, product);
      } else {
        return false;
      }
    }

    if (params.category === "electronics") {
      if (product.Category.id === 3) {
        videoGameSubCategories.add(product.Subcategory.name);
      }

      pageCategory = "Electronics";

      if (
        params.subcategory === "audio" &&
        product.Subcategory.name === "Audio"
      ) {
        return SortPriceRating(3, product);
      } else if (
        params.subcategory === "cameras" &&
        product.Subcategory.name === "Cameras"
      ) {
        return SortPriceRating(3, product);
      } else if (
        params.subcategory === "phones" &&
        product.Subcategory.name === "Cell Phones"
      ) {
        return SortPriceRating(3, product);
      } else if (
        params.subcategory === "drone" &&
        product.Subcategory.name === "Drone"
      ) {
        return SortPriceRating(3, product);
      } else if (
        params.subcategory === "home" &&
        product.Subcategory.name === "Smart Home Automation"
      ) {
        return SortPriceRating(3, product);
      } else if (
        params.subcategory === "theater" &&
        product.Subcategory.name === "TV & Home Theater"
      ) {
        return SortPriceRating(3, product);
      } else if (params.subcategory === "0") {
        return SortPriceRating(3, product);
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
        return SortPriceRating(4, product);
      } else if (
        params.subcategory === "ps4" &&
        product.Subcategory.name === "PlayStation 4"
      ) {
        return SortPriceRating(4, product);
      } else if (
        params.subcategory === "pc" &&
        product.Subcategory.name === "PC Gaming"
      ) {
        return SortPriceRating(4, product);
      } else if (
        params.subcategory === "vr" &&
        product.Subcategory.name === "Virtual Reality"
      ) {
        return SortPriceRating(4, product);
      } else if (
        params.subcategory === "xbox1" &&
        product.Subcategory.name === "Xbox One"
      ) {
        return SortPriceRating(4, product);
      } else if (params.subcategory === "0") {
        return SortPriceRating(4, product);
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
        return SortPriceRating(5, product);
      } else if (
        params.subcategory === "memory" &&
        product.Subcategory.name === "Memory"
      ) {
        return SortPriceRating(5, product);
      } else if (
        params.subcategory === "mounts" &&
        product.Subcategory.name === "Mounts"
      ) {
        return SortPriceRating(5, product);
      } else if (
        params.subcategory === "pc" &&
        product.Subcategory.name === "PC Gaming"
      ) {
        return SortPriceRating(5, product);
      } else if (
        params.subcategory === "xbox1" &&
        product.Subcategory.name === "Xbox One"
      ) {
        return SortPriceRating(5, product);
      } else if (params.subcategory === "0") {
        return SortPriceRating(5, product);
      } else {
        return false;
      }
    }

    if (params.category === "clothing") {
      if (product.Category.id === 6) {
        videoGameSubCategories.add(product.Subcategory.name);
      }

      pageCategory = "Clothing";

      if (
        params.subcategory === "accessories" &&
        product.Subcategory.name === "Accessories"
      ) {
        return SortPriceRating(6, product);
      } else if (
        params.subcategory === "bags" &&
        product.Subcategory.name === "Bags"
      ) {
        return SortPriceRating(6, product);
      } else if (
        params.subcategory === "footwear" &&
        product.Subcategory.name === "Footwear"
      ) {
        return SortPriceRating(6, product);
      } else if (
        params.subcategory === "jackets" &&
        product.Subcategory.name === "Jackets & Outerwear"
      ) {
        return SortPriceRating(6, product);
      } else if (
        params.subcategory === "pants" &&
        product.Subcategory.name === "Pants & Shorts"
      ) {
        return SortPriceRating(6, product);
      } else if (
        params.subcategory === "shirts" &&
        product.Subcategory.name === "T-Shirts"
      ) {
        return SortPriceRating(6, product);
      } else if (
        params.subcategory === "watches" &&
        product.Subcategory.name === "Watches"
      ) {
        return SortPriceRating(6, product);
      } else if (params.subcategory === "0") {
        return SortPriceRating(6, product);
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
  const [bool, setBool] = useState(params.rating !== "0");
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
      if (params.subcategory !== "switch") {
        history.push(`/p/videogames/switch/0/0`);
      } else {
        history.push("/p/videogames/0/0/0");
      }
    }

    if (category === "PlayStation 4" && params.category === "videogames") {
      if (params.subcategory === "ps4") {
        history.push("/p/videogames/0/0/0");
      } else {
        history.push("/p/videogames/ps4/0/0");
      }
    }

    if (category === "PlayStation 5" && params.category === "videogames") {
      // history.push(`/p/videogames/ps5/0/0`);
      if (params.subcategory === "ps5") {
        history.push("/p/videogames/0/0/0");
      } else {
        history.push("/p/videogames/ps5/0/0");
      }
    }

    if (category === "Xbox One" && params.category === "videogames") {
      // history.push(`/p/videogames/xbox1/0/0`);
      if (params.subcategory === "xbox1") {
        history.push("/p/videogames/0/0/0");
      } else {
        history.push("/p/videogames/xbox1/0/0");
      }
    }

    if (category === "Xbox Series X" && params.category === "videogames") {
      // history.push(`/p/videogames/xboxx/0/0`);
      if (params.subcategory === "xboxx") {
        history.push("/p/videogames/0/0/0");
      } else {
        history.push("/p/videogames/xboxx/0/0");
      }
    }

    if (category === "Nintendo Switch" && params.category === "consoles") {
      // history.push(`/p/consoles/switch/0/0`);
      if (params.subcategory === "switch") {
        history.push("/p/consoles/0/0/0");
      } else {
        history.push("/p/consoles/switch/0/0");
      }
    }

    if (category === "PlayStation 4" && params.category === "consoles") {
      // history.push(`/p/consoles/ps4/0/0`);
      if (params.subcategory === "ps4") {
        history.push("/p/consoles/0/0/0");
      } else {
        history.push("/p/consoles/ps4/0/0");
      }
    }

    if (category === "PlayStation 5" && params.category === "consoles") {
      // history.push(`/p/consoles/ps5/0/0`);
      if (params.subcategory === "ps5") {
        history.push("/p/consoles/0/0/0");
      } else {
        history.push("/p/consoles/ps5/0/0");
      }
    }

    if (category === "PC Gaming" && params.category === "consoles") {
      // history.push(`/p/consoles/pc/0/0`);
      if (params.subcategory === "pc") {
        history.push("/p/consoles/0/0/0");
      } else {
        history.push("/p/consoles/pc/0/0");
      }
    }

    if (category === "Virtual Reality" && params.category === "consoles") {
      // history.push(`/p/consoles/vr/0/0`);
      if (params.subcategory === "vr") {
        history.push("/p/consoles/0/0/0");
      } else {
        history.push("/p/consoles/vr/0/0");
      }
    }

    if (category === "Xbox One" && params.category === "consoles") {
      // history.push(`/p/consoles/xbox1/0/0`);
      if (params.subcategory === "xbox1") {
        history.push("/p/consoles/0/0/0");
      } else {
        history.push("/p/consoles/xbox1/0/0");
      }
    }

    if (category === "Controllers" && params.category === "accessories") {
      // history.push(`/p/accessories/controllers/0/0`);
      if (params.subcategory === "controllers") {
        history.push("/p/accessories/0/0/0");
      } else {
        history.push("/p/accessories/controllers/0/0");
      }
    }

    if (category === "Memory" && params.category === "accessories") {
      // history.push(`/p/accessories/memory/0/0`);
      if (params.subcategory === "memory") {
        history.push("/p/accessories/0/0/0");
      } else {
        history.push("/p/accessories/memory/0/0");
      }
    }

    if (category === "Mounts" && params.category === "accessories") {
      // history.push(`/p/accessories/mounts/0/0`);
      if (params.subcategory === "mounts") {
        history.push("/p/accessories/0/0/0");
      } else {
        history.push("/p/accessories/mounts/0/0");
      }
    }

    if (category === "PC Gaming" && params.category === "accessories") {
      // history.push(`/p/accessories/pc/0/0`);
      if (params.subcategory === "pc") {
        history.push("/p/accessories/0/0/0");
      } else {
        history.push("/p/accessories/pc/0/0");
      }
    }

    if (category === "Xbox One" && params.category === "accessories") {
      // history.push(`/p/accessories/xbox1/0/0`);
      if (params.subcategory === "xbox1") {
        history.push("/p/accessories/0/0/0");
      } else {
        history.push("/p/accessories/xbox1/0/0");
      }
    }

    if (category === "Audio" && params.category === "electronics") {
      // history.push(`/p/electronics/audio/0/0`);
      if (params.subcategory === "audio") {
        history.push("/p/electronics/0/0/0");
      } else {
        history.push("/p/electronics/audio/0/0");
      }
    }

    if (category === "Cameras" && params.category === "electronics") {
      // history.push(`/p/electronics/cameras/0/0`);
      if (params.subcategory === "cameras") {
        history.push("/p/electronics/0/0/0");
      } else {
        history.push("/p/electronics/cameras/0/0");
      }
    }

    if (category === "Cell Phones" && params.category === "electronics") {
      // history.push(`/p/electronics/phones/0/0`);
      if (params.subcategory === "phones") {
        history.push("/p/electronics/0/0/0");
      } else {
        history.push("/p/electronics/phones/0/0");
      }
    }

    if (category === "Drone" && params.category === "electronics") {
      // history.push(`/p/electronics/drone/0/0`);
      if (params.subcategory === "drone") {
        history.push("/p/electronics/0/0/0");
      } else {
        history.push("/p/electronics/drone/0/0");
      }
    }

    if (
      category === "Smart Home Automation" &&
      params.category === "electronics"
    ) {
      // history.push(`/p/electronics/home/0/0`);
      if (params.subcategory === "home") {
        history.push("/p/electronics/0/0/0");
      } else {
        history.push("/p/electronics/home/0/0");
      }
    }

    if (category === "TV & Home Theater" && params.category === "electronics") {
      // history.push(`/p/electronics/theater/0/0`);
      if (params.subcategory === "theater") {
        history.push("/p/electronics/0/0/0");
      } else {
        history.push("/p/electronics/theater/0/0");
      }
    }

    if (category === "Arts & Crafts Toys" && params.category === "toysgames") {
      // history.push(`/p/toysgames/art/0/0`);
      if (params.subcategory === "art") {
        history.push("/p/toysgames/0/0/0");
      } else {
        history.push("/p/toysgames/art/0/0");
      }
    }

    if (category === "Board Games" && params.category === "toysgames") {
      // history.push(`/p/toysgames/boardgames/0/0`);
      if (params.subcategory === "boardgames") {
        history.push("/p/toysgames/0/0/0");
      } else {
        history.push("/p/toysgames/boardgames/0/0");
      }
    }

    if (
      category === "Building & Construction Sets" &&
      params.category === "toysgames"
    ) {
      // history.push(`/p/toysgames/construction/0/0`);
      if (params.subcategory === "construciton") {
        history.push("/p/toysgames/0/0/0");
      } else {
        history.push("/p/toysgames/construciton/0/0");
      }
    }

    if (category === "Dolls & Dollhouses" && params.category === "toysgames") {
      // history.push(`/p/toysgames/dolls/0/0`);
      if (params.subcategory === "dolls") {
        history.push("/p/toysgames/0/0/0");
      } else {
        history.push("/p/toysgames/dolls/0/0");
      }
    }

    if (category === "NERF" && params.category === "toysgames") {
      // history.push(`/p/toysgames/nerf/0/0`);
      if (params.subcategory === "nerf") {
        history.push("/p/toysgames/0/0/0");
      } else {
        history.push("/p/toysgames/nerf/0/0");
      }
    }

    if (category === "Play Vehicles" && params.category === "toysgames") {
      // history.push(`/p/toysgames/vehicles/0/0`);
      if (params.subcategory === "vehicles") {
        history.push("/p/toysgames/0/0/0");
      } else {
        history.push("/p/toysgames/vehicles/0/0");
      }
    }

    if (category === "Puzzles" && params.category === "toysgames") {
      // history.push(`/p/toysgames/puzzles/0/0`);
      if (params.subcategory === "puzzles") {
        history.push("/p/toysgames/0/0/0");
      } else {
        history.push("/p/toysgames/puzzles/0/0");
      }
    }

    if (category === "Scooters & Ride Ons" && params.category === "toysgames") {
      // history.push(`/p/toysgames/scooters/0/0`);
      if (params.subcategory === "scooters") {
        history.push("/p/toysgames/0/0/0");
      } else {
        history.push("/p/toysgames/scooters/0/0");
      }
    }

    if (
      category === "Stuffed Animals & Plush" &&
      params.category === "toysgames"
    ) {
      // history.push(`/p/toysgames/plush/0/0`);
      if (params.subcategory === "plush") {
        history.push("/p/toysgames/0/0/0");
      } else {
        history.push("/p/toysgames/plush/0/0");
      }
    }

    if (category === "Trading Cards" && params.category === "toysgames") {
      // history.push(`/p/toysgames/cards/0/0`);
      if (params.subcategory === "cards") {
        history.push("/p/toysgames/0/0/0");
      } else {
        history.push("/p/toysgames/cards/0/0");
      }
    }

    if (category === "Accessories" && params.category === "clothing") {
      // history.push(`/p/clothing/accessories/0/0`);
      if (params.subcategory === "accessories") {
        history.push("/p/clothing/0/0/0");
      } else {
        history.push("/p/clothing/accessories/0/0");
      }
    }

    if (category === "Bags" && params.category === "clothing") {
      // history.push(`/p/clothing/bags/0/0`);
      if (params.subcategory === "bags") {
        history.push("/p/clothing/0/0/0");
      } else {
        history.push("/p/clothing/bags/0/0");
      }
    }

    if (category === "Footwear" && params.category === "clothing") {
      // history.push(`/p/clothing/footwear/0/0`);
      if (params.subcategory === "footwear") {
        history.push("/p/clothing/0/0/0");
      } else {
        history.push("/p/clothing/footwear/0/0");
      }
    }

    if (category === "Jackets & Outerwear" && params.category === "clothing") {
      // history.push(`/p/clothing/jackets/0/0`);
      if (params.subcategory === "jackets") {
        history.push("/p/clothing/0/0/0");
      } else {
        history.push("/p/clothing/jackets/0/0");
      }
    }

    if (category === "Pants & Shorts" && params.category === "clothing") {
      // history.push(`/p/clothing/pants/0/0`);
      if (params.subcategory === "pants") {
        history.push("/p/clothing/0/0/0");
      } else {
        history.push("/p/clothing/pants/0/0");
      }
    }

    if (category === "T-Shirts" && params.category === "clothing") {
      // history.push(`/p/clothing/shirts/0/0`);
      if (params.subcategory === "shirts") {
        history.push("/p/clothing/0/0/0");
      } else {
        history.push("/p/clothing/shirts/0/0");
      }
    }

    if (category === "Watches" && params.category === "clothing") {
      // history.push(`/p/clothing/watches/0/0`);
      if (params.subcategory === "watches") {
        history.push("/p/clothing/0/0/0");
      } else {
        history.push("/p/clothing/watches/0/0");
      }
    }

    return;
  };

  const handlePageCategory = () => {
    if (pageCategory === "Video Games") {
      history.push(`/p/videogames/0/0/0`);
    }

    if (pageCategory === "Consoles & Hardware") {
      history.push(`/p/consoles/0/0/0`);
    }

    if (pageCategory === "Gaming Accessories") {
      history.push(`/p/accessories/0/0/0`);
    }

    if (pageCategory === "Electronics") {
      history.push(`/p/electronics/0/0/0`);
    }

    if (pageCategory === "Toys & Games") {
      history.push(`/p/toysgames/0/0/0`);
    }

    if (pageCategory === "Clothing") {
      history.push(`/p/clothing/0/0/0`);
    }

    return;
  };

  let className1 = styles.categoryNames;

  let sendParams1 = () => {
    if (params.price === "1") {
      history.push(
        `/p/${params.category}/${params.subcategory}/0/${params.rating}`
      );
    }

    if (params.price === "0") {
      history.push(
        `/p/${params.category}/${params.subcategory}/1/${params.rating}`
      );
    }

    if (
      params.price === "2" ||
      params.price === "3" ||
      params.price === "4" ||
      params.price === "5" ||
      params.price === "6" ||
      params.price === "7"
    ) {
      history.push(
        `/p/${params.category}/${params.subcategory}/1/${params.rating}`
      );
    }
  };

  let sendParams2 = () => {
    if (params.price === "2") {
      history.push(
        `/p/${params.category}/${params.subcategory}/0/${params.rating}`
      );

      return;
    }

    if (params.price === "0") {
      history.push(
        `/p/${params.category}/${params.subcategory}/2/${params.rating}`
      );

      return;
    }

    if (
      params.price === "1" ||
      params.price === "3" ||
      params.price === "4" ||
      params.price === "5" ||
      params.price === "6" ||
      params.price === "7"
    ) {
      history.push(
        `/p/${params.category}/${params.subcategory}/2/${params.rating}`
      );
    }
  };

  let sendParams3 = () => {
    if (params.price === "3") {
      history.push(
        `/p/${params.category}/${params.subcategory}/0/${params.rating}`
      );

      return;
    }

    if (params.price === "0") {
      history.push(
        `/p/${params.category}/${params.subcategory}/3/${params.rating}`
      );

      return;
    }

    if (
      params.price === "1" ||
      params.price === "2" ||
      params.price === "4" ||
      params.price === "5" ||
      params.price === "6" ||
      params.price === "7"
    ) {
      history.push(
        `/p/${params.category}/${params.subcategory}/3/${params.rating}`
      );
    }
  };

  let sendParams4 = () => {
    if (params.price === "4") {
      history.push(
        `/p/${params.category}/${params.subcategory}/0/${params.rating}`
      );
    }

    if (params.price === "0") {
      history.push(
        `/p/${params.category}/${params.subcategory}/4/${params.rating}`
      );
    }

    if (
      params.price === "1" ||
      params.price === "2" ||
      params.price === "3" ||
      params.price === "5" ||
      params.price === "6" ||
      params.price === "7"
    ) {
      history.push(
        `/p/${params.category}/${params.subcategory}/4/${params.rating}`
      );
    }
  };

  let sendParams5 = () => {
    if (params.price === "5") {
      history.push(
        `/p/${params.category}/${params.subcategory}/0/${params.rating}`
      );
    }

    if (params.price === "0") {
      history.push(
        `/p/${params.category}/${params.subcategory}/5/${params.rating}`
      );
    }

    if (
      params.price === "1" ||
      params.price === "2" ||
      params.price === "3" ||
      params.price === "4" ||
      params.price === "6" ||
      params.price === "7"
    ) {
      history.push(
        `/p/${params.category}/${params.subcategory}/5/${params.rating}`
      );
    }
  };

  let sendParams6 = () => {
    if (params.price === "6") {
      history.push(
        `/p/${params.category}/${params.subcategory}/0/${params.rating}`
      );
    }

    if (params.price === "0") {
      history.push(
        `/p/${params.category}/${params.subcategory}/6/${params.rating}`
      );
    }

    if (
      params.price === "1" ||
      params.price === "2" ||
      params.price === "3" ||
      params.price === "4" ||
      params.price === "5" ||
      params.price === "7"
    ) {
      history.push(
        `/p/${params.category}/${params.subcategory}/6/${params.rating}`
      );
    }
  };

  let sendParams7 = () => {
    if (params.price === "7") {
      history.push(
        `/p/${params.category}/${params.subcategory}/0/${params.rating}`
      );
    }

    if (params.price === "0") {
      history.push(
        `/p/${params.category}/${params.subcategory}/7/${params.rating}`
      );
    }

    if (
      params.price === "1" ||
      params.price === "2" ||
      params.price === "3" ||
      params.price === "4" ||
      params.price === "5" ||
      params.price === "6"
    ) {
      history.push(
        `/p/${params.category}/${params.subcategory}/7/${params.rating}`
      );
    }
  };

  let sendParams11 = () => {
    if (params.rating === "4") {
      history.push(
        `/p/${params.category}/${params.subcategory}/${params.price}/0`
      );
    }

    if (params.rating === "0") {
      history.push(
        `/p/${params.category}/${params.subcategory}/${params.price}/4`
      );
    }

    if (
      params.rating === "1" ||
      params.rating === "2" ||
      params.rating === "3"
    ) {
      history.push(
        `/p/${params.category}/${params.subcategory}/${params.price}/4`
      );
    }
  };

  let sendParams12 = () => {
    if (params.rating === "3") {
      history.push(
        `/p/${params.category}/${params.subcategory}/${params.price}/0`
      );
    }

    if (params.rating === "0") {
      history.push(
        `/p/${params.category}/${params.subcategory}/${params.price}/3`
      );
    }

    if (
      params.rating === "1" ||
      params.rating === "2" ||
      params.rating === "4"
    ) {
      history.push(
        `/p/${params.category}/${params.subcategory}/${params.price}/3`
      );
    }
  };

  let sendParams13 = () => {
    if (params.rating === "2") {
      history.push(
        `/p/${params.category}/${params.subcategory}/${params.price}/0`
      );
    }

    if (params.rating === "0") {
      history.push(
        `/p/${params.category}/${params.subcategory}/${params.price}/2`
      );
    }

    if (
      params.rating === "1" ||
      params.rating === "3" ||
      params.rating === "4"
    ) {
      history.push(
        `/p/${params.category}/${params.subcategory}/${params.price}/2`
      );
    }
  };

  let sendParams14 = () => {
    if (params.rating === "1") {
      history.push(
        `/p/${params.category}/${params.subcategory}/${params.price}/0`
      );
    }

    if (params.rating === "0") {
      history.push(
        `/p/${params.category}/${params.subcategory}/${params.price}/1`
      );
    }

    if (
      params.rating === "2" ||
      params.rating === "3" ||
      params.rating === "4"
    ) {
      history.push(
        `/p/${params.category}/${params.subcategory}/${params.price}/1`
      );
    }
  };

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
                  } else if (
                    params.subcategory === "audio" &&
                    category === "Audio"
                  ) {
                    className1 = styles.categoryNames2;
                  } else if (
                    params.subcategory === "cameras" &&
                    category === "Cameras"
                  ) {
                    className1 = styles.categoryNames2;
                  } else if (
                    params.subcategory === "phones" &&
                    category === "Cell Phones"
                  ) {
                    className1 = styles.categoryNames2;
                  } else if (
                    params.subcategory === "drone" &&
                    category === "Drone"
                  ) {
                    className1 = styles.categoryNames2;
                  } else if (
                    params.subcategory === "home" &&
                    category === "Smart Home Automation"
                  ) {
                    className1 = styles.categoryNames2;
                  } else if (
                    params.subcategory === "theater" &&
                    category === "TV & Home Theater"
                  ) {
                    className1 = styles.categoryNames2;
                  } else if (
                    params.subcategory === "art" &&
                    category === "Arts & Crafts Toys"
                  ) {
                    className1 = styles.categoryNames2;
                  } else if (
                    params.subcategory === "boardgames" &&
                    category === "Board Games"
                  ) {
                    className1 = styles.categoryNames2;
                  } else if (
                    params.subcategory === "construction" &&
                    category === "Building & Construction Sets"
                  ) {
                    className1 = styles.categoryNames2;
                  } else if (
                    params.subcategory === "dolls" &&
                    category === "Dolls & Dollhouses"
                  ) {
                    className1 = styles.categoryNames2;
                  } else if (
                    params.subcategory === "nerf" &&
                    category === "NERF"
                  ) {
                    className1 = styles.categoryNames2;
                  } else if (
                    params.subcategory === "vehicles" &&
                    category === "Play Vehicles"
                  ) {
                    className1 = styles.categoryNames2;
                  } else if (
                    params.subcategory === "puzzles" &&
                    category === "Puzzles"
                  ) {
                    className1 = styles.categoryNames2;
                  } else if (
                    params.subcategory === "scooters" &&
                    category === "Scooters & Ride Ons"
                  ) {
                    className1 = styles.categoryNames2;
                  } else if (
                    params.subcategory === "plush" &&
                    category === "Stuffed Animals & Plush"
                  ) {
                    className1 = styles.categoryNames2;
                  } else if (
                    params.subcategory === "cards" &&
                    category === "Trading Cards"
                  ) {
                    className1 = styles.categoryNames2;
                  } else if (
                    params.subcategory === "accessories" &&
                    category === "Accessories"
                  ) {
                    className1 = styles.categoryNames2;
                  } else if (
                    params.subcategory === "bags" &&
                    category === "Bags"
                  ) {
                    className1 = styles.categoryNames2;
                  } else if (
                    params.subcategory === "footwear" &&
                    category === "Footwear"
                  ) {
                    className1 = styles.categoryNames2;
                  } else if (
                    params.subcategory === "jackets" &&
                    category === "Jackets & Outerwear"
                  ) {
                    className1 = styles.categoryNames2;
                  } else if (
                    params.subcategory === "pants" &&
                    category === "Pants & Shorts"
                  ) {
                    className1 = styles.categoryNames2;
                  } else if (
                    params.subcategory === "shirts" &&
                    category === "T-Shirts"
                  ) {
                    className1 = styles.categoryNames2;
                  } else if (
                    params.subcategory === "watches" &&
                    category === "Watches"
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
                onClick={() => sendParams1()}
              />
              <div
                onClick={() => sendParams1()}
                className={
                  params.price === "1"
                    ? styles.priceSelection2
                    : styles.priceSelection
                }
              >
                $0 - $10
              </div>
            </div>

            <div className={styles.priceSelectionContainer}>
              <input
                onChange={() => {
                  return;
                }}
                checked={+params.price === 2 ? true : false}
                className={styles.fakeRadio}
                type="radio"
                onClick={() => sendParams2()}
              />

              <div
                onClick={() => sendParams2()}
                className={
                  params.price === "2"
                    ? styles.priceSelection2
                    : styles.priceSelection
                }
              >
                $10 - $25
              </div>
            </div>

            <div className={styles.priceSelectionContainer}>
              <input
                onChange={() => {
                  return;
                }}
                checked={+params.price === 3 ? true : false}
                className={styles.fakeRadio}
                type="radio"
                onClick={() => sendParams3()}
              />

              <div
                onClick={() => sendParams3()}
                className={
                  params.price === "3"
                    ? styles.priceSelection2
                    : styles.priceSelection
                }
              >
                $50 - $75
              </div>
            </div>

            <div className={styles.priceSelectionContainer}>
              <input
                onChange={() => {
                  return;
                }}
                onClick={() => sendParams4()}
                checked={+params.price === 4 ? true : false}
                className={styles.fakeRadio}
                type="radio"
              />

              <div
                className={
                  params.price === "4"
                    ? styles.priceSelection2
                    : styles.priceSelection
                }
                onClick={() => sendParams4()}
              >
                $75 - $100
              </div>
            </div>

            <div className={styles.priceSelectionContainer}>
              <input
                onChange={() => {
                  return;
                }}
                onClick={() => sendParams5()}
                checked={+params.price === 5 ? true : false}
                className={styles.fakeRadio}
                type="radio"
              />

              <div
                className={
                  params.price === "5"
                    ? styles.priceSelection2
                    : styles.priceSelection
                }
                onClick={() => sendParams5()}
              >
                $100 - $200
              </div>
            </div>

            <div className={styles.priceSelectionContainer}>
              <input
                onChange={() => {
                  return;
                }}
                onClick={() => sendParams6()}
                checked={+params.price === 6 ? true : false}
                className={styles.fakeRadio}
                type="radio"
              />

              <div
                onClick={() => sendParams6()}
                className={
                  params.price === "6"
                    ? styles.priceSelection2
                    : styles.priceSelection
                }
              >
                $200 - $300
              </div>
            </div>

            <div className={styles.priceSelectionContainer}>
              <input
                onChange={() => {
                  return;
                }}
                checked={+params.price === 7 ? true : false}
                className={styles.fakeRadio}
                type="radio"
                onClick={() => sendParams7()}
              />

              <div
                onClick={() => sendParams7()}
                className={
                  params.price === "7"
                    ? styles.priceSelection2
                    : styles.priceSelection
                }
              >
                $300+
              </div>
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

                    <div
                      className={styles.starsContainer}
                      onClick={() => sendParams11()}
                    >
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

                    <div
                      onClick={() => sendParams12()}
                      className={styles.starsContainer}
                    >
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

                    <div
                      className={styles.starsContainer}
                      onClick={() => sendParams13()}
                    >
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

                    <div
                      className={styles.starsContainer}
                      onClick={() => sendParams14()}
                    >
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
          {videoGames.length > 0 && (
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
          )}

          {videoGames.length === 0 && (
            <div className={styles.rightTopContainer}>
              <div className={styles.rightSideTitle}>
                {videoGames.length} Results for <span>"{pageCategory}"</span>
              </div>
            </div>
          )}

          {
            /* Start */
            sortBy === "Name" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className={styles.holder}>{currentPageData}</div>

                {currentPageData.length === 3 && (
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
                )}
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
                {currentPageData2.length === 3 && (
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
                )}
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
                {currentPageData3.length === 3 && (
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
                )}
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
