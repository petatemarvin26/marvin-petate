import {ID_PIC_URL} from 'constants/string';
import {Image, Separator, Text, View} from 'components';

import styles from './.module.css';

const About: React.FC = () => {
  return (
    <View className={styles.about}>
      <View className={styles.leftPane}>
        <Image className={styles.idPicture} source={ID_PIC_URL} />
      </View>
      <View className={styles.rightPane}>
        <Text className={styles.title}>ABOUT ME</Text>
        <Separator gapY='1.25vh' />
        <Text className={styles.content}>
          I AM <span className={styles.name}>MARVIN PETATE</span>, GRADUATING
          STUDENT IN BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY, SPECIALIZE
          THE ROLE OF FRONTEND DEVELOPER, MY FOUNDATION IN PROGRAMMING IS JAVA,
          THAT TAUGHT ME TO BECOME MORE EFFICIENT AND ELASTIC WHEN IT COMES TO
          CODING, AS OF NOW I CONTINUOUS EXPLORING ON FRONTEND FIELD ON USING
          JAVASCRIPT TO SOLIDIFY MY BASICS AND FUNDAMENTALS.
        </Text>
        <Separator gapY='1vh' />
        <Text className={styles.content}>
          AS SOFTWARE ENGINEER, I DEVELOP AN APPLICATION OR SOFTWARE AS A
          SERVICE (SAAS), PROVIDE SOLUTION TO OUR RECURRING PROBLEMS THAT
          CREATES VALUE FOR THEIR BUSINESSES
        </Text>
      </View>
    </View>
  );
};

export default About;
