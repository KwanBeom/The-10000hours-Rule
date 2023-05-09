import React from "react";
import "./InputText.css";

export default function InputText(props) {

    function renderBtn() {
        const userWorkText = document.querySelector(".work").value,
            userTimeText = document.querySelector(".time").value

        if (userWorkText !== "" && userTimeText !== "") {
            props.setWork(userWorkText)
            if(userTimeText <= 24){
                props.setTime(userTimeText)
                props.setprops(true);
            } else {
                alert("24 이하의 값을 입력하세요")
            }
        } else {
            alert("입력되지 않았습니다.");
        }
        
    }
    return (
        <div className="inputs">
            <p>
                나는{" "}
                <input
                    className="work"
                    type="text"
                    placeholder="예)프로그래밍"
                />{" "}
                전문가가 될 것이다
            </p>
            <p>
                나는 앞으로 매일 하루에{" "}
                <input className="time" type="number" placeholder="예)5시간"/>{" "}
                시간씩 훈련할 것이다
            </p>
            <button className="render-btn" type="button" onClick={renderBtn}>
                나는 며칠 동안 훈련을 해야 1만 시간이 될까?
            </button>
        </div>
    );
}
