import { React, useEffect } from 'react';
import styled from 'styled-components';
import { gql, useQuery } from '@apollo/client';
import { setTried } from '../../apollo';

const ProfileBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
    background-color: lightgray;
`;

const ProfileInfo = styled.div`
    background-color: white;
    border-right: 2px solid lightgray;
    height: 80%;
    width: 20%;
    padding-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ProfileClass = styled.div`
    background-color: white;
    height: 80%;
    width: 40%;
    padding-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const VIEWSTDNTSELF_QUERY = gql`
    query ViewStdntSelf {
        ViewStdntSelf {
            ok
            error
            stdnt {
                email
                username
                tried
            }
        }
    }
`;

const LISTLATESTCLASSES_QUERY = gql`
    query ListLatestClasses {
        ListLatestClasses {
            ok
            error
            classes {
                startsat
                duration
            }
        }
    }
`;

export default function MyPageProfile() {
    const { data : data1, loading: loading1, error: error1, refetch: refetch1 } = useQuery(VIEWSTDNTSELF_QUERY);
    const { data : data2, loading: loading2, error: error2, refetch: refetch2 } = useQuery(LISTLATESTCLASSES_QUERY);
    
    useEffect(() => {
            refetch1();
            refetch2();
        }, []);
    
    const stdnt = (data1 ? data1.ViewStdntSelf.stdnt : false);
    const latestClassesOk = data2?.ListLatestClasses?.ok;
    if (stdnt) {
        setTried(stdnt.tried);
    }

    return(
        <ProfileBox>
            <ProfileInfo>
                { stdnt? <div>Username : {stdnt.username}</div> : <div>Please Log In First.</div>}
                { stdnt? <div>Email : {stdnt.email}</div> : null}
            </ProfileInfo>
            <ProfileClass>
                <div>다음 수업 보기</div>
                {latestClassesOk? <div>{data2?.ListLatestClasses?.classes}</div> : <div>등록된 수업이 없습니다.</div>}
            </ProfileClass>
        </ProfileBox>
    )    
};