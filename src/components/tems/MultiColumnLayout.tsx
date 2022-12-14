import { Box, Container, Flex } from "@chakra-ui/react";
import { memo, ReactNode, VFC } from "react";
import { Footer } from "../organisms/layout/Footer";
import { Header } from "../organisms/layout/Header";
import { Recommend } from "../organisms/Recommend";
import { Side } from "../organisms/layout/Side";

type Props = {
  children: ReactNode;
};

export const MultiColumnLayout: VFC<Props> = memo((props) => {
  const { children } = props;
  return (
    <>
      <Header />
      <Container w="100%" maxW="1100px" bg="white">
        <Flex direction={{ base: "column", lg: "row" }} gap="20px">
          <Box flex="1">
            {children}
            <Recommend />
          </Box>
          <Side />
        </Flex>
      </Container>
      <Footer />
    </>
  );
});
