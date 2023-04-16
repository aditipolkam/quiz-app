import React from "react";
import {
  CardHeader,
  Heading,
  Card,
  CardBody,
  CardFooter,
  Text,
} from "@chakra-ui/react";
import CustomButton from "./CustomButton";

const QuizViewCard = ({
  id,
  topic,
  creator,
  questionCount,
}: {
  id: string;
  topic: string;
  creator: string;
  questionCount: number;
}) => {
  return (
    <Card>
      <CardHeader>
        <Heading size="md"> {topic}</Heading>
      </CardHeader>
      <CardBody>
        <Text>by {creator}</Text>
        <Text>{questionCount} question(s)</Text>
      </CardBody>
      <CardFooter>
        <CustomButton label="Take Quiz" />
      </CardFooter>
    </Card>
  );
};

export default QuizViewCard;
