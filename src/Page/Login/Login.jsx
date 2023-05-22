import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Text,
  Grid,
  GridItem, 
  Box,
  Button, 
  ButtonGroup
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
      <Grid h="100%" templateRows="repeat(1, 1fr)" gap={10}>
        <GridItem colSpan={2} bg="#white" h={'100%'} margin={'auto'}>
        <Box w={[300, 400, 500, 800,]} h="1000">
          <FormControl padding={5} bg="#142D4C" borderRadius={15}>
                <Text align={"center"} margin={4} color={'white'} fontSize={'25'}>
                  Welcome to Bisnaso
                </Text>
                <FormLabel color={"white"} fontSize={20}>Email</FormLabel>
                <Input
                  type="email"
                  value={inputEmail}
                  onChange={handleChangeInputEmail}
                  color={"white"}
                />
                {!isErrorEmail ? (
                  <FormHelperText color={'white'}>Enter your email to do Login</FormHelperText>
                ) : (
                  <FormErrorMessage color={'red'}>Email is required.</FormErrorMessage>
                )}
                <FormLabel color={"white"} fontSize={20}>Password</FormLabel>
                <Input
                  type="password"
                  value={inputPass}
                  onChange={handleChangeInputPass}
                  color={"white"}
                />
                {!isErrorPass ? (
                  <FormHelperText color={'white'}>Enter your password to do Login</FormHelperText>
                ) : (
                  <FormErrorMessage color={'red'}>Password is required.</FormErrorMessage>
                )}
                <ButtonGroup variant='outline' spacing='3'>
                  <Button color='white' marginTop={5} type="submit" bgColor={'purple'}>Send</Button>
                </ButtonGroup>
              </FormControl>
          </Box>
        </GridItem>
      </Grid>

     
    </>
  );
};

export default Login;
