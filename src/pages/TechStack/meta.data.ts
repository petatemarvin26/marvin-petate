import * as svgs from 'assets';
import {Framework, TechStack} from 'components';

const techStacks: TechStack[] = [
  {
    id: 23,
    Icon: svgs['AndroidSvg'],
    name: 'Android',
    content:
      'Anroid one of my favorite native framework in java, but my goal here is to have just a background knowledge in this framework, because all native frameworks now a days especially to all cross platform framework like, flutter, react native etc. are still need the sdk of android. so still I used this as my foundation in all native devices, and yes I will get back here soon once I am done with my goal in DOM',
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
      "The time that I'm comfortable at my knowledge in Web APIs and Javascript I wonder how I could deploy my web application, so I went to other hosting servers like heroku, firebase, netlify and such, until I realize the most popular infrastructure right now, wich is Aws, so currently I am still under go learning to their services and features.",
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
      'I went to this CICD platform the time that I am looking to how do I automate my website, 2021 I started reading and create sample pipelines just to deploy it in web server and by 2022 I used it as my CICD platform on my projects',
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
      {date: new Date(2018, 0, 0), value: 40},
      {date: new Date(2019, 0, 0), value: 80},
      {date: new Date(2020, 0, 0), value: 85},
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
      "When I knew about docker, I really appreciate how powerful this technology wherein you can containerize your application with a standalone environment, this is a good technology for those cases that has a limited on service, most of the time I use docker to my backend server and databases, because it doesn't make sense if you containerize the application that can handle directly by a webserver and that is how my nginx comes into play, even I know how powerful this technolgoy is, I still look out of the box on how not to abuse the usage of this and best practices of it. as of now I still continue exploring this technology",
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
      'This is my first backend framework I used in the project, I used it when I was 3rd college implement the ingration in practice and used it as my backend server in my thesis, so I could say I learned alot the time that I playing with this framework because, I knew the basics of backend architecture, best practices and how is the lifecylce of the backend. so when I knew it, I got a chance to boost my confident to enter in freelance world, because I know I can create system as full stack developer',
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
      "It's year 2021 when I start exploring on other backend framework, I used python just to explore some knowledge about backend, my goal that time is to implement a complete backend server that provide services for my client application, at the end I implement a python framework as my backend.",
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
      'I started learing git when I take my 2nd year college at year 2019, when my instructor at copro subject went to git topic and implement it on the class, so until now I work with git of course because this actually the medium platform to transmit codes to the repository and control version of your system',
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
      'My first git repository I started using this when I start also creating and experimenting my java knowledge and save it those files in github, I started playing with its CICD technology called github actions, when I implement the automation testing and deployment in my web application, I rate my knowledge in git as 8/10 because not all the features that are usually used in git on some case scenario',
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
      'I could say this is my second best git repo, because its features is goods for team and collaboration, I went to start use it when I creating portfolio project and I got some friends that they want to play with my portfolio project and that is the first time I handled a project on my life but even that I am started, I strictly monitoring and managing the repo in a right way just to be mess up, and currently I am not usual use this repo, because now a days github are most common git repo in the industry',
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
      'I started use this service on Google Cloud Platform when I integrate the google signin on the system, and recently we used the secret key manager from google service. until now still continue to read whats new and updates in GCP',
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
      'I dont have yet any project that works with GraphQL, since it was just last year when I explore and read about how good this technology is, but yes I do background reading on its documentation, and currently I enrolled some courses to know what is the best practice approach to implementing this technolgoy',
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
      'First time I encounter html its kind of easy to comprehend nothing so special syntax and I stop learning from it when I went to senior high school 2016 because that time I met java, when came back to learn web framework again past 2020, I start to read again about browser engine and Web APIs, until now still looking for some updates and new in the browser',
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
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque varius sollicitudin. Aliquam erat volutpat. Nulla facilisi. Duis eget lacinia tellus, sed posuere quam. Curabitur scelerisque orci nec ultricies lobortis. Vivamus arcu ipsum, posuere in erat sed, tincidunt semper felis. Vestibulum ac semper eros. Aenean sollicitudin sapien nec lobortis ultricies. Sed ultrices egestas volutpat. Quisque laoreet, risus accumsan porttitor sagittis, elit elit lobortis enim, vel rutrum urna enim non mi.',
    work_exp: 1.5,
    framework: Framework.Java,
    colors: ['rgba(214, 104, 0, 1)', 'rgba(214, 104, 0, 0.1)'],
    graph: [
      {date: new Date(2016, 0, 0), value: 30},
      {date: new Date(2017, 0, 0), value: 20},
      {date: new Date(2018, 0, 0), value: 35},
      {date: new Date(2019, 0, 0), value: 75},
      {date: new Date(2020, 0, 0), value: 15},
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
      'Nulla faucibus quis lectus non condimentum. Ut dignissim dignissim erat porta viverra. Aenean sem odio, vulputate ut varius id, bibendum ut ipsum. Aliquam suscipit sapien ut tincidunt efficitur. Ut ultrices interdum elementum. Pellentesque ut accumsan neque, sed imperdiet lorem. Etiam sit amet dolor cursus, facilisis.',
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
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque varius sollicitudin. Aliquam erat volutpat. Nulla facilisi. Duis eget lacinia tellus, sed posuere quam. Curabitur scelerisque orci nec ultricies lobortis. Vivamus arcu ipsum, posuere in erat sed, tincidunt semper felis. Vestibulum ac semper eros. Aenean sollicitudin sapien nec lobortis ultricies. Sed ultrices egestas volutpat. Quisque laoreet, risus accumsan porttitor sagittis, elit elit lobortis enim, vel rutrum urna enim non mi.',
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
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque varius sollicitudin. Aliquam erat volutpat. Nulla facilisi. Duis eget lacinia tellus, sed posuere quam. Curabitur scelerisque orci nec ultricies lobortis. Vivamus arcu ipsum, posuere in erat sed, tincidunt semper felis. Vestibulum ac semper eros. Aenean sollicitudin sapien nec lobortis ultricies. Sed ultrices egestas volutpat. Quisque laoreet, risus accumsan porttitor sagittis, elit elit lobortis enim, vel rutrum urna enim non mi.',
    work_exp: 2,
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
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque varius sollicitudin. Aliquam erat volutpat. Nulla facilisi. Duis eget lacinia tellus, sed posuere quam. Curabitur scelerisque orci nec ultricies lobortis. Vivamus arcu ipsum, posuere in erat sed, tincidunt semper felis. Vestibulum ac semper eros. Aenean sollicitudin sapien nec lobortis ultricies. Sed ultrices egestas volutpat. Quisque laoreet, risus accumsan porttitor sagittis, elit elit lobortis enim, vel rutrum urna enim non mi.',
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
      {date: new Date(2023, 0, 0), value: 5}
    ]
  },
  {
    id: 7,
    Icon: svgs['NodeSvg'],
    name: 'Node',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque varius sollicitudin. Aliquam erat volutpat. Nulla facilisi. Duis eget lacinia tellus, sed posuere quam. Curabitur scelerisque orci nec ultricies lobortis. Vivamus arcu ipsum, posuere in erat sed, tincidunt semper felis. Vestibulum ac semper eros. Aenean sollicitudin sapien nec lobortis ultricies. Sed ultrices egestas volutpat. Quisque laoreet, risus accumsan porttitor sagittis, elit elit lobortis enim, vel rutrum urna enim non mi.',
    work_exp: 3,
    framework: Framework.Javascript,
    colors: ['rgba(65, 135, 63, 1)', 'rgba(65, 135, 63, 0.1)'],
    graph: [
      {date: new Date(2016, 0, 0), value: 0},
      {date: new Date(2017, 0, 0), value: 0},
      {date: new Date(2018, 0, 0), value: 0},
      {date: new Date(2019, 0, 0), value: 15},
      {date: new Date(2020, 0, 0), value: 25},
      {date: new Date(2021, 0, 0), value: 50},
      {date: new Date(2022, 0, 0), value: 75},
      {date: new Date(2023, 0, 0), value: 50}
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
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque varius sollicitudin. Aliquam erat volutpat. Nulla facilisi. Duis eget lacinia tellus, sed posuere quam. Curabitur scelerisque orci nec ultricies lobortis. Vivamus arcu ipsum, posuere in erat sed, tincidunt semper felis. Vestibulum ac semper eros. Aenean sollicitudin sapien nec lobortis ultricies. Sed ultrices egestas volutpat. Quisque laoreet, risus accumsan porttitor sagittis, elit elit lobortis enim, vel rutrum urna enim non mi.',
    work_exp: 2,
    framework: Framework.Database,
    colors: ['rgba(49, 100, 140, 1)', 'rgba(49, 100, 140, 0.1)'],
    graph: [
      {date: new Date(2016, 0, 0), value: 0},
      {date: new Date(2017, 0, 0), value: 0},
      {date: new Date(2018, 0, 0), value: 10},
      {date: new Date(2019, 0, 0), value: 5},
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
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque varius sollicitudin. Aliquam erat volutpat. Nulla facilisi. Duis eget lacinia tellus, sed posuere quam. Curabitur scelerisque orci nec ultricies lobortis. Vivamus arcu ipsum, posuere in erat sed, tincidunt semper felis. Vestibulum ac semper eros. Aenean sollicitudin sapien nec lobortis ultricies. Sed ultrices egestas volutpat. Quisque laoreet, risus accumsan porttitor sagittis, elit elit lobortis enim, vel rutrum urna enim non mi.',
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
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque varius sollicitudin. Aliquam erat volutpat. Nulla facilisi. Duis eget lacinia tellus, sed posuere quam. Curabitur scelerisque orci nec ultricies lobortis. Vivamus arcu ipsum, posuere in erat sed, tincidunt semper felis. Vestibulum ac semper eros. Aenean sollicitudin sapien nec lobortis ultricies. Sed ultrices egestas volutpat. Quisque laoreet, risus accumsan porttitor sagittis, elit elit lobortis enim, vel rutrum urna enim non mi.',
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
    id: 9.1,
    Icon: svgs['ReactNativeSvg'],
    name: 'React Native',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque varius sollicitudin. Aliquam erat volutpat. Nulla facilisi. Duis eget lacinia tellus, sed posuere quam. Curabitur scelerisque orci nec ultricies lobortis. Vivamus arcu ipsum, posuere in erat sed, tincidunt semper felis. Vestibulum ac semper eros. Aenean sollicitudin sapien nec lobortis ultricies. Sed ultrices egestas volutpat. Quisque laoreet, risus accumsan porttitor sagittis, elit elit lobortis enim, vel rutrum urna enim non mi.',
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
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque varius sollicitudin. Aliquam erat volutpat. Nulla facilisi. Duis eget lacinia tellus, sed posuere quam. Curabitur scelerisque orci nec ultricies lobortis. Vivamus arcu ipsum, posuere in erat sed, tincidunt semper felis. Vestibulum ac semper eros. Aenean sollicitudin sapien nec lobortis ultricies. Sed ultrices egestas volutpat. Quisque laoreet, risus accumsan porttitor sagittis, elit elit lobortis enim, vel rutrum urna enim non mi.',
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
    name: 'React Saga',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque varius sollicitudin. Aliquam erat volutpat. Nulla facilisi. Duis eget lacinia tellus, sed posuere quam. Curabitur scelerisque orci nec ultricies lobortis. Vivamus arcu ipsum, posuere in erat sed, tincidunt semper felis. Vestibulum ac semper eros. Aenean sollicitudin sapien nec lobortis ultricies. Sed ultrices egestas volutpat. Quisque laoreet, risus accumsan porttitor sagittis, elit elit lobortis enim, vel rutrum urna enim non mi.',
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
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque varius sollicitudin. Aliquam erat volutpat. Nulla facilisi. Duis eget lacinia tellus, sed posuere quam. Curabitur scelerisque orci nec ultricies lobortis. Vivamus arcu ipsum, posuere in erat sed, tincidunt semper felis. Vestibulum ac semper eros. Aenean sollicitudin sapien nec lobortis ultricies. Sed ultrices egestas volutpat. Quisque laoreet, risus accumsan porttitor sagittis, elit elit lobortis enim, vel rutrum urna enim non mi.',
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
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque varius sollicitudin. Aliquam erat volutpat. Nulla facilisi. Duis eget lacinia tellus, sed posuere quam. Curabitur scelerisque orci nec ultricies lobortis. Vivamus arcu ipsum, posuere in erat sed, tincidunt semper felis. Vestibulum ac semper eros. Aenean sollicitudin sapien nec lobortis ultricies. Sed ultrices egestas volutpat. Quisque laoreet, risus accumsan porttitor sagittis, elit elit lobortis enim, vel rutrum urna enim non mi.',
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
      'Nulla nisi magna, vestibulum blandit ipsum in, pellentesque lacinia urna. In nec augue condimentum, volutpat turpis sed, venenatis quam. In hac habitasse platea dictumst. Morbi molestie dignissim mi. Phasellus cursus et quam nec imperdiet. Fusce id sem orci. Pellentesque bibendum felis ipsum, quis fermentum nunc ultrices dignissim. Quisque nunc lacus, varius a sollicitudin eu, ullamcorper quis purus. Donec id arcu sit amet nulla tempus pulvinar. ',
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
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque varius sollicitudin. Aliquam erat volutpat. Nulla facilisi. Duis eget lacinia tellus, sed posuere quam. Curabitur scelerisque orci nec ultricies lobortis. Vivamus arcu ipsum, posuere in erat sed, tincidunt semper felis. Vestibulum ac semper eros. Aenean sollicitudin sapien nec lobortis ultricies. Sed ultrices egestas volutpat. Quisque laoreet, risus accumsan porttitor sagittis, elit elit lobortis enim, vel rutrum urna enim non mi.',
    work_exp: 0.75,
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
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque varius sollicitudin. Aliquam erat volutpat. Nulla facilisi. Duis eget lacinia tellus, sed posuere quam. Curabitur scelerisque orci nec ultricies lobortis. Vivamus arcu ipsum, posuere in erat sed, tincidunt semper felis. Vestibulum ac semper eros. Aenean sollicitudin sapien nec lobortis ultricies. Sed ultrices egestas volutpat. Quisque laoreet, risus accumsan porttitor sagittis, elit elit lobortis enim, vel rutrum urna enim non mi.',
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
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque varius sollicitudin. Aliquam erat volutpat. Nulla facilisi. Duis eget lacinia tellus, sed posuere quam. Curabitur scelerisque orci nec ultricies lobortis. Vivamus arcu ipsum, posuere in erat sed, tincidunt semper felis. Vestibulum ac semper eros. Aenean sollicitudin sapien nec lobortis ultricies. Sed ultrices egestas volutpat. Quisque laoreet, risus accumsan porttitor sagittis, elit elit lobortis enim, vel rutrum urna enim non mi.',
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
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque varius sollicitudin. Aliquam erat volutpat. Nulla facilisi. Duis eget lacinia tellus, sed posuere quam. Curabitur scelerisque orci nec ultricies lobortis. Vivamus arcu ipsum, posuere in erat sed, tincidunt semper felis. Vestibulum ac semper eros. Aenean sollicitudin sapien nec lobortis ultricies. Sed ultrices egestas volutpat. Quisque laoreet, risus accumsan porttitor sagittis, elit elit lobortis enim, vel rutrum urna enim non mi.',
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
  }
];

export default techStacks;
