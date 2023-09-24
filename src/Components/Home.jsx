import {
  Button,
  Box,
  Flex,
  Stack,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import BoxCard from "./BoxCard";

function Home(props) {
  return (
    <div>
      <Flex width={"80%"} m={" 50px auto"} align={"center"}>
        <Box>
          <Box w={"70%"} m={"auto"}>
            <Heading>Essential Fuel With Hydrating Electrolytes</Heading>
            <Text>
              A potent blend of EAAs with 3.5g leucine per serving, and highly
              bioavailable electrolytes in pocket-sized sachets - convenient and
              effective fuel to maximise your performance and hydration.
            </Text>
            <Button>Read More</Button>
          </Box>
        </Box>
        <Box w={"70%"}>
          <Image src="https://nack.life/cdn/shop/files/EAA_Home_page_500x.jpg?v=1692272449" />{" "}
        </Box>
      </Flex>
      <Flex width={"80%"} m={" 50px auto"} align={"center"}>
        <Box w={"70%"}>
          <Image src="https://nack.life/cdn/shop/files/Home_Page_Image-2_500x.jpg?v=1682403841" />{" "}
        </Box>
        <Box>
          <Box w={"70%"} m={"auto"}>
            <Heading>Developed By Sports Nutrition Experts</Heading>
            <Text>
              Näck’s Whey Protein is expertly formulated to fuel your workouts,
              boost muscle growth, enhance recovery and support weight
              management.
            </Text>
            <Button>Read More</Button>
          </Box>
        </Box>
      </Flex>
      <Flex width={"80%"} m={" 50px auto"} align={"center"}>
        <Box>
          <Box w={"70%"} m={"auto"} backgroundColor={"#F2EFEC"} p={"60px 20px"}>
            <Heading>Perfectly Balanced Amino Acids</Heading>
            <Text>
              Our 100% plant based powder is formulated to fuel your body with
              pure protein. By blending naturally sourced yellow peas with whole
              grain rice, this formula provides a complete essential amino acid
              profile.
            </Text>
            <Button>Read More</Button>
          </Box>
        </Box>
        <Box w={"70%"}>
          <Image src="https://nack.life/cdn/shop/files/Nack_campaign_20220751_x730.jpg?v=1657707413" />{" "}
        </Box>
      </Flex>
      <Flex width={"80%"} m={" 50px auto"} align={"center"}>
        <Box w={"70%"}>
          <Image src="https://nack.life/cdn/shop/files/nack-astaxanthin-homepage_500x.webp?v=1688669247" />{" "}
        </Box>
        <Box>
          <Box w={"70%"} m={"auto"}>
            <Heading>Nature's Strongest Antioxidant</Heading>
            <Text>
              Boost your immune system with nature’s most powerful antioxidant,
              Astaxanthin. Its unique and strong cellular protection capacity
              allows it to protect each cell against free radicals and oxidative
              stress.
            </Text>
            <Button>Read More</Button>
          </Box>
        </Box>
      </Flex>
      <Flex m={" 50px auto"} align={"center"} backgroundColor={"#F2EFEC"}>
        <Box>
          <Box w={"70%"} m={"auto"} p={"60px 20px"}>
            <Heading>Meet Our Experts</Heading>
            <Text>
              Searching for an expert within nutrition, fitness or mental
              health? Look no further. Our best in class experts are just one
              click away and ready to support you from the comfort of your home.
            </Text>
            <Button>Read More</Button>
          </Box>
        </Box>
        <Box w={"70%"}>
          <Image src="https://nack.life/cdn/shop/files/meet-our-health-experts-at-nack-india_x600.webp?v=1688669553" />{" "}
        </Box>
      </Flex>
      <Box p={10} w={"80%"} m={"auto"}>
        <Box>
          <Heading w={"50%"}> The Pursuit Of Truly Naked</Heading>
          <Text>
            No odd ingredient combinations. No questionable scientific reports.
            No false claims or hidden agendas. Just carefully selected natural
            active ingredients, always backed by science. Born in Sweden and
            raised in India, our journey started in 2020 with the purpose to
            make the complex world of supplements easy to understand, access and
            benefit from.
          </Text>
          <Heading fontSize={"sm"}>LEARN MORE ABOUT OUR PURSUIT</Heading>
        </Box>
      </Box>
      <Flex
        m={" 50px auto"}
        align={"center"}
        backgroundColor={"#F2EFEC"}
        p={10}
      >
        <Flex w={"90%"} m={"auto"} justifyContent={"space-between"}>
          <BoxCard
            title={"The Starting Line"}
            imgUrl={
              "https://nack.life/cdn/shop/articles/desktopcover_800x400_crop_center.jpg?v=1690803407"
            }
          />
          <BoxCard
            title={"Beyond the Yoga Mat"}
            imgUrl={
              "https://nack.life/cdn/shop/articles/yoga_day_journal-desktop_800x400_crop_center.jpg?v=1687346234"
            }
          />
          <BoxCard
            title={"Passion For Progress"}
            imgUrl={
              "https://nack.life/cdn/shop/articles/Passion-for-Progress-Desktop_800x400_crop_center.jpg?v=1685529026"
            }
          />
        </Flex>
      </Flex>
    </div>
  );
}

export default Home;
