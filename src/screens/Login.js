import {
  faFacebook,
  faFacebookF,
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { gql, useMutation } from "@apollo/client";
import { logUserIn } from "../apollo";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { Link } from "react-router-dom";
import AuthLayout from "../components/auth/AuthLayout";
import PageTitle from "../components/PageTitle";
import FormError from "../components/auth/FormError";
import BottomBox from "../components/auth/BottomBox";
import Button from "../components/auth/Button";
import FormBox from "../components/auth/FormBox";
import Input from "../components/auth/Input";
import Subtitle from './../components/auth/Subtitle';
import Separator from "../components/auth/Separator";
import FacebookLogin from './../components/auth/FacebookLogin';
import routes from "../routes";


const LOGINSTDNT_MUTATION = gql`
  mutation LoginStdnt($username: String!, $password: String!) {
    LoginStdnt(username: $username, password: $password) {
      ok
      token
      error
    }
  }
`;

export default function Login() {
  const {
    register,
    handleSubmit,
    errors,
    formState,
    getValues,
    setError,
    clearErrors,
  } = useForm({
    mode: "onChange",
  });
  const onCompleted = (data) => {
    const {
      login: { ok, error, token },
    } = data;
    if (!ok) {
      setError("result", {
        message: error,
      });
    }
  };
  const [login, { loading }] = useMutation(LOGINSTDNT_MUTATION, {
    onCompleted,
  });
  const onSubmitValid = (data) => {
    if (loading) {
      return;
    }
    const { username, password } = getValues();
    login({
      variables: { username, password },
    });
  };
  return (
    <AuthLayout>
      <PageTitle title="Login"/>
      <FormBox>
        <Subtitle>
          SWTHLOGO
        </Subtitle>
        <form onSubmit={handleSubmit(onSubmitValid)}>
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
          <Button
            type="submit"
            value={loading ? "Loading..." : "Log in"}
            disabled={!formState.isValid || loading}/>
          <FormError message={errors?.result?.message} />
        </form>
        <Separator />
        <FacebookLogin>
          <FontAwesomeIcon icon={faFacebookSquare} />
          <span>Log in with Facebook</span>
        </FacebookLogin>
      </FormBox>
      <BottomBox
        cta="Don't have an account?"
        linkText="Sign up"
        link={routes.signUp}
      />
    </AuthLayout>
  );
}
