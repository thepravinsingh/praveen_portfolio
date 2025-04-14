import { GoDotFill } from "react-icons/go";

export default function Experience() {
  const experiences = [
    {
      title: "Full Stack Developer",
      company:
        "Indian Robotics Solution PVT LTD, Noida, Uttar Pradesh, India • Jul 2024 - Present",
      achievements: [
        "Utilizing Git, GitHub, and +11 skills to enhance development workflows",
        "Optimized full-stack applications, improving load times by 15%",
        "Collaborated on team projects using Agile methodologies with +11 tools",
      ],
    },
    {
      title: "Frontend Developer",
      company:
        "Indian Robotics Solution PVT LTD, Noida, Uttar Pradesh, India • Jan 2024 - Jun 2024",
      achievements: [
        "Employed React.js, Git, and +5 skills to support frontend development during internship",
        "Designed responsive UI components, increasing user engagement by 10%",
        "Assisted in debugging and testing frontend features with +5 tools",
      ],
    },
  ];

  return (
    <div id="experience">
      <h3 className="greenTextColor font-bold mb-5">Experience</h3>
      <div className="flex flex-col gap-15">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="greyTextColor w-full sm:w-[75%] lg:w-[50%] flex flex-col gap-5 mt-10"
          >
            <div>
              <p className="whiteGreyTextColor">{exp.title}</p>
              <p>{exp.company}</p>
            </div>
            <div>
              {exp.achievements.map((achievement, idx) => (
                <p key={idx} className="flex  gap-1">
                  <span>
                    <GoDotFill size={15} className="mt-1" />
                  </span>
                  <span> {achievement} </span>
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
