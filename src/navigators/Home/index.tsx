// import {useEffect} from 'react';
import {Parallax, ParallaxLayer} from '@react-spring/parallax';

import {Navbar} from 'components';
import {CloudSvg, MoonSvg, RocketSvg} from 'assets';
import {
  AboutPage,
  FrontPage,
  ProjectsPage,
  ServicesPage,
  TechStackPage,
  ContactPage
} from 'pages';

import styles from './.module.css';

const HomeNavigator: React.FC = () => {
  // useEffect(() => {
  //   const services = document.querySelector('#projects');
  //   window.addEventListener('click', function () {
  //     services.scrollIntoView();
  //   });
  // }, []);

  return (
    <Parallax className={styles['parallax-pane']} pages={5}>
      <Navbar />
      <FrontPage />
      <AboutPage />
      <ServicesPage />
      <TechStackPage />
      <ProjectsPage />
      <ContactPage />
      <ParallaxLayer
        className={styles['parallax-layer-pane']}
        offset={0}
        factor={3}
        speed={-0.27}
      >
        <CloudSvg className={styles['cloud-large']} />
      </ParallaxLayer>
      <ParallaxLayer
        className={styles['parallax-layer-pane']}
        offset={0}
        factor={3}
        speed={-0.3}
      >
        <CloudSvg className={styles['cloud-medium']} />
      </ParallaxLayer>
      <ParallaxLayer
        className={styles['parallax-layer-pane']}
        offset={0}
        speed={-0.3}
      >
        <RocketSvg className={styles['rocket']} />
      </ParallaxLayer>
      <ParallaxLayer
        className={styles['parallax-layer-pane']}
        offset={0}
        speed={-0.15}
      >
        <MoonSvg className={styles['moon']} />
      </ParallaxLayer>
    </Parallax>
  );
};

export default HomeNavigator;
