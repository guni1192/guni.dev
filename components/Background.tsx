import { Event } from "../lib/Events";
import { Heading } from '@chakra-ui/react'
import Career from './Career';
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
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>Date</Th>
          <Th>Event</Th>
        </Tr>
      </Thead>
      <Tbody>
        {
          events.map((event, index) =>
          <Tr key={index}>
            <Td>{event.date.getFullYear()}-{getMonth(event.date)} </Td>
            <Td>{event.body}</Td>
          </Tr>)
        }
      </Tbody>
    </Table>
  </div>
)

export default Background
