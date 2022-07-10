import { Event } from "../lib/Events";
import { Heading, Text, VStack, Box } from '@chakra-ui/react'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react"

type Props = {
  title: string,
  events: Event[]
}

function getMonth(date: Date): string {
  const month: number = date.getMonth() + 1;
  const zeroPaddingMonth = ("00" + month).slice(-2);
  return zeroPaddingMonth;
}

const Background = ({ title, events }: Props ) => (
  <div>
    <Heading as="h2" size="xl">{title}</Heading>
    <VStack
      spacing={4}
      align='stretch'
      p={4}
      >
        {
          events.sort((a: Event, b: Event) => (a.endDate < b.endDate)? 1 : -1).map((event, index) =>
          <Box key={index}>
            <Heading as="h3" size="md">{event.name}</Heading>
            <Text fontSize="xs">{event.startDate.getFullYear()}-{getMonth(event.startDate)}  - {event.endDate.getFullYear()}-{getMonth(event.endDate)} </Text>
            <Text>{event.body}</Text>
            </Box>
            )
        }
    </VStack>
  </div>
)

export default Background
