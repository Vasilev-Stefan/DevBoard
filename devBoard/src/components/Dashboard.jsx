import ProjectCard from "./ProjectCard";
import SmallContainers from "./SmallContainers";

export default function Dashboard() {
  return (
    <>
      <div className="flex grid-3 gap-12 justify-center mb-6">
        <SmallContainers name={"Project built"} number={0} />
        <SmallContainers name={"Skills practiced"} number={0} />
        <SmallContainers name={"Days streak"} number={0} />
      </div>
      <div className="flex grid-2 justify-center gap-6">
        <div className="grid-1 bg-gray-600 w-118 h-90 rounded-xl border border-gray-500">
          <div className="ml-2">
            <p className="text-gray-300 font-bold ml-2 mt-2 text-xl h-10 custom-outline uppercase mb-2">
              Projects
            </p>
            <ProjectCard task={'Task 1'} tech={'React'} border={true} />
            <ProjectCard task={'Task 2'} tech={'Tailwind'} border={true} />
            <ProjectCard task={'Task 3'} tech={'React, Tailwind'} border={true} />
            <ProjectCard task={'Task 4'} tech={'React, JS'} border={false} />
          </div>
        </div>
        <div className="grid-1 bg-gray-600 w-80 h-90 rounded-xl border border-gray-500">
          <p className="text-gray-300 font-bold ml-2 mt-2 text-lg custom-outline uppercase">
            Skill confidence
          </p>
        </div>
      </div>
    </>
  );
}
