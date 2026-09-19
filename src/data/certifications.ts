import MachineLearningSpecializationImage from '../Images/Machine Learning Specialization.jpeg';
import SupervisedMachineLearningImage from '../Images/Supervised ML.jpeg';
import AdvancedLearningAlgorithmsImage from '../Images/Advanced Learning Algorithm.jpeg';
import UnsupervisedLearningImage from '../Images/Unsupervised Learning.jpeg';
import UnderstandingArtificialIntelligenceImage from '../Images/Understanding Artificial Intelligence.jpg';
import UnderstandingDataScienceImage from '../Images/Understanding DataScience.jpg';
import DataVisualizationDashboardEssentialsImage from '../Images/Data Visualization.png';
import ExcelCognosDashboardsImage from '../Images/Dashboards w excel.jpeg';
import SpanishCareersSocialEventsImage from '../Images/Careers and Social Events.jpeg';
import SpanishSportsTravelHomeImage from '../Images/Sports, Travel and the Home.jpeg';
import SpanishCulturalExperienceImage from '../Images/Cultural Experience.jpeg';
import SpanishMeetingPeopleImage from '../Images/Meeting People.jpeg';
import HtmlFastTrackBootCampImage from '../Images/HTML.jpg';
import AiForEveryoneImage from '../Images/AI for Everyone.jpeg';

export type Certification = {
  title: string;
  issuer: string;
  date?: string;
  credentialId?: string;
  credentialUrl?: string;
  image: string;
};

export const certifications: Certification[] = [
  {
    title: 'Machine Learning Specialization',
    issuer: 'DeepLearning.AI · Coursera · Stanford Online',
    date: 'Jul 2025',
    credentialId: 'A972GD6YJD0C',
    credentialUrl:
      'https://www.coursera.org/account/accomplishments/specialization/A972GD6YJD0C',
    image: MachineLearningSpecializationImage,
  },
  {
    title: 'Supervised Machine Learning: Regression and Classification',
    issuer: 'DeepLearning.AI · Coursera · Stanford Online',
    date: 'Jul 2025',
    credentialId: 'OXSSRSZKU9UQ',
    credentialUrl:
      'https://www.coursera.org/account/accomplishments/verify/OXSSRSZKU9UQ',
    image: SupervisedMachineLearningImage,
  },
  {
    title: 'Advanced Learning Algorithms',
    issuer: 'DeepLearning.AI',
    date: 'Jul 2025',
    credentialId: 'C0Z5922JUVWS',
    credentialUrl:
      'https://www.coursera.org/account/accomplishments/verify/C0Z5922JUVWS',
    image: AdvancedLearningAlgorithmsImage,
  },
  {
    title: 'Unsupervised Learning, Recommenders, Reinforcement Learning',
    issuer: 'DeepLearning.AI · Coursera · Stanford Online',
    date: 'Jul 2025',
    credentialId: 'MGDUB92GPGKK',
    credentialUrl:
      'https://www.coursera.org/account/accomplishments/verify/MGDUB92GPGKK',
    image: UnsupervisedLearningImage,
  },
  {
    title: 'Understanding Artificial Intelligence',
    issuer: 'DataCamp',
    date: 'Jul 2025',
    credentialUrl:
      'https://www.datacamp.com/completed/statement-of-accomplishment/course/3cb327aab9237f38bd52f13f7c6694a079b369d9',
    image: UnderstandingArtificialIntelligenceImage,
  },
  {
    title: 'Understanding Data Science',
    issuer: 'DataCamp',
    date: 'Jul 2025',
    credentialUrl:
      'https://www.datacamp.com/completed/statement-of-accomplishment/course/f284fe6f1a31545cabc55e9f47c8d241f8f52061',
    image: UnderstandingDataScienceImage,
  },
  {
    title: 'Data Visualization & Dashboard Essentials',
    issuer: 'Coursera',
    date: 'Jul 2025',
    credentialUrl:
      'https://www.credly.com/badges/03823d29-0315-42b2-a9cc-5fb6b5d9ada3/linked_in_profile',
    image: DataVisualizationDashboardEssentialsImage,
  },
  {
    title: 'Data Visualization and Dashboards with Excel and Cognos',
    issuer: 'IBM · Coursera',
    date: 'Jul 2025',
    credentialId: 'Y5L2CEGC2NB1',
    credentialUrl:
      'https://www.coursera.org/account/accomplishments/verify/Y5L2CEGC2NB1',
    image: ExcelCognosDashboardsImage,
  },
  {
    title: 'Spanish Vocabulary: Careers and Social Events',
    issuer: 'University of California, Davis',
    date: 'Aug 2025',
    credentialId: 'E6XLNRQC6HT2',
    credentialUrl:
      'https://www.coursera.org/account/accomplishments/verify/E6XLNRQC6HT2',
    image: SpanishCareersSocialEventsImage,
  },
  {
    title: 'Spanish Vocabulary: Sports, Travel, and the Home',
    issuer: 'University of California, Davis',
    date: 'Aug 2025',
    credentialId: 'SF4B2FVW4V91',
    credentialUrl:
      'https://www.coursera.org/account/accomplishments/verify/SF4B2FVW4V91',
    image: SpanishSportsTravelHomeImage,
  },
  {
    title: 'Spanish Vocabulary: Cultural Experience',
    issuer: 'University of California, Davis',
    date: 'Jul 2025',
    credentialId: 'QKJKMIJ3FWJN',
    credentialUrl:
      'https://www.coursera.org/account/accomplishments/verify/QKJKMIJ3FWJN',
    image: SpanishCulturalExperienceImage,
  },
  {
    title: 'Spanish Vocabulary: Meeting People',
    issuer: 'University of California, Davis',
    date: 'Jul 2025',
    credentialId: 'U9RDM39KM08J',
    credentialUrl:
      'https://www.coursera.org/account/accomplishments/verify/U9RDM39KM08J',
    image: SpanishMeetingPeopleImage,
  },
  {
    title: 'HTML FastTrack Boot Camp',
    issuer: 'United Latino Students Association',
    date: 'Jun 2023',
    credentialId: 'd38d8935-050e-4777-ae40-b4d002f323cf',
    credentialUrl:
      'https://certificate.givemycertificate.com/c/d38d8935-050e-4777-ae40-b4d002f323cf',
    image: HtmlFastTrackBootCampImage,
  },
  {
    title: 'AI For Everyone',
    issuer: 'DeepLearning.AI',
    date: 'Jun 2025',
    credentialId: 'URV1G23VA9LM',
    credentialUrl:
      'https://www.coursera.org/account/accomplishments/verify/URV1G23VA9LM',
    image: AiForEveryoneImage,
  },
];