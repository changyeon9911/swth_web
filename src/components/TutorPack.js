import * as React from "react";
import TutorCard from "./TutorCard"

export default function TutorPack() {
    return (
        <div style={{display: "flex"}}>
            <TutorCard>진현</TutorCard>
            <TutorCard>경모</TutorCard>
            <TutorCard>창연</TutorCard>
            <TutorCard>정호</TutorCard>
        </div>
    );
}