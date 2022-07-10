import { Heading, OrderedList, ListItem, Box } from "@chakra-ui/react"

import { Paper } from "../lib/Papers";

type Props = {
  title: string
  papersData: Paper[]
}

const Papers = ({ title, papersData }: Props ) => (
  <Box>
    <Heading as="h2" size="xl">{title}</Heading>
    <OrderedList p={4}>
      {
        papersData.map((paper: Paper, index) =>
        <ListItem key={index}>
          {paper.authors.join(', ')}, &ldquo;{paper.title}&ldquo;, {paper.conference}
        </ListItem>)
      }
    </OrderedList>
  </Box>
)

export default Papers;
