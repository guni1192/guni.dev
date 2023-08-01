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

function dateToString(date: Date | null): string {
  if (date === null) {
    return '';
  }
  return date.getFullYear() + '/' + getMonth(date)
}

const Background = ({ title, events }: Props ) => (
  <div>
    <Heading as="h2" size="xl">{title}</Heading>
    <VStack
      spacing={4}
      align='stretch'
      >
        {
          events.sort((a: Event, b: Event) => (a.startDate < b.startDate)? 1 : -1).map((event, index) =>
          <Box key={index}>
            <Heading as="h3" size="md">{event.name}</Heading>
            <Text fontSize="xs">{dateToString(event.startDate)} - {dateToString(event.endDate)}</Text>
            <Text>{event.body}</Text>
            </Box>
            )
        }
    </VStack>
  </div>
)

export default Background
