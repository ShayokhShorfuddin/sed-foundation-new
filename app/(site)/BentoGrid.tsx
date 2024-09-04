import Image from "next/image";
import Turbine from "@/public/turbine.jpg";
import ForestWide from "@/public/forest-wide.jpg";
import MountainWide from "@/public/mountain-wide.jpg";

function Card1() {
  return (
    <div className="flex flex-col justify-center items-center rounded-xl border border-gray-200 hover:border-sedGreen w-full h-full transition duration-200 ease-in-out">
      <h1 className="text-4xl md:text-5xl font-outfit">12k</h1>
      <p className="mt-2">Volunteers</p>
    </div>
  );
}

function Card2() {
  return (
    <div className="col-span-3 md:col-span-2 row-span-1 relative overflow-hidden rounded-xl">
      <Image
        priority
        src={MountainWide}
        alt="Mountain Wide"
        fill
        className="object-cover"
      />
    </div>
  );
}

function Card3() {
  return (
    <div className="row-span-2 sm:hidden md:block relative rounded-xl overflow-hidden">
      <Image
        priority
        src={Turbine}
        alt="Turbine"
        className="h-full w-full object-cover"
      />

      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 p-4">
        <h2 className="text-xl text-gray-200 font-semibold">
          Renewable Energy
        </h2>
        <p className="mt-1 text-gray-300">A carbon-free approach.</p>
      </div>
    </div>
  );
}

function Card4() {
  return (
    <div className="col-span-3 md:col-span-2 row-span-1 relative overflow-hidden rounded-xl">
      <Image
        priority
        src={ForestWide}
        alt="Forest Wide"
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/20 p-4">
        <h2 className="text-xl text-gray-200 font-semibold">Vibrance</h2>
        <p className="mt-1 text-gray-300">A better planet for all.</p>
      </div>
    </div>
  );
}

function Card5() {
  return (
    <div className="flex flex-col justify-center items-center rounded-xl border border-gray-200 hover:border-sedGreen w-full h-full transition duration-200 ease-in-out">
      <h1 className="text-4xl md:text-5xl font-outfit">36k</h1>
      <p className="mt-2">Trees Planted</p>
    </div>
  );
}

export default function BentoGrid() {
  return (
    <section className="container flex flex-col items-center mt-20 md:mt-18">
      <h1 className="text-2xl md:text-3xl font-outfit">One Mission</h1>
      <p className="text-sedGreen font-outfit text-4xl md:text-5xl">
        Worldwide
      </p>
      <p className="mt-0 sm:mt-5 font-outfit w-full sm:w-96 p-5 sm:p-0 text-center">
        We work with partners and communities to ensure nature thrives and
        climate change is reversed.
      </p>

      <div className="hidden sm:grid grid-cols-4 grid-rows-2 gap-4 mt-10 w-full max-w-[1100px] h-96 lg:h-[410px]">
        <Card1 />
        <Card2 />
        <Card3 />
        <Card4 />
        <Card5 />
      </div>

      <div className="grid grid-cols-2 w-full gap-4 sm:hidden">
        <Card1Mobile />
        <Card5Mobile />
        <Card4Mobile />
      </div>
    </section>
  );
}

function Card1Mobile() {
  return (
    <div className="col-span-2 xs:col-span-1 flex flex-col justify-center items-center rounded-xl border border-gray-200 hover:border-sedGreen p-5 transition duration-200 ease-in-out">
      <h1 className="text-4xl font-outfit">12k</h1>
      <p className="mt-2">Volunteers</p>
    </div>
  );
}

function Card5Mobile() {
  return (
    <div className="col-span-2 xs:col-span-1 flex flex-col justify-center items-center rounded-xl border border-gray-200 hover:border-sedGreen p-5 transition duration-200 ease-in-out">
      <h1 className="text-4xl font-outfit">36k</h1>
      <p className="mt-2">Trees Planted</p>
    </div>
  );
}

function Card4Mobile() {
  return (
    <div className="col-span-2 relative h-52 overflow-hidden rounded-xl">
      <Image
        priority
        src={ForestWide}
        alt="Forest Wide"
        fill
        className="object-cover"
      />

      <div className="absolute -inset-1 flex flex-col justify-end bg-gradient-to-t from-black/20 p-4">
        <h2 className="text-lg text-gray-200 font-semibold">Vibrance</h2>
        <p className=" text-gray-300 text-sm">A better planet for all.</p>
      </div>
    </div>
  );
}
