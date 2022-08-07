import { Flex } from "@chakra-ui/react";
import { memo, ReactNode, VFC } from "react";
import { Footer } from "../organisms/layout/Footer";
import { Header } from "../organisms/layout/Header";

type Props = {
  children: ReactNode;
};

export const Layout: VFC<Props> = memo((props) => {
  const { children } = props;
  return (
    <Flex direction="column" minH="100vh" justify="space-between">
      <Header />
      {children}
      <Footer />
    </Flex>
  );
});
