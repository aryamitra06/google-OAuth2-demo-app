import {
  Box,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  SimpleGrid,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Posts() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8443/api/posts", {
          withCredentials: true,
        });
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(data);

  return (
    <Box p={4}>
      <SimpleGrid spacing={4} columns={[1, null, 2]}>
        {data?.map(({ id, title, body }) => (
          <Card key={id}>
            <CardHeader>
              <Heading size="md">{title}</Heading>
            </CardHeader>
            <CardBody>
              <Text>{body}</Text>
            </CardBody>
            <CardFooter>
              <Button>View here</Button>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
}
