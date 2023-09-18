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
    fetchDataId,
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
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1535103689/Magnum/Canonnier%20Beachcomber%20Golf%20Resort%20and%20Spa/Canonnier_Beachcomber_Golf_Resort_and_Spa3_JXI920.jpg ",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1499080945/Beautiful_beaches_of_sunny_Mauritius_island.jpg",
    "https://cdn.tourradar.com/s3/tour/1500x800/142637_9ec063c9.jpg",
    "https://cdn.tourradar.com/s3/tour/1500x800/142637_a1b540e4.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1576230339/Magnum/123/Abu_Dhabi_Warner_Bros_(2)_wKzRcz_YsI8tH.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1576333092/Magnum/333/SKI_DUbai_696bnQ.jpg ",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v0796921721/MarketPlaceHolidays/United%20Arab%20Emirates/4_JXCKg2.jpg",
    "https://cdn.tourradar.com/s3/tour/1500x800/240404_63e479264dd85.jpg",
    "https://cdn.tourradar.com/s3/tour/1500x800/240404_63d8ea513adca.jpg",
    "https://cdn.tourradar.com/s3/tour/1500x800/240404_63d8ea513adc6.jpg",
    " https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1452674538/Kerala_333.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1433835856/Alleppey_6.jpg",
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
  const top_crousel_img20 = [
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v3911977756/HolidaysQuickview/mrumd_aerial_8157_hor_clsc_HYeG8G.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v4115246876/HolidaysQuickview/mrumd_area_7630_hor_clsc_VqNe5v.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v4006325831/HolidaysQuickview/mrumd_beachfront_guestroom_2417_hor_clsc_aHTTp6.jpg ",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v2381885325/HolidaysQuickview/mrumd_view_9562_hor_clsc_27OnJk.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v7490311959/HolidaysQuickview/Pool_1pWvGJ.jpg ",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v6355132490/HolidaysQuickview/R_rK4lQl.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1540383573/Magnum/Maldives/Maldives9_x8wUrK.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v2307011819/HolidaysQuickview/Sunset_G9MMBd.jpg",
  ];

  const top_crousel_img21 = [
    " https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1540381841/Magnum/Mauritius/Mauritius2_X3Df4t.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1540452136/Magnum/Mauritius/Mauritius_Dest1_LgK5pu.jpg ",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1540452163/Magnum/Mauritius/Mauritius_Dest2_MhoMtF.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1540452181/Magnum/Mauritius/Mauritius_Dest6_zuCL9K.jpg ",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1540382038/Magnum/Mauritius/Mauritius11_monqhb.jpg ",
    " https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1540381919/Magnum/Mauritius/Mauritius5_tsFolb.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1540383573/Magnum/Maldives/Maldives9_x8wUrK.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v2307011819/HolidaysQuickview/Sunset_G9MMBd.jpg",
  ];

  const top_crousel_img22 = [
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1540382020/Magnum/Mauritius/Mauritius10_38rE3x.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v4115246876/HolidaysQuickview/mrumd_area_7630_hor_clsc_VqNe5v.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v4006325831/HolidaysQuickview/mrumd_beachfront_guestroom_2417_hor_clsc_aHTTp6.jpg ",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v2381885325/HolidaysQuickview/mrumd_view_9562_hor_clsc_27OnJk.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v7490311959/HolidaysQuickview/Pool_1pWvGJ.jpg ",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v6355132490/HolidaysQuickview/R_rK4lQl.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1540383573/Magnum/Maldives/Maldives9_x8wUrK.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v2307011819/HolidaysQuickview/Sunset_G9MMBd.jpg",
  ];

  const top_crousel_img23 = [
    " https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1569827984/Magnum/123/21_JobZj4.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1567071837/Magnum/123/2_bcsVv0.jpg",
    " https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1567071738/Magnum/123/8_KYc2QU.jpg ",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1567071225/Magnum/123/15_Tbq8GS.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v7490311959/HolidaysQuickview/Pool_1pWvGJ.jpg ",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v6355132490/HolidaysQuickview/R_rK4lQl.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1540383573/Magnum/Maldives/Maldives9_x8wUrK.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v2307011819/HolidaysQuickview/Sunset_G9MMBd.jpg",
  ];

  const top_crousel_img24 = [
    " https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1475215409/Dubai_Al_Quoz.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1475215382/Dubai_Wild_Wadi_Water_Park.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1475215392/Dubai_Sharjah.jpg ",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1477050300/Dubai_Activities_to_do_Desert_Camping.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1475215402/Dubai_Burj_Khalifa.jpg ",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v0796921721/MarketPlaceHolidays/United%20Arab%20Emirates/4_JXCKg2.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v3761782800/MarketPlaceHolidays/United%20Arab%20Emirates/2_Ec8V18.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v2112281211/MarketPlaceHolidays/United%20Arab%20Emirates/WhatsApp_Image_2021_02_03_at_6_42_44_PM_TklRay.jpeg",
  ];

  const top_crousel_img25 = [
    " https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v9164559369/MarketPlaceHolidays/United%20Arab%20Emirates/1_1pugdn.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v0639995355/MarketPlaceHolidays/United%20Arab%20Emirates/3_fiUPvl.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1475215392/Dubai_Sharjah.jpg ",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1477050300/Dubai_Activities_to_do_Desert_Camping.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1475215402/Dubai_Burj_Khalifa.jpg ",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v0796921721/MarketPlaceHolidays/United%20Arab%20Emirates/4_JXCKg2.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v3761782800/MarketPlaceHolidays/United%20Arab%20Emirates/2_Ec8V18.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v2112281211/MarketPlaceHolidays/United%20Arab%20Emirates/WhatsApp_Image_2021_02_03_at_6_42_44_PM_TklRay.  ",
  ];
  const top_crousel_img26 = [
    " https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v3379226224/Illustrations/Dhayah_fort_min_scaled_tIC0Mw.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1474441381/Dubai_Activities_to_do_Off_roading.jpg ",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1467869760/Dubai_biggest_gold_ring_1467869755.jpg ",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1435669513/Dubai_3.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1435669577/Dubai_9.jpg ",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v0796921721/MarketPlaceHolidays/United%20Arab%20Emirates/4_JXCKg2.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v3761782800/MarketPlaceHolidays/United%20Arab%20Emirates/2_Ec8V18.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v2112281211/MarketPlaceHolidays/United%20Arab%20Emirates/WhatsApp_Image_2021_02_03_at_6_42_44_PM_TklRay.jpeg",
  ];

  const top_crousel_img27 = [
    " https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1497427988/Background_view_from_the_water_of_the_building_the_Atlantis.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1497359121/Atlantis33.jpg ",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1575437894/AdvNation/123/Dubai_5_y4xICz.jpg ",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1576230339/Magnum/123/Abu_Dhabi_Warner_Bros_(2)_wKzRcz_YsI8tH.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1576333092/Magnum/333/SKI_DUbai_696bnQ.jpg ",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v0796921721/MarketPlaceHolidays/United%20Arab%20Emirates/4_JXCKg2.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v3761782800/MarketPlaceHolidays/United%20Arab%20Emirates/2_Ec8V18.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v2112281211/MarketPlaceHolidays/United%20Arab%20Emirates/WhatsApp_Image_2021_02_03_at_6_42_44_PM_TklRay.jpeg",
  ];

  const top_crousel_img28 = [
    " https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v9813029020/Holidays/United%20Arab%20Emirates/5125_DJI_0042_Pano_24_04_2021_min_0UxWcB.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v5951438414/MarketPlaceHolidays/United%20Arab%20Emirates/Dubai_hotel_1__WeKZMn.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v3230807680/MarketPlaceHolidays/United%20Arab%20Emirates/uae_abu_dhabi_ferrari_world_1__wY8yjQ.jpg ",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1489040658/Dubai_Best_Time.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1435669581/Dubai_6.jpg ",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v9173046021/MarketPlaceHolidays/United%20Arab%20Emirates/Dubai_UAE_1__4xVVXU.jpg ",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v3761782800/MarketPlaceHolidays/United%20Arab%20Emirates/2_Ec8V18.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v2112281211/MarketPlaceHolidays/United%20Arab%20Emirates/WhatsApp_Image_2021_02_03_at_6_42_44_PM_TklRay.jpeg",
  ];

  const top_crousel_img29 = [
    " https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1490189642/MarketPlaceActivities/MPACT-10-44/5_cdMZwn.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1490189535/MarketPlaceActivities/MPACT-10-44/4_brauip.jpg ",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1450091493/Waterfall_in_Dubai_Mall.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1450091504/Dubai_mall23.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1526277666/Dolphinarium_Dubai_1526276685.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v0796921721/MarketPlaceHolidays/United%20Arab%20Emirates/4_JXCKg2.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v3761782800/MarketPlaceHolidays/United%20Arab%20Emirates/2_Ec8V18.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v2112281211/MarketPlaceHolidays/United%20Arab%20Emirates/WhatsApp_Image_2021_02_03_at_6_42_44_PM_TklRay.jpeg",
  ];

  const top_crousel_img30 = [
    " https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1624932443/MarketPlaceHolidays/United%20Arab%20Emirates/images_4__wbqF2J.jpeg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1253594695/MarketPlaceHolidays/United%20Arab%20Emirates/tourandtrip_dubai_5_1RRnQn.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1576500400/Magnum/222/Dubai_Burj_Khalifa_9ExP62.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1477050300/Dubai_Activities_to_do_Desert_Camping.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1475215402/Dubai_Burj_Khalifa.jpg ",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v0796921721/MarketPlaceHolidays/United%20Arab%20Emirates/4_JXCKg2.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v3761782800/MarketPlaceHolidays/United%20Arab%20Emirates/2_Ec8V18.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v2112281211/MarketPlaceHolidays/United%20Arab%20Emirates/WhatsApp_Image_2021_02_03_at_6_42_44_PM_TklRay.jpeg",
  ];

  const top_crousel_img31 = [
    " https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1543820291/Magnum/Amazing%20night%20dubai%20downtown%20skyline/Amazing_night_dubai_downtown_skyline_qlPY4B.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1543820807/Magnum/Close%20up%20Burj%20Al%20Arab%20with%20blue%20sky/Close_up_Burj_Al_Arab_with_blue_sky_TSxKdp.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1543821026/Magnum/Intersection%20of%20roads%20in%20Dubai%20city/Intersection_of_roads_in_Dubai_city_HlPzCx.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1543819963/Magnum/Dubai%20water%20canal%20at%20sun%20rise/Dubai_water_canal_at_sun_rise_sGfSOm.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1543820291/Magnum/Amazing%20night%20dubai%20downtown%20skyline/Amazing_night_dubai_downtown_skyline_qlPY4B.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1543820148/Magnum/Dubai%20skyline%20at%20dusk/Dubai_skyline_at_dusk_3pWE5x.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v3761782800/MarketPlaceHolidays/United%20Arab%20Emirates/2_Ec8V18.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v2112281211/MarketPlaceHolidays/United%20Arab%20Emirates/WhatsApp_Image_2021_02_03_at_6_42_44_PM_TklRay.jpeg",
  ];

  const top_crousel_img32 = [
    " https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1461309470/Hampta_Pass4.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1191249350/Holidays/India/Himachal%20Pradesh/Manali/29552C84_02A3_49B0_AC0B_FEA10F6332CE_jaumx9.jpeg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1654786415/Holidays/India/Himachal%20Pradesh/Manali/PHOTO_2020_09_16_13_36_18_owAFZK.jpg",
    " https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v3386582252/Holidays/India/Himachal%20Pradesh/Manali/PHOTO_2020_09_16_13_36_27_3_IczKsY.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1438851617/Manali_DSC_4465.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1438851687/Manali_DSC_1909.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1510569389/Manali_Blog_1510569375.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1433765669/Manali_12.jpg",
  ];

  const top_crousel_img33 = [
    " https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1461309470/Hampta_Pass4.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1191249350/Holidays/India/Himachal%20Pradesh/Manali/29552C84_02A3_49B0_AC0B_FEA10F6332CE_jaumx9.jpeg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1654786415/Holidays/India/Himachal%20Pradesh/Manali/PHOTO_2020_09_16_13_36_18_owAFZK.jpg",
    " https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v3386582252/Holidays/India/Himachal%20Pradesh/Manali/PHOTO_2020_09_16_13_36_27_3_IczKsY.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1438851617/Manali_DSC_4465.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1438851687/Manali_DSC_1909.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1510569389/Manali_Blog_1510569375.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1433765669/Manali_12.jpg",
  ];

  const top_crousel_img34 = [
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1441268120/Shimla_103.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1465544787/Manali%20Leh%20Blog5_1465544781.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1433765627/Manali_9.jpg",
    " https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1434118959/Shimla_1231.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1438851617/Manali_DSC_4465.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1438851687/Manali_DSC_1909.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1510569389/Manali_Blog_1510569375.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1433765669/Manali_12.jpg",
  ];

  const top_crousel_img35 = [
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1484282643/Manali_overview1.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1203278968/MarketPlaceHolidays/India/Himachal%20Pradesh/Manali/manali_3__A2NdAW.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v9502009485/MarketPlaceHolidays/India/Himachal%20Pradesh/Manali/manali_2__9WLpud.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v9332410012/MarketPlaceHolidays/India/Himachal%20Pradesh/Manali/manali_4__qv2ZAj.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v3185025542/MarketPlaceHolidays/India/Himachal%20Pradesh/Manali/manali_5__mTb4wN.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1462951121/Manali_overview3.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v9332410012/MarketPlaceHolidays/India/Himachal%20Pradesh/Manali/manali_4__qv2ZAj.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1433765669/Manali_12.jpg",
  ];

  const top_crousel_img36 = [
    " https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1461309470/Hampta_Pass4.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1560236583/AdvNation/ANN_TRP421/Hampta_Pass_Trip_ypEOW2.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1505470081/Hot_balloon_air_over_Manali.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1505371411/Tibetan_monastery_in_Manali_town.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1485345336/Manikaran1.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1438851687/Manali_DSC_1909.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1510569389/Manali_Blog_1510569375.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1433765667/Manali_3.jpg",
  ];
  const top_crousel_img37 = [
    " https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v9866970298/MarketPlaceHolidays/India/Jammu%20and%20Kashmir/Leh/Manali_Zanskar_Leh_Manali_Biking_Trip_LUFg1B.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v4099636582/MarketPlaceHolidays/India/Jammu%20and%20Kashmir/Leh/Manali_Zanskar_Leh_Manali_Bike_Tour_PxfTuh.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v7271892863/MarketPlaceHolidays/India/Jammu%20and%20Kashmir/Leh/Manali_Zanskar_Leh_Manali_MotorBike_Tour_PDuX5x.jpg",
    " https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v7679800521/MarketPlaceHolidays/India/Jammu%20and%20Kashmir/Leh/Manali_Zanskar_Leh_Manali_Bike_Trip_ySG1k6.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1576502258/AdvNation/ANN_TRP416/photo-1572547564070-305733e0243f_Q5IXw3.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1571404667/AdvNation/ANN_TRP416/DSC_0601.JPG_0BF0Sc.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1510569389/Manali_Blog_1510569375.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1571404621/AdvNation/ANN_TRP416/DSC_0583.JPG_h9mVqE.jpg",
  ];

  const top_crousel_img38 = [
    " https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1461132516/Alleppey_Weather2.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1464956592/Alleppey_Activities_to_do_Houseboating_with_Kerala_Houseboats.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1433836321/Munnar_1.jpg",
    " https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1433836353/Munnar_4.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1433835856/Alleppey_6.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1433836786/Thekkady_1.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1433923759/Kochi_5.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1433923773/Kochi_1.jpg",
  ];

  const top_crousel_img39 = [
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1433836158/Kumarakom_9.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1433836344/Munnar_11.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1433836321/Munnar_1.jpg",
    " https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1433923764/Kochi_2.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1433835856/Alleppey_6.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1433836786/Thekkady_1.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1433923759/Kochi_5.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1433923773/Kochi_1.jpg",
  ];

  const top_crousel_img40 = [
    " https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1396180539/Domestic%20Holidays/Kerala/Munnar/shutterstock_59513047.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1433836335/Munnar_8.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1433836325/Munnar_5.jpg",
    " https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1433836371/Munnar_18.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1433836400/Munnar_12.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1436350493/Coorg_5.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1434437593/Coorg_Abbey_Falls.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1436350497/Coorg_12.jpg",
  ];

  const top_crousel_img41 = [
    " https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1433501896/Bangalore_2.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1433501911/Bangalore_4.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1433501915/Bangalore_44.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1433837780/Mysore_11.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1433837786/Mysore_13.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1433837772/Mysore_4.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1433837748/Mysore_7.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1436427639/Wayanad_69.jpg",
  ];

  const top_crousel_img42 = [
    " https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1434118406/Mysore_bbu.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1526452354/Ooty_Blog_New_1526450761.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1433501906/Bangalore_3.jpg",
    " https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1433837739/Mysore_8.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1433835856/Alleppey_6.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1433836786/Thekkady_1.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1433923759/Kochi_5.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1433923773/Kochi_1.jpg",
  ];

  const top_crousel_img43 = [
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1424763714/Domestic%20Holidays/Kerala/Miscellaneous/Kovlam_9.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1438951815/People_standing_at_the_water_body_on_top_of_Athirapally_water_falls.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1438951806/Athirapally_water_falls1.jpg",
    " https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1438951816/People_standing_at_the_water_body_on_top_of_Athirapally_water_falls_1.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1438779510/Backwater_11.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1424763689/Domestic%20Holidays/Kerala/Miscellaneous/Kovlam_7.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1396180517/Domestic%20Holidays/Tamil%20Nadu/Mahabalipuram/shutterstock_44790466.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1396180647/Domestic%20Holidays/Tamil%20Nadu/Mahabalipuram/shutterstock_87641716.jpg",
  ];

  const top_crousel_img44 = [
    " https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1436428333/Calicut_7.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1436428338/Calicut_10.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1436428335/Calicut_11.jpg",
    " https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1436428329/Calicut_8.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1436428336/Calicut_9.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1433836786/Thekkady_1.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1434437593/Coorg_Abbey_Falls.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1436350496/Coorg_Abbey_Falls2.jpg",
  ];

  const top_crousel_img45 = [
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1436426833/Kovalam_45.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1436426836/Kovalam_56.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1452674538/Kerala3222.jpg",
    " https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1452674538/Kerala_333.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1433835856/Alleppey_6.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1463731660/Kovalam_overview.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1433923759/Kochi_5.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1433923773/Kochi_1.jpg",
  ];

  console.log(top_crousel_img);

  const len = 8;
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
          <button onClick={() => fetchDataId(id)} className={styles.button}>
            <Link to="/payment" element={<Payment />}>
              {" "}
              Book Now{" "}
            </Link>{" "}
          </button>
          <button className={styles.querryBtn}>Submit Query</button>
        </div>
      </div>

      <div className={styles.flexCrousal}>
        <div>
          <div>
            {" "}
            {id === undefined &&
              top_crousel_img.map((slideimg, index) => {
                return (
                  <div
                    className={index === current ? "slide active" : "slide"}
                    key={index}>
                    {index === current && (
                      <img className={styles.crousalImg} src={slideimg} />
                    )}
                  </div>
                );
              })}
          </div>
          <div>
            {" "}
            {id === 1 &&
              top_crousel_img1.map((slideimg, index) => {
                return (
                  <div
                    className={index === current ? "slide active" : "slide"}
                    key={index}>
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
                    key={index}>
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
                      key={index}>
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
                      key={index}>
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
                      key={index}>
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
                      key={index}>
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
                      key={index}>
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
                      key={index}>
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
                      key={index}>
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
                      key={index}>
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
                      key={index}>
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
                      key={index}>
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
                      key={index}>
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
                      key={index}>
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
                      key={index}>
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
                      key={index}>
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
                      key={index}>
                      {index === current && (
                        <img className={styles.crousalImg} src={slideimg} />
                      )}
                    </div>
                  );
                })}
            </div>

            <div>
              {id === 19 &&
                top_crousel_img19.map((slideimg, index) => {
                  return (
                    <div
                      className={index === current ? "slide active" : "slide"}
                      key={index}>
                      {index === current && (
                        <img className={styles.crousalImg} src={slideimg} />
                      )}
                    </div>
                  );
                })}
            </div>

            <div>
              {id === 20 &&
                top_crousel_img20.map((slideimg, index) => {
                  return (
                    <div
                      className={index === current ? "slide active" : "slide"}
                      key={index}>
                      {index === current && (
                        <img className={styles.crousalImg} src={slideimg} />
                      )}
                    </div>
                  );
                })}
            </div>
            <div>
              {id === 21 &&
                top_crousel_img21.map((slideimg, index) => {
                  return (
                    <div
                      className={index === current ? "slide active" : "slide"}
                      key={index}>
                      {index === current && (
                        <img className={styles.crousalImg} src={slideimg} />
                      )}
                    </div>
                  );
                })}
            </div>
            <div>
              {id === 22 &&
                top_crousel_img22.map((slideimg, index) => {
                  return (
                    <div
                      className={index === current ? "slide active" : "slide"}
                      key={index}>
                      {index === current && (
                        <img className={styles.crousalImg} src={slideimg} />
                      )}
                    </div>
                  );
                })}
            </div>
            <div>
              {id === 23 &&
                top_crousel_img23.map((slideimg, index) => {
                  return (
                    <div
                      className={index === current ? "slide active" : "slide"}
                      key={index}>
                      {index === current && (
                        <img className={styles.crousalImg} src={slideimg} />
                      )}
                    </div>
                  );
                })}
            </div>

            <div>
              {id === 24 &&
                top_crousel_img24.map((slideimg, index) => {
                  return (
                    <div
                      className={index === current ? "slide active" : "slide"}
                      key={index}>
                      {index === current && (
                        <img className={styles.crousalImg} src={slideimg} />
                      )}
                    </div>
                  );
                })}
            </div>
            <div>
              {id === 25 &&
                top_crousel_img25.map((slideimg, index) => {
                  return (
                    <div
                      className={index === current ? "slide active" : "slide"}
                      key={index}>
                      {index === current && (
                        <img className={styles.crousalImg} src={slideimg} />
                      )}
                    </div>
                  );
                })}
            </div>
            <div>
              {id === 26 &&
                top_crousel_img26.map((slideimg, index) => {
                  return (
                    <div
                      className={index === current ? "slide active" : "slide"}
                      key={index}>
                      {index === current && (
                        <img className={styles.crousalImg} src={slideimg} />
                      )}
                    </div>
                  );
                })}
            </div>
            <div>
              {id === 27 &&
                top_crousel_img27.map((slideimg, index) => {
                  return (
                    <div
                      className={index === current ? "slide active" : "slide"}
                      key={index}>
                      {index === current && (
                        <img className={styles.crousalImg} src={slideimg} />
                      )}
                    </div>
                  );
                })}
            </div>
            <div>
              {id === 28 &&
                top_crousel_img28.map((slideimg, index) => {
                  return (
                    <div
                      className={index === current ? "slide active" : "slide"}
                      key={index}>
                      {index === current && (
                        <img className={styles.crousalImg} src={slideimg} />
                      )}
                    </div>
                  );
                })}
            </div>
            <div>
              {id === 29 &&
                top_crousel_img29.map((slideimg, index) => {
                  return (
                    <div
                      className={index === current ? "slide active" : "slide"}
                      key={index}>
                      {index === current && (
                        <img className={styles.crousalImg} src={slideimg} />
                      )}
                    </div>
                  );
                })}
            </div>
            <div>
              {id === 30 &&
                top_crousel_img30.map((slideimg, index) => {
                  return (
                    <div
                      className={index === current ? "slide active" : "slide"}
                      key={index}>
                      {index === current && (
                        <img className={styles.crousalImg} src={slideimg} />
                      )}
                    </div>
                  );
                })}
            </div>
            <div>
              {id === 31 &&
                top_crousel_img31.map((slideimg, index) => {
                  return (
                    <div
                      className={index === current ? "slide active" : "slide"}
                      key={index}>
                      {index === current && (
                        <img className={styles.crousalImg} src={slideimg} />
                      )}
                    </div>
                  );
                })}
            </div>
            <div>
              {id === 32 &&
                top_crousel_img32.map((slideimg, index) => {
                  return (
                    <div
                      className={index === current ? "slide active" : "slide"}
                      key={index}>
                      {index === current && (
                        <img className={styles.crousalImg} src={slideimg} />
                      )}
                    </div>
                  );
                })}
            </div>
            <div>
              {id === 33 &&
                top_crousel_img33?.map((slideimg, index) => {
                  return (
                    <div
                      className={index === current ? "slide active" : "slide"}
                      key={index}>
                      {index === current && (
                        <img className={styles.crousalImg} src={slideimg} />
                      )}
                    </div>
                  );
                })}
            </div>
            <div>
              {id === 34 &&
                top_crousel_img34.map((slideimg, index) => {
                  return (
                    <div
                      className={index === current ? "slide active" : "slide"}
                      key={index}>
                      {index === current && (
                        <img className={styles.crousalImg} src={slideimg} />
                      )}
                    </div>
                  );
                })}
            </div>
            <div>
              {id === 35 &&
                top_crousel_img35.map((slideimg, index) => {
                  return (
                    <div
                      className={index === current ? "slide active" : "slide"}
                      key={index}>
                      {index === current && (
                        <img className={styles.crousalImg} src={slideimg} />
                      )}
                    </div>
                  );
                })}
            </div>
            <div>
              {id === 36 &&
                top_crousel_img36.map((slideimg, index) => {
                  return (
                    <div
                      className={index === current ? "slide active" : "slide"}
                      key={index}>
                      {index === current && (
                        <img className={styles.crousalImg} src={slideimg} />
                      )}
                    </div>
                  );
                })}
            </div>
            <div>
              {id === 37 &&
                top_crousel_img37.map((slideimg, index) => {
                  return (
                    <div
                      className={index === current ? "slide active" : "slide"}
                      key={index}>
                      {index === current && (
                        <img className={styles.crousalImg} src={slideimg} />
                      )}
                    </div>
                  );
                })}
            </div>
            <div>
              {id === 38 &&
                top_crousel_img38.map((slideimg, index) => {
                  return (
                    <div
                      className={index === current ? "slide active" : "slide"}
                      key={index}>
                      {index === current && (
                        <img className={styles.crousalImg} src={slideimg} />
                      )}
                    </div>
                  );
                })}
            </div>
            <div>
              {id === 39 &&
                top_crousel_img39.map((slideimg, index) => {
                  return (
                    <div
                      className={index === current ? "slide active" : "slide"}
                      key={index}>
                      {index === current && (
                        <img className={styles.crousalImg} src={slideimg} />
                      )}
                    </div>
                  );
                })}
            </div>
            <div>
              {id === 40 &&
                top_crousel_img40.map((slideimg, index) => {
                  return (
                    <div
                      className={index === current ? "slide active" : "slide"}
                      key={index}>
                      {index === current && (
                        <img className={styles.crousalImg} src={slideimg} />
                      )}
                    </div>
                  );
                })}
            </div>
            <div>
              {id === 41 &&
                top_crousel_img41.map((slideimg, index) => {
                  return (
                    <div
                      className={index === current ? "slide active" : "slide"}
                      key={index}>
                      {index === current && (
                        <img className={styles.crousalImg} src={slideimg} />
                      )}
                    </div>
                  );
                })}
            </div>
            <div>
              {id === 42 &&
                top_crousel_img42.map((slideimg, index) => {
                  return (
                    <div
                      className={index === current ? "slide active" : "slide"}
                      key={index}>
                      {index === current && (
                        <img className={styles.crousalImg} src={slideimg} />
                      )}
                    </div>
                  );
                })}
            </div>
            <div>
              {id === 43 &&
                top_crousel_img43.map((slideimg, index) => {
                  return (
                    <div
                      className={index === current ? "slide active" : "slide"}
                      key={index}>
                      {index === current && (
                        <img className={styles.crousalImg} src={slideimg} />
                      )}
                    </div>
                  );
                })}
            </div>
            <div>
              {id === 44 &&
                top_crousel_img44.map((slideimg, index) => {
                  return (
                    <div
                      className={index === current ? "slide active" : "slide"}
                      key={index}>
                      {index === current && (
                        <img className={styles.crousalImg} src={slideimg} />
                      )}
                    </div>
                  );
                })}
            </div>
            <div>
              {id === 45 &&
                top_crousel_img45.map((slideimg, index) => {
                  return (
                    <div
                      className={index === current ? "slide active" : "slide"}
                      key={index}>
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

// Product Page for Holiday
