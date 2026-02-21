/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "N. Lahiri",
  title: "Hi, I'm N. Lahiri",
  subTitle: emoji(
    "Backend-focused Computer Science undergraduate with strong foundations in Data Structures, RESTful APIs and AI-based systems. Experienced in building scalable applications using Python, Django and modern web technologies."
  ),
  resumeLink: "/resume.pdf",
  displayGreeting: true
};


// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Lahiri9100",
  linkedin: "https://www.linkedin.com/in/lahiri-nallapati-00b491322/",
  gmail: "lahiri9158@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section
const skillsSection = {
  title: "Technical Skills",
  subTitle: "Backend development, AI systems and full-stack engineering",
  skills: [
    emoji("⚡ Design and build scalable RESTful APIs using Django REST Framework"),
    emoji("⚡ Develop AI-driven applications using Python and NLP techniques"),
    emoji("⚡ Implement anomaly detection and system-level security tools"),
    emoji("⚡ Build full-stack applications with React and modern web technologies")
  ],

  softwareSkills: [
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "Django", fontAwesomeClassname: "fas fa-server" },
    { skillName: "Java", fontAwesomeClassname: "fab fa-java" },
    { skillName: "C++", fontAwesomeClassname: "fas fa-code" },
    { skillName: "SQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "React", fontAwesomeClassname: "fab fa-react" },
    { skillName: "Git", fontAwesomeClassname: "fab fa-git-alt" },
    { skillName: "GitHub", fontAwesomeClassname: "fab fa-github" }
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Gokaraju Lailavathi Engineering College",
      logo: require("./assets/images/collegeLogo.png"),
      subHeader: "Bachelor of Engineering – Computer Science Engineering",
      duration: "Aug 2023 – Aug 2027",
      desc: "GPA: 9.06 | Specializing in backend development and AI-based systems.",
      descBullets: [
        "Relevant Coursework: Data Structures and Algorithms, Operating Systems, Database Management Systems, Computer Organization",
        "Focused on scalable backend systems, REST APIs, and AI-driven applications"
      ]
    },
    {
      schoolName: "Sri Chaitanya Junior Kalasala",
      logo: require("./assets/images/collegeLogo.png"),
      subHeader: "MPC – Mathematics, Physics, Chemistry",
      duration: "Mar 2021 – Mar 2023",
      desc: "Percentage: 97.3%",
      descBullets: [
        "Strong foundation in Linear Algebra, Calculus, Probability and Statistics"
      ]
    }
  ]
};


// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle:
    "Selected technical projects demonstrating backend systems, AI and full-stack development",
  projects: [
    {
      image: require("./assets/images/prompt-to-course/1.png"),
      projectName: "Prompt to Course",
      projectDesc:
        "Prompt-driven learning platform that converts natural language input into structured, topic-wise educational courses using Django REST Framework and modular backend architecture.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Lahiri9100/Prompt-to-Course"
        }
      ]
    },
    {
      image: require("./assets/images/smartshield/1.png"),
      projectName: "SmartShield – AI Intrusion Detection System",
      projectDesc:
        "AI-based anomaly detection system analyzing system and network logs with real-time visualization and scoring using Python and Streamlit.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Lahiri9100/SmartShield"
        },
        {
          name: "Live Demo",
          url: "https://smartshield-3ojrel6oshd4qjaa8yotzs.streamlit.app"
        }
      ]
    },
    {
      image: require("./assets/images/gmail-manager/1.png"),
      projectName: "Gmail Manager AI",
      projectDesc:
        "AI-powered email management system implementing NLP pipelines for summarization, intent detection and calendar extraction.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Lahiri9100/Gmail-Manager"
        }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Virtual Mouse – Computer Vision",
      projectDesc:
        "Real-time hand gesture recognition system using OpenCV and MediaPipe to control cursor movement via hand tracking.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Lahiri9100"
        }
      ]
    }
  ],
  display: true
};

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "I am open to software engineering and AI internship opportunities. Feel free to reach out.",
  number: "+91 9100672958", 
  email_address: "lahiri9158@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
