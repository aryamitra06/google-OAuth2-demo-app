import {
  Box,
  Container,
  Card,
  CardHeader,
  Heading,
  CardBody,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import React from "react";

export default function Home({ userData }) {
  const { user } = userData;
  const { displayName, emails, provider } = user;

  return (
    <Container maxW="container.lg">
      <Box p={5}>
        <Card>
          <CardHeader>
            <Heading size="md">LoggedIn User Details</Heading>
          </CardHeader>

          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Name
                </Heading>
                <Text pt="2" fontSize="sm">
                  {displayName}
                </Text>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Email
                </Heading>
                <Text pt="2" fontSize="sm">
                  {emails[0].value}
                </Text>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Provider
                </Heading>
                <Text pt="2" fontSize="sm">
                  {provider}
                </Text>
              </Box>
            </Stack>
          </CardBody>
        </Card>
      </Box>
    </Container>
  );
}
