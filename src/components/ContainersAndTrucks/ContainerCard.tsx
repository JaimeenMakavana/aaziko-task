import Image from "next/image";
import Container from "@/statics/20st.svg";

export const ContainerCard = () => {
  return (
    <div className="border-2  rounded-md p-3 size-[200px] bg-white hover:border-blue-500 selection:border-blue-500 cursor-pointer">
      <h3>20 STANDARD</h3>
      <div className="size-[130px] flex justify-center items-center relative">
        <Image
          src={Container}
          alt=""
          className="object-contain object-center"
          width={400}
          height={400}
        />
      </div>
      <p className="text-gray-400 text-sm">Learn More</p>
    </div>
  );
};
