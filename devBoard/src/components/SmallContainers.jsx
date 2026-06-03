export default function SmallContainers({name, number}) {
  return (
    <div className="grid-1 bg-gray-600 w-60 h-25 rounded-xl">
      <p className="text-gray-300 text-lg mb-4 ml-2">{name}</p>
      <p className="text-5xl text-gray-200 ml-2">{number}</p>
    </div>
  );
}
