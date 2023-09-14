import { Box, Center, Divider, Flex, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Thankyou() {
  const navigate = useNavigate();
  const [sec, setsec] = useState(5);
  const ref = useRef(null);
  const ref2 = useRef(null);

  useEffect(() => {
    ref.current = setInterval(() => {
      setsec((pre) => pre - 1);
    }, 1000);

    ref2.current = setTimeout(() => {
      navigate("/");
    }, 6000);

    return () => {
      clearInterval(ref.current);
      clearTimeout(ref2.current);
    };
  }, []);

  return (
    <Flex
      h={"100vh"}
      bg={"gray.200"}
      py={"60px"}
      backgroundImage="url('https://previews.123rf.com/images/eigens/eigens1907/eigens190701253/127450654-light-gray-medium-turquoise-and-khaki-color-brushed-painting-artistic-artwork-for-use-as.jpg')"
      backgroundSize="cover"
      backgroundPosition="center"
      justifyContent={"space-around"}
      align={"center"}
    >
      <Flex
        my={"auto"}
        borderRadius={"15px"}
        px={"50px"}
        boxShadow={"md"}
        bg={"white"}
        h={"75vh"}
        w={"70%"}
        mx={"auto"}
        justifyContent={"space-around"}
        align={"center"}
      >
        <Box>
          <Image src="https://shrtco.de/utnitI" w={"70px"} m={"auto"} />
          <Text
            textAlign={"Center"}
            fontSize={"40px"}
            fontWeight={"700"}
            fontFamily={"unset"}
            color={"green.500"}
          >
            Booking Confirmed !
          </Text>
          <Text color={"gray.500"} textAlign={"Center"}>
            This page will be automatically redirected to
            <br />
            <Link to={"/"}>
              {" "}
              <Text as={"span"} color="blue.400">
                Home page
              </Text>
            </Link>{" "}
            after {sec} sec.
          </Text>
        </Box>
        <Image
          display={{ base: "none", md: "inline-block" }}
          borderLeft={"2px dashed silver"}
          w={"40%"}
          src="https://img.freepik.com/premium-vector/young-happy-man-tourist-flat-cartoon-character-traveling-male-people-summer-vacation-trip-isolated-white-background_37895-959.jpg"
        />
      </Flex>
    </Flex>
  );
}

export default Thankyou;
