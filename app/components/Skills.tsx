import Image from "next/image";
 
export default function Skills() {
  const frontends = [
    {
      name: "Angular",
      logo: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/angular/angular-original.svg",
      isInvertLogo: false,
    },
    {
      name: "HTML",
      logo: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/html5/html5-original.svg",
      isInvertLogo: false,
    },
    {
      name: "CSS",
      logo: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/css3/css3-original.svg",
      isInvertLogo: false,
    },
    {
      name: "Angular Material",
      logo: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/angularmaterial/angularmaterial-original.svg",
      isInvertLogo: false,
    },
    {
      name: "Bootstrap",
      logo: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/bootstrap/bootstrap-original.svg",
      isInvertLogo: false,
    },
    {
      name: "JavaScript",
      logo: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/javascript/javascript-original.svg",
      isInvertLogo: false,
    },
    {
      name: "TypeScript",
      logo: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/typescript/typescript-original.svg",
      isInvertLogo: false,
    },
    {
      name: "Tailwind",
      logo: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/tailwindcss/tailwindcss-original.svg",
      isInvertLogo: false,
    },
  ];
 
  const backends = [
    {
      name: "C#",
      logo: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/csharp/csharp-original.svg",
      isInvertLogo: false,
    },
    {
      name: ".Net",
      logo: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/dotnetcore/dotnetcore-original.svg",
      isInvertLogo: false,
    },
    {
      name: "Python",
      logo: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/python/python-original.svg",
      isInvertLogo: false,
    },
    {
      name: "Entity Framework",
      logo: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
      isInvertLogo: false,
    },
    {
      name: "Node.js",
      logo: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/nodejs/nodejs-original.svg",
      isInvertLogo: false,
    },
    {
      name: "Express.js",
      logo: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/express/express-original.svg",
      isInvertLogo: true,
    },
    {
      name: "Flask",
      logo: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/flask/flask-original.svg",
      isInvertLogo: true,
    },
  ];
 
  const databases = [
    {
      name: "MS SQL",
      logo: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
      isInvertLogo: false,
    },
    {
      name: "MongoDB",
      logo: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/mongodb/mongodb-original.svg",
      isInvertLogo: false,
    },
    {
      name: "PostgreSQL",
      logo: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/postgresql/postgresql-original.svg",
      isInvertLogo: false,
    },
    {
      name: "MySQL",
      logo: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/mysql/mysql-original.svg",
      isInvertLogo: false,
    },
  ];
 
  const opss = [
    {
      name: "Git",
      logo: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/git/git-original.svg",
      isInvertLogo: false,
    },
    {
      name: "Docker",
      logo: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/docker/docker-original.svg",
      isInvertLogo: false,
    },
    {
      name: "AWS",
      logo: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      isInvertLogo: false,
    },
    {
      name: "Vercel",
      logo: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/vercel/vercel-original.svg",
      isInvertLogo: true,
    },
    {
      name: "Netlify",
      logo: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/netlify/netlify-original.svg",
      isInvertLogo: false,
    },
    {
      name: "Railway",
      logo: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/railway/railway-original.svg",
      isInvertLogo: false,
    },
    {
      name: "CI/CD",
      logo: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/githubactions/githubactions-original.svg",
      isInvertLogo: false,
    },
    {
      name: "Nginx",
      logo: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/nginx/nginx-original.svg",
      isInvertLogo: false,
    },
  ];
 
  const skillCategories = [
    { title: "Front-end", skills: frontends },
    { title: "Back-end", skills: backends },
    { title: "Databases", skills: databases },
    { title: "DevOps", skills: opss },
  ];
 
  return (
    <div className="" id="skill">
      <h3 className="text-2xl font-bold mb-6 greyTextColor">Skills</h3>
      {skillCategories.map((category, index) => (
        <div key={index} className="mb-8 ">
          <h4 className="text-xl font-semibold mb-4 greyTextColor">
            {category.title}
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
            {category.skills?.map((skill, skillIndex) => (
              <div key={skillIndex} className="flex flex-col items-center py-5">
                <div className="w-[55px] h-[55px] relative">
                  <Image
                    src={skill.logo}
                    alt={skill.name}
                    className={`object-contain ${
                      skill.isInvertLogo ? "invert" : ""
                    }`}
                    width={500}
                    height={500}
                    priority
                  />
                </div>
                <p className="text-sm mt-2 text-center whiteGreyTextColor">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}