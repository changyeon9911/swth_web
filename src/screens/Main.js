import * as React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/auth/Button';
import { BaseBox } from '../components/shared';
import YoutubeVideo from '../components/YoutubeVideo';
import routes from "../routes";
import CourseCard from '../components/CourseCard';
import TutorCard from "../components/TutorCard";
import Modal from '../components/Modal';
import Header from '../components/Header';

export default function Main() {
  const [whosVideo, setWhosVideo] = React.useState("");
  const [modalVisible, setModalVisible] = React.useState(false);
  const openModal = () => {
    setModalVisible(true)
  }
  const closeModal = () => {
    setModalVisible(false)
  }
  const courseRef = React.useRef(null);
  const tutorRef = React.useRef(null);
  const executeScroll1 = () => courseRef.current.scrollIntoView();
  const executeScroll2 = () => tutorRef.current.scrollIntoView();
  return(
    <BaseBox>
      <Header executeScroll1={executeScroll1} executeScroll2={executeScroll2}/>
      <h1>Sweet Han</h1>
      <YoutubeVideo link="https://www.youtube.com/embed/tmA7FjLm3E0"/>
      <div style={{display: "flex"}}>
        <Link to={routes.freeRegister}><Button value="무료 수업하기"/></Link>
      </div>
      <h1>Courses</h1>
      <div ref={courseRef} style={{height: 300, display: "flex", justifyContent: "center", alignItems: "center"}}>
        <div>
          <CourseCard>Master Course</CourseCard>
          <Link to={routes.masterCourse}><Button value="자세히 알아보기"/></Link>
        </div>
        <div>
          <CourseCard>Group Course</CourseCard>
          <Link to={routes.groupCourse}><Button value="자세히 알아보기"/></Link>
        </div>
      </div>
      <h1>Tutors</h1>
      <div ref={tutorRef} style={{height: 300, display: "flex", justifyContent: "center", alignItems: "center"}}>
        <div style={{display: "flex"}}>
            <TutorCard onClick={()=>{setWhosVideo("https://www.youtube.com/embed/tmA7FjLm3E0"); openModal();}}>진현</TutorCard>
            <TutorCard onClick={()=>{setWhosVideo("https://www.youtube.com/embed/tmA7FjLm3E0"); openModal();}}>경모</TutorCard>
            <TutorCard onClick={()=>{setWhosVideo("https://www.youtube.com/embed/tmA7FjLm3E0"); openModal();}}>창연</TutorCard>
            <TutorCard onClick={()=>{setWhosVideo("https://www.youtube.com/embed/tmA7FjLm3E0"); openModal();}}>정호</TutorCard>
        </div>
        {
        modalVisible && <Modal
          visible={modalVisible}
          closable={true}
          maskClosable={true}
          onClose={closeModal}><YoutubeVideo link={whosVideo}/></Modal>
      }
      </div>
    </BaseBox>
    )
}