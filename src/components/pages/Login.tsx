import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";
import { ChangeEvent, memo, useState, VFC } from "react";
import { useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export const Login: VFC = memo(() => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState<string>("");

  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
  };
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const location = useLocation();
  /* @ts-ignore */
  const { from } = location.state || { from: { pathname: "/" } };

  const { onClickLogin } = useAuth();
  const onSubmitLogin = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    onClickLogin(userId, password, from.pathname);
  };

  return (
    <Container>
      <Heading as="h2" fontSize="3xl" fontFamily="inherit">
        ログイン
      </Heading>
      <Stack as="form" onSubmit={onSubmitLogin} my="40px" spacing="20px">
        <FormControl>
          <FormLabel>ユーザーID</FormLabel>
          <Input
            required={true}
            placeholder="ユーザーID"
            onChange={onChangeUserId}
          />
        </FormControl>
        <FormControl>
          <FormLabel>パスワード</FormLabel>
          <Input
            required={true}
            placeholder="パスワード"
            onChange={onChangePassword}
          />
        </FormControl>
        <FormControl>
          <Button type="submit">ログイン</Button>
        </FormControl>
      </Stack>
    </Container>
  );
});
