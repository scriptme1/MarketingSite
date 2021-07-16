import React from 'react';
import {
  Container,
  FormWrap,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
} from './Singin.elements';

const Singin = () => {
  return (
    <>
      <Container>
        <FormWrap>
          {/* <Icon to="/">ULTRA</Icon> */}
          <FormContent>
            <Form action="#">
              <FormH1>SIGN IN TO YOUR ACCOUNT</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput type="password" required />
              <FormButton type="submit">Submit</FormButton>
              <Text>Forgot Password?</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Singin;
