import {useState} from 'react';
import {ChevronLeftIcon, ChevronRightIcon} from 'assets/icons';

import {Button, View} from 'components';
import {Project} from 'components';

import styles from './.module.css';
import projects from './projects';
import {useDevice} from 'hooks';

const Projects: React.FC = () => {
  // const []

  const device = useDevice();
  const [focus, setFocus] = useState(0);

  const getProject = (index: number) => {
    let newIndex = 0;
    if (index > 0) {
      newIndex = focus + index;
      return newIndex % projects.length;
    }
    newIndex = focus + index;
    return newIndex < 0 ? Math.abs(projects.length + newIndex) : newIndex;
  };
  const onClickPrev = () => {
    setFocus((prev) => {
      const newIndex = prev - 1;
      if (newIndex < 0) {
        return Math.abs(projects.length + newIndex);
      }
      return newIndex;
    });
  };
  const onClickNext = () => {
    setFocus((prev) => {
      const newIndex = prev + 1;
      if (newIndex > projects.length - 1) {
        return newIndex % projects.length;
      }
      return newIndex;
    });
  };

  return (
    <View className={styles.projects}>
      {device === 'PHONE' ? (
        projects.map((project, index) => (
          <Project
            key={index}
            {...project}
            className={styles.focusProject}
            onClick={() => {}}
          />
        ))
      ) : (
        <>
          {device !== 'DESKTOP' ? (
            <Button className={styles.button} onClick={onClickPrev}>
              <ChevronLeftIcon fontSize='10vh' color='var(--ACCENT-COLOR)' />
            </Button>
          ) : (
            <Project
              {...projects[getProject(-1)]}
              className={styles.leftProject}
              onClick={onClickPrev}
            />
          )}
          <Project
            {...projects[focus]}
            className={styles.focusProject}
            onClick={() => {}}
          />
          {device !== 'DESKTOP' ? (
            <Button className={styles.button} onClick={onClickNext}>
              <ChevronRightIcon fontSize='10vh' color='var(--ACCENT-COLOR)' />
            </Button>
          ) : (
            <Project
              {...projects[getProject(1)]}
              className={styles.rightProject}
              onClick={onClickNext}
            />
          )}
        </>
      )}
    </View>
  );
};

export default Projects;
