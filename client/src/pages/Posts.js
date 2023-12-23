import { Box, Card, CardHeader, CardBody, CardFooter, SimpleGrid, Heading, Text, Button } from '@chakra-ui/react'
import React from 'react'

export default function Posts() {
    return (
        <Box p={4}>
            <SimpleGrid spacing={4} columns={[1, null, 2]}>
                <Card>
                    <CardHeader>
                        <Heading size='md'> Customer dashboard</Heading>
                    </CardHeader>
                    <CardBody>
                        <Text>View a summary of all your customers over the last month.</Text>
                    </CardBody>
                    <CardFooter>
                        <Button>View here</Button>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <Heading size='md'> Customer dashboard</Heading>
                    </CardHeader>
                    <CardBody>
                        <Text>View a summary of all your customers over the last month.</Text>
                    </CardBody>
                    <CardFooter>
                        <Button>View here</Button>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <Heading size='md'> Customer dashboard</Heading>
                    </CardHeader>
                    <CardBody>
                        <Text>View a summary of all your customers over the last month.</Text>
                    </CardBody>
                    <CardFooter>
                        <Button>View here</Button>
                    </CardFooter>
                </Card>
            </SimpleGrid>
        </Box>
    )
}
