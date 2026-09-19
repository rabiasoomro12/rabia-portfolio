export type ResearchItem = {
  id: string;
  title: string;
  authors?: string;
  area?: string;
  year?: string;
  status: string;
  abstract?: string;
  description?: string;
  keywords: string[];
  paper?: string;
  pdf?: string;
  github?: string;
  category?: 'published' | 'academic' | 'final-year';
  conference?: string;
  date?: string;
  publisher?: string;
  doi?: string;
  doiLink?: string;
  ieeeLink?: string;
  details?: string[];
};

export const research: ResearchItem[] = [
  {
    id: 'fpga-mppt',
    category: 'published',
    title:
      'An FPGA-Oriented Adaptive Hill-Climbing MPPT with Partial Shading Detection and Deterministic Global Search',
    authors:
      'Rabia Soomro · Kashif Hussain Memon · Nimerta Wadhwani · Waqar Abbas Khan · Ayesha Ansari',
    area: 'FPGA · Power electronics',
    year: '2026',
    status: 'Published · IEEE iCoMET 2026',
    conference:
      '2026 5th International Conference on Computing, Mathematics and Engineering Technologies (iCoMET)',
    date: '22–23 May 2026',
    publisher: 'IEEE',
    doi: '10.1109/iCoMET69771.2026.11591927',
    doiLink: 'https://doi.org/10.1109/iCoMET69771.2026.11591927',
    ieeeLink: 'https://ieeexplore.ieee.org/document/11591927',
    description:
      'An FPGA-oriented MPPT controller designed for both uniform irradiance and partial-shading conditions. The work combines a slope-adaptive hill-climbing core, partial-shading detection, and a deterministic global duty-cycle search within a unified fixed-point hardware architecture. The paper was presented at the 2026 5th International Conference on Computing, Mathematics and Engineering Technologies (iCoMET).',
    keywords: ['FPGA', 'MPPT', 'Power Electronics', 'Partial Shading', 'Hardware-Aware Computing', 'Intelligent Control'],
  },
  {
    id: 'eddy-current-thermography',
    category: 'published',
    title: 'Surface Defects Detection in Metals Using Eddy Current Pulsed Thermography',
    authors:
      'Nimerta Wadhwani · Junaid Ahmed · Rabia Soomro · Waqar Abbas Khan · Gui Yun Tian',
    area: 'Computer Vision · Signal processing',
    year: '2025',
    status: 'Published · IEEE C-CODE 2025',
    conference:
      '2025 4th International Conference on Communication, Computing and Digital Systems (C-CODE)',
    date: '01–02 October 2025',
    publisher: 'IEEE',
    doi: '10.1109/C-CODE67372.2025.11204165',
    doiLink: 'https://doi.org/10.1109/C-CODE67372.2025.11204165',
    ieeeLink: 'https://ieeexplore.ieee.org/document/11204165',
    description:
      'A defect-detection approach for Eddy Current Pulsed Thermography that combines keyframe extraction with low-order sparse decomposition using robust CUR approximation. The method reduces data redundancy, separates defect-related information from background noise, and improves detection sensitivity while reducing processing time. This work was also presented at the 2025 4th International Conference on Communication, Computing and Digital Systems (C-CODE).',
    keywords: ['Computer Vision', 'Defect Detection', 'Thermography', 'Signal Processing', 'Image Processing', 'Non-Destructive Testing'],
  },
  {
    id: 'melanoma-research',
    category: 'academic',
    title:
      'A Leakage-Free Two-Phase Transfer Learning Ensemble for Binary Melanoma Classification Using EfficientNetB3, DenseNet121, InceptionV3, and ViT-B16',
    authors: 'Nimerta Wadhwani · Rabia Soomro',
    area: 'Computer vision · Deep learning',
    year: 'Academic research',
    status: 'Academic Research Project · Not Published',
    description:
      'An academic deep-learning study investigating a leakage-aware two-phase transfer-learning pipeline for binary melanoma classification. The work explores an ensemble of EfficientNetB3, DenseNet121, InceptionV3, and ViT-B16, with emphasis on reliable validation, transfer learning, and ensemble-based classification.',
    keywords: ['Computer Vision', 'Deep Learning', 'Transfer Learning', 'Ensemble Learning', 'Medical AI', 'Melanoma Classification'],
  },
  {
    id: 'skin-disease-fyp',
    category: 'final-year',
    title:
      'Deep Learning-Based Improvement of Skin Disease Identification Using Comparative Pre-Trained CNN Models',
    authors: 'Rabia Soomro · Nimerta Wadhwani · Waqar Abbas Khan',
    area: 'Computer vision · Deep learning',
    year: 'Final-year research',
    status: 'Final-Year Research Project',
    description:
      'A comparative deep-learning study for multi-class skin disease identification using pretrained CNN architectures. The project investigates transfer learning, class-imbalance handling, ensemble modeling, and Grad-CAM-based explainability across seven skin-disease categories.',
    keywords: ['Computer Vision', 'Deep Learning', 'Medical AI', 'Transfer Learning', 'CNNs', 'Explainable AI', 'Grad-CAM'],
    details: [
      'Dataset: HAM10000',
      'Seven skin-disease categories',
      'ResNet50',
      'EfficientNetB0',
      'EfficientNetB3',
      'MobileNetV3',
      'Ensemble modeling',
      'Weighted loss',
      'Grad-CAM',
      'Stratified validation',
    ],
  },
];