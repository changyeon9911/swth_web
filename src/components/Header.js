import { React } from 'react';
import { useReactiveVar } from '@apollo/client';
import { isLoggedInUserVar, logUserOut } from "../apollo";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import routes from './../routes';

const HeaderBox = styled.div`
    display: flex;
    justify-content: space-around;
    height: 80px;
    background-color: ${(props) => props.theme.skyBlue};
`;

const HeaderLogo = styled.div`
    width: 30%;
    padding-left: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const HeaderMenu = styled.div`
    width: 30%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

const MenuBtns = styled.span`
    color: white;
    padding-right: 30px;
`;

export default function Header({executeScroll1, executeScroll2}) {
    const isLoggedInUser = useReactiveVar(isLoggedInUserVar); 
    return(
    <HeaderBox>
        <HeaderLogo>
            <MenuBtns>SWTHLOGO</MenuBtns>
        </HeaderLogo>
        <HeaderMenu>
            <Link to={routes.main}><MenuBtns>Main</MenuBtns></Link>
            <MenuBtns onClick={executeScroll1}>Course</MenuBtns>
            <MenuBtns onClick={executeScroll2}>Tutors</MenuBtns>
            {isLoggedInUser ? <Link to={routes.freeRegister}><MenuBtns>My Page</MenuBtns></Link> 
            : null }
            {isLoggedInUser ? <Link to={routes.main}><MenuBtns onClick={async()=>{await logUserOut();}}>Logout</MenuBtns></Link> 
            : <Link to={routes.login}><MenuBtns>Login</MenuBtns></Link>}
        </HeaderMenu>
    </HeaderBox>
    )    
};