import { Button, Container, FormControl, FormLabel, Heading, Input, Stack } from "@chakra-ui/react";
import { memo, useEffect, VFC } from "react"

export const Login: VFC = memo(() => {
  useEffect(() => window.scroll(0, 0), []);

  return (
    <Container>
      <Heading as="h2" fontSize="3xl" fontFamily="inherit">ログイン</Heading>
      <Stack my="40px" spacing="20px">
        <FormControl>
          <FormLabel>ユーザーID</FormLabel>
          <Input required={true} placeholder="ユーザーID" />
        </FormControl>
        <FormControl>
          <FormLabel>パスワード</FormLabel>
          <Input required={true} placeholder="パスワード" />
        </FormControl>
        <FormControl>
          <Button>ログイン</Button>
        </FormControl>
      </Stack>
    </Container>
  )
})