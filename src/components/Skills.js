import { IoLogoJavascript } from "react-icons/io";
import { FaReact, FaCss3Alt } from "react-icons/fa6";
import { TbBrandNextjs } from "react-icons/tb";
import { SiSolidity, SiTailwindcss, SiAppwrite, SiChakraui } from "react-icons/si";
import { FaNodeJs, FaHtml5 } from "react-icons/fa";

const SkillCard = ({ title, icon }) => {
  return (
    <div className="flex justify-center items-center max-[540px]:w-[9rem]  max-[290px]:w-[8rem]  max-[290px]:ml-4  w-40 shadow-2xl rounded-lg bg-gray-200 p-4 icon">
      <h5>{title}</h5>
      <span className="text-4xl">{icon}</span>
    </div>
  );
};

const skillsData = [
  { title: "HTML", icon: <FaHtml5 /> },
  { title: "CSS", icon: <FaCss3Alt /> },
  { title: "JavaScript", icon: <IoLogoJavascript /> },
  { title: "Appwrite", icon: <SiAppwrite /> },
  { title: "Next.js", icon: <TbBrandNextjs /> },
  { title: "React.js", icon: <FaReact /> },
  { title: "Tailwind", icon: <SiTailwindcss /> },
  { title: "Solidity", icon: <SiSolidity /> },
  { title: "Node.js", icon: <FaNodeJs /> },
  { title: "Chakra-ui", icon: <SiChakraui /> },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-screen h-screen  text-gray-700 flex flex-col justify-center items-center font-mono z-50 max-[400px]:mt-24"
    >
      <h2 className="text-center m-8 text-4xl font-extrabold text-fuchsia-100 underline ">
        Skills
      </h2>
      <div className="grid gap-10 max-[530px]:grid-cols-2 grid-cols-3 ">
        {skillsData.map((skill, index) => (
          <div className="" key={index}>
            <SkillCard title={skill.title} icon={skill.icon} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
