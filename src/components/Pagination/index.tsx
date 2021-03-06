import { Button } from "@chakra-ui/button";
import { Box, HStack, Stack } from "@chakra-ui/layout";
import { PaginationItem } from "./PaginationItem";

export function Pagination() {
  return (
    <Stack
    direction={["column", "row"]}
      spacing="6"
      mt="8"
      justify="space-between"
      align="center"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <HStack
        spacing="2"
      >
        <PaginationItem number={1} isCurrent={true} />
        <PaginationItem number={2} />
        <PaginationItem number={3} />
        <PaginationItem number={4} />
        <PaginationItem number={5} />
        <PaginationItem number={6} />
      </HStack>
    </Stack>
  )
}
