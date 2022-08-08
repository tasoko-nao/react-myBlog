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
  const { onClickLogin } = useAuth();

  return (
    <Container>
      <Heading as="h2" fontSize="3xl" fontFamily="inherit">
        ログイン
      </Heading>
      <Stack as="form" my="40px" spacing="20px">
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
          <Button onClick={() => onClickLogin(userId, password)}>
            ログイン
          </Button>
        </FormControl>
      </Stack>
    </Container>
  );
});
