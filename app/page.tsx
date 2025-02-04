import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Organisasi from "@/components/Organisasi";
import Profil from "@/components/Profil";

export default function Home() {
  return (
    <div>
      <div className="overflow-hidden w-full xl:h-fit h-[23rem] sticky top-0 z-50">
        <Navbar />
      </div>
      <div className="xl:-mt-[4rem] -mt-[22rem]">
        <Hero />
        <section id="profil">
          <Profil />
        </section>
        <section id="organisasi">
          <Organisasi />
        </section>
      </div>
    </div>
  );
}
