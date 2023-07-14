import {
  broowingCoffeeImg,
  budgetMangrImg,
  letsTalkImg,
  myBusiness,
  peryaGamesImg,
  rpsImg
} from 'assets';
import {Project} from './types';

const projects: Array<Project> = [
  {
    src: rpsImg,
    name: 'Rock Paper Scissor',
    content:
      'Is a multiplayer mobile online game, where the player should pick their battle hand within 5 seconds, the player who will win got 5 crown points, this purpose of this project is to make you bonding with your friends or family, its Tech Stack is MERN composed of MongoDB, Express, React Native and Node JS, this is the first game that I made in my college just for fun and make myself known about fullstack environment.'
  },
  {
    src: broowingCoffeeImg,
    name: 'Broowing Coffee',
    content:
      'Is a mobile web point of sale and inventory management with a real life design scenario, create product, include the inventory, create transaction with an e-receipt at the same time the deduction of inventory simultaneously, and yes it can also create a reports depends on what you chosen, this application runs in React JS, Expresss, NodeJS and MongoDB.'
  },
  {
    src: budgetMangrImg,
    name: 'Budget Manager',
    content:
      'Is a mobile web application that helps you to manage your budget plans, where you can put your estimated capital for the budget and by adding expenses it creates a log and computation in the system, the system is powered by React JS, Python Flask and PostgreSQL.'
  },
  {
    src: letsTalkImg,
    name: "Let's Talk",
    content:
      'Is web application where you can interact to other online users who you want to confess with or you may also be the samaritan where you can comfort others on their problems, the goal is to make unfortunate users to feel free to confess there problems and issues in life without knowing their real personality, this application address your stress and depression in your life, this application is running on React JS, FastAPI, Websocket, and PostgreSQL.'
  },
  {
    src: peryaGamesImg,
    name: 'Perya Games',
    content:
      'Is a mobile game application where you can play and earn money, it has multiple games where you can play like, Color Game, Slot Machine etc. the transaction for deposit and withdraw are handled by content management system, and the tech stack that are React Native, Pyton Flask and PostgreSQL.'
  },
  {
    src: myBusiness,
    name: 'My Business',
    content:
      'Is a mobile web application where you can manage your business by providing your expenses, capital, price of your product or services, and generates a monthly report, this application has a feature of creating your own team that you can assign to specific department on your businesses, with a payroll service, this application is not in released yet and still in the development, this application tech stack are playing with React JS, FastAPI, Websocket, Postgresql, and MongoDB.'
  }
];

export default projects;
