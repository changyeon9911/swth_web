import { React } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import routes from '../../routes';
import { logUserOut } from '../../apollo';

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

export default function MyPageHeader() {
    return(
    <HeaderBox>
        <HeaderLogo>
            <Link to={routes.main}><MenuBtns>SWTHLOGO</MenuBtns></Link>
        </HeaderLogo>
        <HeaderMenu>
            <Link to={routes.main}><MenuBtns onClick={async()=>{await logUserOut();}}>Log out</MenuBtns></Link>
        </HeaderMenu>
    </HeaderBox>
    )    
};