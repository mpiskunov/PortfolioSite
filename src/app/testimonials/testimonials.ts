export interface TestimonialInfo {
  fullName: string;
  currentTitle: string;
  currentTitleYear: string; // in case this changes for anyone
  currentCompany: string;
  email: string;
  linkedInURL: string;
  gitHubProfileURL: string;
  portraitPath: string;
  testimonialText: string;
}

export const testimonialArray: TestimonialInfo[] = [
  {
    fullName: "Erin Walter",
    currentTitle: "Software Engineer II",
    currentTitleYear: "2025",
    currentCompany: "Microsoft",
    email: "erinwalter@microsoft.com",
    linkedInURL: "https://www.linkedin.com/in/erin-walter-19b9642b/",
    gitHubProfileURL: "https://github.com/erinmwalter",
    portraitPath: "/erin_walter.jpg",
    testimonialText: `Matt was my mentor at Rocket Mortgage as an Associate Software Engineer and Software Engineer I. He
                      was great at breaking down new and challenging concepts to help me learn and grow in my engineering skills and with 
                      bringing me along to expose me to different topics like AWS infrastructure, creating a YML pipeline, or learning how 
                      to code in React. He also was great at explaining complex topics in a patient and easy-to-understand way. He was a huge 
                      part in my success and growth at Rocket Mortgage and my ability to learn and grow as an engineer.`,
  },
  {
    fullName: "Matthew Piskunov",
    currentTitle: "Senior Software Engineer",
    currentTitleYear: "2024",
    currentCompany: "Magic Leap, Inc.",
    email: "matthewpiskunov@gmail.com",
    linkedInURL: "https://www.linkedin.com/in/matthew-piskunov-230a881a9/",
    gitHubProfileURL: "https://github.com/mpiskunov",
    portraitPath: "/hs2-modified.png",
    testimonialText: `Matt is so cool. He does some real neat stuff with coding in C#, mentoring, and he likes beer and coffee. Sometimes, he likes
                    to play video games like Rocket League even though he is mediocre at it. His favorite foods are chicken & rice, lamb gyros, and
                    beer.`,
  },
  {
    fullName: "Matthew Piskunov",
    currentTitle: "Senior Software Engineer",
    currentTitleYear: "2024",
    currentCompany: "Magic Leap, Inc.",
    email: "matthewpiskunov@gmail.com",
    linkedInURL: "https://www.linkedin.com/in/matthew-piskunov-230a881a9/",
    gitHubProfileURL: "https://github.com/mpiskunov",
    portraitPath: "/hs2-modified.png",
    testimonialText: `Matt is so cool. He does some real neat stuff with coding in C#, mentoring, and he likes beer and coffee. Sometimes, he likes
                    to play video games like Rocket League even though he is mediocre at it. His favorite foods are chicken & rice, lamb gyros, and
                    beer.`,
  },
];
