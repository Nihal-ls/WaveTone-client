import HeroBanner from "@/components/Root/Banner";
import Categories from "@/components/Root/Categories";
import FeaturedProducts from "@/components/Root/FeaturedProducts";
import WhyChooseUs from "@/components/Root/WhyChooseUs";
import Image from "next/image";
import DealsAndOffers from "@/components/Root/DealsAndOffers"
import FAQ from "@/components/Root/F&Q.";
import CustomerReviews from "@/components/Root/CustomerReviews";

export default function Home() {
  return (
    <div>
        <HeroBanner/>
        <Categories/>
        <FeaturedProducts/>
        <WhyChooseUs/>
       <DealsAndOffers/>
       <CustomerReviews/>
       <FAQ/>
    </div>
  );
}
