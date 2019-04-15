const data = {
  name: "Daniel Ang",
  blurb: " blurb goes here",
  links: [
    {
      title: "dan.justin.ang@gmail.com",
      url: "mailto:dan.justin.ang@gmail.com",
      icon: "fas fa-envelope",
      newtab: false
    },
    {
      title: "github.com/DangAsian",
      url: "https://github.com/DangAsian",
      icon: "fab fa-github"
    }
  ],
  experiences: [
    {
      title: "Full Stack Web Developer",
      timestamp: "INDEPENDENT | AUG 2018 - PRESENT",
      points: [
        "Built modern responsive web applications using both front end and back end languages, and MVC framework.",
        "Collaborate with web development team members and utilize agile and scrum principles in order to plan and build web applications under tight time constraints.",
        "Use Github as a collaborative version control system in order to work on projects with other developers while maintaining the quality and viability of code commits.",
        "Setup and manage web applications on Heroku in order to deploy projects to live, shareable environments.",
      ]
    },
    {
      title: "Clinical Research Assistant",
      timestamp: "PRINCESS MARGARET HOSPITAL | OCT 2016 - JUL 2018",
      points: [
        "Acted as oncological trials lead, coordinating clinical trials from study initiation to study closure to ensure full compliance with protocol and regulatory policies across study team",
        "Utilized varying Microsoft Excel functions and visual basic application to organize and consolidate data when displaying monthly results of trial deviations.",
      ]
    },
    {
      title: "PURSUIT Martial Arts",
      timestamp: "MISSISSAUGA CULTURAL CENTRE | MAY 2016 - DEC 2017",
      points: [
        "Founded a modern, Taekwondo based studio with a focus on physical health, self defense, and having fun.",
        "Acted as primary instructor as well as content developer, creating unique lesson plans to promote fitness and self defense for various age and skill groups.",
      ]
    },
  ],
  projects: [
    {
      title: "Mister Plow",
      url: "https://mr-plow.herokuapp.com/",
      description: "SNOW REMOVAL SERVICES",
      points: [
        "Built a responsive web application using a Ruby on Rails and reactJs stack that connects users in need of snow removal services with users seeking snow removal employment.",
        "Learned and implemented front end using reactJs framework by adhering to good practices such as reusable components which allows rapid and efficient development.",
        "Worked with the OpenWeatherMap, MapQuest, and Leaflet APIs by extracting data and displaying specific information into the front end components.",
      ]

    }
  ]
};

export default data;
