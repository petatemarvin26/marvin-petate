import {CSSProperties, useState} from 'react';
import {MenuIcon} from 'assets/icons';
import {View, Separator, Button} from 'components';
import {useDevice} from 'hooks';

import styles from './.module.css';
import modules from './modules';
import {Props} from './types';

const NavigationBar: React.FC<Props> = ({onNavigate}) => {
  const device = useDevice();

  const [showMenu, setShowMenu] = useState<Boolean>(false);

  const applyContactStyle = (name: string): CSSProperties => {
    if (name === 'CONTACTS') {
      return {
        padding: '1.75vh 2vh 1.5vh 2vh',
        borderRadius: '1vh',
        borderColor: 'var(--WHITE)',
        border: '0.15vw solid var(--WHITE)',
        color: 'var(--WHITE)'
      };
    }
    return {};
  };
  const applyButtonMenuItemStyle = (index: number): CSSProperties => {
    if (index + 1 === modules.length) return {};
    return {
      borderBottom: '0.25vh solid var(--BG-COLOR)',
      paddingBottom: '1vh'
    };
  };

  const onShowMenuList = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <View className={styles.navigationBar}>
      {device !== 'PHONE' ? (
        <>
          <View className={styles.leftPane}></View>
          <View className={styles.rightPane}>
            {modules.map((module, index) => (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                key={index}
              >
                <Button
                  title={module.name}
                  className={styles.bModule}
                  style={applyContactStyle(module.name)}
                  onClick={() => onNavigate(module.name)}
                />
                {index + 1 < modules.length && (
                  <Separator
                    gapX='2vw'
                    color='var(--BG-COLOR3)'
                    height='2.5vh'
                    width={index + 1 < 3 ? '0.15vh' : ''}
                  />
                )}
              </View>
            ))}
          </View>
        </>
      ) : (
        <View className={styles.bMenuPane}>
          <Button className={styles.bMenu} onClick={onShowMenuList}>
            <MenuIcon fontSize='3vh' color='var(--ACCENT-COLOR)' />
          </Button>
          {showMenu && (
            <View className={styles.bMenuItemPane}>
              {modules.map((module, index) => (
                <Button
                  key={index}
                  className={styles.bMenuItem}
                  style={applyButtonMenuItemStyle(index)}
                  onClick={() => onNavigate(module.name)}
                >
                  {module.icon}
                </Button>
              ))}
            </View>
          )}
        </View>
      )}
    </View>
  );
};

export default NavigationBar;
