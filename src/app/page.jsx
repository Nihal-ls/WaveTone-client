import HeroBanner from "@/components/Root/Banner";
import Categories from "@/components/Root/Categories";
import FeaturedProducts from "@/components/Root/FeaturedProducts";
import Image from "next/image";

export default function Home() {
  return (
    <div>
        <HeroBanner/>
        <Categories/>
        <FeaturedProducts/>
    </div>
  );
}
