import { IoLogoJavascript } from "react-icons/io";
import { FaReact, FaCss3Alt } from "react-icons/fa6";
import { TbBrandNextjs } from "react-icons/tb";
import { SiSolidity, SiTailwindcss, SiAppwrite } from "react-icons/si";
import { FaNodeJs, FaHtml5 } from "react-icons/fa";

const SkillCard = ({ title, icon }) => {
  return (
    <div className="flex justify-center items-center  w-40 shadow-2xl rounded-lg bg-gray-200 p-4 icon">
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
];

const Skills = () => {

  return (
    <section id="skills" className="w-full  text-gray-700 lg:mt-24 md:mt-24 mt-36 flex flex-col justify-center items-center font-mono z-50 sm:ml-16 md:w-[55rem] sm:pl-16 xl:w-[90rem]">
      <h2 className="text-center m-8 text-4xl font-extrabold text-fuchsia-100 underline ">Skills</h2>
        <div className="grid grid-cols-2 gap-10 xl:grid-cols-3 md:grid-cols-3 xxl:grid-cols-3 ">
          {skillsData.map((skill, index) => (
            <div className="w-[10rem] ">

            <SkillCard key={index} title={skill.title} icon={skill.icon} />
            </div>

          ))}
        </div>
    </section>
  );
};

export default Skills;

