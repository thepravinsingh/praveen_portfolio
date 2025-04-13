import { GoDotFill } from "react-icons/go";
 
export default function Experience() {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Fibre2Fashion • January 2024 - Present",
      achievements: [
        "Designed and implemented a robust backend webhook for in-app purchases for Android, reducing transaction disputes by 20%",
        "Developed RESTful APIs optimized for large datasets, enhancing data accessibility and system responsiveness.",
      ],
    },
    {
      title: "Software Engineer",
      company: "Fibre2Fashion • January 2024 - Present",
      achievements: [
        "Designed and implemented a robust backend webhook for in-app purchases for Android, reducing transaction disputes by 20%",
        "Developed RESTful APIs optimized for large datasets, enhancing data accessibility and system responsiveness.",
        "Designed and implemented a robust backend webhook for in-app purchases for Android, reducing transaction disputes by 20%",
        "Developed RESTful APIs optimized for large datasets, enhancing data accessibility and system responsiveness.",
        "Designed and implemented a robust backend webhook for in-app purchases for Android, reducing transaction disputes by 20%",
      ],
    },
  ];
 
  return (
    <div id="experience">
      <h3 className="greenTextColor font-bold mb-5">Experience</h3>
      <div className="flex flex-col gap-15 mt-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="greyTextColor w-full sm:w-[75%] lg:w-[50%] flex flex-col gap-5"
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