import * as svgs from 'assets';
import {Framework, TechStack} from 'components';

const techStacks: TechStack[] = [
  {
    id: 23,
    Icon: svgs['AndroidSvg'],
    name: 'Android',
    content:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    work_exp: 0.5,
    framework: Framework.Javascript,
    graph: [
      {date: new Date(2016, 0, 0), value: 0},
      {date: new Date(2017, 0, 0), value: 0},
      {date: new Date(2018, 0, 0), value: 40},
      {date: new Date(2019, 0, 0), value: 60},
      {date: new Date(2020, 0, 0), value: 10},
      {date: new Date(2021, 0, 0), value: 5},
      {date: new Date(2022, 0, 0), value: 0},
      {date: new Date(2023, 0, 0), value: 0}
    ],
    colors: ['rgba(132, 149, 55, 1)', 'rgba(132, 149, 55, 0.1)']
  },
  {
    id: 31,
    Icon: svgs['AwsSvg'],
    name: 'Amazon WeFb Service',
    content:
      'Donec non ante lobortis, molestie turpis quis, tincidunt justo. Sed ac est luctus, varius lacus sit amet, cursus enim. Curabitur tempus tellus non ante interdum, molestie bibendum sem tristique. Maecenas eget justo nunc. In commodo euismod dui, at molestie orci viverra et. Pellentesque eget quam sit amet sem accumsan bibendum. Fusce at leo tellus. Aenean ornare ultricies rhoncus. Nullam imperdiet felis in nisi pellentesque, vitae luctus orci varius. Phasellus iaculis arcu dui, ac gravida velit molestie a. Morbi purus mi, lacinia feugiat magna a, tempor consectetur ex. In bibendum velit in nisi faucibus imperdiet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    work_exp: 0.5,
    framework: Framework.Infra,
    graph: [
      {date: new Date(2016, 0, 0), value: 0},
      {date: new Date(2017, 0, 0), value: 0},
      {date: new Date(2018, 0, 0), value: 0},
      {date: new Date(2019, 0, 0), value: 0},
      {date: new Date(2020, 0, 0), value: 0},
      {date: new Date(2021, 0, 0), value: 25},
      {date: new Date(2022, 0, 0), value: 100},
      {date: new Date(2023, 0, 0), value: 50}
    ],
    colors: ['rgba(255, 153, 0, 1)', 'rgba(255, 153, 0, 0.1)']
  },
  {
    id: 27,
    Icon: svgs['BitbucketSvg'],
    name: 'Bitbucket',
    content:
      'Donec non ante lobortis, molestie turpis quis, tincidunt justo. Sed ac est luctus, varius lacus sit amet, cursus enim. Curabitur tempus tellus non ante interdum, molestie bibendum sem tristique. Maecenas eget justo nunc. In commodo euismod dui, at molestie orci viverra et. Pellentesque eget quam sit amet sem accumsan bibendum. Fusce at leo tellus. Aenean ornare ultricies rhoncus. Nullam imperdiet felis in nisi pellentesque, vitae luctus orci varius. Phasellus iaculis arcu dui, ac gravida velit molestie a. Morbi purus mi, lacinia feugiat magna a, tempor consectetur ex. In bibendum velit in nisi faucibus imperdiet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    work_exp: 0.5,
    framework: Framework.WebbasedRepo,
    colors: ['rgba(0, 82, 204, 1)', 'rgba(0, 82, 204, 0.1)'],
    graph: [
      {date: new Date(2016, 0, 0), value: 0},
      {date: new Date(2017, 0, 0), value: 0},
      {date: new Date(2018, 0, 0), value: 0},
      {date: new Date(2019, 0, 0), value: 0},
      {date: new Date(2020, 0, 0), value: 0},
      {date: new Date(2021, 0, 0), value: 5},
      {date: new Date(2022, 0, 0), value: 25},
      {date: new Date(2023, 0, 0), value: 30}
    ]
  },
  {
    id: 4,
    Icon: svgs['CssSvg'],
    name: 'Cascading Style Sheet',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque varius sollicitudin. Aliquam erat volutpat. Nulla facilisi. Duis eget lacinia tellus, sed posuere quam. Curabitur scelerisque orci nec ultricies lobortis. Vivamus arcu ipsum, posuere in erat sed, tincidunt semper felis. Vestibulum ac semper eros. Aenean sollicitudin sapien nec lobortis ultricies. Sed ultrices egestas volutpat. Quisque laoreet, risus accumsan porttitor sagittis, elit elit lobortis enim, vel rutrum urna enim non mi.',
    work_exp: 4.25,
    framework: Framework.StyleSheet,
    colors: ['rgba(0, 118, 214, 1)', 'rgba(0, 118, 214, 0.1)'],
    graph: [
      {date: new Date(2016, 0, 0), value: 10},
      {date: new Date(2017, 0, 0), value: 20},
      {date: new Date(2018, 0, 0), value: 40},
      {date: new Date(2019, 0, 0), value: 80},
      {date: new Date(2020, 0, 0), value: 85},
      {date: new Date(2021, 0, 0), value: 90},
      {date: new Date(2022, 0, 0), value: 100},
      {date: new Date(2023, 0, 0), value: 100}
    ]
  },
  {
    id: 28,
    Icon: svgs['DockerSvg'],
    name: 'Docker',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque varius sollicitudin. Aliquam erat volutpat. Nulla facilisi. Duis eget lacinia tellus, sed posuere quam. Curabitur scelerisque orci nec ultricies lobortis. Vivamus arcu ipsum, posuere in erat sed, tincidunt semper felis. Vestibulum ac semper eros. Aenean sollicitudin sapien nec lobortis ultricies. Sed ultrices egestas volutpat. Quisque laoreet, risus accumsan porttitor sagittis, elit elit lobortis enim, vel rutrum urna enim non mi.',
    work_exp: 1.5,
    framework: Framework.CICD,
    colors: ['rgba(0, 106, 128, 1)', 'rgba(0, 106, 128, 0.1)'],
    graph: [
      {date: new Date(2016, 0, 0), value: 0},
      {date: new Date(2017, 0, 0), value: 0},
      {date: new Date(2018, 0, 0), value: 0},
      {date: new Date(2019, 0, 0), value: 0},
      {date: new Date(2020, 0, 0), value: 0},
      {date: new Date(2021, 0, 0), value: 30},
      {date: new Date(2022, 0, 0), value: 70},
      {date: new Date(2023, 0, 0), value: 80}
    ]
  },
  {
    id: 15,
    Icon: svgs['ExpressSvg'],
    name: 'Express',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque varius sollicitudin. Aliquam erat volutpat. Nulla facilisi. Duis eget lacinia tellus, sed posuere quam. Curabitur scelerisque orci nec ultricies lobortis. Vivamus arcu ipsum, posuere in erat sed, tincidunt semper felis. Vestibulum ac semper eros. Aenean sollicitudin sapien nec lobortis ultricies. Sed ultrices egestas volutpat. Quisque laoreet, risus accumsan porttitor sagittis, elit elit lobortis enim, vel rutrum urna enim non mi.',
    work_exp: 1,
    framework: Framework.Javascript,
    colors: ['rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 0.1)'],
    graph: [
      {date: new Date(2016, 0, 0), value: 0},
      {date: new Date(2017, 0, 0), value: 0},
      {date: new Date(2018, 0, 0), value: 10},
      {date: new Date(2019, 0, 0), value: 60},
      {date: new Date(2020, 0, 0), value: 100},
      {date: new Date(2021, 0, 0), value: 50},
      {date: new Date(2022, 0, 0), value: 40},
      {date: new Date(2023, 0, 0), value: 20}
    ]
  },
  {
    id: 20,
    Icon: svgs['FastApiSvg'],
    name: 'FastAPI',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque varius sollicitudin. Aliquam erat volutpat. Nulla facilisi. Duis eget lacinia tellus, sed posuere quam. Curabitur scelerisque orci nec ultricies lobortis. Vivamus arcu ipsum, posuere in erat sed, tincidunt semper felis. Vestibulum ac semper eros. Aenean sollicitudin sapien nec lobortis ultricies. Sed ultrices egestas volutpat. Quisque laoreet, risus accumsan porttitor sagittis, elit elit lobortis enim, vel rutrum urna enim non mi.',
    work_exp: 0.75,
    framework: Framework.Python,
    colors: ['rgba(0, 148, 133, 1)', 'rgba(0, 148, 133, 0.1)'],
    graph: [
      {date: new Date(2016, 0, 0), value: 0},
      {date: new Date(2017, 0, 0), value: 0},
      {date: new Date(2018, 0, 0), value: 0},
      {date: new Date(2019, 0, 0), value: 0},
      {date: new Date(2020, 0, 0), value: 0},
      {date: new Date(2021, 0, 0), value: 25},
      {date: new Date(2022, 0, 0), value: 60},
      {date: new Date(2023, 0, 0), value: 15}
    ]
  },
  {
    id: 33,
    Icon: svgs['FirebaseSvg'],
    name: 'Firebase',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque varius sollicitudin. Aliquam erat volutpat. Nulla facilisi. Duis eget lacinia tellus, sed posuere quam. Curabitur scelerisque orci nec ultricies lobortis. Vivamus arcu ipsum, posuere in erat sed, tincidunt semper felis. Vestibulum ac semper eros. Aenean sollicitudin sapien nec lobortis ultricies. Sed ultrices egestas volutpat. Quisque laoreet, risus accumsan porttitor sagittis, elit elit lobortis enim, vel rutrum urna enim non mi.',
    work_exp: 0.75,
    framework: Framework.Infra,
    colors: ['rgba(255, 130, 5, 1)', 'rgba(255, 130, 5, 0.1)'],
    graph: [
      {date: new Date(2016, 0, 0), value: 0},
      {date: new Date(2017, 0, 0), value: 0},
      {date: new Date(2018, 0, 0), value: 25},
      {date: new Date(2019, 0, 0), value: 50},
      {date: new Date(2020, 0, 0), value: 70},
      {date: new Date(2021, 0, 0), value: 20},
      {date: new Date(2022, 0, 0), value: 20},
      {date: new Date(2023, 0, 0), value: 0}
    ]
  },
  {
    id: 19,
    Icon: svgs['FlaskSvg'],
    name: 'Flask',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque varius sollicitudin. Aliquam erat volutpat. Nulla facilisi. Duis eget lacinia tellus, sed posuere quam. Curabitur scelerisque orci nec ultricies lobortis. Vivamus arcu ipsum, posuere in erat sed, tincidunt semper felis. Vestibulum ac semper eros. Aenean sollicitudin sapien nec lobortis ultricies. Sed ultrices egestas volutpat. Quisque laoreet, risus accumsan porttitor sagittis, elit elit lobortis enim, vel rutrum urna enim non mi.',
    work_exp: 1,
    framework: Framework.Python,
    colors: ['rgba(0, 43, 0, 1)', 'rgba(0, 43, 0, 0.1)'],
    graph: [
      {date: new Date(2016, 0, 0), value: 0},
      {date: new Date(2017, 0, 0), value: 0},
      {date: new Date(2018, 0, 0), value: 0},
      {date: new Date(2019, 0, 0), value: 10},
      {date: new Date(2020, 0, 0), value: 20},
      {date: new Date(2021, 0, 0), value: 60},
      {date: new Date(2022, 0, 0), value: 50},
      {date: new Date(2023, 0, 0), value: 20}
    ]
  },
  {
    id: 24,
    Icon: svgs['GitSvg'],
    name: 'Git',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque varius sollicitudin. Aliquam erat volutpat. Nulla facilisi. Duis eget lacinia tellus, sed posuere quam. Curabitur scelerisque orci nec ultricies lobortis. Vivamus arcu ipsum, posuere in erat sed, tincidunt semper felis. Vestibulum ac semper eros. Aenean sollicitudin sapien nec lobortis ultricies. Sed ultrices egestas volutpat. Quisque laoreet, risus accumsan porttitor sagittis, elit elit lobortis enim, vel rutrum urna enim non mi.',
    work_exp: 2,
    framework: Framework.VersionCtrl,
    colors: ['rgba(255, 52, 20, 1)', 'rgba(255, 52, 20, 0.1)'],
    graph: [
      {date: new Date(2016, 0, 0), value: 0},
      {date: new Date(2017, 0, 0), value: 10},
      {date: new Date(2018, 0, 0), value: 10},
      {date: new Date(2019, 0, 0), value: 50},
      {date: new Date(2020, 0, 0), value: 50},
      {date: new Date(2021, 0, 0), value: 90},
      {date: new Date(2022, 0, 0), value: 80},
      {date: new Date(2023, 0, 0), value: 100}
    ]
  },
  {
    id: 25,
    Icon: svgs['GithubSvg'],
    name: 'Github',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque varius sollicitudin. Aliquam erat volutpat. Nulla facilisi. Duis eget lacinia tellus, sed posuere quam. Curabitur scelerisque orci nec ultricies lobortis. Vivamus arcu ipsum, posuere in erat sed, tincidunt semper felis. Vestibulum ac semper eros. Aenean sollicitudin sapien nec lobortis ultricies. Sed ultrices egestas volutpat. Quisque laoreet, risus accumsan porttitor sagittis, elit elit lobortis enim, vel rutrum urna enim non mi.',
    work_exp: 3,
    framework: Framework.WebbasedRepo,
    colors: ['rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 0.1)'],
    graph: [
      {date: new Date(2016, 0, 0), value: 0},
      {date: new Date(2017, 0, 0), value: 25},
      {date: new Date(2018, 0, 0), value: 40},
      {date: new Date(2019, 0, 0), value: 30},
      {date: new Date(2020, 0, 0), value: 40},
      {date: new Date(2021, 0, 0), value: 50},
      {date: new Date(2022, 0, 0), value: 40},
      {date: new Date(2023, 0, 0), value: 80}
    ]
  },
  {
    id: 26,
    Icon: svgs['GitlabSvg'],
    name: 'Gitlab',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque varius sollicitudin. Aliquam erat volutpat. Nulla facilisi. Duis eget lacinia tellus, sed posuere quam. Curabitur scelerisque orci nec ultricies lobortis. Vivamus arcu ipsum, posuere in erat sed, tincidunt semper felis. Vestibulum ac semper eros. Aenean sollicitudin sapien nec lobortis ultricies. Sed ultrices egestas volutpat. Quisque laoreet, risus accumsan porttitor sagittis, elit elit lobortis enim, vel rutrum urna enim non mi.',
    work_exp: 3,
    framework: Framework.WebbasedRepo,
    colors: ['rgba(226, 67, 41, 1)', 'rgba(226, 67, 41, 0.1)'],
    graph: [
      {date: new Date(2016, 0, 0), value: 0},
      {date: new Date(2017, 0, 0), value: 0},
      {date: new Date(2018, 0, 0), value: 25},
      {date: new Date(2019, 0, 0), value: 25},
      {date: new Date(2020, 0, 0), value: 10},
      {date: new Date(2021, 0, 0), value: 50},
      {date: new Date(2022, 0, 0), value: 60},
      {date: new Date(2023, 0, 0), value: 30}
    ]
  },
  {
    id: 32,
    Icon: svgs['GoogleCloudSvg'],
    name: 'Google Cloud Platform',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque varius sollicitudin. Aliquam erat volutpat. Nulla facilisi. Duis eget lacinia tellus, sed posuere quam. Curabitur scelerisque orci nec ultricies lobortis. Vivamus arcu ipsum, posuere in erat sed, tincidunt semper felis. Vestibulum ac semper eros. Aenean sollicitudin sapien nec lobortis ultricies. Sed ultrices egestas volutpat. Quisque laoreet, risus accumsan porttitor sagittis, elit elit lobortis enim, vel rutrum urna enim non mi.',
    work_exp: 0.5,
    framework: Framework.Infra,
    colors: ['rgba(234, 67, 53, 1)', 'rgba(251, 188, 5, 0.1)'],
    graph: [
      {date: new Date(2016, 0, 0), value: 0},
      {date: new Date(2017, 0, 0), value: 0},
      {date: new Date(2018, 0, 0), value: 0},
      {date: new Date(2019, 0, 0), value: 0},
      {date: new Date(2020, 0, 0), value: 0},
      {date: new Date(2021, 0, 0), value: 15},
      {date: new Date(2022, 0, 0), value: 30},
      {date: new Date(2023, 0, 0), value: 40}
    ]
  },
  {
    id: 21,
    Icon: svgs['GraphqlSvg'],
    name: 'Graphql',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque varius sollicitudin. Aliquam erat volutpat. Nulla facilisi. Duis eget lacinia tellus, sed posuere quam. Curabitur scelerisque orci nec ultricies lobortis. Vivamus arcu ipsum, posuere in erat sed, tincidunt semper felis. Vestibulum ac semper eros. Aenean sollicitudin sapien nec lobortis ultricies. Sed ultrices egestas volutpat. Quisque laoreet, risus accumsan porttitor sagittis, elit elit lobortis enim, vel rutrum urna enim non mi.',
    work_exp: 0.75,
    framework: Framework.QL,
    colors: ['rgba(212, 1, 111, 1)', 'rgba(212, 1, 111, 0.1)'],
    graph: [
      {date: new Date(2016, 0, 0), value: 0},
      {date: new Date(2017, 0, 0), value: 0},
      {date: new Date(2018, 0, 0), value: 2.5},
      {date: new Date(2019, 0, 0), value: 10},
      {date: new Date(2020, 0, 0), value: 5},
      {date: new Date(2021, 0, 0), value: 5},
      {date: new Date(2022, 0, 0), value: 15},
      {date: new Date(2023, 0, 0), value: 25}
    ]
  },
  {
    id: 3,
    Icon: svgs['HtmlSvg'],
    name: 'HTML',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque varius sollicitudin. Aliquam erat volutpat. Nulla facilisi. Duis eget lacinia tellus, sed posuere quam. Curabitur scelerisque orci nec ultricies lobortis. Vivamus arcu ipsum, posuere in erat sed, tincidunt semper felis. Vestibulum ac semper eros. Aenean sollicitudin sapien nec lobortis ultricies. Sed ultrices egestas volutpat. Quisque laoreet, risus accumsan porttitor sagittis, elit elit lobortis enim, vel rutrum urna enim non mi.',
    work_exp: 4.5,
    framework: Framework.MarkupLanguage,
    colors: ['rgba(255, 63, 10, 1)', 'rgba(255, 63, 10, 0.1)'],
    graph: [
      {date: new Date(2016, 0, 0), value: 20},
      {date: new Date(2017, 0, 0), value: 15},
      {date: new Date(2018, 0, 0), value: 5},
      {date: new Date(2019, 0, 0), value: 5},
      {date: new Date(2020, 0, 0), value: 25},
      {date: new Date(2021, 0, 0), value: 80},
      {date: new Date(2022, 0, 0), value: 90},
      {date: new Date(2023, 0, 0), value: 90}
    ]
  },
  {
    id: 22,
    Icon: svgs['JavaSvg'],
    name: 'Java',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque varius sollicitudin. Aliquam erat volutpat. Nulla facilisi. Duis eget lacinia tellus, sed posuere quam. Curabitur scelerisque orci nec ultricies lobortis. Vivamus arcu ipsum, posuere in erat sed, tincidunt semper felis. Vestibulum ac semper eros. Aenean sollicitudin sapien nec lobortis ultricies. Sed ultrices egestas volutpat. Quisque laoreet, risus accumsan porttitor sagittis, elit elit lobortis enim, vel rutrum urna enim non mi.',
    work_exp: 1.5,
    framework: Framework.Java,
    colors: ['rgba(214, 104, 0, 1)', 'rgba(214, 104, 0, 0.1)'],
    graph: [
      {date: new Date(2016, 0, 0), value: 30},
      {date: new Date(2017, 0, 0), value: 20},
      {date: new Date(2018, 0, 0), value: 35},
      {date: new Date(2019, 0, 0), value: 75},
      {date: new Date(2020, 0, 0), value: 15},
      {date: new Date(2021, 0, 0), value: 20},
      {date: new Date(2022, 0, 0), value: 0},
      {date: new Date(2023, 0, 0), value: 0}
    ]
  },
  {
    id: 1,
    Icon: svgs['JavascriptSvg'],
    name: 'Javascript',
    content:
      'Nulla faucibus quis lectus non condimentum. Ut dignissim dignissim erat porta viverra. Aenean sem odio, vulputate ut varius id, bibendum ut ipsum. Aliquam suscipit sapien ut tincidunt efficitur. Ut ultrices interdum elementum. Pellentesque ut accumsan neque, sed imperdiet lorem. Etiam sit amet dolor cursus, facilisis.',
    work_exp: 4.4,
    framework: Framework.Javascript,
    colors: ['rgba(252, 228, 69, 1)', 'rgba(252, 228, 69, 0.1)'],
    graph: [
      {date: new Date(2016, 0, 0), value: 20},
      {date: new Date(2017, 0, 0), value: 5},
      {date: new Date(2018, 0, 0), value: 5},
      {date: new Date(2019, 0, 0), value: 5},
      {date: new Date(2020, 0, 0), value: 20},
      {date: new Date(2021, 0, 0), value: 80},
      {date: new Date(2022, 0, 0), value: 100},
      {date: new Date(2023, 0, 0), value: 100}
    ]
  },
  {
    id: 6,
    Icon: svgs['LessSvg'],
    name: 'Leaner Style Sheets',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque varius sollicitudin. Aliquam erat volutpat. Nulla facilisi. Duis eget lacinia tellus, sed posuere quam. Curabitur scelerisque orci nec ultricies lobortis. Vivamus arcu ipsum, posuere in erat sed, tincidunt semper felis. Vestibulum ac semper eros. Aenean sollicitudin sapien nec lobortis ultricies. Sed ultrices egestas volutpat. Quisque laoreet, risus accumsan porttitor sagittis, elit elit lobortis enim, vel rutrum urna enim non mi.',
    work_exp: 1.5,
    framework: Framework.StyleSheet,
    colors: ['rgba(0, 42, 102, 1)', 'rgba(0, 42, 102, 0.1)'],
    graph: [
      {date: new Date(2016, 0, 0), value: 0},
      {date: new Date(2017, 0, 0), value: 0},
      {date: new Date(2018, 0, 0), value: 0},
      {date: new Date(2019, 0, 0), value: 5},
      {date: new Date(2020, 0, 0), value: 20},
      {date: new Date(2021, 0, 0), value: 15},
      {date: new Date(2022, 0, 0), value: 15},
      {date: new Date(2023, 0, 0), value: 20}
    ]
  },
  {
    id: 30,
    Icon: svgs['MongoSvg'],
    name: 'MongoDB',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque varius sollicitudin. Aliquam erat volutpat. Nulla facilisi. Duis eget lacinia tellus, sed posuere quam. Curabitur scelerisque orci nec ultricies lobortis. Vivamus arcu ipsum, posuere in erat sed, tincidunt semper felis. Vestibulum ac semper eros. Aenean sollicitudin sapien nec lobortis ultricies. Sed ultrices egestas volutpat. Quisque laoreet, risus accumsan porttitor sagittis, elit elit lobortis enim, vel rutrum urna enim non mi.',
    work_exp: 2,
    framework: Framework.Database,
    colors: ['rgba(65, 148, 50, 1)', 'rgba(65, 148, 50, 0.1)'],
    graph: [
      {date: new Date(2016, 0, 0), value: 0},
      {date: new Date(2017, 0, 0), value: 0},
      {date: new Date(2018, 0, 0), value: 0},
      {date: new Date(2019, 0, 0), value: 0},
      {date: new Date(2020, 0, 0), value: 15},
      {date: new Date(2021, 0, 0), value: 50},
      {date: new Date(2022, 0, 0), value: 100},
      {date: new Date(2023, 0, 0), value: 20}
    ]
  },
  {
    id: 34,
    Icon: svgs['NginxSvg'],
    name: 'Nginx',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque varius sollicitudin. Aliquam erat volutpat. Nulla facilisi. Duis eget lacinia tellus, sed posuere quam. Curabitur scelerisque orci nec ultricies lobortis. Vivamus arcu ipsum, posuere in erat sed, tincidunt semper felis. Vestibulum ac semper eros. Aenean sollicitudin sapien nec lobortis ultricies. Sed ultrices egestas volutpat. Quisque laoreet, risus accumsan porttitor sagittis, elit elit lobortis enim, vel rutrum urna enim non mi.',
    work_exp: 0.5,
    framework: Framework.Webserver,
    colors: ['rgba(0, 153, 0, 1)', 'rgba(0, 153, 0, 0.1)'],
    graph: [
      {date: new Date(2016, 0, 0), value: 0},
      {date: new Date(2017, 0, 0), value: 0},
      {date: new Date(2018, 0, 0), value: 0},
      {date: new Date(2019, 0, 0), value: 0},
      {date: new Date(2020, 0, 0), value: 0},
      {date: new Date(2021, 0, 0), value: 25},
      {date: new Date(2022, 0, 0), value: 50},
      {date: new Date(2023, 0, 0), value: 5}
    ]
  },
  {
    id: 7,
    Icon: svgs['NodeSvg'],
    name: 'Node',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque varius sollicitudin. Aliquam erat volutpat. Nulla facilisi. Duis eget lacinia tellus, sed posuere quam. Curabitur scelerisque orci nec ultricies lobortis. Vivamus arcu ipsum, posuere in erat sed, tincidunt semper felis. Vestibulum ac semper eros. Aenean sollicitudin sapien nec lobortis ultricies. Sed ultrices egestas volutpat. Quisque laoreet, risus accumsan porttitor sagittis, elit elit lobortis enim, vel rutrum urna enim non mi.',
    work_exp: 3,
    framework: Framework.Javascript,
    colors: ['rgba(65, 135, 63, 1)', 'rgba(65, 135, 63, 0.1)'],
    graph: [
      {date: new Date(2016, 0, 0), value: 0},
      {date: new Date(2017, 0, 0), value: 0},
      {date: new Date(2018, 0, 0), value: 0},
      {date: new Date(2019, 0, 0), value: 15},
      {date: new Date(2020, 0, 0), value: 25},
      {date: new Date(2021, 0, 0), value: 50},
      {date: new Date(2022, 0, 0), value: 75},
      {date: new Date(2023, 0, 0), value: 50}
    ]
  },
  // {
  //   id: 17,
  //   Icon: svgs['NpmSvg'],
  //   name: 'Node Package Manager',
  //   content:
  //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque varius sollicitudin. Aliquam erat volutpat. Nulla facilisi. Duis eget lacinia tellus, sed posuere quam. Curabitur scelerisque orci nec ultricies lobortis. Vivamus arcu ipsum, posuere in erat sed, tincidunt semper felis. Vestibulum ac semper eros. Aenean sollicitudin sapien nec lobortis ultricies. Sed ultrices egestas volutpat. Quisque laoreet, risus accumsan porttitor sagittis, elit elit lobortis enim, vel rutrum urna enim non mi.',
  //   work_exp: 2.5,
  //   framework: Framework.Infra
  // },
  {
    id: 29,
    Icon: svgs['PostgresqlSvg'],
    name: 'Postgresql',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque varius sollicitudin. Aliquam erat volutpat. Nulla facilisi. Duis eget lacinia tellus, sed posuere quam. Curabitur scelerisque orci nec ultricies lobortis. Vivamus arcu ipsum, posuere in erat sed, tincidunt semper felis. Vestibulum ac semper eros. Aenean sollicitudin sapien nec lobortis ultricies. Sed ultrices egestas volutpat. Quisque laoreet, risus accumsan porttitor sagittis, elit elit lobortis enim, vel rutrum urna enim non mi.',
    work_exp: 2,
    framework: Framework.Database,
    colors: ['rgba(49, 100, 140, 1)', 'rgba(49, 100, 140, 0.1)'],
    graph: [
      {date: new Date(2016, 0, 0), value: 0},
      {date: new Date(2017, 0, 0), value: 0},
      {date: new Date(2018, 0, 0), value: 10},
      {date: new Date(2019, 0, 0), value: 5},
      {date: new Date(2020, 0, 0), value: 25},
      {date: new Date(2021, 0, 0), value: 75},
      {date: new Date(2022, 0, 0), value: 50},
      {date: new Date(2023, 0, 0), value: 50}
    ]
  },
  {
    id: 18,
    Icon: svgs['PythonSvg'],
    name: 'Python',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque varius sollicitudin. Aliquam erat volutpat. Nulla facilisi. Duis eget lacinia tellus, sed posuere quam. Curabitur scelerisque orci nec ultricies lobortis. Vivamus arcu ipsum, posuere in erat sed, tincidunt semper felis. Vestibulum ac semper eros. Aenean sollicitudin sapien nec lobortis ultricies. Sed ultrices egestas volutpat. Quisque laoreet, risus accumsan porttitor sagittis, elit elit lobortis enim, vel rutrum urna enim non mi.',
    work_exp: 2,
    framework: Framework.Python,
    colors: ['rgba(55, 115, 165, 1)', 'rgba(55, 115, 165, 0.1)'],
    graph: [
      {date: new Date(2016, 0, 0), value: 10},
      {date: new Date(2017, 0, 0), value: 5},
      {date: new Date(2018, 0, 0), value: 5},
      {date: new Date(2019, 0, 0), value: 20},
      {date: new Date(2020, 0, 0), value: 50},
      {date: new Date(2021, 0, 0), value: 30},
      {date: new Date(2022, 0, 0), value: 50},
      {date: new Date(2023, 0, 0), value: 10}
    ]
  },
  {
    id: 12,
    Icon: svgs['ReactSpringSvg'],
    name: 'React Spring',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque varius sollicitudin. Aliquam erat volutpat. Nulla facilisi. Duis eget lacinia tellus, sed posuere quam. Curabitur scelerisque orci nec ultricies lobortis. Vivamus arcu ipsum, posuere in erat sed, tincidunt semper felis. Vestibulum ac semper eros. Aenean sollicitudin sapien nec lobortis ultricies. Sed ultrices egestas volutpat. Quisque laoreet, risus accumsan porttitor sagittis, elit elit lobortis enim, vel rutrum urna enim non mi.',
    work_exp: 1.5,
    framework: Framework.Animation,
    colors: ['rgba(255, 109, 109, 1)', 'rgba(255, 109, 109, 0.1)'],
    graph: [
      {date: new Date(2016, 0, 0), value: 0},
      {date: new Date(2017, 0, 0), value: 0},
      {date: new Date(2018, 0, 0), value: 0},
      {date: new Date(2019, 0, 0), value: 0},
      {date: new Date(2020, 0, 0), value: 15},
      {date: new Date(2021, 0, 0), value: 50},
      {date: new Date(2022, 0, 0), value: 25},
      {date: new Date(2023, 0, 0), value: 60}
    ]
  },
  {
    id: 9.1,
    Icon: svgs['ReactNativeSvg'],
    name: 'React Native',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque varius sollicitudin. Aliquam erat volutpat. Nulla facilisi. Duis eget lacinia tellus, sed posuere quam. Curabitur scelerisque orci nec ultricies lobortis. Vivamus arcu ipsum, posuere in erat sed, tincidunt semper felis. Vestibulum ac semper eros. Aenean sollicitudin sapien nec lobortis ultricies. Sed ultrices egestas volutpat. Quisque laoreet, risus accumsan porttitor sagittis, elit elit lobortis enim, vel rutrum urna enim non mi.',
    work_exp: 1.75,
    framework: Framework.Javascript,
    colors: ['rgba(77, 216, 255, 1)', 'rgba(77, 216, 255, 0.1)'],
    graph: [
      {date: new Date(2016, 0, 0), value: 0},
      {date: new Date(2017, 0, 0), value: 0},
      {date: new Date(2018, 0, 0), value: 0},
      {date: new Date(2019, 0, 0), value: 0},
      {date: new Date(2020, 0, 0), value: 80},
      {date: new Date(2021, 0, 0), value: 100},
      {date: new Date(2022, 0, 0), value: 70},
      {date: new Date(2023, 0, 0), value: 20}
    ]
  },
  {
    id: 9,
    Icon: svgs['ReactSvg'],
    name: 'React JS',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque varius sollicitudin. Aliquam erat volutpat. Nulla facilisi. Duis eget lacinia tellus, sed posuere quam. Curabitur scelerisque orci nec ultricies lobortis. Vivamus arcu ipsum, posuere in erat sed, tincidunt semper felis. Vestibulum ac semper eros. Aenean sollicitudin sapien nec lobortis ultricies. Sed ultrices egestas volutpat. Quisque laoreet, risus accumsan porttitor sagittis, elit elit lobortis enim, vel rutrum urna enim non mi.',
    work_exp: 2.5,
    framework: Framework.Javascript,
    colors: ['rgba(77, 216, 255, 1)', 'rgba(77, 216, 255, 0.1)'],
    graph: [
      {date: new Date(2016, 0, 0), value: 0},
      {date: new Date(2017, 0, 0), value: 0},
      {date: new Date(2018, 0, 0), value: 0},
      {date: new Date(2019, 0, 0), value: 0},
      {date: new Date(2020, 0, 0), value: 75},
      {date: new Date(2021, 0, 0), value: 90},
      {date: new Date(2022, 0, 0), value: 100},
      {date: new Date(2023, 0, 0), value: 100}
    ]
  },
  {
    id: 11,
    Icon: svgs['ReduxSagaSvg'],
    name: 'React Saga',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque varius sollicitudin. Aliquam erat volutpat. Nulla facilisi. Duis eget lacinia tellus, sed posuere quam. Curabitur scelerisque orci nec ultricies lobortis. Vivamus arcu ipsum, posuere in erat sed, tincidunt semper felis. Vestibulum ac semper eros. Aenean sollicitudin sapien nec lobortis ultricies. Sed ultrices egestas volutpat. Quisque laoreet, risus accumsan porttitor sagittis, elit elit lobortis enim, vel rutrum urna enim non mi.',
    work_exp: 2,
    framework: Framework.Javascript,
    colors: ['rgba(120, 255, 71, 1)', 'rgba(120, 255, 71, 0.1)'],
    graph: [
      {date: new Date(2016, 0, 0), value: 0},
      {date: new Date(2017, 0, 0), value: 0},
      {date: new Date(2018, 0, 0), value: 0},
      {date: new Date(2019, 0, 0), value: 0},
      {date: new Date(2020, 0, 0), value: 25},
      {date: new Date(2021, 0, 0), value: 50},
      {date: new Date(2022, 0, 0), value: 70},
      {date: new Date(2023, 0, 0), value: 80}
    ]
  },
  {
    id: 10,
    Icon: svgs['ReduxSvg'],
    name: 'Redux',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque varius sollicitudin. Aliquam erat volutpat. Nulla facilisi. Duis eget lacinia tellus, sed posuere quam. Curabitur scelerisque orci nec ultricies lobortis. Vivamus arcu ipsum, posuere in erat sed, tincidunt semper felis. Vestibulum ac semper eros. Aenean sollicitudin sapien nec lobortis ultricies. Sed ultrices egestas volutpat. Quisque laoreet, risus accumsan porttitor sagittis, elit elit lobortis enim, vel rutrum urna enim non mi.',
    work_exp: 2.25,
    framework: Framework.Javascript,
    colors: ['rgba(98, 0, 255, 1)', 'rgba(98, 0, 255, 0.1)'],
    graph: [
      {date: new Date(2016, 0, 0), value: 0},
      {date: new Date(2017, 0, 0), value: 0},
      {date: new Date(2018, 0, 0), value: 0},
      {date: new Date(2019, 0, 0), value: 0},
      {date: new Date(2020, 0, 0), value: 50},
      {date: new Date(2021, 0, 0), value: 80},
      {date: new Date(2022, 0, 0), value: 100},
      {date: new Date(2023, 0, 0), value: 100}
    ]
  },
  {
    id: 5,
    Icon: svgs['ScssSvg'],
    name: 'Sassy Cascading Style Sheets',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque varius sollicitudin. Aliquam erat volutpat. Nulla facilisi. Duis eget lacinia tellus, sed posuere quam. Curabitur scelerisque orci nec ultricies lobortis. Vivamus arcu ipsum, posuere in erat sed, tincidunt semper felis. Vestibulum ac semper eros. Aenean sollicitudin sapien nec lobortis ultricies. Sed ultrices egestas volutpat. Quisque laoreet, risus accumsan porttitor sagittis, elit elit lobortis enim, vel rutrum urna enim non mi.',
    work_exp: 1.5,
    framework: Framework.StyleSheet,
    colors: ['rgba(255, 51, 153, 1)', 'rgba(255, 51, 153, 0.1)'],
    graph: [
      {date: new Date(2016, 0, 0), value: 0},
      {date: new Date(2017, 0, 0), value: 0},
      {date: new Date(2018, 0, 0), value: 10},
      {date: new Date(2019, 0, 0), value: 20},
      {date: new Date(2020, 0, 0), value: 5},
      {date: new Date(2021, 0, 0), value: 5},
      {date: new Date(2022, 0, 0), value: 15},
      {date: new Date(2023, 0, 0), value: 20}
    ]
  },
  // {
  //   id: 14,
  //   Icon: svgs['SocketSvg'],
  //   name: 'Socket.io',
  //   content:
  //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque varius sollicitudin. Aliquam erat volutpat. Nulla facilisi. Duis eget lacinia tellus, sed posuere quam. Curabitur scelerisque orci nec ultricies lobortis. Vivamus arcu ipsum, posuere in erat sed, tincidunt semper felis. Vestibulum ac semper eros. Aenean sollicitudin sapien nec lobortis ultricies. Sed ultrices egestas volutpat. Quisque laoreet, risus accumsan porttitor sagittis, elit elit lobortis enim, vel rutrum urna enim non mi.',
  //   work_exp: 1.5,
  //   framework: Framework.Javascript,
  //   fram,ework_data: {
  //     color: {border: 'rgba(0, 0, 0, 1)', body: 'rgba(0, 0, 0, 0.1)'},
  //     data: [
  //       {date: new Date(2016, 0, 0), value: 0},
  //       {date: new Date(2017, 0, 0), value: 0},
  //       {date: new Date(2018, 0, 0), value: 10},
  //       {date: new Date(2019, 0, 0), value: 50},
  //       {date: new Date(2020, 0, 0), value: 25},
  //       {date: new Date(2021, 0, 0), value: 100},
  //       {date: new Date(2022, 0, 0), value: 115}
  //     ]
  //   }
  // },
  {
    id: 2,
    Icon: svgs['TypescriptSvg'],
    name: 'Typescript',
    content:
      'Nulla nisi magna, vestibulum blandit ipsum in, pellentesque lacinia urna. In nec augue condimentum, volutpat turpis sed, venenatis quam. In hac habitasse platea dictumst. Morbi molestie dignissim mi. Phasellus cursus et quam nec imperdiet. Fusce id sem orci. Pellentesque bibendum felis ipsum, quis fermentum nunc ultrices dignissim. Quisque nunc lacus, varius a sollicitudin eu, ullamcorper quis purus. Donec id arcu sit amet nulla tempus pulvinar. ',
    work_exp: 2,
    framework: Framework.Javascript,
    colors: ['rgba(0, 153, 255, 1)', 'rgba(0, 153, 255, 0.1)'],
    graph: [
      {date: new Date(2016, 0, 0), value: 0},
      {date: new Date(2017, 0, 0), value: 0},
      {date: new Date(2018, 0, 0), value: 0},
      {date: new Date(2019, 0, 0), value: 0},
      {date: new Date(2020, 0, 0), value: 15},
      {date: new Date(2021, 0, 0), value: 50},
      {date: new Date(2022, 0, 0), value: 80},
      {date: new Date(2023, 0, 0), value: 90}
    ]
  },
  {
    id: 13,
    Icon: svgs['VueSvg'],
    name: 'Vue JS',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque varius sollicitudin. Aliquam erat volutpat. Nulla facilisi. Duis eget lacinia tellus, sed posuere quam. Curabitur scelerisque orci nec ultricies lobortis. Vivamus arcu ipsum, posuere in erat sed, tincidunt semper felis. Vestibulum ac semper eros. Aenean sollicitudin sapien nec lobortis ultricies. Sed ultrices egestas volutpat. Quisque laoreet, risus accumsan porttitor sagittis, elit elit lobortis enim, vel rutrum urna enim non mi.',
    work_exp: 0.75,
    framework: Framework.Javascript,
    colors: ['rgba(49, 71, 94, 1)', 'rgba(49, 71, 94, 0.1)'],
    graph: [
      {date: new Date(2016, 0, 0), value: 0},
      {date: new Date(2017, 0, 0), value: 0},
      {date: new Date(2018, 0, 0), value: 0},
      {date: new Date(2019, 0, 0), value: 25},
      {date: new Date(2020, 0, 0), value: 10},
      {date: new Date(2021, 0, 0), value: 0},
      {date: new Date(2022, 0, 0), value: 50},
      {date: new Date(2023, 0, 0), value: 20}
    ]
  },
  {
    id: 8,
    Icon: svgs['WebpackSvg'],
    name: 'Webpack',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque varius sollicitudin. Aliquam erat volutpat. Nulla facilisi. Duis eget lacinia tellus, sed posuere quam. Curabitur scelerisque orci nec ultricies lobortis. Vivamus arcu ipsum, posuere in erat sed, tincidunt semper felis. Vestibulum ac semper eros. Aenean sollicitudin sapien nec lobortis ultricies. Sed ultrices egestas volutpat. Quisque laoreet, risus accumsan porttitor sagittis, elit elit lobortis enim, vel rutrum urna enim non mi.',
    work_exp: 2,
    framework: Framework.Javascript,
    colors: ['rgba(0, 124, 219, 1)', 'rgba(0, 124, 219, 0.1)'],
    graph: [
      {date: new Date(2016, 0, 0), value: 0},
      {date: new Date(2017, 0, 0), value: 0},
      {date: new Date(2018, 0, 0), value: 0},
      {date: new Date(2019, 0, 0), value: 7.5},
      {date: new Date(2020, 0, 0), value: 15},
      {date: new Date(2021, 0, 0), value: 50},
      {date: new Date(2022, 0, 0), value: 60},
      {date: new Date(2023, 0, 0), value: 60}
    ]
  },
  {
    id: 16,
    Icon: svgs['WebsocketSvg'],
    name: 'Websocket',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque varius sollicitudin. Aliquam erat volutpat. Nulla facilisi. Duis eget lacinia tellus, sed posuere quam. Curabitur scelerisque orci nec ultricies lobortis. Vivamus arcu ipsum, posuere in erat sed, tincidunt semper felis. Vestibulum ac semper eros. Aenean sollicitudin sapien nec lobortis ultricies. Sed ultrices egestas volutpat. Quisque laoreet, risus accumsan porttitor sagittis, elit elit lobortis enim, vel rutrum urna enim non mi.',
    work_exp: 2.5,
    framework: Framework.Javascript,
    colors: ['rgba(255, 51, 0, 1)', 'rgba(255, 51, 0, 0.1)'],
    graph: [
      {date: new Date(2016, 0, 0), value: 0},
      {date: new Date(2017, 0, 0), value: 0},
      {date: new Date(2018, 0, 0), value: 10},
      {date: new Date(2019, 0, 0), value: 50},
      {date: new Date(2020, 0, 0), value: 25},
      {date: new Date(2021, 0, 0), value: 45},
      {date: new Date(2022, 0, 0), value: 60},
      {date: new Date(2023, 0, 0), value: 80}
    ]
  },
  {
    id: 16.1,
    Icon: svgs['D3Svg'],
    name: 'Data Driven Documents',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque varius sollicitudin. Aliquam erat volutpat. Nulla facilisi. Duis eget lacinia tellus, sed posuere quam. Curabitur scelerisque orci nec ultricies lobortis. Vivamus arcu ipsum, posuere in erat sed, tincidunt semper felis. Vestibulum ac semper eros. Aenean sollicitudin sapien nec lobortis ultricies. Sed ultrices egestas volutpat. Quisque laoreet, risus accumsan porttitor sagittis, elit elit lobortis enim, vel rutrum urna enim non mi.',
    work_exp: 0.5,
    framework: Framework.Javascript,
    colors: ['rgba(255, 151, 71, 1)', 'rgba(255, 151, 71, 0.1)'],
    graph: [
      {date: new Date(2016, 0, 0), value: 0},
      {date: new Date(2017, 0, 0), value: 5},
      {date: new Date(2018, 0, 0), value: 25},
      {date: new Date(2019, 0, 0), value: 2},
      {date: new Date(2020, 0, 0), value: 0},
      {date: new Date(2021, 0, 0), value: 10},
      {date: new Date(2022, 0, 0), value: 25},
      {date: new Date(2023, 0, 0), value: 50}
    ]
  }
];

export default techStacks;
