// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'poojakalukhe2003',
  },

  // Repo name = pooja-kalukhe-portfolio
  base: '/pooja-kalukhe-portfolio/',

  seo: {
    title: 'Pooja Kalukhe | Frontend Developer',
    description:
      'Frontend Developer with skills in React, Next.js, Tailwind CSS and Full-Stack Development.',
    imageURL: '',
  },

  social: {
    linkedin: 'poojakalukhe--08m19ba',
    email: 'kalukhepooja85@gmail.com',
    phone: '+917887500404',
    website: '',
  },

  resume: {
    // 👉 Upload resume PDF and paste link here
    fileUrl: 'https://drive.google.com/file/d/1pyJCnUWeJrlu_8v10dOkYL6qe5mzpuBi/view?usp=sharing',
  },

  skills: [
    'HTML',
    'CSS',
    'Bootstrap',
    'JavaScript',
    'React.js',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'SQL',
    'Java',
    'MySQL',
    'Git',
  ],

  experiences: [
    {
      company: 'Ghackk Technologies',
      position: 'Frontend Developer Intern',
      from: 'Oct 2025',
      to: 'Present',
      companyLink: '',
    },
    {
      company: 'AjSpire Private Limited',
      position: 'Frontend Developer Intern',
      from: 'Dec 2024',
      to: 'Sept 2025',
      companyLink: '',
    },
  ],

  educations: [
    {
      institution: 'D. Y. Patil College of Engineering, Akurdi, Pune',
      degree: 'B.E. Artificial Intelligence & Data Science (CGPA: 8.73)',
      from: '2020',
      to: '2024',
    },
    {
      institution: 'Abhinav International College, Baramati',
      degree: 'HSC Science (67.23%)',
      from: '2019',
      to: '2020',
    },
  ],

  certifications: [
    {
      name: 'The Complete Full-Stack Web Development Bootcamp',
      body: 'Udemy',
      year: '2024',
      link: '',
    },
    {
      name: 'The Complete SQL Bootcamp: Go from Zero to Hero',
      body: 'Udemy',
      year: '2024',
      link: '',
    },
  ],

  projects: {
    github: {
      display: true,
      header: 'GitHub Projects',
      mode: 'automatic',
      automatic: {
        sortBy: 'updated',
        limit: 6,
        exclude: {
          forks: true,
          projects: [],
        },
      },
    },

    external: {
      header: 'Academic & Personal Projects',
      projects: [
        {
          title: 'Housing Society Management System',
          description:
            'Java-based application using JSP, Servlets, and MySQL for managing housing society operations.',
          imageUrl:
            'https://img.freepik.com/free-vector/apartment-building-concept-illustration_114360-4469.jpg',
          link: '',
        },
        {
          title: 'E-Commerce Website',
          description:
            'Responsive e-commerce website built with React, Node.js, MongoDB including cart and login features.',
          imageUrl:
            'https://img.freepik.com/free-vector/e-commerce-concept-illustration_114360-8244.jpg',
          link: '',
        },
        {
          title: 'Personal Portfolio Website',
          description:
            'Personal portfolio website showcasing skills, projects and contact details.',
          imageUrl:
            'https://img.freepik.com/free-vector/portfolio-concept-illustration_114360-259.jpg',
          link: '',
        },
      ],
    },
  },

  // Blog section hide (no blog)
  blog: {
    source: 'dev',
    username: '',
    limit: 0,
  },

  googleAnalytics: {
    id: '',
  },

  hotjar: {
    id: '',
    snippetVersion: 6,
  },

  themeConfig: {
    defaultTheme: 'lofi',
    disableSwitch: false,
    respectPrefersColorScheme: false,
    displayAvatarRing: true,
  },

  footer: `Made with ❤️ by Pooja Kalukhe`,

  enablePWA: true,
};

export default CONFIG;