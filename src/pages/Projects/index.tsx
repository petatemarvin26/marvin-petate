import {useEffect, useRef, useState} from 'react';
import {Text, View} from 'vin-react';

import {useFocus} from 'hooks';
import {ImageViewer} from 'components';

import {ChangeIndexHandler, Project} from './types';
import projects from './meta.data';
import styles from './.module.css';

const ProjectsPage: React.FC = () => {
  const [project, setProject] = useState<Project>(projects[0]);
  const ref = useRef<HTMLDivElement>();

  const focus = useFocus(() => [ref.current], {
    threshold: 0.4
  });

  const hangleChangeIndex: ChangeIndexHandler = (project) => {
    setProject(project);
  };

  const focusListener = () => {
    if (!focus) {
      setProject(projects[0]);
      return;
    }
  };
  useEffect(focusListener, [focus]);

  return (
    <View id='p-2' className={styles['projects-page']}>
      <View className={styles['top-pane']}>
        <Text className={styles['title-txt']}>PROJECTS</Text>
      </View>
      <View className={styles['center-pane']}>
        <ImageViewer
          focus={focus}
          reference={(_ref) => (ref.current = _ref)}
          onChangeIndex={hangleChangeIndex}
        />
        <View className={styles['details-pane']}>
          <Text className={styles['details-title']}>{project.name}</Text>
          <Text className={styles['details-content']}>{project.content}</Text>
        </View>
      </View>
    </View>
  );
};

export default ProjectsPage;
