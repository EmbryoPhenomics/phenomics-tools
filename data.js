/* Edit this file to add, remove or reclassify tools. See README.md. */
window.PHENOMICS_TOOLS = [
  {
    name: "RoboCam",
    tagline: "Automated, scalable image acquisition for biological phenotyping.",
    category: "Acquire & control",
    kind: "Imaging platform",
    icon: "camera",
    accent: "cyan",
    tags: ["image acquisition", "automation", "microscopy", "hardware"],
    url: "https://github.com/EmbryoPhenomics/RoboCam",
    featured: 1
  },
  {
    name: "ThermoDrive",
    tagline: "Programmable temperature control for dynamic biological experiments.",
    category: "Acquire & control",
    kind: "Environmental control",
    icon: "temperature",
    accent: "orange",
    tags: ["temperature", "environment", "control", "experiments"],
    url: "https://github.com/EmbryoPhenomics/ThermoDrive",
    featured: 2
  },
  {
    name: "PhenoChip",
    tagline: "Flow-through culture devices for imaging aquatic organisms.",
    category: "Acquire & control",
    kind: "Experimental system",
    icon: "flow",
    accent: "blue",
    tags: ["culture", "flow-through", "imaging", "hardware", "aquatic"],
    url: "https://github.com/EmbryoPhenomics/PhenoChip",
    featured: 3
  },
  {
    name: "Egg Detection",
    tagline: "Detect eggs in microscopy images using convolutional neural networks.",
    category: "Detect & segment",
    kind: "Object detection",
    icon: "target",
    accent: "lime",
    tags: ["detection", "eggs", "microscopy", "deep learning", "images"],
    url: "https://github.com/EmbryoPhenomics/egg_detection",
    featured: 8
  },
  {
    name: "Embryo Growth",
    tagline: "Segment embryos in microscopy images with pretrained deep-learning models.",
    category: "Detect & segment",
    kind: "Semantic segmentation",
    icon: "segment",
    accent: "purple",
    tags: ["segmentation", "embryos", "microscopy", "deep learning", "images"],
    url: "https://github.com/EmbryoPhenomics/embryo_segmentation",
    featured: 7
  },
  {
    name: "HeartCV",
    tagline: "Measure cardiac activity and heart rate from microscopy video.",
    category: "Measure phenotype",
    kind: "Cardiac phenotyping",
    icon: "pulse",
    accent: "red",
    tags: ["heart rate", "cardiac", "physiology", "video", "phenotyping"],
    url: "https://github.com/EmbryoPhenomics/heartcv",
    featured: 4
  },
  {
    name: "Sparse Optical Flow",
    tagline: "Quantify movement and activity from video using sparse optical flow.",
    category: "Measure phenotype",
    kind: "Motion analysis",
    icon: "motion",
    accent: "yellow",
    tags: ["movement", "activity", "optical flow", "video", "behaviour"],
    url: "https://github.com/EmbryoPhenomics/sparse_opticflow",
    featured: 5
  },
  {
    name: "DevResnet",
    tagline: "Deep-learning analysis of developmental phenotype through time.",
    category: "Measure phenotype",
    kind: "Developmental phenotyping",
    icon: "development",
    accent: "cyan",
    tags: ["development", "deep learning", "embryos", "time series", "phenotyping"],
    url: "https://github.com/EmbryoPhenomics/dev-resnet",
    featured: 6
  },
  {
    name: "EmbryoCV",
    tagline: "Computer vision library for a powerful range of embryo phenotype measurement.",
    category: "Measure phenotype",
    kind: "Phenotyping pipeline",
    icon: "measure",
    accent: "blue",
    tags: ["embryos", "computer vision", "phenotyping", "images", "video"],
    url: "https://github.com/EmbryoPhenomics/embryocv_v2",
    featured: 9
  },
  {
    name: "Rapid Image Seq Compilation",
    tagline: "Compile large image sequences efficiently for processing and review.",
    category: "Process imagery",
    kind: "Image utility",
    icon: "stack",
    accent: "purple",
    tags: ["image processing", "compilation", "data preparation", "images"],
    url: "https://github.com/EmbryoPhenomics/fast_img_compile",
    featured: 10
  },
  {
    name: "PhenoMAP",
    tagline: "Explore and interpret multidimensional phenotypic data.",
    category: "Analyse & validate",
    kind: "Analysis & visualisation",
    icon: "map",
    accent: "lime",
    tags: ["analysis", "visualisation", "phenotype", "data exploration"],
    url: "https://github.com/EmbryoPhenomics/PhenoMAP",
    featured: 11
  },
  {
    name: "eptR",
    tagline: "R tools for downstream analysis of EmbryoPhenomics data.",
    category: "Analyse & validate",
    kind: "R package",
    icon: "chart",
    accent: "blue",
    tags: ["R", "analysis", "statistics", "phenotypic data"],
    url: "https://github.com/EmbryoPhenomics/eptR",
    featured: 12
  },
  {
    name: "Energy Proxy Trait Examples",
    tagline: "Worked examples connecting embryoCV outputs with downstream analysis.",
    category: "Analyse & validate",
    kind: "Examples & tutorials",
    icon: "notebook",
    accent: "orange",
    tags: ["examples", "tutorials", "analysis", "workflow"],
    url: "https://github.com/EmbryoPhenomics/embryocv_ept_examples",
    featured: 13
  },
  {
    name: "Optical FLow XYMotion Accuracy Testing",
    tagline: "Validate the positional accuracy of automated motion systems.",
    category: "Analyse & validate",
    kind: "Validation utility",
    icon: "accuracy",
    accent: "yellow",
    tags: ["validation", "motion", "accuracy", "hardware", "positioning"],
    url: "https://github.com/EmbryoPhenomics/xymotion-accuracy-testing",
    featured: 14
  }
];

window.PHENOMICS_INTENTS = [
  { label: "Acquire images", detail: "Automated imaging at scale", category: "Acquire & control", icon: "camera" },
  { label: "Control environments", detail: "Temperature, flow and culture", category: "Acquire & control", icon: "temperature" },
  { label: "Find organisms", detail: "Detection and segmentation", category: "Detect & segment", icon: "target" },
  { label: "Measure physiology", detail: "Cardiac and developmental traits", category: "Measure phenotype", icon: "pulse" },
  { label: "Quantify movement", detail: "Activity and behaviour", query: "movement activity behaviour", icon: "motion" },
  { label: "Analyse data", detail: "Explore, test and visualise", category: "Analyse & validate", icon: "chart" }
];
