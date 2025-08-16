import { resumes } from '../../constants/index';
import Navbar from '../components/Navbar';
import type { Route } from "./+types/home";
import ResumeCard from '~/components/ResumeCard';

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Resume Finder" },
    { name: "description", content: "Find the best resumes for your job openings!" },
  ];
}

export default function Home() {
  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover min-h-screen">
      <Navbar />
      
      <section className="main-section">
        <div className="page-heading py-16">
          <h1 className="text-2xl font-bold">Track Your Application & Resume Ratings</h1>
          <h2 className="text-lg text-gray-600 mt-2">
            Review your submissions and check AI-Powered feedback.
          </h2>
        </div>

        {resumes.length > 0 && (
          <div className="resume-sections grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
            {resumes.map((resume) => (
              <ResumeCard key={resume.id} resume={resume} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
