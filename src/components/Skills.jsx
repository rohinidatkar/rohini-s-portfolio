import React from 'react';
import { technicalSkills } from '../data/portfolioData';

import {
  SiPython,
  SiMysql,
  SiPowerbi,
  SiTableau,
  SiPandas,
  SiNumpy,
  SiGit,
  SiGithub,
  SiScikitlearn,
  SiJupyter,
  SiVisualstudiocode,
} from "react-icons/si";

import { FaFileExcel } from "react-icons/fa";

const skillIcons = {
  Python: <SiPython />,
  SQL: <SiMysql />,
  MySQL: <SiMysql />,
  "Power BI": <SiPowerbi />,
  Tableau: <SiTableau />,
  Pandas: <SiPandas />,
  NumPy: <SiNumpy />,
  Git: <SiGit />,
  GitHub: <SiGithub />,
  Excel: <FaFileExcel />,
  "VS Code": <SiVisualstudiocode />,
  "Scikit-learn": <SiScikitlearn />,
  "Jupyter Notebook": <SiJupyter />,
};

const SkillProgress = ({ name, level }) => (
  <div className="mb-4">
    <div className="flex justify-between items-center mb-1">
      <div className="flex items-center gap-2">
        <span className="text-red-400 text-lg">
          {skillIcons[name]}
        </span>

        <span className="text-white text-sm font-semibold tracking-wide">
          {name}
        </span>
      </div>

      <span className="text-red-400 text-xs font-bold font-mono">
        {level}%
      </span>
    </div>

    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden border border-white/5">
      <div
        className="h-full bg-gradient-to-r from-red-600 to-red-400 rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${level}%` }}
      />
    </div>
  </div>
);