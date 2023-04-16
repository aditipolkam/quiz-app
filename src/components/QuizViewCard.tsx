import React from "react";
import {
  CardHeader,
  Heading,
  Card,
  CardBody,
  CardFooter,
  Text,
  Button,
} from "@chakra-ui/react";

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
        <Button>Take Quiz</Button>
      </CardFooter>
    </Card>
  );
};

export default QuizViewCard;
