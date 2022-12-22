import {Image, Separator, Text, View} from 'components';
import {LOGO_URL} from 'constants/string';

import styles from './.module.css';

const Contacts: React.FC = () => {
  return (
    <View className={styles.contacts}>
      <View className={styles.leftPane}>
        <Image source={LOGO_URL('original')} className={styles.logo} />
      </View>
      <View className={styles.rightPane}>
        <View className={styles.contactsPane}>
          <Text className={styles.title}>CONTACTS</Text>
          <Separator gapY='0.5vh' />
          <Text className={styles.content}>petatemarvin26@gmail.com</Text>
          <Text className={styles.content}>
            https://www.linkedin.com/in/marvin-petate
          </Text>
          <Text className={styles.content}>
            https://www.facebook.com/microvisual.enterprise
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Contacts;
