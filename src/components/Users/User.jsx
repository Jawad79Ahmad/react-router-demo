import { useParams } from "react-router-dom";


export default function User() {
  const {name} = useParams();
  const {age} = useParams();
  return (
    <div className="py-16 bg-gray-700 w-full">
      <div>
        <h1 className="text-white text-center text-3xl font-bold uppercase">Hello {name}!</h1>
        <h1 className="text-white text-center text-3xl">Your age is {age}</h1>
      </div>
    </div>
  );
}
