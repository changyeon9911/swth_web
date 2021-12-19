import * as React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/auth/Button';
import { BaseBox } from '../components/shared';
import Video from '../components/Video';
import routes from "../routes";

export default function Main() {
    return(
    <BaseBox>
      <h1>Sweet Han</h1>
      <Video/>
      <Link to={routes.freeRegister}><Button value="무료 수업하기"></Button></Link>
    </BaseBox>
    )
}