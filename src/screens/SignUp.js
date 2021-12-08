import {
  faFacebook,
  faFacebookF,
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import AuthLayout from "../components/auth/AuthLayout";
import FormError from "../components/auth/FormError";
import BottomBox from "../components/auth/BottomBox";
import Button from "../components/auth/Button";
import FormBox from "../components/auth/FormBox";
import Input from "../components/auth/Input";
import FacebookLogin from './../components/auth/FacebookLogin';
import { FatLink } from "../components/shared";
import routes from "../routes";
import Separator from './../components/auth/Separator';
import PageTitle from './../components/PageTitle';
import { useForm } from "react-hook-form";
import Subtitle from './../components/auth/Subtitle';
import { gql } from '@apollo/client';

const CREATESTDNT_MUTATION = gql`
  mutation CreateStdnt($email: String!, $username: String!, $password: String!) {
    CreateStdnt(email: $email, username: $username, password: $password) {
      ok
      error
    }
  }
`;


const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;


export default function SignUp() {
  const {register, handleSubmit, errors, formState } = useForm({
      mode: "onChange",
  });
  const onSubmitValid = (data) => {
      console.log(data);
  }
  return (
    <AuthLayout>
      <PageTitle title="Sign Up"/>
      <FormBox>
        <HeaderContainer>
          <Subtitle>
            SWTHLOGO
          </Subtitle>
          <Subtitle>
            Sign up and Try a free class.
          </Subtitle>
        </HeaderContainer>
        <form onSubmit={handleSubmit(onSubmitValid)}>
          <Input 
            ref={register("name", {
                required: "Name is required."})}
            type="text"
            placeholder="Name"
            hasError={Boolean(errors?.name?.message)}/>
          <FormError message={errors?.name?.message}/>
          <Input 
            ref={register("email", {
                required: "E-mail is required."})}
            type="text"
            placeholder="Email"
            hasError={Boolean(errors?.email.message)}/>
          <FormError message={errors?.email?.message}/>
          <Input 
            ref={register("username", {
                required: "Username is required",
                minLength: {
                  value: 5,
                  message: "Username should be longer than 5 chars.",
                },
              })}
            type="text"
            placeholder="Username"
            hasError={Boolean(errors?.username?.message)}/>
          <FormError message={errors?.username?.message}/>
          <Input
            ref={register("password", {
              required: "Password is required.",
            })}
            type="password"
            placeholder="Password"
            hasError={Boolean(errors?.password?.message)}/>
          <FormError message={errors?.password?.message} />
          <Button type="submit" value="Log in" disabled={!formState.isValid}/>
        </form>
        <Separator />
        <FacebookLogin>
          <FontAwesomeIcon icon={faFacebookSquare} />
          <span>Log in with Facebook</span>
        </FacebookLogin>
      </FormBox>
      <BottomBox cta="Have an account?" linkText="Log in" link={routes.login} />
    </AuthLayout>
  );
}