export interface Course {
  id: string;
  title: string;
  description: string;
  icon: string;
  duration: string;
  level: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export enum SectionId {
  HOME = 'home',
  COURSES = 'courses',
  GUARANTEE = 'guarantee',
  ADVISOR = 'advisor',
  CONTACT = 'contact'
}