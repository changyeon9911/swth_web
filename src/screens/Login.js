import {
  faFacebookSquare
} from "@fortawesome/free-brands-svg-icons";
import { gql, useMutation } from "@apollo/client";
import { logStdntIn, setTried } from "../apollo";
import { useForm, useFormState } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, Route } from "react-router-dom";
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
import { useLocation, useHistory } from "react-router-dom";

const LOGINSTDNT_MUTATION = gql`
  mutation LoginStdnt($email: String!, $password: String!) {
    LoginStdnt(email: $email, password: $password) {
      ok
      token
      error
    }
  }
`;

export default function Login() {
  const history = useHistory();
  const location = useLocation();
  const { register, handleSubmit, control, getValues } = useForm({
    mode: "onChange", 
    defaultValues: {
      email: location.state?.email,
      password: location.state?.password
    }
  });
  const {isValid, errors} = useFormState({control});
  const onCompleted = async (data) => {
    const { LoginStdnt: { ok, error, token } } = data;
    if (ok) {
      await logStdntIn(token);
      history.push(routes.freeRegister);
    } else {
      alert(error);
    }
  };
  const [login, { loading }] = useMutation(LOGINSTDNT_MUTATION, {onCompleted});
  const onSubmitValid = () => {
    if (loading) {
      return;
    }
    const { email, password } = getValues();
    login({
      variables: { email, password },
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
            {...register("email", {
              required: "Email is required",
            })}
            type="text"
            placeholder="Email"
            hasError={Boolean(errors?.email?.message)}/>
          <FormError message={errors?.email?.message}/>
          <Input
            {...register("password", {
              required: "Password is required.",
            })}
            type="password"
            placeholder="Password"
            hasError={Boolean(errors?.password?.message)}/>
          <FormError message={errors?.password?.message} />
          <Button
            type="submit"
            value={loading ? "Loading..." : "Log in"}
            disabled={!isValid || loading}/>
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
