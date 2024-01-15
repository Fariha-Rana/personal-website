import { FaComputer, FaCodeBranch } from "react-icons/fa6";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { GiMaterialsScience } from "react-icons/gi";
import React from "react";
import {
  FaLaptopCode,
  FaCode,
  FaDatabase,
  FaHtml5,
  FaCss3,
  FaFile,
} from "react-icons/fa";
import { BsQrCodeScan } from "react-icons/bs";
import { GrDatabase } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io";

const icons = [
  FaComputer,
  FaCodeBranch,
  HiOutlineComputerDesktop,
  GiMaterialsScience,
  FaLaptopCode,
  FaCode,
  FaDatabase,
  FaHtml5,
  FaCss3,
  FaFile,
  BsQrCodeScan,
  GrDatabase,
  IoLogoJavascript,
];

const multipleShuffle = (array, times) => {
  let shuffledArray = [...array];

  for (let i = 0; i < times; i++) {
    let currentIndex = shuffledArray.length;
    let randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [shuffledArray[currentIndex], shuffledArray[randomIndex]] = [
        shuffledArray[randomIndex],
        shuffledArray[currentIndex],
      ];
    }
  }

  return shuffledArray;
};

const getRandomColor = () => {
  const hue = Math.floor(Math.random() * 360); 
  const saturation = 50;
  const lightness = 50 + Math.random() * 10; 

  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};

const IconAnimation = () => {
  const shuffledIcons = multipleShuffle([...icons], 4);

  return (
    <>
      <div className="icon-container animate-pulse text-lg w-screen min-h-screen m-0 p-0 overflow-hidden text-nowrap">
      {shuffledIcons.map((Icon, index) => {
          const randomColor = getRandomColor();
          return (
           <span className="px-4 "  key={index}>
           <Icon
              style={{ color: randomColor }}
            />
           </span>
          );
        })}
      </div>
    </>
  );
};

export default IconAnimation;