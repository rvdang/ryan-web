import React, { useRef } from "react";
import ReactToPrint from 'react-to-print'
import "../Loading.css";


const H2 = props => <p className="categoryHeading">
    {props.children}
</p>

const P = props => <p className={"paragraphStyle " + props.className} style={props.style || {}}>
    {props.children}
</p>

const EntryHeading = ({ title, duration, company, location, id }) => {
    const titleElement = typeof title === "string" ? <P className="titleHeading">{title}</P> : title
    return(
    <div id={id} flexDirection="column">
        <div className="splitTextDiv">
            {titleElement}
            <div style={{ display: "flex", flexDirection: "column-reverse" }}>
                <P style={{ fontWeight: 600 }}>{duration}</P>
            </div>
        </div>
        <div className="splitTextDiv">
            <P>{company}</P>
            <P>{location}</P>
        </div>
    </div>

)}

export const Resume = () => {
    const componentRef = useRef();
    return (
        <div className="shortFadeIn vertical maxswitch">
            <div className="resume" ref={componentRef}>
                <div className="splitTextDiv">
                    <h1 className="nameStyle">Ryan Dang</h1>
                    <div style={{ display: "flex", flexDirection: "column", WebkitBoxPack: "end", justifyContent: "flex-end", alignItems: "flex-end", margin: 0, padding: 0 }}>
                        <P>rvdang@uci.edu</P>
                        <P>(714) 791-9327</P>
                    </div>
                </div>
                <hr className="line"></hr>
                <P className="introDesc" style={{fontWeight: 900}}>I am a back-end software developer with a passion for teaching others the joy of programming</P>
                <H2>EDUCATION</H2>
                <EntryHeading
                    title="BS in Computer Science from the University of California, Irvine"
                    duration="Sep 2016 - Jun 2020"
                    company="3.764 GPA"
                    location="Irvine, CA" />
                <P style={{marginTop: "5px"}}>Relevant Coursework</P>
                <ul style={{marginTop: 2}}>
                    <li><P>Graph Algorithms, Data Structures, Languages, Embedded Software, Data Management, Digital Logic, Statistics</P></li>
                </ul>
                <H2>PROFICIENCIES</H2>
                <ul>
                    <li><P>Javascript, Python, C/C++, Java, HTML/CSS</P></li>
                    <li><P>GraphQL, ReQL for RethinkDB, SQL</P></li>
                    <li><P>Git, Jira</P></li>
                    <li><P>React, Jest, JQuery, ElectronJS</P></li>
                </ul>
                <H2>PROFESSIONAL EXPERIENCE</H2>
                <EntryHeading
                    title="Back-end Software Engineer"
                    duration="Dec 2018 - Present"
                    company="Ardent Labs"
                    location="Irvine, CA" />
                <ul>
                    <li><P>Maintain GraphQL API and RethinkDB database for internal mobile and web applications</P></li>
                    <li><P>Manage and implement AWS and Twilio services for scheduled email and SMS notifications</P></li>
                    <li><P>Review pull requests for maintainability, functionality and structure</P></li>
                    <li><P>Create unit tests with Jest for continuous delivery testing</P></li>
                    <li><P>Interview potential backend engineers and iterns</P></li>
                    <li><P>Refactored statistics system for tracking student performance</P></li>
                    <li><P>Compiled reports for enrollment data between quarters</P></li>
                    <li><P>Patched API security flaw which allowed unrestricted access to private data</P></li>
                    <li><P>Introduced local storage of fetched data to API which greatly improved run time of heavily nested functions containing fetches</P></li>
                </ul>
                <EntryHeading
                    title="Teacher"
                    duration="Jun 2019 - Aug 2019"
                    company="Ardent Academy"
                    location="Irvine, CA" />
                <ul>
                    <li><P>Developed coursework from scratch</P></li>
                    <li>
                        <P>Taught algorithms and data structures to middle and high school students for the USACO competition&nbsp;-&nbsp;
                            <a href="https://repl.it/@rvdang" className="paragraphStyle buttonStyle">Repl Folder</a>
                        </P></li>
                    <li><P>Taught a focus on working through a problem on paper rather than immediately jumping in</P></li>
                    <li><P>Taught javascript, HTML, and CSS to middle school students</P></li>
                </ul>
                <H2>{"CLUBS & ACTIVITIES"}</H2>
                <EntryHeading
                    title="New Venture Competition"
                    duration="Jan 2019 - May 2019"
                    company="Curbd - Second Place Consumer Services"
                    location="Irvine, CA" />
                <ul>
                    <li><P>Designed and developed a business plan for crowdsourced parking application</P></li>
                    <li><P>Pitched to investors at One Million Cups for presentation feedback and business differentiators</P></li>
                    <li><P>Implemented data access object for clean API calls</P></li>
                </ul>
                <EntryHeading
                    title="OMG Robots at UCI"
                    duration="May 2018 - Present"
                    company="Executive Vice President"
                    location="Irvine, CA" />
                <ul>
                    <li><P>Interviewed board members and organize board meetings</P></li>
                    <li><P>Contacted student organizations to secure project collaboration and networking opportunities</P></li>
                    <li><P>Met with third-party fiscal sponsors to secure non-profit status</P></li>
                </ul>
                <EntryHeading
                    title="Management and Information Student Society"
                    duration="Sep 2018 - Present"
                    company="Mentor"
                    location="Irvine, CA" />
                <ul>
                    <li><P>Mock technical interviews for practice</P></li>
                    <li><P>Help set up personal website, linkedin, resume, applying to first internships</P></li>
                    <li><P>Mentor and guide through mentee's courses, projects, and careers</P></li>
                </ul>
                <EntryHeading
                    id="climbing"
                    title="Rock Climbing Team"
                    duration="Sep 2018 - Present"
                    company="Climber"
                    location="Irvine, CA" />
                <H2>PROJECTS</H2>
                <EntryHeading
                    title={<P className="titleHeading">TFT Overlay <i style={{fontWeight: 300, fontSize: "16px"}}>Electron JS, React/HTML/CSS, Javascript</i></P>}
                    duration={<a href="https://github.com/rvdang/TFTOverlay" className="paragraphStyle buttonStyle">Github Link</a>}
                    company="An overlay for the League of Legends game mode Teamfight Tactics to track and display item combinations and descriptions"
                    location="" />
                <EntryHeading
                    title={<P className="titleHeading">Job buddy <i style={{fontWeight: 300, fontSize: "16px"}}>HTML/CSS, Javascript, JQuery</i></P>}
                    duration={<a href="https://devpost.com/software/job-buddy-doyvrt" className="paragraphStyle buttonStyle">Devpost Link</a>}
                    company="Best Web/Mobile Application at HackUCI 2018. Application to store job description information from LinkedIn job postings for
                    future reference"
                    location="" />
            </div>
            <div className="splitTextDiv">
            <ReactToPrint
                trigger={() => (<div className="resume" style={{ padding: 0 }}>
                    <span id="printbutton" className="paragraphStyle buttonStyle">Print this out!</span>
                </div>)}
                content={() => componentRef.current}
            />
            </div>
            
            <p id="extraspace">&nbsp;</p>
        </div>
    )
};
