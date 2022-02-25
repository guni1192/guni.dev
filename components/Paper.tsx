import { Heading, OrderedList, ListItem } from "@chakra-ui/react"

import { Paper } from "../lib/Papers";

type Props = {
  title: string
  papersData: Paper[]
}

const Papers = ({ title, papersData }: Props ) => (
  <div>
    <Heading as="h2" size="xl">{title}</Heading>
    <OrderedList>
      {
        papersData.map((paper: Paper, index) =>
        <ListItem key={index}>
          {paper.authors.join(', ')}, &ldquo;{paper.title}&ldquo;, {paper.conference}
        </ListItem>)
      }
    </OrderedList>
  </div>
)

export default Papers;
