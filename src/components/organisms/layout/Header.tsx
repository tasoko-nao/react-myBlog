import { Box, Heading, Text } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { Link } from "react-router-dom";

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
        <Link to="/">
          Super Blog
        </Link>
      </Heading>
      <Text textAlign="center" fontWeight="bold">
        スーパーブログ
      </Text>
    </Box>
  );
});
