import { Box, Heading, Text } from "@chakra-ui/react";
import { memo, VFC } from "react";

export const Footer: VFC = memo(() => {
  return (
    <Box as="footer" padding="2rem" bg="gray.300" mt="40px">
      <Heading as="h1" fontSize="1.5rem" textAlign="center" pb="0.5rem">
        Super Blog
      </Heading>
      <Text textAlign="center" fontWeight="bold">
        スーパーブログ
      </Text>
    </Box>
  );
});
