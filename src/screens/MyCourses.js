import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react";
import MyPageSemiLayout from "../components/mypage/MyPageSemiLayout";


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
    useEffect(() => {
        refetch();
    }, []);
    
    const { data, loading, error, refetch } = useQuery(VIEWSTDNTSELFPAID_QUERY);
    let courses = data?.ViewStdntSelfPaid?.stdnt?.courses;
    if (!courses) {
        courses = new Array(0);
    } else {
        const paidCoursesId = data?.ViewStdntSelfPaid?.paidCoursesId
        console.log(paidCoursesId);
        courses = courses.map(e => {if (e.id in paidCoursesId) {return {...e, paid: true}} else {return {...e, paid: false}}})
    }   
    return (
        <MyPageSemiLayout>
            <div>hello</div>
            <div>{courses.length? "courses" : "No Course"}</div>
        </MyPageSemiLayout>
    );
}
