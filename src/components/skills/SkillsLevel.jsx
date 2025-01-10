import React from "react";

const SkillsLevel = ({ skillsName, percentage }) => {
  // On s'assure que 'percentage' est un nombre et est compris entre 0 et 100
  const validPercentage = Math.min(Math.max(parseInt(percentage), 0), 100);

  return (
    <>
      <div className="mt-4 space-y-2">
        <div className="flex justify-between items-end">
          <p className="text-xl font-bold">{skillsName}</p>
          <p className="text-sm text-right">{validPercentage}%</p>
        </div>
        <div className="w-full bg-slate-200 h-2 rounded-full">
          <div
            style={{ width: `${validPercentage}%` }}
            className={`h-2 bg-primary rounded-full`}
          ></div>
        </div>
      </div>
    </>
  );
};

export default SkillsLevel;
