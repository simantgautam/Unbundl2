import React from "react";
import Carousel from "nuka-carousel";
import { Box, Heading, Image } from "@chakra-ui/react";

function Nuka_Carousal(props) {
  return (
    <Box>
      <Heading mt={10} textAlign={"center"}>
        Choose Your Favourite
      </Heading>
      <Box m={20} mt={10}>
        <Carousel wrapAround={true} slidesToShow={3} autoplay>
          <Box>
            <Image
              src="https://nack.life/cdn/shop/files/choose_your_fav_410x.jpg?v=1682330570"
              alt="image1"
            />
          </Box>
          <Box>
            <Image
              src="https://nack.life/cdn/shop/files/vegan-plant-protein-powder-nack-india-min_750x_1000x_9fe870d1-dcb5-439f-a696-2219a36f7fca_410x.webp?v=1656932664"
              alt="image1"
            />
          </Box>
          <Box>
            <Image
              src="https://nack.life/cdn/shop/files/nack-astaxanthin-antioxidant-immunity-boost-1-min_410x.jpg?v=1656933817"
              alt="image1"
            />
          </Box>
          <Box>
            <Image
              src="https://nack.life/cdn/shop/files/tsk_home_page_1_410x.jpg?v=1680075128"
              alt="image1"
            />
          </Box>
          <Box>
            <Image
              src="https://nack.life/cdn/shop/files/choose_your_fav_9c6ba076-3ac3-4bb3-ab24-e03329ecbf64_410x.jpg?v=1692271535"
              alt="image1"
            />
          </Box>
        </Carousel>
      </Box>
    </Box>
  );
}

export default Nuka_Carousal;
