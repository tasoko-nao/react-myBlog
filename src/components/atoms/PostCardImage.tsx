import { Img } from "@chakra-ui/react";
import { memo, VFC } from "react";

type Props = {
  imgPath: string;
};

export const PostCardImage: VFC<Props> = memo((props) => {
  const { imgPath } = props;

  return (
    <Img
      src={imgPath}
      alt="プロフィール画像"
      width="100%"
      minWidth="260px"
      height="200px"
      objectFit="cover"
    />
  );
});
