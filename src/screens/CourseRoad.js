import MyPageSemiLayout from "../components/mypage/MyPageSemiLayout";
import CourseCard from "../components/CourseCard";
import { useLocation } from "react-router-dom";


export default function CourseRoad() {
    const location = useLocation();
    const courseId = location.courseId;
    return (
        <MyPageSemiLayout>
            <div>{courseId}</div>
            <CourseCard>1:10 초급</CourseCard>
        </MyPageSemiLayout>
    );
}