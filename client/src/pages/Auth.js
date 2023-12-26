import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { FaGoogle } from "react-icons/fa";

export default function Auth() {

  const googleLogin = () => {
    window.open("http://localhost:8443/api/auth/google/login", "_self")
  }
  
  return (
    <Box
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
        onClick={googleLogin}
      >
        Sign in with Google
      </Button>
    </Box>
  );
}
