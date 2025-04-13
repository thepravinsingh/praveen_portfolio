
import Image from "next/image";
import { memo } from "react";
import { GoDotFill } from "react-icons/go";
 
const projectsData = [
  {
    title: "Media Management Platform",
    description: [
      "This project aimed to tackle the complexities sues freql regulatory risks, diverting attention away from strategic thinking and creative endeavours.",
      "Our objective was to streamline the media planning process, minimizing errors and ensuring compliance, allowing teams to focus on strategic decision-making and creativity.",
    ],
    techStack: [
      "Angular",
      ".NET Framework",
      "SQL Server",
      "Microsoft IIS",
      "Firebase",
      "CI/CD",
    ],
    image:
      "https://media.istockphoto.com/id/1428709516/photo/shopping-online-woman-hand-online-shopping-on-laptop-computer-with-virtual-graphic-icon.jpg?s=612x612&w=0&k=20&c=ROAncmFL4lbSQdU4VOhyXu-43ngzfEqHE5ZZAw5FtYk=",
    aosImage: "fade-right",
  },
  {
    title: "Smile Analysis Web Application",
    description: [
      "Developed and deployed a smile detection application for elderly residents in Japanese old age homes using computer vision and machine learning algorithms.",
      "Designed and implemented a user-friendly interface using Angular with Flask backend to analyze smiles in real-time.",
    ],
    techStack: ["Angular", "Python", "SQL Server", "AWS"],
    image:
      "https://media.istockphoto.com/id/1428709516/photo/shopping-online-woman-hand-online-shopping-on-laptop-computer-with-virtual-graphic-icon.jpg?s=612x612&w=0&k=20&c=ROAncmFL4lbSQdU4VOhyXu-43ngzfEqHE5ZZAw5FtYk=",
    aosImage: "fade-left",
  },
  {
    title: "AI Receptionist",
    description: [
      "The project involves the implementation of a receptionist system for tourists and hotel guests, utilizing a multilingual AI avatar.",
      "The system provides assistance and information to guests in multiple languages, enhancing their overall experience while streamlining hotel operations.",
    ],
    techStack: ["Node.js", "Python", "OpenAI API", "Nginx"],
    image:
      "https://media.istockphoto.com/id/1428709516/photo/shopping-online-woman-hand-online-shopping-on-laptop-computer-with-virtual-graphic-icon.jpg?s=612x612&w=0&k=20&c=ROAncmFL4lbSQdU4VOhyXu-43ngzfEqHE5ZZAw5FtYk=",
    aosImage: "fade-right",
  },
  {
    title: "DocuQuery AI",
    description: [
      "Developed an AI-powered document query system allowing users to upload PDFs and ask questions based on the document content.",
      "Designed and integrated an Angular-based frontend with a Flask backend for seamless document processing.",
      "Implemented role-based access control, ensuring only authorized users can manage documents.",
    ],
    techStack: ["Angular", "Tailwind CSS", "Flask (Python)", "MongoDB", "AWS"],
    image:
      "https://media.istockphoto.com/id/1428709516/photo/shopping-online-woman-hand-online-shopping-on-laptop-computer-with-virtual-graphic-icon.jpg?s=612x612&w=0&k=20&c=ROAncmFL4lbSQdU4VOhyXu-43ngzfEqHE5ZZAw5FtYk=",
    aosImage: "fade-left",
  },
];
 
function Project() {
  return (
    <section id="project" >
      <h3 className="font-semibold text-2xl sm:text-3xl lg:text-4xl greenTextColor mb-8 text-center sm:text-left">
        Things I&apos;ve Worked On
      </h3>
      <div>
        {projectsData.map((project, index) => (
          <article
            key={index}
            className="flex flex-col lg:flex-row max-lg:items-center justify-center gap-6 lg:gap-10 w-full mx-auto py-10"
            data-aos={project.aosImage}
          >
            {/* Image Section */}
            <div className="w-full lg:w-1/2 max-w-[700px]">
              <div className="relative w-full h-64 sm:h-80 lg:h-96">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 700px"
                  priority={index === 0}
                />
              </div>
            </div>
 
            {/* Project Details Section */}
            <div className="w-full lg:w-1/2 max-w-lg ">
              <h4 className="greenTextColor text-lg font-medium mb-2">
                Featured Project
              </h4>
              <div className="greyTextColor flex flex-col gap-4">
                <h3 className="whiteGreyTextColor text-xl sm:text-2xl font-semibold">
                  {project.title}
                </h3>
                <div className="flex flex-col gap-3 text-sm sm:text-base">
                  {project.description.map((desc, descIndex) => (
                    <p key={descIndex} className="flex gap-2 ">
                      <span className="mt-1">
                        <GoDotFill size={15} />
                      </span>
                      <span>{desc}</span>
                    </p>
                  ))}
                </div>
                <ul className="flex flex-wrap gap-3 sm:gap-4 mt-4">
                  {project.techStack.map((tech, techIndex) => (
                    <p
                      key={techIndex}
                      className="text-xs sm:text-sm"
                    >
                      {tech}
                    </p>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
 
export default memo(Project);