import MyPageSemiLayout from "../components/mypage/MyPageSemiLayout";
import Button from "../components/auth/Button";


export default function MasterCourse() {
    return (
        <MyPageSemiLayout>
            <div>master course</div>
            <form>
                <Button type="submit" value="수업 신청하기"/>
            </form>
        </MyPageSemiLayout>
    );
}
