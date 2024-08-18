import { useRouter } from "next/navigation";

interface Buttonprops{
    name: string
    redirect?: string
}

export default function Button({name,redirect} : Buttonprops)
{
  const router = useRouter();
  const handleButtonClick = () => {
    if(redirect)
    {
      router.push(redirect);
    }
};
    return (
      <div>
        <button 
          onClick={handleButtonClick}
          type="button"
          className="text-white bg-yellow-400 hover:bg-yellow-500 hover:text-blue-400 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900 font-bold mx-5">
          {name}
        </button>
      </div>
    );
}