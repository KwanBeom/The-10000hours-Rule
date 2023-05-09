import React from "react";
import "./Modal.css";

export default function Modal(props) {
    function closePopUp(e) {
        if (e.target.classList.contains("go-btn") || e.target.classList.contains('modal-backdrop')) {
            props.viewModal(false);
            
        }
    }
    return (
        <div className="modal-backdrop" onClick={closePopUp}>
            <div className="modal">
                <h1 class="modal-title">화이팅!!♥♥♥</h1>
                <p>당신의 꿈을 응원합니다!</p>
                <img src="./images/licat.png" alt="" />
                <button className="go-btn">
                    종료하고 진짜 훈련하러 가기 GO!GO!
                </button>
            </div>
        </div>
    );
}
