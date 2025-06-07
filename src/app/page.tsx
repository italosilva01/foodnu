import { Filter } from "@molecules/Filter";
import { Suspense } from "react";
import { DishesLoader } from "./components/molecules/DishesLoader";


export default function Home() {
  return (
    <div className="flex flex-col w-full !mx-auto ">
      <div className="flex gap-4 !w-full m-4 lg:ml-0"  >
        <Filter />
      </div>
      <Suspense fallback={<div className="flex justify-center items-center !size-full">Loading...</div>}>
        <DishesLoader />
      </Suspense>
    </div>
  );
}
