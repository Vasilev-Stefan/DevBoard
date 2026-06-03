export default function ProjectCard({task, tech, border}) {
  return (
    <div className="h-20">
      <p className="text-lg text-gray-300">{task}</p>
      <div className="flex justify-center">{tech}</div>
      {border && <div className="border-b border-gray-500 w-100 ml-7 mt-2"></div>}
    </div>
  );
}
