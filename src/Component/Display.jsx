import React from "react";
import "./Display.css"
export default function Display(props) {
    // 현재 url : document.location.href
    function openPopUp(){
        console.log('hello')
        props.viewModal(true)
    }
    return (
        <div className="display">
            <p>당신은 <span className="result-text">{props.work}</span> 전문가가 되기 위해서</p>
            <p>대략 <span className="result-text">{Math.round(10000/props.time)}</span>일 이상 훈련하셔야 합니다! :)</p>
            <div className="btns">
                <button onClick={openPopUp} className="go-btn" type="button">훈련하러 가기 GO! GO!</button>
                <button className="share-btn"type="button">공유하기</button>
            </div>
        </div>
    );
}
