import { PersonalInfo, Education, Experience, Project, Skill, Certification } from '@/types';

export const personalInfo: PersonalInfo = {
  name: "Thennavan Karuppaiah",
  title: "AI Researcher | Master's Graduate",
  email: "thennavanak@gmail.com",
  phone: "+1 226-260-2952",
  linkedin: "https://linkedin.com/in/thennavan",
  github: "https://github.com/thennavan",
  location: "Missisauga, ON",
  summary: "AI Researcher with hands-on experience in developing end-to-end data pipelines, training ML models, and implementing Retrieval-Augmented Generation (RAG) systems using Large Language Models (LLMs). Skilled in Python, pandas, scikit-learn, LangChain, SQL, and Azure Cloud. Experienced in designing FastAPI-based model deployment frameworks, performing EDA, and optimizing inference for scalable AI systems. Passionate about transforming complex datasets into actionable insights through applied Machine Learning and Generative AI."
};

export const education: Education[] = [
  {
    degree: "Master of Applied Computing",
    institution: "University of Missisauga",
    location: "Missisauga, ON",
    graduationDate: "Dec 2025",
    relevantCourses: [
      "Machine Learning",
      "Data Mining",
      "Artificial Intelligence",
      "Advanced Algorithms",
      "Software Engineering"
    ]
  }
];

export const experience: Experience[] = [
  {
    title: "AI/ML Developer",
    company: "Jaguar Land Rover Hackathon - University of Missisauga",
    location: "Missisauga, ON",
    startDate: "Sep 2025",
    endDate: "Present",
    description: [
      "Engineered and benchmarked a Convolutional Neural Network (CNN) implemented using both NVIDIA CUDA and OpenAI Triton frameworks to evaluate GPU efficiency and performance",
      "Developed and optimized custom GPU kernels for LayerNorm, GELU, Swish, and Loss computation while profiling time, memory, and throughput metrics",
      "Applied kernel fusion techniques to combine normalization and activation operations, achieving reduced memory latency and faster inference",
      "Collaborated with mentors from JLR and the University of Missisauga to analyze trade-offs between CUDA's low-level control and Triton's compiler-based automation for large-scale AI workloads"
    ],
    technologies: ["NVIDIA CUDA", "OpenAI Triton", "PyTorch", "CNN", "GPU Optimization"]
  },
  {
    title: "Data Analyst Intern",
    company: "Atribs Software",
    location: "Chennai, India",
    startDate: "Mar 2023",
    endDate: "May 2024",
    description: [
      "Designed and automated ETL pipelines using Python, pandas, and NumPy to process 2M+ CRM records for analytics and ML readiness",
      "Wrote optimized SQL queries to support data extraction, aggregation, and feature generation",
      "Developed and deployed scikit-learn models through FastAPI endpoints for prediction and reporting",
      "Deployed solutions on Azure App Service with Docker for scalable model inference",
      "Collaborated with analytics teams to create Power BI dashboards for pipeline performance tracking"
    ],
    technologies: ["Python", "pandas", "NumPy", "SQL", "scikit-learn", "FastAPI", "Azure", "Docker", "Power BI"]
  }
];

export const projects: Project[] = [
  {
    title: "GANBART Lecture Summarization Research",
    description: "Advanced research project combining GANs with BART for automated lecture summarization with enhanced accuracy",
    technologies: ["Python", "Hugging Face", "LoRA", "GAN", "BART", "BERT", "MLflow"],
    githubUrl: "https://github.com/thennavan/ganbart-summarization",
    highlights: [
      "Augmented lecture dataset (1K → 2.5K samples) using NLLB back-translation for data diversity",
      "Applied LoRA adapters to BART generator and BERT discriminator, reducing parameters by 70%",
      "Trained GAN loop achieving ROUGE-L 0.417 vs 0.205 baseline for lecture summarization accuracy",
      "Tracked experiments using MLflow and published checkpoints on Hugging Face Hub",
      "Published results as internal whitepaper adopted for summarization coursework"
    ]
  },
  {
    title: "Retrieval-Augmented Generation (RAG) Knowledge Engine",
    description: "End-to-end RAG pipeline for semantic question-answering from custom document repositories",
    technologies: ["LangChain", "FAISS", "OpenAI API", "FastAPI", "Azure", "SentenceTransformers"],
    githubUrl: "https://github.com/thennavan/rag-knowledge-engine",
    highlights: [
      "Built an end-to-end RAG pipeline integrating FAISS embeddings and OpenAI's GPT-4o API for semantic QA",
      "Developed FastAPI endpoints enabling contextual question-answering from custom document repositories",
      "Created embedding pipelines using SentenceTransformers and vectorized JSON/PDF datasets",
      "Deployed containerized services on Azure App Service with monitoring via Prometheus",
      "Enhanced factual precision by 28% through improved retrieval mechanisms and chunking strategies"
    ]
  }
];

export const skills: Skill[] = [
  {
    category: "Programming Languages",
    items: ["Python", "SQL"]
  },
  {
    category: "Machine Learning & AI",
    items: ["scikit-learn", "PyTorch", "LangChain", "Hugging Face Transformers", "FAISS", "OpenAI API"]
  },
  {
    category: "Cloud Platforms",
    items: ["Azure App Service", "Azure ML Studio", "Azure Blob Storage"]
  },
  {
    category: "APIs & Frameworks",
    items: ["FastAPI", "Flask", "REST API Development"]
  },
  {
    category: "Data Engineering",
    items: ["ETL Pipelines", "pandas", "NumPy", "SQL Optimization", "Data Cleaning"]
  },
  {
    category: "DevOps & Tools",
    items: ["Docker", "GitHub Actions", "MLflow", "CI/CD Integration", "Prometheus"]
  }
];

export const certifications: Certification[] = [
  {
    name: "Azure AI Fundamentals (AI-900)",
    issuer: "Microsoft",
    date: "2024"
  },
  {
    name: "Azure Data Fundamentals (DP-900)",
    issuer: "Microsoft",
    date: "2024"
  },
  {
    name: "Generative AI with Large Language Models",
    issuer: "Coursera - DeepLearning.AI",
    date: "2024"
  },
  {
    name: "Transformers & PEFT Certification",
    issuer: "Hugging Face",
    date: "2024"
  },
  {
    name: "FastAPI for Developers",
    issuer: "LinkedIn Learning",
    date: "2024"
  }
];