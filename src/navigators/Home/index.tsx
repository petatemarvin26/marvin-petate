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

      {/* CLOUD 1 */}
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

      {/* CLOUD 2 */}
      <ParallaxLayer
        className={styles['parallax-layer-pane']}
        offset={0}
        factor={2}
        speed={-0.27}
      >
        <CloudSvg className={styles['cloud-large2']} />
      </ParallaxLayer>
      <ParallaxLayer
        className={styles['parallax-layer-pane']}
        offset={0}
        factor={2}
        speed={-0.15}
      >
        <CloudSvg className={styles['cloud-medium2']} />
      </ParallaxLayer>

      {/* CLOUD ROCKET AND MOON */}
      <ParallaxLayer
        className={styles['parallax-layer-pane']}
        offset={0}
        speed={-0.25}
      >
        <RocketSvg className={styles['rocket']} />
      </ParallaxLayer>
      <ParallaxLayer
        className={styles['parallax-layer-pane']}
        offset={0}
        speed={-0.1}
      >
        <MoonSvg className={styles['moon']} />
      </ParallaxLayer>
    </Parallax>
  );
};

export default HomeNavigator;
