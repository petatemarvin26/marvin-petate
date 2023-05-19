import {
  ExclamationIcon,
  AppStoreIcon,
  FolderOpenIcon,
  CallIcon
} from 'assets/icons';

import {Modules} from './types';

const modules: Modules[] = [
  {
    name: 'ABOUT',
    icon: <ExclamationIcon fontSize='2.25vh' color='var(--WHITE)' />
  },
  {
    name: 'SKILLS',
    icon: <AppStoreIcon fontSize='2.5vh' color='var(--WHITE)' />
  },
  {
    name: 'PROJECTS',
    icon: <FolderOpenIcon fontSize='2.5vh' color='var(--WHITE)' />
  },
  {
    name: 'CONTACTS',
    icon: <CallIcon fontSize='2.5vh' color='var(--WHITE)' />
  }
];

export default modules;
