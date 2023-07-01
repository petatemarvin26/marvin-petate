import {Text, View} from 'vin-react';

import {ImageViewer} from 'components';

import styles from './.module.css';

const ProjectsPage: React.FC = () => {
  return (
    <View id='p-2' className={styles['projects-page']}>
      <View className={styles['top-pane']}>
        <Text className={styles['title-txt']}>PROJECTS</Text>
      </View>
      <View className={styles['center-pane']}>
        <ImageViewer />
        <View className={styles['details-pane']}>
          <Text className={styles['details-title']}>Project Name</Text>
          <Text className={styles['details-content']}>
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and a search for 'lorem ipsum'
            will uncover many web sites still in their infancy. Various versions
            have evolved over the years, sometimes by accident, sometimes on
            purpose (injected humour and the like).
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ProjectsPage;
