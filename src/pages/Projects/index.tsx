import {useState} from 'react';
import {Text, View} from 'vin-react';

import {ImageViewer} from 'components';

import styles from './.module.css';
import {ChangeIndexHandler, Project} from './types';
import projects from './meta.data';

const ProjectsPage: React.FC = () => {
  const [project, setProject] = useState<Project>(projects[0]);

  const hangleChangeIndex: ChangeIndexHandler = (project) => {
    setProject(project);
  };

  return (
    <View id='p-2' className={styles['projects-page']}>
      <View className={styles['top-pane']}>
        <Text className={styles['title-txt']}>PROJECTS</Text>
      </View>
      <View className={styles['center-pane']}>
        <ImageViewer onChangeIndex={hangleChangeIndex} />
        <View className={styles['details-pane']}>
          <Text className={styles['details-title']}>{project.name}</Text>
          <Text className={styles['details-content']}>{project.content}</Text>
        </View>
      </View>
    </View>
  );
};

export default ProjectsPage;
