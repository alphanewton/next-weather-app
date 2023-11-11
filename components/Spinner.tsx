import gif from "@/resources/ZKZg.gif";
import Image from "next/image";

function Spinner() {
  return (
    <>
      <Image alt="spin" src={gif} className="w-[200px] m-auto block" />
    </>
  );
}

export default Spinner;
