import {Button, Image, Text, View} from 'vin-react';

import styles from './.module.css';
import {
  GmailSvg,
  LinkedIn,
  TwitterSvg,
  engrNelvinLogoImg,
  mvLogoOrig
} from 'assets';
import {ClickHandler} from './types';

const ContactPage: React.FC = () => {
  const handleClick: ClickHandler = (key) => () => {
    let link = 'https://www.linkedin.com/in/marvin-petate/';
    if (key === 1) link = 'mailto:petatemarvin26@gmail.com';
    if (key === 2) link = 'https://twitter.com/petatemarvin26';
    window.open(link, '_blank');
  };

  return (
    <View id='p-3' className={styles['contact-page']}>
      <View className={styles['left-pane']}>
        <View className={styles['upper-pane']}>
          <Text className={styles['title-txt']}>Objectives</Text>
        </View>
        <View className={styles['center-pane']}>
          <Text className={styles['content-txt']}>
            Deliver a good service to our valuable customers is great
            opportunity to commit our goals, expand circle connections, and
            boost the relationship
          </Text>
        </View>
      </View>
      <View className={styles['mid-left-pane']}>
        <View className={styles['upper-pane']}>
          <Text className={styles['title-txt']}>Services</Text>
        </View>
        <View className={styles['center-pane']}>
          <Text className={styles['content-txt']}>Customize System</Text>
          <Text className={styles['content-txt']}>Software Development</Text>
          <Text className={styles['content-txt']}>Outsourcing</Text>
        </View>
      </View>
      <View className={styles['mid-right-pane']}>
        <View className={styles['upper-pane']}>
          <Text className={styles['title-txt']}>Contact</Text>
        </View>
        <View className={styles['contact-pane']}>
          <Button className={styles['contact-btn']} onClick={handleClick(0)}>
            <LinkedIn className={styles['contact-svg']} />
          </Button>
          <Button className={styles['contact-btn']} onClick={handleClick(1)}>
            <GmailSvg className={styles['contact-svg']} />
          </Button>
          <Button className={styles['contact-btn']} onClick={handleClick(2)}>
            <TwitterSvg className={styles['contact-svg']} />
          </Button>
        </View>
      </View>
      <View className={styles['right-pane']}>
        <View className={styles['upper-pane']}>
          <Text className={styles['title-txt']}>Companies</Text>
        </View>
        <View className={styles['image-pane']}>
          <Image className={styles['logo-img']} src={mvLogoOrig} />
          <Image className={styles['logo-img']} src={engrNelvinLogoImg} />
        </View>
      </View>
    </View>
  );
};

export default ContactPage;
