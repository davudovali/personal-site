import React from 'react';
import './Resume.scss';

function Resume() {
  return (
    <div className="Resume_container">
      <header>
        <h1>ALI DAVUDOV</h1>
        <div>
          <span>SENIOR FRONTEND DEVELOPER</span>
          <span>
            <svg viewBox="0 0 512 512" height="12" width="12">
              <path
                d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z"/>
            </svg>
            {' '}
            +7 (981) 715 91 97</span>
        </div>
      </header>
      <div className="Resume_leftSide_container">
        <h3>DETAILS</h3>
        <div className="Resume_phoneNumber">+7 (981) 715 91 97</div>
        <div className="Resume_email">davudovali@gmail.com</div>
        <h3>SKILLS</h3>
        <div>JavaScript, TypeScript</div>
        <div>React, Redux</div>
        <div>CI/CD(AWS, Gitlab, Jenkins)</div>
        <div>REST, WS, WebRTC</div>
        <div>Agile and Scrum</div>
        <div>Git</div>
      </div>
      <main className="Resume_main">
        <div className="icon_and_splitter">
          <svg viewBox="0 0 448 512" height="12" width="12">
            <path
              d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"/>
          </svg>
          <div className="splitter"/>
        </div>
        <div>
          <h3>PROFILE</h3>
          <span>
            Highly organized developer with rich experience in various technologies and architectures.
            Strive to improve development processes and communication between departments
          </span>
        </div>
        <div className="icon_and_splitter">
          <svg viewBox="0 0 448 512" height="12" width="12">
            <path
              d="M352 128C352 198.7 294.7 256 224 256C153.3 256 96 198.7 96 128C96 57.31 153.3 0 224 0C294.7 0 352 57.31 352 128zM209.1 359.2L176 304H272L238.9 359.2L272.2 483.1L311.7 321.9C388.9 333.9 448 400.7 448 481.3C448 498.2 434.2 512 417.3 512H30.72C13.75 512 0 498.2 0 481.3C0 400.7 59.09 333.9 136.3 321.9L175.8 483.1L209.1 359.2z"/>
          </svg>
          <div className="splitter"/>
        </div>
        <div>
          <h3>EMPLOYMENT HISTORY</h3>
          <div>
            <h4 >Senior Frontend Developer at Just AI, Saint Petersburg</h4>
            <time>2020-03 - Current</time>
            <div>
              The product is a SPA for building scenarios for chat and calls bots
            </div>
            <ul>
              <ol>Over than 30 channel integrations like instagram, telegram, whatsApp</ol>
              <ol>A powerful analytic module</ol>
              <ol>A web IDE and a visual editor</ol>
              <ol>Custom UI Kit based on Bootstrap</ol>
            </ul>
            <div>Frontend: React, Redux, TypeScript, Bootstrap, MaterialUI, React Testing Library, Cypress Responsibilities:</div>
            <ul>
              <ol>Maintain and develop the main frontend product - developing new features, fixing bugs, writing unit and integration tests</ol>
              <ol>Consult frontend developers and mentor junior and middle frontend developers</ol>
              <ol>Collaborated with designers to improve the UI Kit, integrate colour themes</ol>
              <ol>Review pull requests</ol>
              <ol>Manage the tech dept tasks: prioritize, assign and allocate resources</ol>
            </ul>
          </div>
          <div>
            <h4 className="withDot">Fullstack Developer at Fora Soft, Saint Petesburg</h4>
            <time>2015-12 - 2020-11</time>
            <div>
              Frontend: React, Redux, MaterialUI, Bootstrap, ReactNative, WebRTC
            </div>
            <div>
              Backend: Node.js, SQL(MySQL,PostgreSQL), MongoDB, Redis, RabbitMQ, Tokyo Cabinet, ffmpeg
            </div>
            <div>Projects:</div>
            <ul>
              <ol>Video Conference Service with a whiteboard for up to 50 participants, phone calls in and out, minimal latency(100-200ms), and other standard functionality</ol>
              <ol>Livestreaming Service for DJs with music recognition (similar to Shazam), up to 8 artists and up to 30 000 viewers with latency around 100- 200ms and unlimited viewers with the latency of 4- 15 seconds.</ol>
              <ol>Web Video Editor with features like cutting and cropping videos, adding text layouts, adding audio tracks, visual effects, transitions</ol>
            </ul>
          </div>
        </div>
        <div className="icon_and_splitter">

          <svg viewBox="0 0 448 512" height="12" width="12">
            <path d="M45.63 79.75L52 81.25v58.5C45 143.9 40 151.3 40 160c0 8.375 4.625 15.38 11.12 19.75L35.5 242C33.75 248.9 37.63 256 43.13 256h41.75c5.5 0 9.375-7.125 7.625-13.1L76.88 179.8C83.38 175.4 88 168.4 88 160c0-8.75-5-16.12-12-20.25V87.13L128 99.63l.001 60.37c0 70.75 57.25 128 128 128s127.1-57.25 127.1-128L384 99.62l82.25-19.87c18.25-4.375 18.25-27 0-31.5l-190.4-46c-13-3-26.62-3-39.63 0l-190.6 46C27.5 52.63 27.5 75.38 45.63 79.75zM359.2 312.8l-103.2 103.2l-103.2-103.2c-69.93 22.3-120.8 87.2-120.8 164.5C32 496.5 47.53 512 66.67 512h378.7C464.5 512 480 496.5 480 477.3C480 400 429.1 335.1 359.2 312.8z"/>
          </svg>
          <div className="splitter"/>
        </div>
        <div>
          <h3>EDUCATION</h3>
          <div>
            <h4>Bachelor of Science: Economy</h4>
            <div>Samara State Technology University</div>
            <time>2007-09 - 2012-07</time>
          </div>
        </div>
      </main>

    </div>
  );
}

export default Resume;
