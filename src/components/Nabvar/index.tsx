import {View, Image, Button} from 'vin-react';

import {logo} from 'assets';

import styles from './.module.css';

const Navbar: React.FC = () => {
  return (
    <View className={styles['nav-bar']}>
      <View className={styles['left-pane']}>
        <Image className={styles['logo-img']} src={logo} />
      </View>
      <View className={styles['right-pane']}>
        <Button className={styles['navbar-btn']}>Services</Button>
        <Button className={styles['navbar-btn']}>Tech Stack</Button>
        <Button className={styles['navbar-btn']}>Projects</Button>
        <Button className={styles['navbar-btn']}>Contact</Button>
      </View>
    </View>
  );
};

export default Navbar;
