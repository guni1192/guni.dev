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

const Background = ({ title, events }: Props ) => (
  <div>
    <Heading as="h2" size="3xl">{title}</Heading>
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>Year</Th>
          <Th>Event</Th>
        </Tr>
      </Thead>
      <Tbody>
        {
          events.map((event, index) =>
          <Tr>
            <Td>{event.date.getFullYear()}年{event.date.getMonth() + 1}月</Td>
            <Td>{event.body}</Td>
          </Tr>)
        }
      </Tbody>
    </Table>
  </div>
)

export default Background
