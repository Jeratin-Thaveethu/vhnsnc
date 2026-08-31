// Demo/sample content for the sales-pitch redesign. Real facts (name, address, email,
// department list) are public info from vhnsnc.edu.in; everything else (stats, staff,
// testimonials, imagery) is placeholder copy clearly meant to be swapped for the real thing.

export const college = {
  shortName: "VHNSNC",
  fullName: "Virudhunagar Hindu Nadars' Senthikumara Nadar College",
  tagline: "Shaping Minds Since 1962",
  address: "3/151-1, College Road, Virudhunagar - 626001, Tamil Nadu, India",
  phone: "+91-461-2242024",
  email: "support@vhnsnc.edu.in",
  website: "https://www.vhnsnc.edu.in/",
  social: {
    instagram: "https://www.instagram.com/vhnsncollege/",
    facebook: "https://www.facebook.com/vhnsncofficial",
    youtube: "https://www.youtube.com/user/VHNSNCOFFICIAL",
    linkedin: "https://www.linkedin.com/school/vhnsncollege",
  },
};

export const stats = [
  { label: "Years of Legacy", value: 62, suffix: "+" },
  { label: "Departments", value: 25, suffix: "" },
  { label: "Students", value: 6000, suffix: "+" },
  { label: "Faculty Members", value: 220, suffix: "+" },
];

export const departmentGroups = [
  {
    group: "Arts & Humanities",
    departments: ["Tamil", "English", "History", "Economics", "Tamil (SF)", "English (SF)", "PG History"],
  },
  {
    group: "Commerce & Management",
    departments: ["Commerce", "Business Administration", "Commerce (SF)", "Commerce CA (SF)", "Management Studies"],
  },
  {
    group: "Science",
    departments: ["Mathematics", "Physics", "Chemistry", "Botany", "Zoology", "Mathematics (SF)", "Microbiology", "Environmental Science & FSQM"],
  },
  {
    group: "Computer & IT",
    departments: ["Computer Science", "Information Technology", "Computer Applications"],
  },
  {
    group: "Other",
    departments: ["Physical Education", "Library"],
  },
];

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Administration", href: "/administration", submenu: [
    { label: "Principal", href: "/administration/principal" },
    { label: "Management", href: "/administration/management" },
    { label: "Staff Directory", href: "/administration/staff" },
  ]},
  { label: "Academics", href: "/academics", submenu: [
    { label: "Departments", href: "/academics/departments" },
    { label: "Programs", href: "/academics/programs" },
    { label: "Syllabus", href: "/academics/syllabus" },
    { label: "Academic Calendar", href: "/academics/calendar" },
  ]},
  { label: "Students", href: "/students", submenu: [
    { label: "Student Life", href: "/students/life" },
    { label: "Societies & Clubs", href: "/students/clubs" },
    { label: "Achievements", href: "/students/achievements" },
    { label: "Placements", href: "/students/placements" },
  ]},
  { label: "Curriculum", href: "/curriculum", submenu: [
    { label: "UG Curriculum", href: "/curriculum/ug" },
    { label: "PG Curriculum", href: "/curriculum/pg" },
    { label: "Skill Development", href: "/curriculum/skills" },
  ]},
  { label: "IQAC", href: "/iqac" },
  { label: "Digitech", href: "/digitech" },
  { label: "Research", href: "/research" },
  { label: "Examination", href: "/examination", submenu: [
    { label: "Exam Schedule", href: "/examination/schedule" },
    { label: "Results", href: "/examination/results" },
    { label: "Time Table", href: "/examination/timetable" },
  ]},
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

// Quick links/toolbar items
export const quickLinks = [
  { label: "NIRF", href: "/nirf", icon: "⭐" },
  { label: "Online Payment", href: "https://payments.billdesk.com/bdcollect/pay?p1=111&p2=8", icon: "💳" },
  { label: "Online Application", href: "/onlineadmission", icon: "📝" },
];

// Sample events, faculty and testimonials below are placeholder demo data only.
export const events = [
  { 
    title: "RubyHack'26 Inter-College Hackathon", 
    dept: "Computer Science Department", 
    date: "16 Sep 2026",
    description: "The Department of Computer Science organizes the RubyHack'26 Inter-College Hackathon",
    image: "https://www.vhnsnc.edu.in/img/Invitation/2025-2026/1787826888.jpeg"
  },
  { 
    title: "Effective Documentation using LATEX", 
    dept: "Mathematics Association", 
    date: "31 Aug 2026",
    description: "UG Mathematics Association organizes hands-on training on Preparing Effective Documentation using LATEX",
    image: "https://www.vhnsnc.edu.in/img/Invitation/2025-2026/1787905122.jpeg"
  },
  { 
    title: "Guest Lecture: Healthy Adolescents", 
    dept: "Information Technology Department", 
    date: "31 Aug 2026",
    description: "The Department of Information Technology organizes a Guest Lecture on Healthy Adolescents",
    image: "https://www.vhnsnc.edu.in/img/Invitation/2025-2026/1787907244.jpg"
  },
  { 
    title: "Mass Tree Plantation / Library Day", 
    dept: "College", 
    date: "12 Aug 2026"
  },
  { 
    title: "Commencement of I Internal Test", 
    dept: "Academic", 
    date: "04 Aug 2026"
  },
];

