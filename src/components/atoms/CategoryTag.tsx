import { Text } from "@chakra-ui/react";
import { memo, VFC } from "react";

type Props = {
  categoryName: string | undefined;
};

export const CategoryTag: VFC<Props> = memo((props) => {
  const { categoryName } = props;
  return (
    <Text
      bg="orange.400"
      color="white"
      padding="5px 10px"
      fontSize="small"
      borderRadius="10px"
    >
      {categoryName}
    </Text>
  );
});
