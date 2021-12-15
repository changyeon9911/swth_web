import { useReactiveVar } from "@apollo/client";
import { isTriedVar } from "../apollo";
import PageTitle from "../components/PageTitle";
import FormBox from "../components/auth/FormBox";
import Subtitle from './../components/auth/Subtitle';
import MyPageSemiLayout from "../components/mypage/MyPageSemiLayout";
import MyPageBorder from "../components/mypage/MyPageBorder";
import Button from "../components/auth/Button";
import Input from "../components/auth/Input";
import TimePicker from "../components/auth/TimePicker";


export default function FreeRegister() {
  const tried = useReactiveVar(isTriedVar);
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
  } else {
    return (
      <MyPageSemiLayout>
      <PageTitle title="FreeRegister"/>
      <FormBox>
        <div>무료 신청하기</div>
        <form>
          <Input
            type="number"
            placeholder="전화번호"/>
          <Input
            type="date"/>
          <TimePicker/>
          <Button type="submit"/>
        </form>
      </FormBox>
    </MyPageSemiLayout>
    );
  }
}
