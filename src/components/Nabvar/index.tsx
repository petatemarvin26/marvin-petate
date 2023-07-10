import {View, Image, Button} from 'vin-react';

import {mvLogoBlack} from 'assets';
import {useAnimation} from 'hooks';

import {ClickLinkHandler, ClickLogoHandler, Props} from './types';
import {
  buttonsAnim,
  buttonsElements,
  buttonsToIn,
  buttonsToOut
} from './animation';
import styles from './.module.css';
import {useEffect} from 'react';

const Navbar: React.FC<Props> = ({className, style, scroll}) => {
  const [buttonsStyles, buttonsStart] = useAnimation(...buttonsAnim);

  const handleClick: ClickLinkHandler = (key) => () => {
    const doc = document.querySelector(`#p-${key}`) as HTMLDivElement;
    window.scrollTo({behavior: 'smooth', top: doc.offsetTop});
    buttonsStart(buttonsToIn(key));
  };

  const handleClickLogo: ClickLogoHandler = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  const scrollListener = () => {
    if (scroll <= 30) {
      buttonsStart(buttonsToOut);
      return;
    }
    const key = Math.floor(scroll / 20) - 2;
    buttonsStart(buttonsToIn(key));
  };
  useEffect(scrollListener, [scroll]);

  const renderedButtons = buttonsStyles.map((btnStyle, key) => {
    const {Controller, title} = buttonsElements[key];
    return (
      <View className={styles['navbar-btn-pane']} key={key}>
        <Button className={styles['navbar-btn']} onClick={handleClick(key)}>
          {title}
        </Button>
        <Controller
          className={styles['navbar-btn-indicator']}
          style={btnStyle}
        />
      </View>
    );
  });

  return (
    <View className={`${styles['nav-bar']} ${className}`} style={style}>
      <View className={styles['left-pane']}>
        <Button className={styles['logo-btn']} onClick={handleClickLogo}>
          <Image className={styles['logo-img']} src={mvLogoBlack} />
        </Button>
      </View>
      <View className={styles['right-pane']}>{renderedButtons}</View>
    </View>
  );
};

export default Navbar;
