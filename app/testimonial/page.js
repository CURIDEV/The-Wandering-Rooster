import Cta from "@/components/Cta";
import PageBanner from "@/components/PageBanner";
import ModernTestimonials from "@/components/ModernTestimonials";
import FoodKingLayout from "@/layouts/FoodKingLayout";

const Page = () => {
  return (
    <FoodKingLayout>
      <PageBanner pageName={"Testimonials"} />
      <ModernTestimonials />
      <Cta />
    </FoodKingLayout>
  );
};

export default Page;
