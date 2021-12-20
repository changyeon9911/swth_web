import MyPageSemiLayout from "../components/mypage/MyPageSemiLayout";
import CourseCard from "../components/CourseCard";

export default function CourseUnpaid() {
    return (
        <MyPageSemiLayout>
            <CourseCard>1:10 초급</CourseCard>
            <div>Waiting for Payment</div>
        </MyPageSemiLayout>
    );
}