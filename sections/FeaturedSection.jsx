import FeaturedCard from "@/components/cards/featured/FeaturedCard";
import Heading from "@/components/heading/Heading";

import { featuredDate } from "@/data";

const MainFeatured = featuredDate[0];

const FeaturedSection = () => {
  return (
    <div className="pt-28 px-3 lg:px-8">
      <Heading number="01" title_1="Featured" title_2="Work" />

      {/* main featured card */}
      <FeaturedCard
        active
        title={MainFeatured.title}
        tag={MainFeatured.tag}
        video={MainFeatured.video}
      />
    </div>
  );
};

export default FeaturedSection;
