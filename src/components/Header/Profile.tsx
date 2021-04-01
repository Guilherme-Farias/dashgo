import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

export function Profile() {
  return (
    <Flex aling="center">
      <Box mr="4" textAlign="right">
        <Text>Guilherme Farias</Text>
        <Text color="gray.300" fontSize="small">
          guicfarias11@gmail.com
            </Text>
      </Box>
      <Avatar size="md" name="Guilheme Carneiro de Farias" src="https://github.com/guilherme-farias.png" />
    </Flex>
  )
}
