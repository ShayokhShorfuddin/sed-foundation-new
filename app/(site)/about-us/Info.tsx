import Image from "next/image";
import AboutUs from "./_images/about-us.svg";
import Legal from "./_images/legal.svg";
import ManagementDiagram from "./_images/diagram.jpg";

export default function Info() {
  return (
    <section className="container flex flex-col mt-14 mb-10 px-5 2xl:px-32">
      <SEDInfo />
      <LegalStatus />
      <Diagram />
      <ExecutiveCommittee />
    </section>
  );
}

function SEDInfo() {
  return (
    <div className="flex justify-around items-center flex-wrap">
      <div className="flex flex-col max-w-96">
        <h1 className="text-3xl md:text-4xl font-outfit">
          <span className="text-sedGreen">SED</span> Foundation
          <span className="text-sedGreen">.</span>
        </h1>

        <p className="mt-3">
          SED Foundation was established by a group of young and energetic
          people who were highly motivated and committed for contributing their
          time, skills and energies for the development of Environment in
          Bangladesh and addressing various Environmental issues.
        </p>
      </div>

      <Image src={AboutUs} alt="Donation" className="size-96 mt-3 sm:mt-0" />
    </div>
  );
}

function LegalStatus() {
  return (
    <div className="flex justify-around items-center flex-wrap-reverse mt-10">
      <Image src={Legal} alt="Legal" className="size-96 mt-16 lg:mt-0" />

      <div className="flex flex-col max-w-96">
        <h1 className="text-3xl md:text-4xl font-outfit">
          <span className="text-sedGreen">Legal</span> Status
          <span className="text-sedGreen">.</span>
        </h1>

        <p className="mt-3">
          Strategy for Environmental Development Foundation is a registered
          legal entity. The Foundation is registered under “The Societies
          Registration Act, 1860 (Act XXI of 1860)” of Government of Bangladesh.
          The registration number is S-12630.
        </p>
      </div>
    </div>
  );
}

function Diagram() {
  return (
    <div className="flex flex-col items-center mt-20">
      <h1 className="text-3xl md:text-4xl font-outfit">
        <span className="text-sedGreen">Management</span> Hierarchy
        <span className="text-sedGreen">.</span>
      </h1>

      <Image src={ManagementDiagram} alt="Diagram" className="mt-10" />
    </div>
  );
}

const CommitteeMembers: { name: string; role: string }[] = [
  { name: "Mohammed Javed Mia Rasin", role: "Founder & President" },
  { name: "Ahmad Takrim Fuad", role: "Vice President" },
  { name: "Mohammad Nazmul Hossain", role: "Secretary General" },
  { name: "S M Al Nahian", role: "Treasurer" },
  { name: "S. M. Shaukatul Islam", role: "Organizing Secretary" },
  { name: "Md. Faizul Islam", role: "Joint Secretary" },
  { name: "Asiqur Rahman", role: "Member" },
];

function ExecutiveCommittee() {
  return (
    <div className="flex flex-col items-center mt-20">
      <div className="flex flex-col max-w-96">
        <h1 className="text-3xl md:text-4xl font-outfit">
          <span className="text-sedGreen">Executive</span> Committee
          <span className="text-sedGreen">.</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full mt-10 gap-5">
        {CommitteeMembers.map((member, index) => (
          <CommitteeMemberCard key={index} {...member} />
        ))}
      </div>
    </div>
  );
}

function CommitteeMemberCard({ name, role }: { name: string; role: string }) {
  return (
    <div className="flex flex-col items-center p-5 border hover:border-sedGreen transition duration-200">
      <h1 className="text-xl font-outfit text-center">{name}</h1>
      <p className="text-sm mt-1">{role}</p>
    </div>
  );
}
