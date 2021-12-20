import { gql, useMutation } from "@apollo/client";
import { setTried } from "../apollo";
import PageTitle from "../components/PageTitle";
import FormBox from "../components/auth/FormBox";
import MyPageSemiLayout from "../components/mypage/MyPageSemiLayout";
import Button from "../components/auth/Button";
import { useHistory } from "react-router-dom";
import routes from "../routes";

const EDIT_STDNT_MUTATION = gql`
  mutation EditStdnt($email: String, $password: String, $tried: Boolean) {
    EditStdnt(email: $email, password: $password, tried: $tried) {
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
