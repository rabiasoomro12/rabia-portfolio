export type ExperienceItem = {
  role: string;
  organization: string;
  dates: string;
  location: string;
  description: string;
  skills: string[];
  recognition?: string;
};

export const experience: ExperienceItem[] = [
  {
    role: 'Director, IT Unit',
    organization: 'VitaNova International Alliance for Sciences (VNIAS)',
    dates: 'Dec 2022 – Present',
    location: 'Volunteer Leadership',
    description:
      'I lead the IT Unit at VNIAS, working across technical initiatives, digital platforms, and team coordination. My role involves organizing technical work, supporting team members, coordinating responsibilities, and helping turn ideas into practical digital solutions.',
    skills: ['IT Leadership', 'Team Coordination', 'Digital Platforms', 'Technical Operations'],
  },
  {
    role: 'Data Visualization / Data Analytics Associate Intern',
    organization: 'Excelerate',
    dates: 'Jul 2025 – Aug 2025',
    location: 'Remote / Virtual',
    description:
      'I worked with SQL and data visualization to turn raw datasets into structured, useful insights. I used PostgreSQL for exploratory data analysis, data validation, complex joins, master-table creation, and ETL-related workflows while preparing clear visual reports. I also collaborated with peers on weekly deliverables and received a 93% 360° feedback score, Star Performer recognition, and a $1000 scholarship redeemable at Saint Louis University.',
    skills: ['Data Analytics', 'SQL / PostgreSQL', 'Data Visualization', 'EDA', 'ETL'],
    recognition: '93% 360° Feedback · Star Performer · $1000 Scholarship',
  },
  {
    role: 'AI & Web Development Intern',
    organization: 'VitaNova International Alliance for Sciences (VNIAS)',
    dates: 'Jul 2025 – Aug 2025',
    location: 'Remote / Virtual',
    description:
      'During my internship at VNIAS, I explored Artificial Intelligence and Web Development through structured learning and hands-on projects. I was also selected as a Cohort Monitor, where I coordinated sessions, supported communication between trainers and participants, managed reports, and helped organize cohort activities. My contributions earned me Top Performer recognition and a recommendation letter.',
    skills: ['Artificial Intelligence', 'Web Development', 'Project-Based Learning', 'Coordination'],
    recognition: 'Top Performer',
  },
  {
    role: 'General Banking Intern',
    organization: 'National Bank of Pakistan (NBP)',
    dates: 'Jun 2025 – Jul 2025',
    location: 'On-site',
    description:
      'I gained practical exposure to banking operations, including account management, financial documentation, record-keeping, transaction verification, and customer support. Working alongside senior officers gave me a better understanding of how accuracy, responsibility, and teamwork come together in a professional environment.',
    skills: ['Banking Operations', 'Documentation', 'Customer Service', 'Teamwork'],
  },
  {
    role: 'Frontend Developer Intern',
    organization: 'DigiSked',
    dates: 'Nov 2024 – Dec 2024',
    location: 'Remote / Virtual',
    description:
      'I built three hands-on frontend projects: a personal portfolio website, a social media profile interface, and a weather application using the OpenWeather API. This experience strengthened my foundation in HTML, CSS, and JavaScript while giving me practical experience with responsive design, API integration, debugging, and building interfaces from scratch.',
    skills: ['HTML', 'CSS', 'JavaScript', 'API Integration', 'Responsive Design'],
  },
];