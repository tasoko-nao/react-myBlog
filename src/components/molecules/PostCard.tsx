import { Box, Flex, Img, Stack, Text } from "@chakra-ui/react"
import { VFC } from "react"
import { PostType } from "../../data/Data"

type Props = {
    post: PostType;
}
export const PostCard: VFC<Props> = (props) => {
    const { post: { title, imgPath, content, created, category } } = props
    return (
        <Stack border="1px solid gray" borderRadius="10px" overflow="hidden">
            <Text
                as="h2"
                fontSize="2xl"
                fontWeight="bold"
                bg="gray.800"
                color="white"
                p="0.5rem">
                {title}
            </Text>
            <Flex padding="1rem">
                <Img
                    src={imgPath}
                    alt="プロフィール画像"
                    maxW="300px"
                    height="200px"
                    objectFit="cover"
                    flex="1"
                />
                <Box flex="1" margin="1rem">
                    <Text>{content}</Text>
                    <Text>{created}</Text>
                    <Text>{category}</Text>
                </Box>
            </Flex>
        </Stack>

    )
}