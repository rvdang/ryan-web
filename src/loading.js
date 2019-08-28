import React from 'react';
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
    <div>
        <span>R&nbsp;</span>
        <span>YD</span>
        <span>AA</span>
        <span>NN</span>
        <span>&nbsp;G</span>
    </div>
)

export const Badge = (props) => (
    <div>
        <span>R&nbsp;</span>
        <span>&nbsp;D</span>
    </div>
)