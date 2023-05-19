import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Text,
  Grid,
  GridItem
} from "@chakra-ui/react";
import { useState } from "react";

const Login = () => {

  const [inputEmail, setInputEmail] = useState('');
  const [inputPass, setInputPass] = useState('');

  const isErrorEmail = inputEmail === ''
  const isErrorPass = inputPass === ''

  const handleChangeInputEmail = (e) => {
    setInputEmail(e.target.value)
  }
  const handleChangeInputPass = (e) => {
    setInputPass(e.target.value)
  }

  return (
    <>
      <Grid h="200px" templateRows="repeat(5, 1fr)" gap={5}>
        <GridItem rowSpan={2} colSpan={1} bg="#142D4C">
          <Text align={"center"} marginTop={5} color={'white'}>
            Login
          </Text>
        </GridItem>
      </Grid>

      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          value={inputEmail}
          onChange={handleChangeInputEmail}
        />
        {!isErrorEmail ? (
          <FormHelperText>Enter your email to do Login</FormHelperText>
        ) : (
          <FormErrorMessage>Email is required.</FormErrorMessage>
        )}
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          value={inputPass}
          onChange={handleChangeInputPass}
        />
        {!isErrorPass ? (
          <FormHelperText>Enter your password to do Login</FormHelperText>
        ) : (
          <FormErrorMessage>Password is required.</FormErrorMessage>
        )}
      </FormControl>
    </>
  );
};

export default Login;
