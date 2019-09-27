import posed from "react-pose";
import React from "react";
import styled from "styled-components";

const Project = posed.div({
  thumbnail: {
    position: "static",
    width: 100,
    height: 100,
    transition: { duration: 300 },
    flip: true,
    applyAtStart: {
      margin: "50px"
    },
    applyAtEnd: {
      display: "block"
    }
  },
  fullscreen: {
    position: "fixed",
    right: 0,
    bottom: 34,
    width: "100%",
    height: "calc(100% - 92px)",
    transition: { duration: 500 },
    flip: true,
    applyAtEnd: {
      display: "block"
    }
  },
  zoomed: {
    position: "static",
    width: 200,
    height: 200,
    transition: { duration: 400 },
    flip: true,
    applyAtStart: {
      margin: "0px"
    },
    applyAtEnd: {
      display: "block"
    }
  },
  hidden: {
    applyAtEnd: {
      display: "none"
    }
  }
});

const StyledProject = styled(Project)`
  background: #cbd2d0;
`;

export class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectOpened: false
    };
  }

  handleClick = () => {
    this.setState({ projectOpened: !this.state.projectOpened });
  };

  render() {
    return (
      <div className="shortFadeIn projectdiv maxswitch">
        <div className="shortFadeIn projectrow">
          <ProjectThumbnail
            projectOpened={this.state.projectOpened}
            onClick={this.handleClick}
          />
          <ProjectThumbnail
            projectOpened={this.state.projectOpened}
            onClick={this.handleClick}
          />
          <ProjectThumbnail
            projectOpened={this.state.projectOpened}
            onClick={this.handleClick}
          />
        </div>
        <div className="shortFadeIn projectrow">
          <ProjectThumbnail
            projectOpened={this.state.projectOpened}
            onClick={this.handleClick}
          />
          <ProjectThumbnail
            projectOpened={this.state.projectOpened}
            onClick={this.handleClick}
          />
          <ProjectThumbnail
            projectOpened={this.state.projectOpened}
            onClick={this.handleClick}
          />
        </div>
      </div>
    );
  }
}

export class ProjectThumbnail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      isHover: false
    };
  }

  handleClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
    this.props.onClick();
  };

  render() {
    const { isOpen, isHover } = this.state;
    const { projectOpened } = this.props;
    return (
      <StyledProject
        pose={
          isOpen
            ? "fullscreen"
            : projectOpened
            ? "hidden"
            : isHover
            ? "zoomed"
            : "thumbnail"
        }
        initialPose={"thumbnail"}
        onClick={this.handleClick}
        onMouseEnter={() => this.setState({ isHover: true })}
        onMouseLeave={() => this.setState({ isHover: false })}
      />
    );
  }
}
