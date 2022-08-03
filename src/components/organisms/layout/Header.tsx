import { Box, Heading, Text } from "@chakra-ui/react";
import { memo, VFC } from "react";

export const Header: VFC = memo(() => {
  return (
    <Box
      padding="2rem"
      mb="40px"
      bg="gray"
      color="white"
      bgGradient="linear(to-r, orange.300, yellow.300)"
    >
      <Heading as="h1" textAlign="center" pb="0.5rem">
        Super Blog
      </Heading>
      <Text textAlign="center" fontWeight="bold">
        スーパーブログ
      </Text>
    </Box>
  );
});
