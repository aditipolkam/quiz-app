import React, { useEffect, useState } from "react";
import { getQuizes } from "../api/getQuizes";
import { SimpleGrid } from "@chakra-ui/react";
import { Quiz } from "../types";
import QuizViewCard from "./common/QuizViewCard";

const Home = () => {
  const [quizes, setQuizes] = useState<Quiz[]>();
  useEffect(() => {
    getQuizes().then((res) => {
      console.log(res);
      setQuizes(res);
    });
  }, []);

  return (
    <div>
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
      >
        {quizes &&
          quizes.map((quiz) => {
            return (
              <QuizViewCard
                id={quiz.id}
                creator={quiz.creator}
                topic={quiz.topic}
                questionCount={quiz.questions.length}
                key={quiz.id}
              />
            );
          })}
      </SimpleGrid>
    </div>
  );
};

export default Home;
