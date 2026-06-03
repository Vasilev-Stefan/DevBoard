export default function Dashboard() {
  return (
    <div className="flex grid-3 gap-12 justify-center">
      <div className="grid-1 bg-gray-600 w-60 h-25 rounded-xl">
        <p className="text-gray-300 text-lg mb-4 ml-2">Project built</p>
        <p className="text-5xl text-gray-200 ml-2">0</p>
      </div>
      <div className="grid-1 bg-gray-600 w-60 h-25 rounded-xl">
        <p className="text-gray-300 text-lg mb-4 ml-2">Skills practiced</p>
        <p className="text-5xl text-gray-200 ml-2">0</p>
      </div>
      <div className="grid-1 bg-gray-600 w-60 h-25 rounded-xl">
        <p className="text-gray-300 text-lg mb-4 ml-2">Days streak</p>
        <p className="text-5xl text-gray-200 ml-2">0</p>
      </div>
    </div>
  );
}
