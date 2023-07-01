// import {useEffect} from 'react';
import {Parallax, ParallaxLayer} from '@react-spring/parallax';

import {Navbar} from 'components';
import {
  AboutPage,
  FrontPage,
  ProjectsPage,
  ServicesPage,
  TechStackPage
} from 'pages';

import styles from './.module.css';
import {RocketSvg} from 'assets';

const HomeNavigator: React.FC = () => {
  // useEffect(() => {
  //   const services = document.querySelector('#projects');
  //   window.addEventListener('click', function () {
  //     services.scrollIntoView();
  //   });
  // }, []);

  return (
    <>
      <Parallax pages={6} style={{backgroundColor: 'bisque'}}>
        <Navbar />
        <FrontPage />
        <AboutPage />
        <ServicesPage />
        <TechStackPage />
        <ProjectsPage />
        <ParallaxLayer offset={0} speed={-0.3}>
          <RocketSvg className={styles['rocket']} />
        </ParallaxLayer>
      </Parallax>
    </>
  );
};

export default HomeNavigator;
