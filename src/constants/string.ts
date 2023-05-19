const ASSETS_URL = './assets';
const ICONS_URL: string = ASSETS_URL + '/icons';
const IMAGES_URL: string = ASSETS_URL + '/images';

const ID_PIC_URL: string = IMAGES_URL + '/id-picture.png';
const PROFILE_PIC_URL: string = IMAGES_URL + '/profile-picture.png';

const LOGO_URL = (color: string): string => `${ICONS_URL}/my-logo-${color}.png`;

const FRAMEWORK_URL = (framework_no: number): string =>
  `${IMAGES_URL}/framework${framework_no}.png`;

const PROJECT_URL = (project_name: string): string =>
  `${IMAGES_URL}/project-${project_name}.png`;

export {
  ASSETS_URL,
  ICONS_URL,
  IMAGES_URL,
  ID_PIC_URL,
  PROFILE_PIC_URL,
  FRAMEWORK_URL,
  PROJECT_URL,
  LOGO_URL
};
