import { Text } from "@chakra-ui/react";
import { memo, ReactNode, VFC } from "react";
type Props = {
  children: ReactNode;
};
export const SectionTitle: VFC<Props> = memo((props) => {
  const { children } = props;
  return (
    <Text fontSize="1.2em" fontWeight="bold" my="1em" textAlign="center">
      {children}
    </Text>
  );
});
