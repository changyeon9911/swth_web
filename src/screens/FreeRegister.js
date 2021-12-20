import { gql, useReactiveVar, useMutation } from "@apollo/client";
import { isTriedVar } from "../apollo";
import PageTitle from "../components/PageTitle";
import FormBox from "../components/auth/FormBox";
import Subtitle from './../components/auth/Subtitle';
import MyPageSemiLayout from "../components/mypage/MyPageSemiLayout";
import MyPageBorder from "../components/mypage/MyPageBorder";
import Button from "../components/auth/Button";
import Input from "../components/auth/Input";
import TimePicker from "../components/TimePicker";
import LevelPicker from "../components/LevelPicker";
import routes from "../routes";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import slackNotify from "../slack";

const CREATE_FREECOURSE_STDNT_MUTATION = gql`
  mutation CreateFreeCourseStdnt($classDate: String!, $classTime: String!, $level: String!) {
      CreateFreeCourseStdnt(classDate: $classDate, classTime: $classTime, level: $level) {
        ok
        error
    }
  }
`;

export default function FreeRegister() {
  const history = useHistory();
  const tried = useReactiveVar(isTriedVar);
  const { register, handleSubmit, getValues } = useForm();
  const onCompleted = async (data) => {
    const { CreateFreeCourseStdnt: { ok, error } } = data;
    if (ok) {
      await slackNotify("C02QWSXNRGX", "무료수업 신청");
      history.push(routes.editTried);
    } else {
      alert(error);
    }
  };
  const [ mutationf, { loading }] = useMutation(CREATE_FREECOURSE_STDNT_MUTATION, {onCompleted});
  const onSubmitValid = () => {
    if (loading) {
      return;
    }
    console.log(getValues());
    const { classDate, classTime, level } = getValues();
    mutationf({
      variables: { classDate, classTime, level },
    });
  };
  if (tried) {
    return (
      <MyPageSemiLayout>
        <PageTitle title="FreeRegister"/>
        <FormBox>
          <MyPageBorder />
          <Subtitle>이미 무료수업을 신청하였습니다.</Subtitle>
          <Subtitle>신청 내역은 내 수업보기에서 확인할 수 있습니다.</Subtitle>
        </FormBox>
      </MyPageSemiLayout>
     );
  }  else {
  return (
    <MyPageSemiLayout>
    <PageTitle title="FreeRegister"/>
    <FormBox>
      <div>무료 신청하기</div>
      <form onSubmit={handleSubmit(onSubmitValid)}>
        <Input
            {...register("classDate", {
              required: "classDate is required",
            })}
            type="date"/>
        <TimePicker 
            register = {{...register("classTime", {
              required: "classTime is required",
            })}}/>
        <LevelPicker
            register = {{...register("level", {
              required: "level is required",
            })}}/>
        <Button
            type="submit"
            value={loading ? "Loading..." : "무료 체험 신청하기"}/>
      </form>
    </FormBox>
  </MyPageSemiLayout>
  ); 
}
}
