import { Link } from "react-router";
import type { Resume } from "../../types/index";
import ScoreCircle from "./ScoreCircle";

interface ResumeCardProps {
    resume: Resume;
}

const ResumeCard: React.FC<ResumeCardProps> = ({ resume: { id, companyName, jobTitle, imagePath, feedback } }) => {
    return (
        <Link
            to={`/resumes/${id}`}
            className="resume-card animate-in fade-in duration-1000 block bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
        >
            <div className="resume-card-header">
                <div className="flex flex-col gap-2">
                    <h2 className="!text-black font-bold break-words">{companyName}</h2>
                    <h3 className="text-lg break-words text-gray-500">{jobTitle}</h3>
                </div>
                <div className="flex-shrink-0">
                    <ScoreCircle score={feedback.overallScore} />
                </div>

            </div>
            <div className="gradient-border animate-in fade-in duration-1000 ">
                <div className="w-full h-full">
                    <img src={imagePath} alt={`${companyName} logo`} className="w-full max-sm:h-[320px] h-[380px] object-contain" />
                </div>
            </div>

        </Link >
    );
};

export default ResumeCard;
