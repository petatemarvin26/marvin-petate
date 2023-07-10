import {useEffect} from 'react';
import {Text, View} from 'vin-react';

import {useAnimation, useScroll} from 'hooks';

import {
  AboutPage,
  FrontPage,
  ProjectsPage,
  ServicesPage,
  TechStackPage,
  ContactPage
} from 'pages';

import {navbarAnim, navbarElements, navbarToIn, navbarToOut} from './animation';
import {Props} from './types';
import styles from './.module.css';

const HomeNavigator: React.FC<Props> = ({display}) => {
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

  return (
    <View className={styles['home-nav']} style={{display}}>
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
