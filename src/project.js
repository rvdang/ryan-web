import posed from 'react-pose'
import React from 'react';
import styled from 'styled-components';

const Project = posed.div({
    thumbnail: {
        width: 100,
        height: 100,
        transition: {duration: 300},
        flip: true,
        applyAtStart: {
            display: "block",
        }
    },
    fullscreen: {
        width: '100%',
        height: '100%',
        transition: {duration: 500},
        flip: true,
        applyAtEnd: {
            display: "block",
        }
    },
    zoomed: {
        width: 300, 
        height: 300,
        transition: { duration: 400},
        flip: true,
        applyAtStart: {
            display: "block",
        }
    },
    hidden: {
        applyAtEnd: {
            display: "none",
        }
    }
})

const StyledProject = styled(Project)`
    background: red;
`

export class Projects extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            projectOpened: false,
        }
    }

    handleClick = () => {
        this.setState({projectOpened: !this.state.projectOpened})
    }

    render(){
        return (
            // <div>
                <div className="name">
                    <ProjectThumbnail projectOpened={this.state.projectOpened} onClick={this.handleClick}/>
                    <ProjectThumbnail projectOpened={this.state.projectOpened} onClick={this.handleClick}/>
                    <ProjectThumbnail projectOpened={this.state.projectOpened} onClick={this.handleClick}/>
                </div>
            
            /* <div className="name">
                <ProjectThumbnail projectOpened={this.state.projectOpened} onClick={this.handleClick}/>
                <ProjectThumbnail projectOpened={this.state.projectOpened} onClick={this.handleClick}/>
                <ProjectThumbnail projectOpened={this.state.projectOpened} onClick={this.handleClick}/>
            </div> */
            /* </div> */
            
        )
    }
}

export class ProjectThumbnail extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isOpen: false,
            isHover: false,
        }
    }

    handleClick = () => {
        this.setState({isOpen: !this.state.isOpen})
        console.log(this.props.projectOpened)
        this.props.onClick()
    }

    render(){
        return (
            <StyledProject
                pose={this.state.isOpen ? "fullscreen" : this.props.projectOpened ? "hidden" : this.state.isHover ? "zoomed" : "thumbnail"}
                initialPose={"thumbnail"}
                onClick={this.handleClick}
                onMouseEnter={() => this.setState({isHover: true})}
                onMouseLeave={() => this.setState({isHover: false})}
            />
        )
    }
}