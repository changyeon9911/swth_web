import { gql, useReactiveVar, useMutation } from "@apollo/client";
import { isTriedVar, setTried } from "../apollo";
import PageTitle from "../components/PageTitle";
import FormBox from "../components/auth/FormBox";
import Subtitle from './../components/auth/Subtitle';
import MyPageSemiLayout from "../components/mypage/MyPageSemiLayout";
import MyPageBorder from "../components/mypage/MyPageBorder";
import Button from "../components/auth/Button";
import Input from "../components/auth/Input";
import TimePicker from "../components/auth/TimePicker";
import LevelPicker from "../components/auth/LevelPicker";
import routes from "../routes";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

const CREATE_FREECOURSE_STDNT_MUTATION = gql`
  mutation CreateFreeCourseStdnt($classDate: String!, $classTime: String!, $level: String!) {
      CreateFreeCourseStdnt(classDate: $classDate, classTime: $classTime, level: $level) {
        ok
        error
    }
  }
`;

const EDIT_STDNT_MUTATION = gql`
  mutation EditStdnt($email: String, $password: String, $tried: Boolean) {
    EditStdtnt(email: $email, password: $password, tried: $tried) {
      ok
      error
    }
  } 
`;

export default function EditTried() {
  const history = useHistory();
  const onCompleted2 = async (data) => {
    const { EditStdnt: { ok, error } } = data;
    if (ok) {
      editStdnt({variables: {tried: true}});
      setTried(true);
      alert("신청이 완료되었습니다.");
      history.push(routes.registerCourse);
    } else {
      alert(error);
    }
  };
  const [ editStdnt, { loading: loading2 }] = useMutation(EDIT_STDNT_MUTATION, {onCompleted: onCompleted2});
  
  return (
    <MyPageSemiLayout>
    <PageTitle title="FreeRegister"/>
    <FormBox>
        <div>주의사항</div>
        <Button
            onClick={()=>{editStdnt();}}
            type="submit"
            value={loading2 ? "Loading..." : "확인"}/>
    </FormBox>
  </MyPageSemiLayout>
  ); 
}
