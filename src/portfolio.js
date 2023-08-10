/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 1200 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Tri Ngo",
  title: "Hi all, I'm Tri",
  subTitle: emoji(
    "A passionate 🚀 Mobile Software Engineer having an experience of building native Mobile applications with Swift / Java."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1JSvViZUZtC3yiRFQLYeZhUsurZCIAm-l/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ngominhtrint",
  linkedin: "https://www.linkedin.com/in/ngominh-tri/",
  gmail: "ngominhtrint@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "https://medium.com/@ngominhtri55",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Proficient in Software Design, Architecture, and SOLID principles, establishing a strong software foundation for robust and maintainable applications."
    ),
    emoji(
      "⚡ Create dynamic and interactive mobile applications across various domains"
    ),
    emoji("⚡ Experienced in Mobile DevOps and Release Management using Git, Gitlab, Bitrise, and AppStore deployment"),
    emoji(
      "⚡ Integrate third-party services, refactor, test rigorously for quality-driven product excellence"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "FPT University",
      logo: require("./assets/images/fptLogo.jpeg"),
      subHeader: "Bachelor's Degree in Software Engineering",
      duration: "April 2020 - 2024",
      desc: "",
      descBullets: []
    },
    {
      schoolName: "CoderSchool",
      logo: require("./assets/images/CoderSchoolLogo.jpeg"),
      subHeader: "iOS/Swift Development Bootcamp",
      duration: "2015",
      desc: "",
      descBullets: [] 
    },
    {
      schoolName: "Industrial University",
      logo: require("./assets/images/IndustrialUniversityLogo.jpeg"),
      subHeader: "Bachelor's Degree in Electronics Engineering",
      duration: "October 2010 - Aug 2014",
      desc: "",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "iOS", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Android",
      progressPercentage: "75%"
    },
    {
      Stack: "Backend",
      progressPercentage: "60%"
    },
    {
      Stack: "Programming",
      progressPercentage: "85%"
    },
    {
      Stack: "Mobile DevOps",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior iOS Engineer",
      company: "GXS Bank (Digital Bank)",
      companylogo: require("./assets/images/gxsLogo.png"),
      date: "Aug 2022 – Jul 2023",
      desc: "Enhanced app with secure payments, cross-team collaboration",
      descBullets: [
        "Secured payments, on-demand authorization, partner SDK, modularization",
        "Introduced QR scanning, custom photo gallery, push notifications, deep links"
      ]
    },
    {
      role: "Senior iOS Engineer",
      company: "FairPrice Group (E-Groceries)",
      companylogo: require("./assets/images/fairpriceLogo.png"),
      date: "Aug 2020 – Aug 2023",
      desc: "Enhanced user experience, coordinated releases, and led impactful A/B testing",
      descBullets: [
        "Improved browsing and cart checkout experience",
        "Orchestrated efficient releases and cross-team collaboration",
        "Pioneered impactful A/B testing for optimal UX"
      ]
    },
    {
      role: "Mobile Engineer",
      company: "Roadbull Logistics (Last Mile)",
      companylogo: require("./assets/images/roadbullLogo.png"),
      date: "Apr 2018 – Aug 2020",
      desc: "Built native iOS and Android driver and fulfillment apps, increasing operational capacity from 2,000 to 40,000 parcels per day in 2 years"
    },
    {
      role: "iOS Engineer & Teacher Assistant",
      company: "CoderSchool (Education & Outsource)",
      companylogo: require("./assets/images/coderschoolLogo.png"),
      date: "Aug 2016 – Mar 2018",
      desc: "Created social real estate iOS app; aided as a teacher assistant",
      descBullets: [
        "Developed real estate social iOS app, collaborating with external teams",
        "Supported classroom activities as a teacher assistant for students"
      ]
    },
    {
      role: "Android Engineer",
      company: "Saigon Technology Solutions (Outsource)",
      companylogo: require("./assets/images/stsLogo.png"),
      date: "Jan 2015 – Aug 2016",
      desc: "I took charge of developing the Android project as part of the outsourcing assignment"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

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
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and share what I have experienced.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/ne-digital/ios-how-to-implement-a-dynamic-position-of-tabbar-handled-by-rxflow-5038ee15c997",
      title: "How to implement a dynamic position of TabBar handled by RxFlow",
      description:
        "As iOS dev, revamped static TabBar to dynamic using RxFlow. Refactored legacy code, added tab, and enabled dynamic positioning via Remote Config."
    },
    {
      url: "https://medium.com/ne-digital/ios-code-review-practices-88a152adcc9f",
      title: "Code review practices",
      description:
        "I am pleased to share a list of concerns we should care about when doing a code review in iOS."
    },
    {
      url: "https://ngominhtri55.medium.com/ios-indent-first-line-of-uilabel-for-a-custom-view-152e60382d00",
      title: "Indent first line of UILabel for a custom view",
      description:
        "Adjust UILabel's first-line indentation within a custom view to improve visual appeal and readability."
    },
    {
      url: "https://ngominhtri55.medium.com/multiple-git-local-repositories-for-switching-context-efficiently-5871ad466a2f",
      title: "Multiple git local repositories for switching context efficiently",
      description:
        "Streamline context switching with three steps: faster dependency updates, efficient Xcode workspace tasks, and reduced need for git stash."
    }
  ],
  display: true // Set false to hide this section, defaults to true
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

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "saadpasta70@gmail.com"
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
  isHireable
};