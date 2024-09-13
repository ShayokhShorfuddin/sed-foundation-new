import Image from "next/image";
import Javed from "./_images/javed.jpg";
import Journal from "./_images/journal-book.jpg";
import Seminar1 from "./_images/seminar1.jpg";
import Seminar2 from "./_images/seminar2.jpg";

export default function Grid() {
  return (
    <section className="container flex flex-col items-center mt-5 mb-20">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-4xl">
          We Are <span className="text-sedGreen">Interactive</span>
        </h1>

        <p className="mt-4 max-w-xl">
          We believe in the power of hands-on learning and collaborative
          discussions. Our seminars and workshops provide an engaging platform
          for participants to interact, share ideas, and gain practical
          knowledge. Through these interactive sessions, we foster a dynamic
          environment where everyone can contribute, learn from each other, and
          develop actionable solutions for climate change.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-20 w-full max-w-[90rem] h-[59rem] md:h-[40rem] lg:h-[59rem]">
        <div className="relative col-span-1">
          <Image src={Javed} alt="Javed" className="object-cover" fill />
        </div>

        <div className="relative col-span-1 md:col-span-2">
          <Image src={Seminar1} alt="Seminar1" className="object-cover" fill />
        </div>

        <div className="relative col-span-1 md:col-span-3">
          <Image src={Seminar2} alt="Seminar2" className="object-cover" fill />
        </div>
      </div>
    </section>
  );
}
