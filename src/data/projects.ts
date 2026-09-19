import calculatorImage from '../project images/calculator.png';
import dermaiImage from '../project images/DermAI.png';
import doctorDatabaseImage from '../project images/Doctor Database.png';
import jpegImage from '../project images/jpg vs jpeg.png';
import orkaneImage from '../project images/Orkane.png';
import plantWateringImage from '../project images/plant watering.png';
import roboticsImage from '../project images/Robotics.png';
import speechRecognitionImage from '../project images/Speech recognition.png';

export type ProjectCategory =
  | 'AI / ML'
  | 'Data'
  | 'Research'
  | 'Robotics'
  | 'Engineering';

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  year: string;
  description: string;
  longDescription: string;
  technologies: string[];
  featured?: boolean;
  status: string;
  githubUrl?: string;
  demoUrl?: string;
  details: Array<{ title: string; body: string }>;
  image: string;
  visual: 'lavender' | 'peach' | 'sage' | 'blue';
};

export const projects: Project[] = [
  {
    id: 'dermai',
    title: 'DermAI',
    subtitle: 'Deep Learning-Based Skin Disease Identification',
    category: 'AI / ML',
    year: 'Final-Year Project',
    description:
      'A deep learning system for multi-class skin disease identification using transfer learning, ensemble modeling, and explainable AI.',
    longDescription:
      'Deep Learning-Based Improvement of Skin Disease Identification Using Comparative Pre-Trained CNN Models.',
    technologies: ['Deep Learning', 'Computer Vision', 'CNN', 'Grad-CAM'],
    featured: true,
    status: 'Final-Year Project',
    githubUrl: 'https://github.com/rabiasoomro12/FYP_Work',
    image: dermaiImage,
    visual: 'lavender',
    details: [
      {
        title: 'Overview',
        body: 'DermAI is the application and project name for a final-year deep learning system focused on skin-disease classification and explainability.',
      },
      {
        title: 'Technical focus',
        body: 'The project uses the HAM10000 dataset, evaluates seven disease categories, and compares ResNet50, EfficientNetB0, EfficientNetB3, and MobileNetV3 with ensemble modeling, weighted loss, and Grad-CAM.',
      },
      {
        title: 'Method',
        body: 'Model comparison and ensemble strategies were used to improve classification performance while supporting interpretability through explainable AI.',
      },
      {
        title: 'Academic title',
        body: 'Deep Learning-Based Improvement of Skin Disease Identification Using Comparative Pre-Trained CNN Models.',
      },
    ],
  },

  {
    id: 'orkane-mini-os',
    title: 'Orkane Mini OS',
    subtitle: 'C-Based Educational Operating System',
    category: 'Engineering',
    year: 'Systems Project',
    description:
      'A C-based operating system project exploring process management, memory handling, and task scheduling at the system level.',
    longDescription:
      'A simplified educational operating system built in C to explore core OS functionality and understand how system resources are managed under the hood.',
    technologies: [
      'C',
      'Operating Systems',
      'Systems Programming',
      'Process Management',
    ],
    featured: true,
    status: 'Systems Project',
    githubUrl: 'https://github.com/rabiasoomro12/Orkane_mini_OS',
    image: orkaneImage,
    visual: 'peach',
    details: [
      {
        title: 'Overview',
        body: 'This project focuses on the fundamentals of system design and resource coordination in a small, educational operating system.',
      },
      {
        title: 'Core learning',
        body: 'The work centers on process management, memory handling, and task scheduling as the foundations of system-level software behavior.',
      },
      {
        title: 'Scope',
        body: 'The implementation is intentionally simplified and designed to help build intuition around how operating systems manage execution and memory.',
      },
    ],
  },

  {
    id: 'obstacle-aware-mobile-robot',
    title: 'Obstacle-Aware Mobile Robot',
    subtitle: 'ROS2 and Gazebo Simulation',
    category: 'Robotics',
    year: 'Robotics Simulation',
    description:
      'A simulated mobile robot integrating camera and sonar sensing with motion control and basic obstacle-aware behavior.',
    longDescription:
      'The robot was modeled using URDF and simulated in Gazebo with a forward-looking camera and sonar sensor. Motion was controlled through cmd_vel, while sonar distance thresholds enabled basic obstacle-aware behavior.',
    technologies: ['ROS2', 'Gazebo', 'URDF', 'Robotics'],
    featured: true,
    status: 'Robotics Simulation',
    image: roboticsImage,
    visual: 'sage',
    details: [
      {
        title: 'Simulation setup',
        body: 'The robot model was defined in URDF and simulated in Gazebo to study perception, motion control, and interaction with surrounding obstacles.',
      },
      {
        title: 'Sensors and control',
        body: 'A forward-looking camera and sonar sensor were integrated with motion commands issued through cmd_vel for simple obstacle-aware response logic.',
      },
      {
        title: 'Scope',
        body: 'The project stays focused on basic sensing and behavior for obstacle awareness rather than broader autonomous navigation or mapping.',
      },
    ],
  },

  {
    id: 'real-time-speech-recognition',
    title: 'Real-Time Speech Recognition',
    subtitle: 'MFCC and CNN',
    category: 'AI / ML',
    year: 'Deep Learning Project',
    description:
      'A real-time speech recognition system combining MFCC-based audio features with convolutional neural network classification.',
    longDescription:
      'The project explores audio preprocessing, MFCC feature extraction, CNN-based recognition, and evaluation under different noise conditions.',
    technologies: ['Python', 'MFCC', 'CNN', 'DSP'],
    status: 'Deep Learning Project',
    githubUrl:
      'https://github.com/rabiasoomro12/Real-Time-Speech-Recognition-System-Using-MFCC-and-CNN',
    image: speechRecognitionImage,
    visual: 'blue',
    details: [
      {
        title: 'Signal processing',
        body: 'Audio inputs were transformed into MFCC features to convert speech signals into a representation suitable for model training and inference.',
      },
      {
        title: 'Modeling',
        body: 'A convolutional neural network was used to classify speech patterns, with attention to robustness under varied noise conditions.',
      },
      {
        title: 'Scope',
        body: 'The work is centered on audio understanding and recognition pipeline development rather than full speech synthesis or large-scale deployment.',
      },
    ],
  },

  {
    id: 'intelligent-plant-watering-system',
    title: 'Intelligent Plant Watering System',
    subtitle: 'Embedded IoT Automation',
    category: 'Engineering',
    year: 'Embedded IoT Project',
    description:
      'An embedded IoT system that monitors plant conditions and automates watering through sensor-based control and Blynk connectivity.',
    longDescription:
      'The project combines sensors, a microcontroller, and the Blynk platform to monitor plant conditions and control watering.',
    technologies: ['Embedded Systems', 'IoT', 'Blynk', 'Automation'],
    status: 'Embedded IoT Project',
    image: plantWateringImage,
    visual: 'lavender',
    details: [
      {
        title: 'System design',
        body: 'The project integrates sensor inputs with an embedded controller to monitor surrounding plant conditions and trigger automation when needed.',
      },
      {
        title: 'Connectivity',
        body: 'Blynk was used to support monitoring and control interaction between the embedded system and the application layer.',
      },
      {
        title: 'Focus',
        body: 'The design emphasizes practical automation for plant care and the use of connected devices in a small embedded workflow.',
      },
    ],
  },

  {
    id: 'disease-database-application',
    title: 'Disease Database Application',
    subtitle: 'Python GUI and Database System',
    category: 'Data',
    year: 'Database Project',
    description:
      'A Python desktop application combining a graphical interface with database operations for managing disease-related information.',
    longDescription:
      'A practical database application demonstrating GUI development, application logic, and database interaction.',
    technologies: [
      'Python',
      'Database',
      'GUI',
      'Application Development',
    ],
    status: 'Database Project',
    githubUrl:
      'https://github.com/rabiasoomro12/Disease_Database_Application',
    image: doctorDatabaseImage,
    visual: 'peach',
    details: [
      {
        title: 'Interface',
        body: 'The application provides a desktop interface for working with disease-related records through a structured, user-facing workflow.',
      },
      {
        title: 'Application logic',
        body: 'The project combines user interaction, data handling, and logical processing in a single practical database-driven system.',
      },
      {
        title: 'Purpose',
        body: 'The goal was to build a clear, usable example of database interaction in an application setting.',
      },
    ],
  },

  {
    id: 'jpeg-vs-jpeg2000',
    title: 'JPEG vs JPEG2000',
    subtitle: 'Comparative Image Compression Analysis',
    category: 'Data',
    year: 'DSP Project',
    description:
      'A digital signal processing study comparing JPEG and JPEG2000 through compression, reconstruction quality, and quantitative analysis.',
    longDescription:
      'The project compares DCT-based JPEG compression with wavelet-based JPEG2000 and evaluates compression ratio, PSNR, and reconstructed image quality.',
    technologies: ['Python', 'DSP', 'Image Processing', 'JPEG2000'],
    status: 'DSP Project',
    githubUrl:
      'https://github.com/rabiasoomro12/Image-Compression-JPEG-vs.-JPEG2000',
    image: jpegImage,
    visual: 'sage',
    details: [
      {
        title: 'Comparative analysis',
        body: 'The study contrasts JPEG and JPEG2000 using different compression pipelines and reconstruction quality metrics.',
      },
      {
        title: 'Evaluation',
        body: 'Compression ratio, PSNR, and the quality of reconstructed images were used to analyze the tradeoffs between both approaches.',
      },
      {
        title: 'Focus',
        body: 'This project highlights the practical differences between DCT-based and wavelet-based image compression strategies.',
      },
    ],
  },

  {
    id: 'gpa-cgpa-calculator',
    title: 'GPA & CGPA Calculator',
    subtitle: 'Full-Stack Academic Platform',
    category: 'Data',
    year: 'Full-Stack Web Application',
    description:
      'A full-stack academic platform built around the CSE curriculum at Sukkur IBA University, with GPA calculation, CGPA tracking, and academic analytics.',
    longDescription:
      'A database-backed web application designed specifically for CSE students, supporting semester GPA calculation, multi-semester CGPA tracking, academic analytics, and secure authentication.',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    status: 'Full-Stack Web Application',
    image: calculatorImage,
    visual: 'blue',
    details: [
      {
        title: 'Academic workflow',
        body: 'The platform supports semester GPA calculation and long-term CGPA tracking for students following the CSE curriculum.',
      },
      {
        title: 'Technical stack',
        body: 'The application uses React, TypeScript, Node.js, Express, PostgreSQL, Drizzle ORM, Passport.js, OpenID Connect, Chart.js, and Docker.',
      },
      {
        title: 'Intent',
        body: 'The goal is to provide a practical and personalized academic management experience for students planning coursework and performance.',
      },
    ],
  },
];