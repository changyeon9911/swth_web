import { React } from 'react';
import { useReactiveVar } from '@apollo/client';
import { isLoggedInStdntVar } from "../apollo";
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

export default function Header() {
    const isLoggedInStdnt = useReactiveVar(isLoggedInStdntVar); 
    return(
    <HeaderBox>
        <HeaderLogo>
            <MenuBtns>SWTHLOGO</MenuBtns>
        </HeaderLogo>
        <HeaderMenu>
            <Link to={routes.main}><MenuBtns>Main</MenuBtns></Link>
            <MenuBtns>Course</MenuBtns>
            <MenuBtns>Reserve</MenuBtns>
            {isLoggedInStdnt ? <MenuBtns>MyPage</MenuBtns>
            : <Link to={routes.login}><MenuBtns>Login</MenuBtns></Link>}
        </HeaderMenu>
    </HeaderBox>
    )    
};