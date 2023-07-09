import {useEffect} from 'react';

import {useAnimation, useScroll} from 'hooks';
// import {RocketSvg} from 'assets';
import {
  AboutPage,
  FrontPage,
  ProjectsPage,
  ServicesPage,
  TechStackPage,
  ContactPage,
  LoadingPage
} from 'pages';

import {navbarAnim, navbarElements, navbarToIn, navbarToOut} from './animation';
import styles from './.module.css';
import {Text, View} from 'vin-react';

const HomeNavigator: React.FC = () => {
  const [scroll] = useScroll();
  const [navbarStyle, navbarStart] = useAnimation(...navbarAnim);

  const scrollListener = () => {
    if (scroll >= 15) {
      navbarStart(navbarToIn);
      return;
    }
    navbarStart(navbarToOut);
  };
  useEffect(scrollListener, [scroll]);

  const renderedNavbar = navbarStyle.map((style, key) => {
    const {Controller} = navbarElements[key];
    return (
      <Controller
        className={styles['navbar']}
        key={key}
        style={style}
        scroll={scroll}
      />
    );
  });

  return <LoadingPage />;

  return (
    <View className={styles['home-nav']}>
      {renderedNavbar}
      <FrontPage />
      <AboutPage />
      <ServicesPage />
      <TechStackPage />
      <ProjectsPage />
      <ContactPage />
      <Text className={styles['version-txt']}>v{process.env.VERSION}</Text>
    </View>
  );
};

export default HomeNavigator;
