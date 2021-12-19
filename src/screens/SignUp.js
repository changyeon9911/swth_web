import {
  faFacebookSquare,
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
import routes from "../routes";
import Separator from './../components/auth/Separator';
import PageTitle from './../components/PageTitle';
import { useForm, useFormState } from "react-hook-form";
import Subtitle from './../components/auth/Subtitle';
import { gql, useMutation } from '@apollo/client';
import { useHistory } from "react-router-dom";
import { useState } from "react";
import verifyEmail from "../verifyEmail";

const CREATESTDNT_MUTATION = gql`
  mutation CreateStdnt($email: String!, $phone: String!, $username: String!, $password: String!) {
    CreateStdnt(email: $email, phone: $phone, username: $username, password: $password) {
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

const VerifyBtn = styled.button`
  border: none;
  border-radius: 3px;
  margin-top: 12px;
  background-color: ${(props) => props.theme.skyBlue};
  color: white;
  text-align: center;
  padding: 8px 0px;
  font-weight: 600;
  width: 50%;
  opacity: ${(props) => (props.disabled ? "0.2" : "1")};
`;

export default function SignUp() {
  
  const history = useHistory();  
  const {register, handleSubmit, getValues, control} = useForm({mode: "onChange"});
  const {isValid, errors} = useFormState({control});
  const [EmailVerified, SetEmailVerified] = useState(false);

  const onCompleted = (data) => {
    const { CreateStdnt: { ok, error } } = data;
    if (ok) {
      const {email, password} = getValues();
      history.push({
        pathname: "/login",
        state: {email, password},
      }); 
    } else {
      alert(error);
    }
  };
  
  const [createStdnt, {loading}] = useMutation(CREATESTDNT_MUTATION, {onCompleted});
  
  const onSubmitValid = () => {
      if (loading) {
        return;
      }
      const {email, phone, username, password} = getValues();
      createStdnt({variables:{
        email,
        phone,
        username,
        password
      }});
  };

  const onClickVerifyEmail = async () => {
    const {email} = getValues();
    console.log(email);
    const status = await verifyEmail(email);
    if (status === "valid") {
      SetEmailVerified(true);
    } else {
      console.log(false);
      alert("유효하지 않은 이메일입니다.");
    }
  };

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
            {...register("email", {
                required: "E-mail is required."})}
            type="text"
            placeholder="Email"
            hasError={Boolean(errors?.email?.message)}/>
          <FormError message={errors?.email?.message}/>
          {EmailVerified ? null : <VerifyBtn type="button" onClick={() => {onClickVerifyEmail();}}>Verify Email</VerifyBtn>}
          <Input 
            {...register("phone", {
                required: "Phone is required",
                minLength: {
                  value: 5,
                  message: "Phone should be longer than 5 chars.",
                },
              })}
            type="text"
            placeholder="Phone Number"
            hasError={Boolean(errors?.phone?.message)}
            style={{visibility: (EmailVerified ? "visible" : "hidden")}}/>
          <FormError message={errors?.phone?.message}/>
          <Input 
            {...register("username", {
                required: "Username is required",
                minLength: {
                  value: 5,
                  message: "Username should be longer than 5 chars.",
                },
              })}
            type="text"
            placeholder="Username"
            hasError={Boolean(errors?.username?.message)}
            style={{visibility: (EmailVerified ? "visible" : "hidden")}}/>
          <FormError message={errors?.username?.message}/>
          <Input
            {...register("password", {
              required: "Password is required.",
            })}
            type="password"
            placeholder="Password"
            hasError={Boolean(errors?.password?.message)}
            style={{visibility: (EmailVerified ? "visible" : "hidden")}}/>
          <FormError message={errors?.password?.message} />
          <Button type="submit" value="Create Account" disabled={!isValid} style={{visibility: (EmailVerified ? "visible" : "hidden")}}/>
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