import MyPageSemiLayout from "../components/mypage/MyPageSemiLayout";
import LevelPicker from "../components/auth/LevelPicker";
import Button from "../components/auth/Button";
import CourseCard from "../components/CourseCard";
import { Link } from "react-router-dom";
import routes from "../routes";

export default function GroupCourse() {
    return (
        <MyPageSemiLayout>
            <div>group course</div>
            <Link to={routes.gl1}><CourseCard>1:10 초급</CourseCard></Link>
            <Link to={routes.gl2}><CourseCard>1:10 중급</CourseCard></Link>
            <Link to={routes.gl3}><CourseCard>1:5 고급</CourseCard></Link>
        </MyPageSemiLayout>
    );
}