const initState = {
  id: 1,
  state: "Ladakh",
  place: "Leh",
  type: "friends",
  rating: 4.5,
  stay: 1,
  title: "Best Of Ladakh - Standard",
  image:
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1494575827/Pangong_Lake.jpg",
  image1:
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1527078579/Leh_ladakh_1527078576.jpg",
  image2:
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1527082217/Pangong_Tso_1527080934.jpg",
  image3:
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1494579614/Zanskar_River.jpg",
  image4:
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1518782352/centrally_heated_camps_1518782375.jpg",
  image5:
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1494577494/Bactrian_Camels.jpg",
  image6:
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1464244517/Ladakh_overview.jpg",
  image7:
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1517480886/AdvNation/ANN_TRP634/chadar-and-lingshed-village-trek_1474024109_dTQv7M.jpg",
  price: 4125,
  overview:
    "Short Escape tour of Ladakh this trip you will witness some of the most beautiful monasteries, while you are in the monastery you will get a birds eye of the spectacular Ladakh’s mountain range. The sky view of the Ladakh’s Valleys, Mountains and City is best viewed from high tops of the Monasteries and Palace, The drive to Khardung-la is a memorable one as you are going to the Highest Mountain Top in the world known as “K TOP” sightseeing of Leh Palace, Pathar Sahib Gompa, Charismatic Magnetic Hill, Hall of Fame museum, The World’s Highest motorable road KHARDUNGLA pass makes your holiday a memorable journey.",
  about:
    "Leh is an enchanting utopia that literally makes you feel on top of the world. A prominent city in the Ladakh region of Jammu and Kashmir, it is a place where the stars shine brighter and the majestic Himalayas loom over you. For the travelers who really want to experience peaceful bliss with a slice of adventure, Leh is the perfect destination. You can engage in adrenaline-pumping adventure sports of the place or discover your spiritual side in one of the district’s numerous monasteries, such as Thiksey Monastery and Shanti Stupa. Adventure lovers, bikers in particular, will love to explore the never-ending stretches of mountain paths around the city. Equally fascinating is the culture of Leh. Kind-hearted people with warm smiles on their faces, greet you wherever you go and make you feel at home. Roam around the narrow paths of the City Market, and get engulfed with the irresistibl",
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case "SET_SINGLE":
      return payload;
    default:
      return state;
  }
};
