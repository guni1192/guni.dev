import React from 'react'
import { Box, Heading, List, Text } from '@chakra-ui/react'
import { Paper } from "../lib/Papers"

type Props = {
  title: string
  papersData: Paper[]
}

const Papers: React.FC<Props> = ({ title, papersData }) => (
  <Box>
    <Heading as="h2" size={{ base: "lg", md: "xl" }} mb={{ base: 3, md: 4 }} color="green.400">
      {title}
    </Heading>
    <List.Root as="ol" pl={{ base: "15px", md: "20px" }} gap={{ base: 2, md: 3 }}>
      {
        papersData.map((paper: Paper, index) =>
        <List.Item key={index}>
          <Text fontSize={{ base: "sm", md: "md" }} lineHeight={{ base: "1.4", md: "1.6" }}>
            {paper.authors.join(', ')}, &ldquo;{paper.title}&rdquo;, {paper.conference}
          </Text>
        </List.Item>)
      }
    </List.Root>
  </Box>
)

export default Papers
