import About from "@/module/About/about";
import Hero from "@/module/Banner/banner";
import FeaturedItems from "@/module/FeaturedItem/featureditem";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Hero section */}
      <div><Hero /></div>

      {/* About section */}
      <div><About /></div>

      {/* Featured section */}
      <div><FeaturedItems /></div>
    </div>
  );
}
