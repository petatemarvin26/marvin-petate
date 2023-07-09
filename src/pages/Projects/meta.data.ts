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
      'Is a multiplayer mobile online game, where the player should pick their battle hand within 5 seconds, the player who will win got 5 crown points, this project purposes is to give you bonding with your friends or family, its Tech Stack is MERN composed of MongoDB, Express and React Native, this is the first game the I made in my college, to check my understanding in fullstack development.'
  },
  {
    src: broowingCoffeeImg,
    name: 'Broowing Coffee',
    content:
      'Is a mobile web point of sale and inventory management with a real life design scenario, create product, include the inventory, create transaction with an e-receipt at the same time the deduction of inventory simulteneously, and yes it can also create a reports depends on what you chosen, this application runs in React JS, Expresss and MongoDB.'
  },
  {
    src: budgetMangrImg,
    name: 'Budget Manager',
    content:
      'Is a mobile web application that helps you to manage your budget plan, wherein you can add papers and enter your budget, and one of the capabilities is you can add your expense anytime that automatically deducted to your budget, you can visualize the remaining of your budget and your total expenses, the system is composed by React JS, Python Flask and PostgreSQL.'
  },
  {
    src: letsTalkImg,
    name: "Let's Talk",
    content:
      "Is web application where you can interact to online users who you want to give confession or you may also be the samaritan where you can comfort others on their problems, there some people that they can't tell problems to their friends or family because they are shy or might shame for some reason. so I built this system to settle those issues regarding on problems, stress or depression especially to those people dont have much friends or closed family, this application is running on React JS, FastAPI, Websocket, and PostgreSQL."
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
      'Is a mobile web application where you can manage your business by providing your expenses, capital, price of your product or services, and generates a monthly report, this application has a feature of creating your team that you want to assign on your businesses and the application provides payroll for your worker depends on how you customize their payroll if per hours or per finished work, this is not yet finished that goods for the endusers and still working on it and this application tech stack are playing with React JS, FastAPI, Websocket, Postgresql, and MongoDB.'
  }
];

export default projects;
