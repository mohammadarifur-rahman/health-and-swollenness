<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://gitlab.com/the-stay-at-homies/health-and-swollenness">
    <img src="ghi/public/logo.svg" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Health and Swollenness</h3>

  <p align="center">
    Welcome to a new era of Health and Swollenness, where your journey to a healthier, fitter you begins at your fingertips. We are thrilled to introduce our revolutionary health and wellness application designed to empower you on your quest for a stronger, happier, and more energetic life. Say goodbye to fitness confusion and hello to a user-friendly, personalized approach to exercise.
    <br />
    <br />
    <a href="https://gitlab.com/the-stay-at-homies/health-and-swollenness/-/blob/main/README.md?ref_type=heads"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://gitlab.com/the-stay-at-homies/health-and-swollenness/-/blob/main/README.md?ref_type=heads">View Demo</a>
    ·
    <a href="https://gitlab.com/the-stay-at-homies/health-and-swollenness/-/issues">Report Bug</a>
    ·
    <a href="https://gitlab.com/the-stay-at-homies/health-and-swollenness/-/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
      <li><a href="#design">Design</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#local-installation">Installation</a></li>
        <li><a href="#deploy-frontend">Deploy Frontend</a></li>
        <li><a href="#deploy-application">Deploy Application</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Project Name Screen Shot][project-screenshot]](https://the-stay-at-homies.gitlab.io/health-and-swollenness)

At the core of our application is the ability to craft and customize exercise routines that perfectly align with your unique needs, preferences, and goals. Gone are the days of generic workout plans that leave you feeling uninspired. With our intuitive interface, you can create tailored routines that cater to your fitness level, equipment availability, and time constraints, ensuring every workout is both effective and enjoyable.

### Design

[Excalidraw Wireframes](https://excalidraw.com/#json=hiIstjnZBxnFIvdI5pLJo,oEfsrhHNlrHvw-4dMJimwA) · [Excalidraw API Design](https://excalidraw.com/#json=tT9BzEapAOCLdds0O30BU,Vus2g_CyOYrmnN90PNWDrA)

### Built With

[![FastAPI][Fastapi.tiangolo.com]][Fastapi-url] &nbsp; [![React][React.js]][React-url] &nbsp; [![ReactRouter][ReactRouter.com]][ReactRouter-url]

[![Docker][Docker.com]][Docker-url] &nbsp; [![Bootstrap][Bootstrap.com]][Bootstrap-url] &nbsp; [![HTML5][HTML5.com]][HTML5-url]

[![Python][Python.org]][Python-url] &nbsp; [![Javascript][Javascript.com]][Javascript-url] &nbsp; [![PostgreSQL][PostgreSQL.org]][PostgreSQL-url]



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

The installation instructions assume your system has the following software: [Google Chrome](https://www.google.com/chrome/) and [Docker](https://www.docker.com/).

If you don't have these (or equivalent) software, please install them before proceeding.

To get a local copy of Health and Swolleness up and running on your machine follow these simple steps.

### Local Installation

1. Fork and clone the [repository](https://gitlab.com/the-stay-at-homies/health-and-swollenness)

2. Rename the .env.sample file to .env

3. Remove the .gitlab-ci.yml file

4. Run `docker volume create pg-admin`

5. Run `docker volume create fastapi-data`

6. Run `docker compose build`

7. Run `docker compose up`

8. Navigate to [localhost:3000](http://localhost:3000/)

### Deploy Frontend

0. Complete Local Installation instructions

1. Add .gitlab-ci.yml file

2. Uncomment remote frontend VITE_PUBLIC_URL in .env

3. Uncomment local backend VITE_REACT_API_HOST in .gitlab-ci.yml

4. Add CI/CD VITE_PUBLIC_URL variable

5. Update VITE_REACT_API_HOST variable to http://localhost:8000

6. Push changes to repository

### Deploy Application

0. Complete Deploy Frontend instructions

1. Uncomment remote backend VITE_REACT_API_HOST in .gitlab-ci.yml

2. Add CI/CD SIGNING_KEY and DATABASE_URL variables

3. Update CI/CD VITE_REACT_API_HOST variable to cloud provider URL

4. Push changes to repository

5. Deploy backend with cloud provider



<!-- ROADMAP -->
## Roadmap

- [ ] Add workout journal
- [x] Switch to Vite + React
- [ ] Use Redux Toolkit
- [ ] Add websocket group chat
- [ ] Add third part API for estimated calories burned

See the [open issues](https://gitlab.com/the-stay-at-homies/health-and-swollenness/-/issues/?sort=created_date&state=opened&first_page_size=20) for a full list of proposed features (and known issues).



<!-- CONTACT -->
## Contact

[![Contributors][mohammad-shield]][mohammad-url]



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

[FastAPI](https://fastapi.tiangolo.com/) · [React](https://react.dev/) · [React Router](https://reactrouter.com/en/main)

[Docker](https://www.docker.com/) · [Bootstrap](https://getbootstrap.com/) · [HTML5](https://developer.mozilla.org/en-US/docs/Web/HTML)

[Python](https://www.python.org/) · [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) · [PostgreSQL](https://www.postgresql.org/)

[Shields.io](https://shields.io/) · [Simple Icons](https://simpleicons.org/) · [Pexels](https://www.pexels.com/) · [Excalidraw](https://excalidraw.com/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[project-screenshot]: ghi/public/screenshot.png

[Fastapi.tiangolo.com]: https://img.shields.io/badge/Fastapi-009688?style=for-the-badge&logo=fastapi&logoColor=white
[FastAPI-url]: https://fastapi.tiangolo.com/

[React.js]: https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white
[React-url]: https://reactjs.org/

[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com

[Docker.com]: https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white
[Docker-url]: https://www.docker.com/

[HTML5.com]: https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white
[HTML5-url]: https://developer.mozilla.org/en-US/docs/Web/HTML

[Python.org]: https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white
[Python-url]: https://www.python.org/

[Javascript.com]: https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white
[Javascript-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript

[PostgreSQL.org]: https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white
[PostgreSQL-url]: https://www.postgresql.org/

[ReactRouter.com]: https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white
[ReactRouter-url]: https://reactrouter.com/en/main

[mohammad-shield]: https://img.shields.io/badge/Mohammad_Rahman-0A66C2?logo=linkedin&style=for-the-badge
[mohammad-url]: https://www.linkedin.com/in/marahman4748/
