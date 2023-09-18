import React, { useContext, useState } from "react";
import HolidayContext from "../HolidayContext";
import styles from "./HolidaySingleProduct.module.css";
import HolidayFooter from "../HolidayFooter/HolidayFooter";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import Payment from "../../Components/Payment/Payment";
const HolidaySingleProduct = () => {
  const [current, setCurrent] = useState(0);
  const {
    singleProductData,
    destination,
    handleDestination,
    handleDeparture,
    departure,
    fetchDataId
  } = useContext(HolidayContext);

  console.log(singleProductData);

  const {
    image,
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    price,
    overview,
    about,
    title,
    place,
    id,
    rating,
    state,
    stay,
  } = singleProductData;

  const top_crousel_img = [
    "https://cdn.tourradar.com/s3/tour/1500x800/142637_9ec063c9.jpg",
    "https://cdn.tourradar.com/s3/tour/1500x800/142637_a1b540e4.jpg",
    "https://cdn.tourradar.com/s3/tour/1500x800/240404_63e479264dd85.jpg",
    "https://cdn.tourradar.com/s3/tour/1500x800/240404_63d8ea513adca.jpg",
    "https://cdn.tourradar.com/s3/tour/1500x800/240404_63d8ea513adc6.jpg",
  ];

  const top_crousel_img1 = [
    "https://cdn.tourradar.com/s3/tour/1500x800/142637_9ec063c9.jpg",
    "https://cdn.tourradar.com/s3/tour/1500x800/142637_a1b540e4.jpg",
    "https://cdn.tourradar.com/s3/tour/1500x800/240404_63e479264dd85.jpg",
    "https://cdn.tourradar.com/s3/tour/1500x800/240404_63d8ea513adca.jpg",
    "https://cdn.tourradar.com/s3/tour/1500x800/240404_63d8ea513adc6.jpg",
    "https://cdn.tourradar.com/s3/tour/1500x800/240404_63d8ea513adc8.jpg",
    "https://cdn.tourradar.com/s3/tour/1500x800/238807_63e5b6c3df8f1.jpg",
    "https://cdn.tourradar.com/s3/tour/1500x800/238807_63d74c5531ae3.jpg",
    "https://cdn.tourradar.com/s3/tour/1500x800/238807_63903d06b64b6.jpg",
    "https://cdn.tourradar.com/s3/tour/1500x800/238807_63903d06b64a2.jpg",
  ];

  const top_crousel_img2 = [
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1494575827/Pangong_Lake.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1527078579/Leh_ladakh_1527078576.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1527082217/Pangong_Tso_1527080934.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1494579614/Zanskar_River.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1518782352/centrally_heated_camps_1518782375.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1494577494/Bactrian_Camels.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1464244517/Ladakh_overview.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1517480886/AdvNation/ANN_TRP634/chadar-and-lingshed-village-trek_1474024109_dTQv7M.jpg",
  ];

  const top_crousel_img3 = [
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1518782352/centrally_heated_camps_1518782375.jpg",
    "https://cdn.tourradar.com/s3/tour/1500x800/142637_a1b540e4.jpg",
    "https://cdn.tourradar.com/s3/tour/1500x800/240404_63e479264dd85.jpg",
    "https://cdn.tourradar.com/s3/tour/1500x800/240404_63d8ea513adca.jpg",
    "https://cdn.tourradar.com/s3/tour/1500x800/240404_63d8ea513adc6.jpg",
    "https://cdn.tourradar.com/s3/tour/1500x800/240404_63d8ea513adc8.jpg",
    "https://cdn.tourradar.com/s3/tour/1500x800/238807_63e5b6c3df8f1.jpg",
    "https://cdn.tourradar.com/s3/tour/1500x800/238807_63d74c5531ae3.jpg",
    "https://cdn.tourradar.com/s3/tour/1500x800/238807_63903d06b64b6.jpg",
    "https://cdn.tourradar.com/s3/tour/1500x800/238807_63903d06b64a2.jpg",
  ];

  const top_crousel_img4 = [
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v9173985796/MarketPlaceHolidays/India/Jammu%20and%20Kashmir/Ladakh/chadar_trek_5__9dsqYO.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1527078579/Leh_ladakh_1527078576.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1527082217/Pangong_Tso_1527080934.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1494579614/Zanskar_River.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1518782352/centrally_heated_camps_1518782375.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1494577494/Bactrian_Camels.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1464244517/Ladakh_overview.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1517480886/AdvNation/ANN_TRP634/chadar-and-lingshed-village-trek_1474024109_dTQv7M.jpg",
  ];

  const top_crousel_img5 = [
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v8667573211/MarketPlaceHolidays/India/Jammu%20and%20Kashmir/Leh/Leh_Umling_La_Leh_Bike_Trip_3_MzPyso.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1527078579/Leh_ladakh_1527078576.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1527082217/Pangong_Tso_1527080934.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1494579614/Zanskar_River.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1518782352/centrally_heated_camps_1518782375.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1494577494/Bactrian_Camels.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1464244517/Ladakh_overview.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1517480886/AdvNation/ANN_TRP634/chadar-and-lingshed-village-trek_1474024109_dTQv7M.jpg",
  ];

  const top_crousel_img6 = [
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v4292556228/MarketPlaceHolidays/India/Jammu%20and%20Kashmir/Leh/Ladakh_Siachen_E_cycling_Expedition_3_USWItw.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1527078579/Leh_ladakh_1527078576.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1527082217/Pangong_Tso_1527080934.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1494579614/Zanskar_River.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1518782352/centrally_heated_camps_1518782375.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1494577494/Bactrian_Camels.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1464244517/Ladakh_overview.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1517480886/AdvNation/ANN_TRP634/chadar-and-lingshed-village-trek_1474024109_dTQv7M.jpg",
  ];

  const top_crousel_img7 = [
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v4413202028/MarketPlaceHolidays/India/Himachal%20Pradesh/Manali/Manali_To_Srinagar_bike_Tour_84rRwd.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1527078579/Leh_ladakh_1527078576.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1527082217/Pangong_Tso_1527080934.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1494579614/Zanskar_River.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1518782352/centrally_heated_camps_1518782375.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1494577494/Bactrian_Camels.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1464244517/Ladakh_overview.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1517480886/AdvNation/ANN_TRP634/chadar-and-lingshed-village-trek_1474024109_dTQv7M.jpg",
  ];

  const top_crousel_img8 = [
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1494583381/Tall_Shanti_Stupa.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1527078579/Leh_ladakh_1527078576.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1527082217/Pangong_Tso_1527080934.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1494579614/Zanskar_River.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1518782352/centrally_heated_camps_1518782375.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1494577494/Bactrian_Camels.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1464244517/Ladakh_overview.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1517480886/AdvNation/ANN_TRP634/chadar-and-lingshed-village-trek_1474024109_dTQv7M.jpg",
  ];

  const top_crousel_img9 = [
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1518782258/Final_Blog6_1518782279.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1527078579/Leh_ladakh_1527078576.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1527082217/Pangong_Tso_1527080934.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1494579614/Zanskar_River.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1518782352/centrally_heated_camps_1518782375.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1494577494/Bactrian_Camels.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1464244517/Ladakh_overview.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1517480886/AdvNation/ANN_TRP634/chadar-and-lingshed-village-trek_1474024109_dTQv7M.jpg",
  ];

  const top_crousel_img10 = [
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1540383713/Magnum/Maldives/Maldives1_GIvvk8.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1540383446/Magnum/Maldives/Maldives2_96rCxa.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1540383235/Magnum/Maldives/Maldives_hBSCbk.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1540383502/Magnum/Maldives/Maldives4_VAJ4Wk.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1540383420/Magnum/Maldives/Maldives3_YXT8MU.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1540383531/Magnum/Maldives/Maldives6_hS21p8.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1540383573/Magnum/Maldives/Maldives9_x8wUrK.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1540383555/Magnum/Maldives/Maldives7_NXJaie.jpg",
  ];

  const top_crousel_img11 = [
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v0939422193/MarketPlaceHolidays/Maldives/Filitheyo/Vadoo_1_GHjBXv.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v7804888779/MarketPlaceHolidays/Maldives/Filitheyo/Vadoo_2_2LnPmm.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1540383235/Magnum/Maldives/Maldives_hBSCbk.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1540383502/Magnum/Maldives/Maldives4_VAJ4Wk.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1540383420/Magnum/Maldives/Maldives3_YXT8MU.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1540383531/Magnum/Maldives/Maldives6_hS21p8.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1540383573/Magnum/Maldives/Maldives9_x8wUrK.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1540383555/Magnum/Maldives/Maldives7_NXJaie.jpg",
  ];

  const top_crousel_img12 = [
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1396422575/Destinations/Maldives/Maldives/shutterstock_58636843~0.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1448617430/Maldive333.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1481109900/Male_People.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1540383502/Magnum/Maldives/Maldives4_VAJ4Wk.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1540383420/Magnum/Maldives/Maldives3_YXT8MU.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1540383531/Magnum/Maldives/Maldives6_hS21p8.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1540383573/Magnum/Maldives/Maldives9_x8wUrK.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1540383555/Magnum/Maldives/Maldives7_NXJaie.jpg",
  ];

  const top_crousel_img13 = [
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v3550593403/MarketPlaceHolidays/Maldives/Filitheyo/WhatsApp_Image_2021_09_01_at_17_48_41_hT2kcg.jpeg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1540383446/Magnum/Maldives/Maldives2_96rCxa.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v0276982528/MarketPlaceHolidays/Maldives/Gan/snorkeling_0pggmS.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v9960398367/MarketPlaceHolidays/Maldives/Gan/Sheraton_Maldives_Full_Moon_Resort_Enthralling_Maldives_1__Vhdw7V.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1540383420/Magnum/Maldives/Maldives3_YXT8MU.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1540383531/Magnum/Maldives/Maldives6_hS21p8.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1540383573/Magnum/Maldives/Maldives9_x8wUrK.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1540383555/Magnum/Maldives/Maldives7_NXJaie.jpg",
  ];

  const top_crousel_img14 = [
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v5616868852/Holidays/Maldives/Filitheyo/Main_Image_qtru0m.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v2368625836/Holidays/Maldives/Filitheyo/IMG_8473_color_1_db2VC2.jpg ",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1856335944/MarketPlaceHolidays/Maldives/Filitheyo/OVERWATER_VILLA_DHIGGIRI_2_5zqvUp.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v9960398367/MarketPlaceHolidays/Maldives/Gan/Sheraton_Maldives_Full_Moon_Resort_Enthralling_Maldives_1__Vhdw7V.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v0923594058/MarketPlaceHolidays/Maldives/Gan/Sheraton_Maldives_Full_Moon_Resort_Enthralling_Maldives_2__2Qhnbo.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v3770316267/MarketPlaceHolidays/Maldives/Gan/Sheraton_Maldives_Full_Moon_Resort_Enthralling_Maldives_4__bRgyLH.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1540383573/Magnum/Maldives/Maldives9_x8wUrK.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1540383555/Magnum/Maldives/Maldives7_NXJaie.jpg",
  ];

  const top_crousel_img15 = [
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1035891885/Holidays/Maldives/Filitheyo/Sandies_Bathala_Maldives_761_9stfxr.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1559994279/Holidays/Maldives/Filitheyo/bathala_gallery_05_min_fnbZKS.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v2989107458/Holidays/Maldives/Filitheyo/bathala_gallery_21_min_dizLsm.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v4745008697/Holidays/Maldives/Filitheyo/resort8_min1_xxPnsa.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v0375919254/Holidays/Maldives/Filitheyo/Sandies_Bathala_Maldives_69_k5yKS7.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1540383531/Magnum/Maldives/Maldives6_hS21p8.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1540383573/Magnum/Maldives/Maldives9_x8wUrK.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1540383555/Magnum/Maldives/Maldives7_NXJaie.",
  ];

  const top_crousel_img16 = [
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1471934134/Port_Louis_Best_Time.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1435666232/Mauritius_321.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1471865079/Mauritius_Best_Time1.jpg ",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1471869191/Port_Louis_Overview.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1471865098/Mauritius_Map.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1499080945/Beautiful_beaches_of_sunny_Mauritius_island.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1540383573/Magnum/Maldives/Maldives9_x8wUrK.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1540383555/Magnum/Maldives/Maldives7_NXJaie.jpg",
  ];

  const top_crousel_img17 = [
    " https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1532696028/HolidayThemes/TROU_AUX_BICHES_BEACHCOMBER_GOLF_RESORT_AND_SPA6_3T4Sbx.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1532696011/HolidayThemes/TROU_AUX_BICHES_BEACHCOMBER_GOLF_RESORT_AND_SPA5_l6ALZ3.jpg ",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1532695995/HolidayThemes/TROU_AUX_BICHES_BEACHCOMBER_GOLF_RESORT_AND_SPA4_sxCOlE.jpg ",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1532695979/HolidayThemes/TROU_AUX_BICHES_BEACHCOMBER_GOLF_RESORT_AND_SPA3_ws3Wvd.jpg ",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1532695865/HolidayThemes/TROU_AUX_BICHES_BEACHCOMBER_GOLF_RESORT_AND_SPA_9DeySE.jpg ",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1499080945/Beautiful_beaches_of_sunny_Mauritius_island.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1540383573/Magnum/Maldives/Maldives9_x8wUrK.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1540383555/Magnum/Maldives/Maldives7_NXJaie.jpg",
    "https://cdn.tourradar.com/s3/tour/1500x800/238807_63903d06b64a2.jpg",
  ];

  const top_crousel_img18 = [
    " https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1483591270/Mauritius_Blue_Bay.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1455623245/luxx.jpg ",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1455865522/Spa-2.jpg ",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1435669494/Mauritius_3.jpg ",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1471865079/Mauritius_Best_Time1.jpg ",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1499080945/Beautiful_beaches_of_sunny_Mauritius_island.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1540383573/Magnum/Maldives/Maldives9_x8wUrK.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1540383555/Magnum/Maldives/Maldives7_NXJaie.jpg",
  ];

  const top_crousel_img19 = [
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1535105179/Magnum/Canonnier%20Beachcomber%20Golf%20Resort%20and%20Spa/Mauritius_fQlrKI.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1535103758/Magnum/Canonnier%20Beachcomber%20Golf%20Resort%20and%20Spa/Canonnier_Beachcomber_Golf_Resort_and_Spa7_sci8EB.jpg ",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1535103740/Magnum/Canonnier%20Beachcomber%20Golf%20Resort%20and%20Spa/Canonnier_Beachcomber_Golf_Resort_and_Spa6_uBpHoK.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1535103706/Magnum/Canonnier%20Beachcomber%20Golf%20Resort%20and%20Spa/Canonnier_Beachcomber_Golf_Resort_and_Spa4_siZQzE.jpg ",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1535103689/Magnum/Canonnier%20Beachcomber%20Golf%20Resort%20and%20Spa/Canonnier_Beachcomber_Golf_Resort_and_Spa3_JXI920.jpg ",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1499080945/Beautiful_beaches_of_sunny_Mauritius_island.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1540383573/Magnum/Maldives/Maldives9_x8wUrK.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1540383555/Magnum/Maldives/Maldives7_NXJaie.jpg",
  ];

  console.log(top_crousel_img);

  const len = top_crousel_img.length;
  console.log(top_crousel_img);
  console.log(len);
  const nextSlide = () => {
    setCurrent(current === len - 1 ? 0 : current + 1);
  };
  console.log(current);

  const prevSlide = () => {
    setCurrent(current === 0 ? len - 1 : current - 1);
  };

  console.log(singleProductData);
  return (
    <div className={styles.HolidaySingleProductComponent}>
      <div className={styles.input}>
        <form className={styles.form}>
          <input placeholder={departure} onChange={handleDeparture} />
          <input placeholder={destination} onChange={handleDestination} />
          <input type="date" />
          <button>Search</button>
        </form>
      </div>
      <div className={styles.flexDetails}>
        <div>
          <h1 style={{ fontSize: "30px" }}> {title} </h1>
          <p style={{ fontSize: "15px", color: "darkcyan", fontWeight: "600" }}>
            Seller : Voyawander.com{" "}
          </p>
          <button className={styles.stay}>{stay} Nights </button>
        </div>
        <div style={{ marginRight: "100px" }}>
          <h2 className={styles.price}>Starting From &#8377; {price}</h2>
          <button onClick={()=>fetchDataId(id)} className={styles.button}><Link to="/payment" element={<Payment/>} > Book Now </Link> </button>
          <button className={styles.querryBtn}>Submit Query</button>
        </div>
      </div>

      <div className={styles.flexCrousal}>
        <div>
          <div>
            {" "}
            {id === 1 &&
              top_crousel_img1.map((slideimg, index) => {
                return (
                  <div
                    className={index === current ? "slide active" : "slide"}
                    key={index}
                  >
                    {index === current && (
                      <img className={styles.crousalImg} src={slideimg} />
                    )}
                  </div>
                );
              })}
          </div>
          
          <div>
          {id === 2 &&
            top_crousel_img2.map((slideimg, index) => {
                return (
                  <div
                    className={index === current ? "slide active" : "slide"}
                    key={index}
                  >
                    {index === current && (
                      <img className={styles.crousalImg} src={slideimg} />
                    )}
                  </div>
                );
              })}
            <div />
            <div>
            {" "}
            {id === 3 &&
              top_crousel_img3.map((slideimg, index) => {
                return (
                  <div
                    className={index === current ? "slide active" : "slide"}
                    key={index}
                  >
                    {index === current && (
                      <img className={styles.crousalImg} src={slideimg} />
                    )}
                  </div>
                );
              })}
          </div>
          <div>
            {" "}
            {id === 4 &&
              top_crousel_img4.map((slideimg, index) => {
                return (
                  <div
                    className={index === current ? "slide active" : "slide"}
                    key={index}
                  >
                    {index === current && (
                      <img className={styles.crousalImg} src={slideimg} />
                    )}
                  </div>
                );
              })}
          </div>
          <div>
            {" "}
            {id === 5 &&
              top_crousel_img5.map((slideimg, index) => {
                return (
                  <div
                    className={index === current ? "slide active" : "slide"}
                    key={index}
                  >
                    {index === current && (
                      <img className={styles.crousalImg} src={slideimg} />
                    )}
                  </div>
                );
              })}
          </div>
          <div>
            {" "}
            {id === 6 &&
              top_crousel_img6.map((slideimg, index) => {
                return (
                  <div
                    className={index === current ? "slide active" : "slide"}
                    key={index}
                  >
                    {index === current && (
                      <img className={styles.crousalImg} src={slideimg} />
                    )}
                  </div>
                );
              })}
          </div>
          <div>
            {" "}
            {id === 7 &&
              top_crousel_img7.map((slideimg, index) => {
                return (
                  <div
                    className={index === current ? "slide active" : "slide"}
                    key={index}
                  >
                    {index === current && (
                      <img className={styles.crousalImg} src={slideimg} />
                    )}
                  </div>
                );
              })}
          </div>
          <div>
            {" "}
            {id === 8 &&
              top_crousel_img8.map((slideimg, index) => {
                return (
                  <div
                    className={index === current ? "slide active" : "slide"}
                    key={index}
                  >
                    {index === current && (
                      <img className={styles.crousalImg} src={slideimg} />
                    )}
                  </div>
                );
              })}
          </div>
          <div>
            {" "}
            {id === 9 &&
              top_crousel_img9.map((slideimg, index) => {
                return (
                  <div
                    className={index === current ? "slide active" : "slide"}
                    key={index}
                  >
                    {index === current && (
                      <img className={styles.crousalImg} src={slideimg} />
                    )}
                  </div>
                );
              })}
          </div>
          <div>
            {" "}
            {id === 10 &&
              top_crousel_img10.map((slideimg, index) => {
                return (
                  <div
                    className={index === current ? "slide active" : "slide"}
                    key={index}
                  >
                    {index === current && (
                      <img className={styles.crousalImg} src={slideimg} />
                    )}
                  </div>
                );
              })}
          </div>
          <div>
            {" "}
            {id === 11 &&
              top_crousel_img11.map((slideimg, index) => {
                return (
                  <div
                    className={index === current ? "slide active" : "slide"}
                    key={index}
                  >
                    {index === current && (
                      <img className={styles.crousalImg} src={slideimg} />
                    )}
                  </div>
                );
              })}
          </div>
          <div>
            {" "}
            {id === 12 &&
              top_crousel_img12.map((slideimg, index) => {
                return (
                  <div
                    className={index === current ? "slide active" : "slide"}
                    key={index}
                  >
                    {index === current && (
                      <img className={styles.crousalImg} src={slideimg} />
                    )}
                  </div>
                );
              })}
          </div>
          <div>
            {id === 13 &&
              top_crousel_img13.map((slideimg, index) => {
                return (
                  <div
                    className={index === current ? "slide active" : "slide"}
                    key={index}
                  >
                    {index === current && (
                      <img className={styles.crousalImg} src={slideimg} />
                    )}
                  </div>
                );
              })}
          </div>
          <div>
            {id === 14 &&
              top_crousel_img14.map((slideimg, index) => {
                return (
                  <div
                    className={index === current ? "slide active" : "slide"}
                    key={index}
                  >
                    {index === current && (
                      <img className={styles.crousalImg} src={slideimg} />
                    )}
                  </div>
                );
              })}
          </div>

          <div>
            {id === 15 &&
              top_crousel_img15.map((slideimg, index) => {
                return (
                  <div
                    className={index === current ? "slide active" : "slide"}
                    key={index}
                  >
                    {index === current && (
                      <img className={styles.crousalImg} src={slideimg} />
                    )}
                  </div>
                );
              })}
          </div>

          <div>
            {id === 16 &&
              top_crousel_img16.map((slideimg, index) => {
                return (
                  <div
                    className={index === current ? "slide active" : "slide"}
                    key={index}
                  >
                    {index === current && (
                      <img className={styles.crousalImg} src={slideimg} />
                    )}
                  </div>
                );
              })}
          </div>

          <div>
            {id === 17 &&
              top_crousel_img17.map((slideimg, index) => {
                return (
                  <div
                    className={index === current ? "slide active" : "slide"}
                    key={index}
                  >
                    {index === current && (
                      <img className={styles.crousalImg} src={slideimg} />
                    )}
                  </div>
                );
              })}
          </div>

          <div>
            {id === 18 &&
              top_crousel_img18.map((slideimg, index) => {
                return (
                  <div
                    className={index === current ? "slide active" : "slide"}
                    key={index}
                  >
                    {index === current && (
                      <img className={styles.crousalImg} src={slideimg} />
                    )}
                  </div>
                );
              })}
          </div>


            <div className="forback-btn">
              <button className="prev" onClick={prevSlide}>
                ◀️
              </button>
              <button className="next" onClick={nextSlide}>
                ▶️
              </button>
            </div>
          </div>
        </div>

        <div className={styles.detailsDesc}>
          <div>
            <h1>Customizable Tour</h1>
            <h4>
              Customizable Tour Customizable itineraries where you may choose
              transport, stay & sightseeing as per your taste & comfort
            </h4>
            <hr />
          </div>
          <div>
            <h1>Pay & Hold</h1>
            <h4>
              Pay <span style={{ color: "red" }}>&#8377; 1,000</span> per person
              now and hold the package at this price, payment as per policy can
              be made in the next 24/48 hrs. Holding of seats are subject to
              availability and in case of non availability of selected seats you
              can choose from a wide range of departures. To avail this option,
              click "Book Now".
            </h4>
            <hr />
          </div>

          <div>
            <h2>
              {" "}
              <span>EMI </span>From &#8377; 1966
            </h2>
            <hr />
          </div>

          <div>
            <h1>Stay Plan</h1>
            <p>
              {place} - {stay}{" "}
            </p>
            <p> Nubra - 1 Night </p>
            <p>Pangong - 1 Night </p>
            <p>Leh - 1 Night </p>
          </div>
        </div>
      </div>
      <hr />
      <h1>Overview</h1>

      <p style={{ fontSize: "medium", fontWeight: "300" }}>{overview} </p>

      <div className={styles.about}>
        <div>
          <img src="" width={200} />
        </div>

        <div>
          <hr />
          <h1>About {state}</h1>

          <div className={styles.flexAbout}>
            <div>
              <img style={{ marginTop: "-5px" }} src={image3} width={300} />{" "}
            </div>
            <div>
              <h3>{about} </h3>
            </div>
          </div>
        </div>
      </div>
      <HolidayFooter />
    </div>
  );
};

export default HolidaySingleProduct;