export const officialGalleryImages = [
  {
    src: "https://www.vhnsnc.edu.in/img/core-img/head.webp",
    alt: "VHNSNC official college header",
    caption: "Virudhunagar Hindu Nadars' Senthikumara Nadar College",
    wide: true,
  },
  {
    src: "https://www.vhnsnc.edu.in/img/Invitation/2025-2026/1787826888.jpeg",
    alt: "RubyHack 2026 inter-college hackathon invitation",
    caption: "RubyHack'26 - Department of Computer Science",
    wide: false,
  },
  {
    src: "https://www.vhnsnc.edu.in/img/Invitation/2025-2026/1787905122.jpeg",
    alt: "Mathematics Association LaTeX documentation workshop invitation",
    caption: "Effective Documentation using LaTeX",
    wide: false,
  },
  {
    src: "https://www.vhnsnc.edu.in/img/Invitation/2025-2026/1787907244.jpg",
    alt: "Information Technology guest lecture on healthy adolescents invitation",
    caption: "Guest Lecture: Healthy Adolescents",
    wide: false,
  },
];

export const faculty = [
  { name: "Dr. A. Meenakshi", role: "Principal & Head, Physics", dept: "Physics" },
  { name: "Dr. R. Karthikeyan", role: "Associate Professor", dept: "Computer Science" },
  { name: "Ms. S. Priyadharshini", role: "Assistant Professor", dept: "Commerce" },
  { name: "Dr. N. Suresh Kumar", role: "Head of Department", dept: "Mathematics" },
  { name: "Ms. T. Lavanya", role: "Assistant Professor", dept: "English" },
  { name: "Dr. K. Baskaran", role: "Head of Department", dept: "Zoology" },
];

export const admissionSteps = [
  { step: "01", title: "Explore Programs", body: "Browse UG/PG programs across Arts, Science, Commerce and IT." },
  { step: "02", title: "Apply Online", body: "Fill the online application with your academic details and documents." },
  { step: "03", title: "Entrance / Merit Review", body: "Shortlisting based on merit and program-specific criteria." },
  { step: "04", title: "Confirm Seat", body: "Complete fee payment and document verification to confirm admission." },
];

export const faqs = [
  { q: "When does the admission window open?", a: "Applications typically open in May and close before the semester start; check the Admissions page for exact dates." },
  { q: "Is hostel accommodation available?", a: "Yes, separate hostel facilities are available for men and women on a first-come basis." },
  { q: "Are scholarships available?", a: "Merit and government-scheme scholarships are available; the admissions office can guide you through eligibility." },
];

export const facilities = [
  { name: "Smart Classrooms", icon: "🎓", description: "Advanced teaching aids and digital learning infrastructure." },
  { name: "Library & E-Resources", icon: "📚", description: "Extensive collection with access to online journals and databases." },
  { name: "Computer Labs", icon: "💻", description: "High-speed internet and state-of-the-art workstations." },
  { name: "Laboratories", icon: "🔬", description: "Well-equipped Science labs for practical research." },
  { name: "Sports Complex", icon: "🏀", description: "Indoor and outdoor facilities for various sports." },
  { name: "Hostel Accommodation", icon: "🏠", description: "Comfortable & secure hostels with modern amenities." },
  { name: "Cafeteria", icon: "🍽️", description: "Nutritious meals in a hygienic and welcoming environment." },
  { name: "Auditorium", icon: "🎭", description: "Capacity 800+ for seminars, events and cultural programs." },
];

export const news = [
  { title: "Summative Examinations Results - April 2026", date: "31 Aug 2026", category: "Examination", snippet: "Results for Summative Examinations - April 2026 are now available." },
  { title: "Private Candidate Fees Payment Deadline", date: "31 Aug 2026", category: "Admissions", snippet: "Private candidate students can pay their arrear fees in the college office till September 18, 2026." },
  { title: "NIRF Ranking 2026", date: "15 Aug 2026", category: "Achievement", snippet: "VHNSNC ranks among top colleges in India's National Institutional Ranking Framework." },
  { title: "Admissions Open for 2026-27", date: "10 Aug 2026", category: "Admissions", snippet: "Apply now for UG and PG programs. Merit-based scholarships available." },
  { title: "Campus Expansion Project", date: "20 Jul 2026", category: "Infrastructure", snippet: "New academic block and innovation center coming soon." },
  { title: "Student Achievement in National Competition", date: "05 Jul 2026", category: "Achievement", snippet: "VHNSNC students win gold in National Science Olympiad." },
];

export const testimonials = [
  { name: "Raj Kumar", role: "B.Sc. Computer Science, Batch 2024", text: "VHNSNC gave me a solid foundation in technology and practical skills that helped me land my dream job." },
  { name: "Priya Sharma", role: "B.Com, Batch 2023", text: "The faculty here are not just teachers but mentors who guide you through every step of your career." },
  { name: "Aditya Patel", role: "B.A. English, Batch 2022", text: "The holistic education approach at VHNSNC prepares you for life, not just exams." },
];

export const campusHighlights = [
  { title: "Annual Fest", image: "img-fest", description: "A grand celebration of talent with cultural programs, competitions and performances." },
  { title: "Research Excellence", image: "img-research", description: "Active research centers promoting innovation and academic advancement." },
  { title: "Industry Partnerships", image: "img-industry", description: "Collaborations with leading companies for internships and placements." },
  { title: "International Exposure", image: "img-international", description: "Student exchange programs and global academic partnerships." },
];

export const achievements = [
  { year: "2026", title: "NIRF Top 100 Ranking", description: "Recognized as one of India's best colleges" },
  { year: "2025", title: "ISO Certification", description: "Quality management system certified" },
  { year: "2024", title: "National Awards", description: "Faculty and students win multiple national recognitions" },
  { year: "2023", title: "Green Campus Initiative", description: "Awarded for sustainability and environmental practices" },
];
