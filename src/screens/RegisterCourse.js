import PageTitle from "../components/PageTitle";
import MyPageSemiLayout from "../components/mypage/MyPageSemiLayout";
import CourseCard from "../components/CourseCard";
import { Link } from "react-router-dom";
import routes from "../routes";
import TutorPack from "../components/TutorPack";


export default function RegisterCourse() {
    return (
      <MyPageSemiLayout>
        <PageTitle title="RegisterCourse"/>
        <div style={{display: "flex"}}>
          <Link to={routes.masterCourse}><CourseCard>1:1 Master Course</CourseCard></Link>
          <Link to={routes.groupCourse}><CourseCard>1:N Group Course</CourseCard></Link>
        </div>
        <TutorPack/>
      </MyPageSemiLayout>
     );
}
