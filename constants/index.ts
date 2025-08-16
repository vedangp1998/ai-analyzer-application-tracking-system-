import type { Resume } from "../types/index";
import Image1 from "../public/images/resume_01.png";
import Image2 from "../public/images/resume_02.png";
import Image3 from "../public/images/resume_03.png";

export const resumes: Resume[] = [
  {
    id: "1",
    companyName: "Google",
    jobTitle: "Frontend Developer",
    imagePath: Image1,
    resumePath: "/resumes/resume-1.pdf",
    feedback: {
      overallScore: 85,
      ATS: { score: 90, tips: [] },
      toneAndStyle: { score: 90, tips: [] },
      content: { score: 90, tips: [] },
      structure: { score: 90, tips: [] },
      skills: { score: 90, tips: [] },
    },
  },
  {
    id: "2",
    companyName: "Microsoft",
    jobTitle: "Cloud Engineer",
    imagePath: Image2,
    resumePath: "/resumes/resume-2.pdf",
    feedback: {
      overallScore: 55,
      ATS: { score: 70, tips: [] },
      toneAndStyle: { score: 60, tips: [] },
      content: { score: 65, tips: [] },
      structure: { score: 55, tips: [] },
      skills: { score: 50, tips: [] },
    },
  },
  {
    id: "3",
    companyName: "Apple",
    jobTitle: "iOS Developer",
    imagePath: Image3,
    resumePath: "/resumes/resume-3.pdf",
    feedback: {
      overallScore: 75,
      ATS: { score: 80, tips: [] },
      toneAndStyle: { score: 78, tips: [] },
      content: { score: 82, tips: [] },
      structure: { score: 76, tips: [] },
      skills: { score: 70, tips: [] },
    },
  },
  {
    id: "4",
    companyName: "JP Morgan",
    jobTitle: "iOS Developer",
    imagePath: Image3,
    resumePath: "/resumes/resume-3.pdf",
    feedback: {
      overallScore: 75,
      ATS: { score: 80, tips: [] },
      toneAndStyle: { score: 78, tips: [] },
      content: { score: 82, tips: [] },
      structure: { score: 76, tips: [] },
      skills: { score: 70, tips: [] },
    },
  },
  {
    id: "5",
    companyName: "Tesla",
    jobTitle: "AI/ML Developer",
    imagePath: Image2,
    resumePath: "/resumes/resume-3.pdf",
    feedback: {
      overallScore: 75,
      ATS: { score: 80, tips: [] },
      toneAndStyle: { score: 78, tips: [] },
      content: { score: 82, tips: [] },
      structure: { score: 76, tips: [] },
      skills: { score: 70, tips: [] },
    },
  },
  {
    id: "6",
    companyName: "Deloitte",
    jobTitle: "React Developer",
    imagePath: Image1,
    resumePath: "/resumes/resume-3.pdf",
    feedback: {
      overallScore: 75,
      ATS: { score: 80, tips: [] },
      toneAndStyle: { score: 78, tips: [] },
      content: { score: 82, tips: [] },
      structure: { score: 76, tips: [] },
      skills: { score: 70, tips: [] },
    },
  },
];

export const AIResponseFormat = `
interface Feedback {
  overallScore: number;
  ATS: {
    score: number;
    tips: { type: "good" | "improve"; tip: string; }[];
  };
  toneAndStyle: {
    score: number;
    tips: { type: "good" | "improve"; tip: string; explanation: string; }[];
  };
  content: {
    score: number;
    tips: { type: "good" | "improve"; tip: string; explanation: string; }[];
  };
  structure: {
    score: number;
    tips: { type: "good" | "improve"; tip: string; explanation: string; }[];
  };
  skills: {
    score: number;
    tips: { type: "good" | "improve"; tip: string; explanation: string; }[];
  };
}`;

export const prepareInstructions = ({
  jobTitle,
  jobDescription,
  AIResponseFormat,
}: {
  jobTitle: string;
  jobDescription: string;
  AIResponseFormat: string;
}) =>
  `You are an expert in ATS (Applicant Tracking System) and resume analysis.
  Please analyze and rate this resume and suggest how to improve it.
  The rating can be low if the resume is bad.
  Be thorough and detailed. Don't be afraid to point out any mistakes or areas for improvement.
  If there is a lot to improve, don't hesitate to give low scores.
  The job title is: ${jobTitle}
  The job description is: ${jobDescription}
  Provide the feedback using the following format: ${AIResponseFormat}
  Return the analysis as a JSON object only, without backticks or comments.`;
