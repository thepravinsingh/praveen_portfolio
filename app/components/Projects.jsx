import Image from "next/image";
import { memo } from "react";
import { GoDotFill } from "react-icons/go";

const projectsData = [
  {
    title: "ERP Management System",
    description: [
      "This project aimed to streamline operations by developing a comprehensive ERP management system, addressing challenges in inventory management, order processing, customer management, and reporting.",
      "The system integrates seamlessly with external platforms like Indian Robo Store and Drone Service Center, enabling efficient workflows and enhancing decision-making capabilities.",
    ],
    techStack: [
      "React.js",
      "Redux.js",
      "MongoDB",
      "NestJS",
      "Material-UI",
      "Tailwind CSS",
    ],
    image:
      "https://media.istockphoto.com/id/1428709516/photo/shopping-online-woman-hand-online-shopping-on-laptop-computer-with-virtual-graphic-icon.jpg?s=612x612&w=0&k=20&c=ROAncmFL4lbSQdU4VOhyXu-43ngzfEqHE5ZZAw5FtYk=",
    aosImage: "fade-right",
  },
  {
    title: "Indian Robo Store E-commerce Platform",
    description: [
      "Developed a fully functional e-commerce platform for Indian Robo Store, a marketplace specializing in robotics products, offering a seamless user experience with features like product browsing, secure checkout, order tracking, and payment integration.",
      "Built using a scalable architecture to handle high traffic and support future enhancements.",
    ],
    techStack: ["Next.js", "Tailwind CSS", "NestJS", "MongoDB", "REST APIs"],
    image:
      "https://media.istockphoto.com/id/1428709516/photo/shopping-online-woman-hand-online-shopping-on-laptop-computer-with-virtual-graphic-icon.jpg?s=612x612&w=0&k=20&c=ROAncmFL4lbSQdU4VOhyXu-43ngzfEqHE5ZZAw5FtYk=",
    aosImage: "fade-right",
  },
];

function Project() {
  return (
    <section id="project">
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
                    <p key={techIndex} className="text-xs sm:text-sm">
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
