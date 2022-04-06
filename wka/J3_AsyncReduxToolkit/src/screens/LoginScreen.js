import { Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, useColorMode } from "native-base";
import { useDispatch } from "react-redux";
import { login } from "../redux/store/accountSlice"

const LoginScreen = () => {
   const dispatch = useDispatch();

   return (
      <Center w="100%" flex={1}
         _dark={{ bg: "blueGray.900" }}
         _light={{ bg: "white" }}
      >
         <Box safeArea p="2" py="8" w="90%" maxW="290">
            <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
               color: "warmGray.50"
            }}>
               Welcome
            </Heading>
            <Heading mt="1" _dark={{
               color: "warmGray.200"
            }} color="coolGray.600" fontWeight="medium" size="xs">
               Sign in to continue!
            </Heading>

            <VStack space={3} mt="5">
               <FormControl>
                  <FormControl.Label>Email ID</FormControl.Label>
                  <Input />
               </FormControl>
               <FormControl>
                  <FormControl.Label>Password</FormControl.Label>
                  <Input type="password" />
                  <Link _text={{
                     fontSize: "xs",
                     fontWeight: "500",
                     color: "indigo.500"
                  }} alignSelf="flex-end" mt="1">
                     Forget Password?
                  </Link>
               </FormControl>
               <Button mt="2" colorScheme="indigo"
                  onPress={() => dispatch(login())}
               >
                  Sign in
               </Button>
               <HStack mt="6" justifyContent="center">
                  <Text fontSize="sm" color="coolGray.600" _dark={{
                     color: "warmGray.200"
                  }}>
                     I'm a new user.{" "}
                  </Text>
                  <Link _text={{
                     color: "indigo.500",
                     fontWeight: "medium",
                     fontSize: "sm"
                  }} href="#">
                     Sign Up
                  </Link>
               </HStack>
            </VStack>
         </Box>
      </Center>
    );
};

export default LoginScreen;
