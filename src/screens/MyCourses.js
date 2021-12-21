import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import MyPageSemiLayout from "../components/mypage/MyPageSemiLayout";
import routes from "../routes";
import CourseCard from "../components/CourseCard";


const VIEWSTDNTSELFPAID_QUERY = gql`
    query ViewStdntSelfPaid {
        ViewStdntSelfPaid {
            ok
            error
            stdnt {
                email
                username
                tried
                courses {
                    id
                    name
                    description
                }
            }
            paidCoursesId
        }
    }
`;

export default function MyCourses() {
    const { data, refetch } = useQuery(VIEWSTDNTSELFPAID_QUERY);
    useEffect(() => {
        refetch();
    });
    
    let courses = data?.ViewStdntSelfPaid?.stdnt?.courses;
    if (!courses) {
        courses = new Array(0);
    } else {
        const paidCoursesId = data?.ViewStdntSelfPaid?.paidCoursesId
        courses = courses.map(e => {if (paidCoursesId.includes(e.id)) {return {...e, paid: true}} return {...e, paid: false}})
    }   
    return (
        <MyPageSemiLayout>
            <div>
                Paid
                {courses.length? 
                    courses.map(course => {
                        if (!course.paid) {
                            return null;
                        }
                        return(
                            <Link key={course.id} to={{pathname: routes.courseRoad, courseId: course.id}}>
                                <CourseCard>{course.name}</CourseCard>
                            </Link>
                            );
                        }) : "No Course"}
            </div>
            <div>
                Waiting for Payment
                {courses.length? 
                    courses.map(course => {
                        if (course.paid) {
                            return null;
                        }
                        return(
                            <Link key={course.id} to={{pathname: routes.courseUnpaid, courseId: course.id}}>
                                <CourseCard>{course.name}</CourseCard>
                            </Link>
                            );
                        }) : "No Course"}
            </div>
        </MyPageSemiLayout>
    );
}
