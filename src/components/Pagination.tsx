import { Button } from "@chakra-ui/button";
import { Box, HStack } from "@chakra-ui/layout";

export function Pagination() {
  return (
    <HStack
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
        <Button
          size="sm"
          fontSize="xs"
          w="4"
          colorScheme="pink"
          disabled
          _disabled={{
            bg: "pink.500",
            cursor: 'default'
          }}
        >
          1
        </Button>
        <Button
          size="sm"
          fontSize="xs"
          w="4"
          bg="gray.700"
          _hover={{
            bg: "gray.500"
          }}
        >
          2
        </Button>
      </HStack>
    </HStack>
  )
}