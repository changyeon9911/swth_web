import MyPageSemiLayout from "../components/mypage/MyPageSemiLayout";
import CourseCard from "../components/CourseCard";
import { useLocation } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

const VIEW_COURSE_QUERY = gql`
    query ViewCourseStdnt($id: Int!) {
        ViewCourseStdnt(id: $id) {
            ok
            course {
                classes {
                    id
                    startsat
                }
            }
        }
    }
`;

export default function CourseRoad() {
    const location = useLocation();
    const courseId = location.courseId;
    console.log(courseId);
    const {data, error, loading} = useQuery(VIEW_COURSE_QUERY, {
        variables: {id: courseId}
    })

    if (loading) {
        return (
            <MyPageSemiLayout>
                <CourseCard>1:10 초급</CourseCard>
                <div>Course is on loading ...</div>
            </MyPageSemiLayout>
        );
    } else {
        return (
            <MyPageSemiLayout>
                <CourseCard>1:10 초급</CourseCard>
                {error? <div>Please Try Again</div> : data.ViewCourseStdnt.course.classes.map(c => {const classdate = new Date(parseInt(c.startsat)).toUTCString(); return (<CourseCard key={c.id}>{classdate.slice(0, classdate.length-3)}</CourseCard>)}) } 
            </MyPageSemiLayout>
        )
    }
}