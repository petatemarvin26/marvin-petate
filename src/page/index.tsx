import React, {useRef, MutableRefObject, useContext} from 'react';

import {Image, Text, View} from 'components';
import {Age, Circle, NavigationBar} from 'components';
import {useDevice} from 'hooks';
import {PROFILE_PIC_URL} from 'constants/string';
import {Loading} from 'context';

import About from './About';
import Frameworks from './Frameworks';
import Projects from './Projects';
import Contacts from './Contacts';
import circles from './circles';
import styles from './.module.css';
import {Props} from './type';

const Main: React.FC<Props> = ({isReady}) => {
  const device = useDevice();

  const {setStatus} = useContext(Loading);

  const about = useRef() as MutableRefObject<HTMLDivElement>;
  const skills = useRef() as MutableRefObject<HTMLDivElement>;
  const projects = useRef() as MutableRefObject<HTMLDivElement>;
  const contacts = useRef() as MutableRefObject<HTMLDivElement>;

  const onNavigate = (module: string) => {
    if (module === 'ABOUT') {
      about.current.scrollIntoView();
    }
    if (module === 'SKILLS') {
      skills.current.scrollIntoView();
    }
    if (module === 'PROJECTS') {
      projects.current.scrollIntoView();
    }
    if (module === 'CONTACTS') {
      contacts.current.scrollIntoView();
    }
  };

  return (
    <View className={styles.app} style={{display: isReady ? 'flex' : 'none'}}>
      <NavigationBar onNavigate={onNavigate} />
      {device !== 'PHONE' && (
        <>
          {circles.map((circle, index) => (
            <Circle key={index} {...circle} />
          ))}
          <Age age={22} />
        </>
      )}
      <View className={styles.front}>
        <View className={styles.leftPane}>
          <Image
            source={PROFILE_PIC_URL}
            className={styles.profilePicture}
            onLoad={() => {
              setStatus(false);
            }}
          />
        </View>
        <View className={styles.rightPane}>
          <Text className={styles.title}>FRONTEND</Text>
          <Text className={styles.subtitle}>DEVELOPER | SOFTWARE ENGINEER</Text>
        </View>
      </View>
      <View className={styles.about} viewRef={about}>
        <About />
      </View>
      <View className={styles.frameworks} viewRef={skills}>
        <Frameworks />
      </View>
      <View className={styles.projects} viewRef={projects}>
        <Projects />
      </View>
      <View className={styles.contacts} viewRef={contacts}>
        <Contacts />
      </View>
    </View>
  );
};

export default Main;
