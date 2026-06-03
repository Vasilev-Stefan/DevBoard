import SmallContainers from "./SmallContainers";

export default function Dashboard() {
  return (
    <div className="flex grid-3 gap-12 justify-center">
        <SmallContainers name={'Project built'} number={0}/>
        <SmallContainers name={'Skills practiced'} number={0}/>
        <SmallContainers name={'Days streak'} number={0}/>
    </div>
  );
}
