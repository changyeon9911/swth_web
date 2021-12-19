import * as React from "react";
import TutorCard from "./TutorCard"

export default function TutorPack({ onClick }) {
    return (
        <div style={{display: "flex"}}>
            <TutorCard onClick={onClick}>진현</TutorCard>
            <TutorCard onClick={onClick}>경모</TutorCard>
            <TutorCard onClick={onClick}>창연</TutorCard>
            <TutorCard onClick={onClick}>정호</TutorCard>
        </div>
    );
}