import React from "react";
import "./Header.css"

export default function Header() {
    return (<>
    <header>
        <h1 className="title">
            <img className="title-img" src="./images/title.png" alt="" />
            <img className="back-img" src="./images/clock.png" alt="" />
        </h1>
        <h2 className="sub-title">"연습은 어제의 당신보다 당신을 더 낫게 만든다."</h2>
        <h3 class="quote-text">
                <span class="strong-text">1만 시간의 법칙</span>은<br />
                어떤 분야의 전문가가 되기 위해서는
                <br />
                최소한 1만 시간의 훈련이 필요하다는 법칙이다.
        </h3>
    </header>
    </>)
}
