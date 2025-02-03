import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Profil from "@/components/Profil";

export default function Home() {
  return (
    <div>
      <div className="overflow-hidden w-full h-[23rem] sticky top-0 z-50">
        <Navbar />
      </div>
      <div className="-mt-[22rem]">
        <Hero/>
        <Profil/>
      </div>
    </div>
  );
}
