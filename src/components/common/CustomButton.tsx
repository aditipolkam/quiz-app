import React from "react";
import { Button } from "@chakra-ui/react";

const CustomButton = ({ label }: { label: string }) => {
  return <Button colorScheme="green">{label}</Button>;
};

export default CustomButton;
