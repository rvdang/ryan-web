import React from 'react';
import './Loading.css'
export const LoadingScreen = (props) => (
    <div id="namescreen">
        <span className="intro" id="r">R</span>
        <span className="intro" id="y">Y</span>
        <span className="intro" id="a1">A</span>
        <span className="intro" id="n1">N</span>
        <span className="intro" id="d">D</span>
        <span className="intro" id="a2">A</span>
        <span className="intro" id="n2">N</span>
        <span className="intro" id="g">G</span>
        {props.children}
    </div>
)

export const Logo = (props) => (
    <div className="logo" style={{opacity: 0, position: "absolute", top: "10px", left: "10px"}}>
        <span className="logo">R&nbsp;</span>
        <span className="logo">YD</span>
        <span className="logo">AA</span>
        <span className="logo">NN</span>
        <span className="logo">&nbsp;G</span>
    </div>
)

export const Badge = (props) => (
    <div>
        <span>R&nbsp;</span>
        <span>&nbsp;D</span>
    </div>
)