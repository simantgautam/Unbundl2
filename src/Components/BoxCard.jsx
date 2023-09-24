import React from "react";
import {
  Card,
  CardBody,
  Stack,
  Text,
  Heading,
  Image,
  CardFooter,
} from "@chakra-ui/react";

function BoxCard(props) {
  return (
    <div>
      <Card maxW="md" backgroundColor={"transparent"}>
        <CardBody>
          <Image
            src={props.imgUrl}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{props.title}</Heading>
            <Text>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Reprehenderit facilis odit, laboriosam iusto exercitationem sint
              nemo nulla quod qui aut.
            </Text>
          </Stack>
        </CardBody>
      </Card>
    </div>
  );
}

export default BoxCard;
