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
import LevelPicker from "../components/auth/LevelPicker";


export default function RegisterCourse() {
    return (
      <MyPageSemiLayout>
        <PageTitle title="RegisterCourse"/>
        <form>
          <LevelPicker/>
          <Button type="submit" value="수업 신청하기"/>
        </form>
      </MyPageSemiLayout>
     );
}
