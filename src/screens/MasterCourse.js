import { gql, useMutation } from "@apollo/client";
import PageTitle from "../components/PageTitle";
import FormBox from "../components/auth/FormBox";
import MyPageSemiLayout from "../components/mypage/MyPageSemiLayout";
import Button from "../components/auth/Button";
import Input from "../components/auth/Input";
import TimePicker from "../components/TimePicker";
import routes from "../routes";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import slackNotify from "../slack";

const CREATE_MASTERCOURSE_STDNT_MUTATION = gql`
  mutation CreateMasterCourseStdnt($meetDate: String!, $meetTime: String!) {
      CreateMasterCourseStdnt(meetDate: $meetDate, meetTime: $meetTime) {
        ok
        error
    }
  }
`;

export default function MasterCourse() {
  const history = useHistory();
  const { register, handleSubmit, getValues } = useForm();
  const onCompleted = async (data) => {
    const { CreateMasterCourseStdnt: { ok, error } } = data;
    if (ok) {
      await slackNotify("C02RBGQMADR", "1:1코스 신청");
      history.push(routes.myCourses);
    } else {
      alert(error);
    }
  };
  const [ mutationM, { loading }] = useMutation(CREATE_MASTERCOURSE_STDNT_MUTATION, {onCompleted});
  const onSubmitValid = () => {
    if (loading) {
      return;
    }
    const { meetDate, meetTime } = getValues();
    mutationM({
      variables: { meetDate, meetTime },
    });
  };
  
  return (
    <MyPageSemiLayout>
    <PageTitle title="MasterCourse"/>
    <FormBox>
      <div>1:1 마스터 코스 신청하기 신청하기</div>
      <form onSubmit={handleSubmit(onSubmitValid)}>
        <Input
            {...register("meetDate", {
              required: "meetDate is required",
            })}
            type="date"/>
        <TimePicker 
            register = {{...register("meetTime", {
              required: "meetTime is required",
            })}}/>
        <Button
            type="submit"
            value={loading ? "Loading..." : "마스터코스 신청하기"}/>
      </form>
    </FormBox>
  </MyPageSemiLayout>
  ); 
}

