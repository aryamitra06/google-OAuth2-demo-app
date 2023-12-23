import { Button } from "@chakra-ui/react";
import React from "react";
import { FaGoogle } from "react-icons/fa";

export default function Auth() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "20px"
      }}
    >
      <Button
        variant={"solid"}
        colorScheme={"red"}
        size={"md"}
        leftIcon={<FaGoogle />}
      >
        Sign in with Google
      </Button>
    </div>
  );
}
