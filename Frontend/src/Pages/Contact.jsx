import ContactHero from "../Components/Contact/ContactHero";
import ContactLocationCard from "../Components/Contact/ContactLocationCard";
import ContactInfoCards from "../Components/Contact/ContactInfoCards";
import WorkingHoursCard from "../Components/Contact/WorkingHoursCard";
import EnquiryForm from "../Components/Contact/EnquiryForm";

const ContactPage = () => {
  return (
    <section className="w-full bg-[#F8FBFC] min-h-screen overflow-x-hidden">
      <ContactHero />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-10 sm:pb-16">
        {/* Mobile: single column, Desktop: 12 col */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-start">

          {/* Left */}
          <div className="order-2 lg:order-1 lg:col-span-7 flex flex-col">
            <ContactLocationCard />
            <ContactInfoCards />
            <WorkingHoursCard />
          </div>

          {/* Right - Form comes FIRST on mobile for better UX */}
          <div className="order-1 lg:order-2 lg:col-span-5">
            <div className="lg:sticky lg:top-6">
              <EnquiryForm />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactPage;