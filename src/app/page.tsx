
import { Filter } from "@molecules/Filter";
import { Suspense } from "react";
import { DishesLoader } from "./components/molecules/DishesLoader";

export default function Home() {

  return (
    <div className="flex flex-col pl-3 w-full lg:p-0 !mx-auto justify-start">
      <div className="flex gap-4 !w-full m-4 ml-0"  >
        <Filter />
      </div>
      <Suspense fallback={<div className="flex justify-center items-center !size-full w-full !mx-auto lg:min-w-full lg:w-[1095px]">Loading...</div>}>
        <div className="flex flex-col w-full !mx-auto ">
          <DishesLoader />
        </div>
      </Suspense>
    </div>
  );
}
