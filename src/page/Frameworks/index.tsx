import {Separator, Text, View} from 'components';
import {Framework} from 'components';
import {FRAMEWORK_URL} from 'constants/string';

import frameworks from './frameworks';
import styles from './.module.css';

const Frameworks: React.FC = () => {
  return (
    <View className={styles.frameworks}>
      <View className={styles.leftPane}>
        <Text className={styles.title}>SKILLS</Text>
        <Separator gapY='1.5vh' />
        <Text className={styles.content}>
          I ENCOUNTERED JAVA WHEN I WAS SENIOR HIGH, WHICH GIVES ME A LOT OF
          KNOWLEDGE HOW TO MANIPULATE OBJECTS IN EFFICIENT WAY, HOW MAKE IT
          ORIENDTED AND READABLE, YEARS GOES BY I ENCOUNTERED JAVASCRIPT THAT
          HAS DIFFERENT FRAMEWORKS THAT GIVES ME AN OPPORTUNITY TO ENHANCE MY
          HARD SKILLS AS FRONTEND DEVELOPER, NODE-JS REACT-JS, REACT NATIVE,
          REDUX-JS, SOCKET.IO, EXPRESS-JS, JAVA 2+ YEARS EXPERIENCE, PYTHON 2+
          YEARS, FLASK-RESTFUL THAT HAS 1 YEAR EXPERIENCE
        </Text>
        <Separator gapY='1vh' />
        <Text className={styles.content}>
          I AM CONTINUOUSLY IMPROVING MY SKILLS ON FRONTEND FIELD, FOCUSING ON
          REACT JS POSSIBLE FEATURES AND BEST PRACTICES THAT I NEED TO KNOW, AND
          YES, I WAS ALSO LOOKING FORWARD TO OTHER FRAMEWORKS LIKE, ANGULAR-JS
          AND VUE-JS
        </Text>
      </View>
      <View className={styles.rightPane}>
        <View className={styles.iconsPane}>
          {frameworks.map((framework, index) => (
            <Framework
              key={index}
              image={FRAMEWORK_URL(framework.id)}
              experience='3+'
            />
          ))}
        </View>
      </View>
    </View>
  );
};

export default Frameworks;
