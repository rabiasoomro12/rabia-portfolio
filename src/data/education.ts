export type EducationItem = {
  degree: string;
  institution: string;
  dates: string;
  focus: string;
  highlight?: string;
  cgpa?: string;
};

export const education: EducationItem[] = [
  {
    degree: 'BE Computer Systems Engineering',
    institution: 'Sukkur IBA University',
    dates: '2022–2026',
    focus:
      'Computer systems, AI/ML, data science, deep learning, computer vision, research, robotics, and data visualization.',
    highlight: 'Gold Medalist • Batch 2022',
    cgpa: '3.83/4.00',
  },
];