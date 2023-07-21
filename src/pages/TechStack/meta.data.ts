import * as svgs from 'assets';
import {Framework, TechStack} from 'components';

const techStacks: TechStack[] = [
  {
    id: 23,
    Icon: svgs['AndroidSvg'],
    name: 'Android',
    content:
      'Android one of my favorite native framework in java, but my goal here is to have just a background knowledge in this framework, because all native frameworks now a days especially to all cross platform framework like, flutter, react native etc. are still need the sdk of android. so still I used this as my foundation in all native devices, and yes I will get back here soon once I am done with my goal in DOM',
    work_exp: 1,
    framework: Framework.Javascript,
    graph: [
      {date: new Date(2016, 0, 0), value: 0},
      {date: new Date(2017, 0, 0), value: 0},
      {date: new Date(2018, 0, 0), value: 40},
      {date: new Date(2019, 0, 0), value: 60},
      {date: new Date(2020, 0, 0), value: 10},
      {date: new Date(2021, 0, 0), value: 5},
      {date: new Date(2022, 0, 0), value: 0},
      {date: new Date(2023, 0, 0), value: 0}
    ],
    colors: ['rgba(132, 149, 55, 1)', 'rgba(132, 149, 55, 0.1)']
  },
  {
    id: 31,
    Icon: svgs['AwsSvg'],
    name: 'Amazon WeFb Service',
    content:
      "The time that I'm comfortable on my knowledge in Web APIs and Javascript and wondering how I could deploy my web application, so I went to other hosting servers like heroku, firebase, netlify and such, until I realize the most popular infrastructure multiple services, so right now, I am still investing time to understand the other services and features of AWS",
    work_exp: 0.5,
    framework: Framework.Infra,
    graph: [
      {date: new Date(2016, 0, 0), value: 0},
      {date: new Date(2017, 0, 0), value: 0},
      {date: new Date(2018, 0, 0), value: 0},
      {date: new Date(2019, 0, 0), value: 0},
      {date: new Date(2020, 0, 0), value: 0},
      {date: new Date(2021, 0, 0), value: 25},
      {date: new Date(2022, 0, 0), value: 100},
      {date: new Date(2023, 0, 0), value: 50}
    ],
    colors: ['rgba(255, 153, 0, 1)', 'rgba(255, 153, 0, 0.1)']
  },
  {
    id: 27,
    Icon: svgs['BitbucketSvg'],
    name: 'Bitbucket',
    content:
      "I didn't usually use this as my repo in project because for me github is much more closest technology on what I need but, I use this repo on my first corporate company because they used bitbucket rather than other git repository and I did make CICD here for the automation of deployment.",
    work_exp: 0.5,
    framework: Framework.WebbasedRepo,
    colors: ['rgba(0, 82, 204, 1)', 'rgba(0, 82, 204, 0.1)'],
    graph: [
      {date: new Date(2016, 0, 0), value: 0},
      {date: new Date(2017, 0, 0), value: 0},
      {date: new Date(2018, 0, 0), value: 0},
      {date: new Date(2019, 0, 0), value: 0},
      {date: new Date(2020, 0, 0), value: 0},
      {date: new Date(2021, 0, 0), value: 5},
      {date: new Date(2022, 0, 0), value: 25},
      {date: new Date(2023, 0, 0), value: 30}
    ]
  },
  {
    id: 27.1,
    Icon: svgs['CircleCISvg'],
    name: 'Circle CI',
    content:
      "I went to this CICD platform the time that I am wondering how do I automate my deployment for my website and backend, 2021 I started reading and create sample pipelines just to deploy it in web server and by 2022 I used it as my CICD platform on my projects, still monitoring on their updates because the latest version of this wasn't table yet",
    work_exp: 0.5,
    framework: Framework.WebbasedRepo,
    colors: ['rgba(0, 0, 0, 0.5)', 'rgba(0, 0, 0, 0.1)'],
    graph: [
      {date: new Date(2016, 0, 0), value: 0},
      {date: new Date(2017, 0, 0), value: 0},
      {date: new Date(2018, 0, 0), value: 0},
      {date: new Date(2019, 0, 0), value: 0},
      {date: new Date(2020, 0, 0), value: 5},
      {date: new Date(2021, 0, 0), value: 50},
      {date: new Date(2022, 0, 0), value: 60},
      {date: new Date(2023, 0, 0), value: 20}
    ]
  },
  {
    id: 3.5,
    Icon: svgs['CssSvg'],
    name: 'Cascading Style Sheet',
    content:
      'This is the style sheet that was introduced by my processor on high school, we did make change some background image and background colors and create simple design for the website. until I started to play with animation, read their newly features and implement it on some projects, until now I still experimenting some style technique in css.',
    work_exp: 3.5,
    framework: Framework.StyleSheet,
    colors: ['rgba(0, 118, 214, 1)', 'rgba(0, 118, 214, 0.1)'],
    graph: [
      {date: new Date(2016, 0, 0), value: 10},
      {date: new Date(2017, 0, 0), value: 20},
      {date: new Date(2018, 0, 0), value: 20},
      {date: new Date(2019, 0, 0), value: 20},
      {date: new Date(2020, 0, 0), value: 70},
      {date: new Date(2021, 0, 0), value: 90},
      {date: new Date(2022, 0, 0), value: 100},
      {date: new Date(2023, 0, 0), value: 100}
    ]
  },
  {
    id: 28,
    Icon: svgs['DockerSvg'],
    name: 'Docker',
    content:
      "When I knew about docker, I really appreciate how powerful this technology wherein you can containerize your application with a standalone environment, this is a good technology for those cases that has a limited on service, most of the time I use docker to my backend server and databases, because it doesn't make sense if you containerize the application that can handle directly by a web server and that is how my nginx comes into play, even I know how powerful this technolgoy is, I still look out of the box on how not to abuse the usage of this and best practices of it. as of now I still continue exploring this technology.",
    work_exp: 0.75,
    framework: Framework.CICD,
    colors: ['rgba(0, 106, 128, 1)', 'rgba(0, 106, 128, 0.1)'],
    graph: [
      {date: new Date(2016, 0, 0), value: 0},
      {date: new Date(2017, 0, 0), value: 0},
      {date: new Date(2018, 0, 0), value: 0},
      {date: new Date(2019, 0, 0), value: 10},
      {date: new Date(2020, 0, 0), value: 0},
      {date: new Date(2021, 0, 0), value: 10},
      {date: new Date(2022, 0, 0), value: 50},
      {date: new Date(2023, 0, 0), value: 80}
    ]
  },
  {
    id: 15,
    Icon: svgs['ExpressSvg'],
    name: 'Express',
    content:
      'This is my first backend framework I used in the project, I used it when I was 3rd college implement the ingration in practice and used it as my backend server in my thesis, so I could say I learned alot the time that I playing with this framework because, I knew the basics of backend architecture, best practices and how is the lifecylce of the backend. so when I knew it, I got a chance to boost my confident to enter in freelance world, because I know I can create system as full stack developer.',
    work_exp: 1,
    framework: Framework.Javascript,
    colors: ['rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 0.1)'],
    graph: [
      {date: new Date(2016, 0, 0), value: 0},
      {date: new Date(2017, 0, 0), value: 0},
      {date: new Date(2018, 0, 0), value: 10},
      {date: new Date(2019, 0, 0), value: 60},
      {date: new Date(2020, 0, 0), value: 100},
      {date: new Date(2021, 0, 0), value: 50},
      {date: new Date(2022, 0, 0), value: 40},
      {date: new Date(2023, 0, 0), value: 20}
    ]
  },
  {
    id: 20,
    Icon: svgs['FastApiSvg'],
    name: 'FastAPI',
    content:
      "It's year 2021 when I start exploring on other backend framework, I used python just to explore and gives knowledge in me about backend, my goal that time is to implement a complete backend server that provide services for my client application, at the end I implement a python framework as my backend.",
    work_exp: 0.75,
    framework: Framework.Python,
    colors: ['rgba(0, 148, 133, 1)', 'rgba(0, 148, 133, 0.1)'],
    graph: [
      {date: new Date(2016, 0, 0), value: 0},
      {date: new Date(2017, 0, 0), value: 0},
      {date: new Date(2018, 0, 0), value: 0},
      {date: new Date(2019, 0, 0), value: 0},
      {date: new Date(2020, 0, 0), value: 0},
      {date: new Date(2021, 0, 0), value: 25},
      {date: new Date(2022, 0, 0), value: 60},
      {date: new Date(2023, 0, 0), value: 15}
    ]
  },
  {
    id: 33,
    Icon: svgs['FirebaseSvg'],
    name: 'Firebase',
    content:
      'I used firebase before when I deploy my thesis project at school, create messaging application thaat handle text and image, and firebase is good for those projects that totally dont need extra configuration setup on backend, so I used just to have portfolio project like messaging, but in terms of performance, firebase has a nice and pretty good quality services.',
    work_exp: 0.75,
    framework: Framework.Infra,
    colors: ['rgba(255, 130, 5, 1)', 'rgba(255, 130, 5, 0.1)'],
    graph: [
      {date: new Date(2016, 0, 0), value: 0},
      {date: new Date(2017, 0, 0), value: 0},
      {date: new Date(2018, 0, 0), value: 25},
      {date: new Date(2019, 0, 0), value: 50},
      {date: new Date(2020, 0, 0), value: 70},
      {date: new Date(2021, 0, 0), value: 20},
      {date: new Date(2022, 0, 0), value: 20},
      {date: new Date(2023, 0, 0), value: 0}
    ]
  },
  {
    id: 19,
    Icon: svgs['FlaskSvg'],
    name: 'Flask',
    content:
      "My 2nd backend framework after I learned express, I did learn from this not just because I want to learn flask, its because I need to learn flask sounds crazy right, that time I got freelance project, that is my first project as well so I didn't expect that I went on that situation, because our backend has an issues on their schedule, so I replaced him as the backend, and thanks to my knowledge in express framework I have background idea",
    work_exp: 1,
    framework: Framework.Python,
    colors: ['rgba(0, 43, 0, 1)', 'rgba(0, 43, 0, 0.1)'],
    graph: [
      {date: new Date(2016, 0, 0), value: 0},
      {date: new Date(2017, 0, 0), value: 0},
      {date: new Date(2018, 0, 0), value: 0},
      {date: new Date(2019, 0, 0), value: 10},
      {date: new Date(2020, 0, 0), value: 20},
      {date: new Date(2021, 0, 0), value: 60},
      {date: new Date(2022, 0, 0), value: 50},
      {date: new Date(2023, 0, 0), value: 5}
    ]
  },
  {
    id: 24,
    Icon: svgs['GitSvg'],
    name: 'Git',
    content:
      'I started learing git when I take my 2nd year college at year 2019, when my instructor at copro subject went to git topic and implement it on the class, so until now I work with git of course because this actually the medium platform to transmit codes to the repository and control version of your system.',
    work_exp: 2,
    framework: Framework.VersionCtrl,
    colors: ['rgba(255, 52, 20, 1)', 'rgba(255, 52, 20, 0.1)'],
    graph: [
      {date: new Date(2016, 0, 0), value: 0},
      {date: new Date(2017, 0, 0), value: 0},
      {date: new Date(2018, 0, 0), value: 0},
      {date: new Date(2019, 0, 0), value: 50},
      {date: new Date(2020, 0, 0), value: 50},
      {date: new Date(2021, 0, 0), value: 90},
      {date: new Date(2022, 0, 0), value: 80},
      {date: new Date(2023, 0, 0), value: 100}
    ]
  },
  {
    id: 25,
    Icon: svgs['GithubSvg'],
    name: 'Github',
    content:
      'My first git repository I started using this when creating and experimenting my java application and save it in github, I started playing with its CICD technology called github actions, when I implement the automation testing and deployment in my web application, further more stil learning on its new features and best practices how to maintain repositories.',
    work_exp: 3,
    framework: Framework.WebbasedRepo,
    colors: ['rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 0.1)'],
    graph: [
      {date: new Date(2016, 0, 0), value: 0},
      {date: new Date(2017, 0, 0), value: 25},
      {date: new Date(2018, 0, 0), value: 40},
      {date: new Date(2019, 0, 0), value: 30},
      {date: new Date(2020, 0, 0), value: 40},
      {date: new Date(2021, 0, 0), value: 50},
      {date: new Date(2022, 0, 0), value: 40},
      {date: new Date(2023, 0, 0), value: 80}
    ]
  },
  {
    id: 26,
    Icon: svgs['GitlabSvg'],
    name: 'Gitlab',
    content:
      'I could say this is my second best git repo, because its features is goods for team and collaboration, I went to start use it when I creating portfolio project and I got some friends that they want to play with my portfolio project and that is the first time I handled a project on my life but even that I am started playing around, I strictly monitoring and managing the repo in a right way just not to mess up, but as of now I am not active to use this git repo, because now a days github are most common in the industry.',
    work_exp: 3,
    framework: Framework.WebbasedRepo,
    colors: ['rgba(226, 67, 41, 1)', 'rgba(226, 67, 41, 0.1)'],
    graph: [
      {date: new Date(2016, 0, 0), value: 0},
      {date: new Date(2017, 0, 0), value: 0},
      {date: new Date(2018, 0, 0), value: 25},
      {date: new Date(2019, 0, 0), value: 25},
      {date: new Date(2020, 0, 0), value: 10},
      {date: new Date(2021, 0, 0), value: 50},
      {date: new Date(2022, 0, 0), value: 60},
      {date: new Date(2023, 0, 0), value: 30}
    ]
  },
  {
    id: 32,
    Icon: svgs['GoogleCloudSvg'],
    name: 'Google Cloud Platform',
    content:
      'I started use this service on Google Cloud Platform when I integrate the google signin on the system, and recently we used the secret key manager from google service. until now still continue to read whats new and updates on GCP.',
    work_exp: 0.5,
    framework: Framework.Infra,
    colors: ['rgba(234, 67, 53, 1)', 'rgba(251, 188, 5, 0.1)'],
    graph: [
      {date: new Date(2016, 0, 0), value: 0},
      {date: new Date(2017, 0, 0), value: 0},
      {date: new Date(2018, 0, 0), value: 0},
      {date: new Date(2019, 0, 0), value: 0},
      {date: new Date(2020, 0, 0), value: 0},
      {date: new Date(2021, 0, 0), value: 15},
      {date: new Date(2022, 0, 0), value: 20},
      {date: new Date(2023, 0, 0), value: 30}
    ]
  },
  {
    id: 21,
    Icon: svgs['GraphqlSvg'],
    name: 'GraphQL',
    content:
      'I dont have yet any project with GraphQL, it was just last year when I explore and read about how good this technology is, but yes I do background reading on its documentation, and currently I enrolled some courses to know what is the best practice approach to implementing this technolgoy.',
    work_exp: 0.25,
    framework: Framework.QL,
    colors: ['rgba(212, 1, 111, 1)', 'rgba(212, 1, 111, 0.1)'],
    graph: [
      {date: new Date(2016, 0, 0), value: 0},
      {date: new Date(2017, 0, 0), value: 0},
      {date: new Date(2018, 0, 0), value: 0},
      {date: new Date(2019, 0, 0), value: 0},
      {date: new Date(2020, 0, 0), value: 0},
      {date: new Date(2021, 0, 0), value: 0},
      {date: new Date(2022, 0, 0), value: 15},
      {date: new Date(2023, 0, 0), value: 90}
    ]
  },
  {
    id: 3,
    Icon: svgs['HtmlSvg'],
    name: 'Hyper Text Markup Language',
    content:
      'First time I encounter html its kind of easy to comprehend nothing so special syntax, but I stop learning from it when I went to senior high school past 2016 because that time I met java, when came back to learn web framework again past 2020, I start to read again about updates on browser engine and Web APIs, until now still looking for some updates and new in the browser.',
    work_exp: 3.5,
    framework: Framework.MarkupLanguage,
    colors: ['rgba(255, 63, 10, 1)', 'rgba(255, 63, 10, 0.1)'],
    graph: [
      {date: new Date(2016, 0, 0), value: 20},
      {date: new Date(2017, 0, 0), value: 15},
      {date: new Date(2018, 0, 0), value: 5},
      {date: new Date(2019, 0, 0), value: 5},
      {date: new Date(2020, 0, 0), value: 25},
      {date: new Date(2021, 0, 0), value: 80},
      {date: new Date(2022, 0, 0), value: 90},
      {date: new Date(2023, 0, 0), value: 90}
    ]
  },
  {
    id: 22,
    Icon: svgs['JavaSvg'],
    name: 'Java',
    content:
      "My first love programming language, this gives me a lot knowledge in whole concept of programming from basics to clean architecture, I could consider that all my foundation in terms of clean code and knoledge in Object Oriented Design Concept are found here in this language, I like java the way how it organize and play on the objects and that is fun for me, the more I enjoy things, the more I work on it, but as of now I am not focus on this programming language, until I did'nt satisfied my objective in web frameworks.",
    work_exp: 1.5,
    framework: Framework.Java,
    colors: ['rgba(214, 104, 0, 1)', 'rgba(214, 104, 0, 0.1)'],
    graph: [
      {date: new Date(2016, 0, 0), value: 30},
      {date: new Date(2017, 0, 0), value: 20},
      {date: new Date(2018, 0, 0), value: 35},
      {date: new Date(2019, 0, 0), value: 75},
      {date: new Date(2020, 0, 0), value: 80},
      {date: new Date(2021, 0, 0), value: 20},
      {date: new Date(2022, 0, 0), value: 0},
      {date: new Date(2023, 0, 0), value: 0}
    ]
  },
  {
    id: 1,
    Icon: svgs['JavascriptSvg'],
    name: 'Javascript',
    content:
      "As of now still focus on javascript framework, there are lots of opportunity in javascript because of its growing community that's why I came up here and took this language, I started to learn its basics again from ES5 to ESNext lately 2021, deep dive into its new architecture called just-in-time architecture, new features of its js-engine and a new design queque called microtask that used for promises, after I learned its theory I started playing their frameworks until now.",
    work_exp: 3.5,
    framework: Framework.Javascript,
    colors: ['rgba(252, 228, 69, 1)', 'rgba(252, 228, 69, 0.1)'],
    graph: [
      {date: new Date(2016, 0, 0), value: 20},
      {date: new Date(2017, 0, 0), value: 5},
      {date: new Date(2018, 0, 0), value: 5},
      {date: new Date(2019, 0, 0), value: 5},
      {date: new Date(2020, 0, 0), value: 20},
      {date: new Date(2021, 0, 0), value: 80},
      {date: new Date(2022, 0, 0), value: 100},
      {date: new Date(2023, 0, 0), value: 100}
    ]
  },
  {
    id: 6,
    Icon: svgs['LessSvg'],
    name: 'Leaner Style Sheets',
    content:
      'I started playing this style sheet when I got bored at css, but still this is a decendant version of css the difference is the synntax and idea of its logic and other features, I appreciate its concept for those application that has a complex ui interfaces because it has scoping technique that could easily to understand.',
    work_exp: 1.5,
    framework: Framework.StyleSheet,
    colors: ['rgba(0, 42, 102, 1)', 'rgba(0, 42, 102, 0.1)'],
    graph: [
      {date: new Date(2016, 0, 0), value: 0},
      {date: new Date(2017, 0, 0), value: 0},
      {date: new Date(2018, 0, 0), value: 0},
      {date: new Date(2019, 0, 0), value: 5},
      {date: new Date(2020, 0, 0), value: 20},
      {date: new Date(2021, 0, 0), value: 15},
      {date: new Date(2022, 0, 0), value: 15},
      {date: new Date(2023, 0, 0), value: 20}
    ]
  },
  {
    id: 30,
    Icon: svgs['MongoSvg'],
    name: 'MongoDB',
    content:
      'I usually used no-sql for particular service of the system, like logs, transactions, messaging etc., I started use this database when I create my previous portfolio project that has single service',
    work_exp: 1.75,
    framework: Framework.Database,
    colors: ['rgba(65, 148, 50, 1)', 'rgba(65, 148, 50, 0.1)'],
    graph: [
      {date: new Date(2016, 0, 0), value: 0},
      {date: new Date(2017, 0, 0), value: 0},
      {date: new Date(2018, 0, 0), value: 0},
      {date: new Date(2019, 0, 0), value: 0},
      {date: new Date(2020, 0, 0), value: 15},
      {date: new Date(2021, 0, 0), value: 50},
      {date: new Date(2022, 0, 0), value: 100},
      {date: new Date(2023, 0, 0), value: 20}
    ]
  },
  {
    id: 34,
    Icon: svgs['NginxSvg'],
    name: 'Nginx',
    content:
      'I chose nginx compare to apache because nginx has a lot features that proposed by which can help you in deployment and exposing your web application in the internet and it has a lot capabilities to handle your load balancing, reverse proxying and etc. still reading on their documentation to implement all those features. because honestly speaking reverse proxy is the only feature I used in nginx, but hoping for the opportunity that I could explore this powerful web server',
    work_exp: 0.5,
    framework: Framework.Webserver,
    colors: ['rgba(0, 153, 0, 1)', 'rgba(0, 153, 0, 0.1)'],
    graph: [
      {date: new Date(2016, 0, 0), value: 0},
      {date: new Date(2017, 0, 0), value: 0},
      {date: new Date(2018, 0, 0), value: 0},
      {date: new Date(2019, 0, 0), value: 0},
      {date: new Date(2020, 0, 0), value: 0},
      {date: new Date(2021, 0, 0), value: 25},
      {date: new Date(2022, 0, 0), value: 50},
      {date: new Date(2023, 0, 0), value: 15}
    ]
  },
  {
    id: 7,
    Icon: svgs['NodeSvg'],
    name: 'Node',
    content:
      "late year 2020 I started to learn in javascript, I found Node environment that cater the server side of javascript and some new features that introduced in 2015, I search on how node works in javascript so it is just like a containerized environemnt of javascript, webapis and browser enginem, 2 yrs after I started to create my own module and deploy it in node package manager, and 'til now I love creating modules and used by other developers",
    work_exp: 2.75,
    framework: Framework.Javascript,
    colors: ['rgba(65, 135, 63, 1)', 'rgba(65, 135, 63, 0.1)'],
    graph: [
      {date: new Date(2016, 0, 0), value: 0},
      {date: new Date(2017, 0, 0), value: 0},
      {date: new Date(2018, 0, 0), value: 0},
      {date: new Date(2019, 0, 0), value: 15},
      {date: new Date(2020, 0, 0), value: 20},
      {date: new Date(2021, 0, 0), value: 25},
      {date: new Date(2022, 0, 0), value: 20},
      {date: new Date(2023, 0, 0), value: 15}
    ]
  },
  // {
  //   id: 17,
  //   Icon: svgs['NpmSvg'],
  //   name: 'Node Package Manager',
  //   content:
  //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque varius sollicitudin. Aliquam erat volutpat. Nulla facilisi. Duis eget lacinia tellus, sed posuere quam. Curabitur scelerisque orci nec ultricies lobortis. Vivamus arcu ipsum, posuere in erat sed, tincidunt semper felis. Vestibulum ac semper eros. Aenean sollicitudin sapien nec lobortis ultricies. Sed ultrices egestas volutpat. Quisque laoreet, risus accumsan porttitor sagittis, elit elit lobortis enim, vel rutrum urna enim non mi.',
  //   work_exp: 2.5,
  //   framework: Framework.Infra
  // },
  {
    id: 29,
    Icon: svgs['PostgresqlSvg'],
    name: 'Postgresql',
    content:
      'I much like sql compare to other database, because you can properly organized your data structure for your system, standardize you database model and applicale on design patterns like divide and conquer and single responsiblity, which makes more efficient and well design the your system database',
    work_exp: 2,
    framework: Framework.Database,
    colors: ['rgba(49, 100, 140, 1)', 'rgba(49, 100, 140, 0.1)'],
    graph: [
      {date: new Date(2016, 0, 0), value: 0},
      {date: new Date(2017, 0, 0), value: 25},
      {date: new Date(2018, 0, 0), value: 10},
      {date: new Date(2019, 0, 0), value: 0},
      {date: new Date(2020, 0, 0), value: 25},
      {date: new Date(2021, 0, 0), value: 75},
      {date: new Date(2022, 0, 0), value: 50},
      {date: new Date(2023, 0, 0), value: 50}
    ]
  },
  {
    id: 18,
    Icon: svgs['PythonSvg'],
    name: 'Python',
    content:
      'I use python most of the time as my backend, I started to play with python late 2019 learn its basics because that time I want to get in advance on my course just to easily to catch up in the topic, then after years, on 2021 I tried to learn other python backend framework because I knew that python is much more capability in computing and much faster than others runtime, and year 2022 I started my freelance project as backend developer and use my knowledge in python frameworks.',
    work_exp: 2,
    framework: Framework.Python,
    colors: ['rgba(55, 115, 165, 1)', 'rgba(55, 115, 165, 0.1)'],
    graph: [
      {date: new Date(2016, 0, 0), value: 10},
      {date: new Date(2017, 0, 0), value: 5},
      {date: new Date(2018, 0, 0), value: 5},
      {date: new Date(2019, 0, 0), value: 20},
      {date: new Date(2020, 0, 0), value: 50},
      {date: new Date(2021, 0, 0), value: 30},
      {date: new Date(2022, 0, 0), value: 50},
      {date: new Date(2023, 0, 0), value: 10}
    ]
  },
  {
    id: 12,
    Icon: svgs['ReactSpringSvg'],
    name: 'React Spring',
    content:
      'I occasionally use this framework, because not my all projects are requiring some animation like this, I started to use react spring for fun or some case of experimental design on website, but I really love the way how it works, it make sense to me.',
    work_exp: 1.5,
    framework: Framework.Animation,
    colors: ['rgba(255, 109, 109, 1)', 'rgba(255, 109, 109, 0.1)'],
    graph: [
      {date: new Date(2016, 0, 0), value: 0},
      {date: new Date(2017, 0, 0), value: 0},
      {date: new Date(2018, 0, 0), value: 0},
      {date: new Date(2019, 0, 0), value: 0},
      {date: new Date(2020, 0, 0), value: 15},
      {date: new Date(2021, 0, 0), value: 50},
      {date: new Date(2022, 0, 0), value: 25},
      {date: new Date(2023, 0, 0), value: 60}
    ]
  },
  {
    id: 12,
    Icon: svgs['ElectronSvg'],
    name: 'Electron JS',
    content:
      'Currently I am still diving to this framework theoretically, I made some basic application for testing its features and exploring its functionalities and capabilities, if I do have project that related to desktop system I take that opportunity to explore and learned about this framework.',
    work_exp: 0.25,
    framework: Framework.Animation,
    colors: ['rgba(77, 216, 255, 1)', 'rgba(77, 216, 255, 0.1)'],
    graph: [
      {date: new Date(2016, 0, 0), value: 0},
      {date: new Date(2017, 0, 0), value: 0},
      {date: new Date(2018, 0, 0), value: 0},
      {date: new Date(2019, 0, 0), value: 0},
      {date: new Date(2020, 0, 0), value: 25},
      {date: new Date(2021, 0, 0), value: 2},
      {date: new Date(2022, 0, 0), value: 15},
      {date: new Date(2023, 0, 0), value: 25}
    ]
  },
  {
    id: 9.1,
    Icon: svgs['ReactNativeSvg'],
    name: 'React Native',
    content:
      'My first cross platform framework in javascript, I like the way how this framework handle the native in ios and android, its not so difficult to maintained because all configuration for android and ios is separated by directory, totally not too hard to understandard because it is similar on semantic tag element in html, as of now I stop learning on native because I focused on React DOM and part of my goal is get back on this frameowrk again and learn new frontend native frameworks in other programming language',
    work_exp: 1.75,
    framework: Framework.Javascript,
    colors: ['rgba(77, 216, 255, 1)', 'rgba(77, 216, 255, 0.1)'],
    graph: [
      {date: new Date(2016, 0, 0), value: 0},
      {date: new Date(2017, 0, 0), value: 0},
      {date: new Date(2018, 0, 0), value: 0},
      {date: new Date(2019, 0, 0), value: 0},
      {date: new Date(2020, 0, 0), value: 80},
      {date: new Date(2021, 0, 0), value: 100},
      {date: new Date(2022, 0, 0), value: 70},
      {date: new Date(2023, 0, 0), value: 20}
    ]
  },
  {
    id: 9,
    Icon: svgs['ReactSvg'],
    name: 'React JS',
    content:
      "Here in this library I found a full potential functionality in presentation layer, in 2021 I started to learn about React concept, read about its lifecycle, hooks, features and its best practices from their documentation, React focus on presentation layer with a use of jsx, that gives more easy comprehension to developers to represent it in the browser, the way how data-driven works in React is more what I liked, its side effects are completely helpful to manage the behavior of web application, so 'til now I try to maximize the capabilities of React by reading and exploring its features.",
    work_exp: 2.5,
    framework: Framework.Javascript,
    colors: ['rgba(77, 216, 255, 1)', 'rgba(77, 216, 255, 0.1)'],
    graph: [
      {date: new Date(2016, 0, 0), value: 0},
      {date: new Date(2017, 0, 0), value: 0},
      {date: new Date(2018, 0, 0), value: 0},
      {date: new Date(2019, 0, 0), value: 0},
      {date: new Date(2020, 0, 0), value: 75},
      {date: new Date(2021, 0, 0), value: 90},
      {date: new Date(2022, 0, 0), value: 100},
      {date: new Date(2023, 0, 0), value: 100}
    ]
  },
  {
    id: 11,
    Icon: svgs['ReduxSagaSvg'],
    name: 'Redux Saga',
    content:
      'I encountered redux saga during the worst case in promises, but before I went here, I start with redux thunk, which absolutely not good enough to clean your api calls inside, so redux introduced its side effects middleware which is saga, who keep looking on the action if changed, the saga will dispatch as well, it is a fieldly utility tools wherein you can design your side effects without nesting api calls in action creators.',
    work_exp: 2,
    framework: Framework.Javascript,
    colors: ['rgba(120, 255, 71, 1)', 'rgba(120, 255, 71, 0.1)'],
    graph: [
      {date: new Date(2016, 0, 0), value: 0},
      {date: new Date(2017, 0, 0), value: 0},
      {date: new Date(2018, 0, 0), value: 0},
      {date: new Date(2019, 0, 0), value: 0},
      {date: new Date(2020, 0, 0), value: 25},
      {date: new Date(2021, 0, 0), value: 50},
      {date: new Date(2022, 0, 0), value: 70},
      {date: new Date(2023, 0, 0), value: 80}
    ]
  },
  {
    id: 10,
    Icon: svgs['ReduxSvg'],
    name: 'Redux',
    content:
      "The best state management in React, for me this is the most powerful state manager, where in you can access the through components or hooks the current state of store, this is widely used common in projects that I've joined, it can handle states per module, it design to persist the data per module not only for specific component, so started working and grind on this technolgoy in may 2020 until now.",
    work_exp: 2.25,
    framework: Framework.Javascript,
    colors: ['rgba(98, 0, 255, 1)', 'rgba(98, 0, 255, 0.1)'],
    graph: [
      {date: new Date(2016, 0, 0), value: 0},
      {date: new Date(2017, 0, 0), value: 0},
      {date: new Date(2018, 0, 0), value: 0},
      {date: new Date(2019, 0, 0), value: 0},
      {date: new Date(2020, 0, 0), value: 50},
      {date: new Date(2021, 0, 0), value: 80},
      {date: new Date(2022, 0, 0), value: 100},
      {date: new Date(2023, 0, 0), value: 100}
    ]
  },
  {
    id: 5,
    Icon: svgs['ScssSvg'],
    name: 'Sassy Cascading Style Sheets',
    content:
      'I like this abstraction of css, this is more readable compare to others, but all of these existing css processors are still work as css under the hood, but the advantage of using it is being cleaner and avoid much redundancies in styling, which is good for large components or pages',
    work_exp: 1.5,
    framework: Framework.StyleSheet,
    colors: ['rgba(255, 51, 153, 1)', 'rgba(255, 51, 153, 0.1)'],
    graph: [
      {date: new Date(2016, 0, 0), value: 0},
      {date: new Date(2017, 0, 0), value: 0},
      {date: new Date(2018, 0, 0), value: 10},
      {date: new Date(2019, 0, 0), value: 20},
      {date: new Date(2020, 0, 0), value: 5},
      {date: new Date(2021, 0, 0), value: 5},
      {date: new Date(2022, 0, 0), value: 15},
      {date: new Date(2023, 0, 0), value: 20}
    ]
  },
  // {
  //   id: 14,
  //   Icon: svgs['SocketSvg'],
  //   name: 'Socket.io',
  //   content:
  //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque varius sollicitudin. Aliquam erat volutpat. Nulla facilisi. Duis eget lacinia tellus, sed posuere quam. Curabitur scelerisque orci nec ultricies lobortis. Vivamus arcu ipsum, posuere in erat sed, tincidunt semper felis. Vestibulum ac semper eros. Aenean sollicitudin sapien nec lobortis ultricies. Sed ultrices egestas volutpat. Quisque laoreet, risus accumsan porttitor sagittis, elit elit lobortis enim, vel rutrum urna enim non mi.',
  //   work_exp: 1.5,
  //   framework: Framework.Javascript,
  //   fram,ework_data: {
  //     color: {border: 'rgba(0, 0, 0, 1)', body: 'rgba(0, 0, 0, 0.1)'},
  //     data: [
  //       {date: new Date(2016, 0, 0), value: 0},
  //       {date: new Date(2017, 0, 0), value: 0},
  //       {date: new Date(2018, 0, 0), value: 10},
  //       {date: new Date(2019, 0, 0), value: 50},
  //       {date: new Date(2020, 0, 0), value: 25},
  //       {date: new Date(2021, 0, 0), value: 100},
  //       {date: new Date(2022, 0, 0), value: 115}
  //     ]
  //   }
  // },
  {
    id: 2,
    Icon: svgs['TypescriptSvg'],
    name: 'Typescript',
    content:
      "I start reading in 2020, after a year I try to expose myself in typings in javascript, before I can't see the advantage of it, then I realize it nice if you were implement the typings in right way, 2023 I started to enrolled in course because that time documentation does not help me out on in depth concept of typescript, right now I am focus on typescript and avoid javascript as much as possible.",
    work_exp: 1.5,
    framework: Framework.Javascript,
    colors: ['rgba(0, 153, 255, 1)', 'rgba(0, 153, 255, 0.1)'],
    graph: [
      {date: new Date(2016, 0, 0), value: 0},
      {date: new Date(2017, 0, 0), value: 0},
      {date: new Date(2018, 0, 0), value: 0},
      {date: new Date(2019, 0, 0), value: 0},
      {date: new Date(2020, 0, 0), value: 15},
      {date: new Date(2021, 0, 0), value: 50},
      {date: new Date(2022, 0, 0), value: 80},
      {date: new Date(2023, 0, 0), value: 90}
    ]
  },
  {
    id: 13,
    Icon: svgs['VueSvg'],
    name: 'Vue JS',
    content:
      "I start reading Vue JS 2019 I was just bit confused how what is that framework its more on theory side no application in practice happend that time, year 2022 I started to play with Vue JS again, learn its concept and its basic with application, I read its new updates from imperative approach to option API, from Option API to Composition API which more handy and easy to maintain and apply the clean architecture. 'til now I work with Vue JS since this is probably my second frontend tool in javascript",
    work_exp: 0.5,
    framework: Framework.Javascript,
    colors: ['rgba(49, 71, 94, 1)', 'rgba(49, 71, 94, 0.1)'],
    graph: [
      {date: new Date(2016, 0, 0), value: 0},
      {date: new Date(2017, 0, 0), value: 0},
      {date: new Date(2018, 0, 0), value: 0},
      {date: new Date(2019, 0, 0), value: 25},
      {date: new Date(2020, 0, 0), value: 10},
      {date: new Date(2021, 0, 0), value: 0},
      {date: new Date(2022, 0, 0), value: 50},
      {date: new Date(2023, 0, 0), value: 20}
    ]
  },
  {
    id: 8,
    Icon: svgs['WebpackSvg'],
    name: 'Webpack',
    content:
      'There was a time that I wonder how react works in javascript, upon searching I found out that those jsx was convered into javascript handled by transpiler name babel, and babel does everything to transform the jsx into javascript and compile it to represent in browser, so when I understard the lifecycle of webpack, I made some goal for myself to create from scratch the react version without using CRA environemnt and create my own component and publish it into NPM, you may see this library named vin-react in NPM and if you want to see my react-webpack config you may visit my github profile, as of now I still continue to work with webpack and its other helpful plugins.',
    work_exp: 2,
    framework: Framework.Javascript,
    colors: ['rgba(0, 124, 219, 1)', 'rgba(0, 124, 219, 0.1)'],
    graph: [
      {date: new Date(2016, 0, 0), value: 0},
      {date: new Date(2017, 0, 0), value: 0},
      {date: new Date(2018, 0, 0), value: 0},
      {date: new Date(2019, 0, 0), value: 7.5},
      {date: new Date(2020, 0, 0), value: 15},
      {date: new Date(2021, 0, 0), value: 50},
      {date: new Date(2022, 0, 0), value: 60},
      {date: new Date(2023, 0, 0), value: 60}
    ]
  },
  {
    id: 16,
    Icon: svgs['WebsocketSvg'],
    name: 'Websocket',
    content:
      'I start to create websocket server while learning express in node js, year 2019 I try to create a backend that hangles a websocket, until I understand the lifecycle and workflow of Websocket, after a year I try to look what is other webscket framework and I found socket.io until I understand the whole concept, then I decide to create my own library for both client and backend side with connection of websocket, you can found out in NPM vin-socket.client and vin-socket.server.',
    work_exp: 2.5,
    framework: Framework.Javascript,
    colors: ['rgba(255, 51, 0, 1)', 'rgba(255, 51, 0, 0.1)'],
    graph: [
      {date: new Date(2016, 0, 0), value: 0},
      {date: new Date(2017, 0, 0), value: 0},
      {date: new Date(2018, 0, 0), value: 10},
      {date: new Date(2019, 0, 0), value: 50},
      {date: new Date(2020, 0, 0), value: 25},
      {date: new Date(2021, 0, 0), value: 45},
      {date: new Date(2022, 0, 0), value: 60},
      {date: new Date(2023, 0, 0), value: 80}
    ]
  },
  {
    id: 16.1,
    Icon: svgs['D3Svg'],
    name: 'Data Driven Documents',
    content:
      'In terms of data visualization I like the way how D3 works with diagram or graph because you can create it from scractcch, year back 2018 I started to play with this framework until little by little I understand how to consumed its functionalities.',
    work_exp: 0.5,
    framework: Framework.Javascript,
    colors: ['rgba(255, 151, 71, 1)', 'rgba(255, 151, 71, 0.1)'],
    graph: [
      {date: new Date(2016, 0, 0), value: 0},
      {date: new Date(2017, 0, 0), value: 5},
      {date: new Date(2018, 0, 0), value: 25},
      {date: new Date(2019, 0, 0), value: 2},
      {date: new Date(2020, 0, 0), value: 0},
      {date: new Date(2021, 0, 0), value: 10},
      {date: new Date(2022, 0, 0), value: 25},
      {date: new Date(2023, 0, 0), value: 50}
    ]
  },
  {
    id: 16.2,
    Icon: svgs['JestSvg'],
    name: 'Jest JS',
    content:
      "While writing a script for the automation, I try to put some test script inside most of the time, I used jest as my testing library but honestly I don't have solid foundation in terms of best practices and other testing cases but for me it can absorb once I work with testing libraries, maybe soon I will get in touch to this library again.",
    work_exp: 0.5,
    framework: Framework.Javascript,
    colors: ['rgba(153, 66, 91, 1)', 'rgba(153, 66, 91, 0.1)'],
    graph: [
      {date: new Date(2016, 0, 0), value: 0},
      {date: new Date(2017, 0, 0), value: 0},
      {date: new Date(2018, 0, 0), value: 0},
      {date: new Date(2019, 0, 0), value: 2},
      {date: new Date(2020, 0, 0), value: 10},
      {date: new Date(2021, 0, 0), value: 5},
      {date: new Date(2022, 0, 0), value: 15},
      {date: new Date(2023, 0, 0), value: 10}
    ]
  }
];

export default techStacks;
