import React from 'react'
import { Box, Heading, VStack, Text } from '@chakra-ui/react'
import { Event } from "../lib/Events"

type Props = {
  title: string,
  events: Event[]
}

function getMonth(date: Date): string {
  const month: number = date.getMonth() + 1;
  const zeroPaddingMonth = ("00" + month).slice(-2);
  return zeroPaddingMonth;
}

function dateToString(date: Date | null): string {
  if (date === null) {
    return '';
  }
  return date.getFullYear() + '/' + getMonth(date)
}

const Background: React.FC<Props> = ({ title, events }) => (
  <Box>
    <Heading as="h2" size={{ base: "lg", md: "xl" }} mb={{ base: 3, md: 4 }} color="green.400">
      {title}
    </Heading>
    <VStack gap={{ base: 3, md: 4 }} align="stretch">
      {
        events.sort((a: Event, b: Event) => (a.startDate < b.startDate)? 1 : -1).map((event, index) =>
        <Box 
          key={index} 
          p={{ base: 3, md: 4 }}
          borderLeft="3px solid"
          borderColor="green.400"
          bg="rgba(10, 232, 148, 0.1)"
          borderRadius="md"
        >
          <Heading as="h3" size={{ base: "sm", md: "md" }} mb={2} color="green.400">
            {event.name}
          </Heading>
          <Text fontSize="xs" color="gray.400" mb={2}>
            {dateToString(event.startDate)} - {dateToString(event.endDate)}
          </Text>
          <Text fontSize={{ base: "sm", md: "md" }} lineHeight={{ base: "1.4", md: "1.6" }}>
            {event.body}
          </Text>
        </Box>
        )
      }
    </VStack>
  </Box>
)

export default Background
