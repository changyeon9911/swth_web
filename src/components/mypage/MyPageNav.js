import { React } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import routes from '../../routes';

const NavBox = styled.div`
    display: flex;
    justify-content: space-around;
    height: 80px;
    background-color: ${(props) => props.theme.skyBlue};
`;

const NavMenu = styled.div`
    width: 30%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const NavBtns = styled.span`
    color: white;
    padding-right: 30px;
`;

export default function MyPageNav() {
    return(
    <NavBox>
        <NavMenu>
            <Link to={routes.freeRegister}><NavBtns>무료체험 신청하기</NavBtns></Link>
            <Link to={routes.registerCourse}><NavBtns>코스 신청하기</NavBtns></Link>
            <Link to={routes.myCourses}><NavBtns>내 수업 보기</NavBtns></Link>
        </NavMenu>
    </NavBox>
    )    
};