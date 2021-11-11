import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion/dist/framer-motion";
import ReactLoading from "react-loading";


import { setAllRecentlyViewed } from "../../store/recentlyViewed";
import { setAllProducts } from "../../store/products.js";
import { setAllReviews } from "../../store/reviews.js";
import CODBanner from "./CODBanner";
import SubBanner from "./Subbanner";
import TopSellers from "./TopSellers";
import PromotionalCard1 from "./PromotionalCard1";
import TopBrands from "./TopBrands";
import FornitePromo from "./FornitePromo";
import CellPhonePromo from "./CellPhonePromo";
import CODApparelPromo from "./CODApparelPromo";
import Footer from "../Footer/index";
import UpcomingVideoGamePromo from "./UpcomingVideoGamePromo";
import PreOrderVideoGames from "./PreOrderVideoGames";
import ClothingPromo from "./ClothingPromo";
import FakeTopDeals from "./FakeTopDeals";
import ConsolesCard from "./ConsolesCard";
import FeaturedCategories from "./FeaturedCategories";
import RecentlyViewedCard from "../Product/RecentlyViewedCard";
import styles from "./styles.module.css";

export default function SplashPage() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.session.user);

  const [load, setLoad] = useState(false);

  useEffect(() => {
    (async () => {
      await dispatch(setAllRecentlyViewed(user?.id));
      await dispatch(setAllProducts());
      await dispatch(setAllReviews());

      setLoad(true);
    })();
  }, [user?.id, dispatch]);

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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={styles.splashPageOuterContainer}
    >
      <CODBanner />
      <SubBanner />d 
      <TopSellers />
      <PromotionalCard1 />
      <TopBrands />
      <FornitePromo />
      <CellPhonePromo />
      <CODApparelPromo />
      <UpcomingVideoGamePromo />
      <PreOrderVideoGames />
      <ClothingPromo />
      <FakeTopDeals />
      <ConsolesCard />
      <FeaturedCategories />

      {user && <RecentlyViewedCard />}

      <Footer />
    </motion.div>
  );
}
