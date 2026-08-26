import { useNavigate } from "react-router-dom";
import servicesData from "../../data/services.json";

// Your component is in src/Components/Home/ -> assets is in src/assets/
const imageModules = import.meta.glob("../../assets/services/*.{jpeg,jpg,png,webp}", {
    eager: true,
    import: "default"
});

const BRAND = {
    primary: "#0B6E8F",
    ink: "#0E2A33",
    inkSoft: "#4A6169",
    line: "#E3EAEC",
};

const HOME_SELECTED_IDS = [
    "skilled-nursing-care",
    "icu-care-at-home",
    "elderly-care",
    "gda-caregiver-patient-attendant",
    "newborn-baby-care",
    "physiotherapy-at-home",
];

const DISPLAY_LABELS = {
    "skilled-nursing-care": "Home Nursing",
    "icu-care-at-home": "ICU Setup at Home",
    "elderly-care": "Elder/Senior Care",
    "gda-caregiver-patient-attendant": "Attendant Services",
    "newborn-baby-care": "Baby/Newborn Care",
    "physiotherapy-at-home": "Physiotherapy",
};

function getImageUrl(jsonPath) {
    if (!jsonPath) return null;
    const fileName = jsonPath.split("/").pop().split(".")[0].toLowerCase();
    const foundKey = Object.keys(imageModules).find(key =>
        key.toLowerCase().includes(fileName)
    );
    return foundKey ? imageModules[foundKey] : null; // <-- null, not ""
}

export default function HomeServices() {
    const navigate = useNavigate();
    const selectedServices = HOME_SELECTED_IDS.map(id => servicesData.find(s => s.id === id)).filter(Boolean);

    return (
        <section className="w-full bg-[#F8FBFC] py-10 sm:py-16">
            <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-[640px] text-center">
                    <p className="text-[10px] font-extrabold uppercase tracking-[0.12em]" style={{ color: BRAND.primary }}>Our Expertise</p>
                    <h2 className="mt-2 text-[22px] font-extrabold sm:text-[28px]" style={{ color: BRAND.ink }}>Comprehensive Home Care Services</h2>
                    <p className="mx-auto mt-3 max-w-[520px] text-[12.5px] leading-[19px]" style={{ color: BRAND.inkSoft }}>
                        We provide a wide spectrum of medical and non-medical services designed to support healing and well-being.
                    </p>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5 lg:gap-6">
                    {selectedServices.map((service) => {
                        const imgUrl = getImageUrl(service.image);

                        return (
                            <div
                                key={service.id}
                                onClick={() => navigate(`/services/${service.id}`)}
                                className="group flex cursor-pointer flex-col overflow-hidden rounded-[12px] border bg-white shadow-sm hover:shadow-lg hover:-translate-y-[2px] transition-all"
                                style={{ borderColor: BRAND.line }}
                            >
                                <div className="h-[200px] w-full overflow-hidden bg-[#EAF2F4]">
                                    {imgUrl ? (
                                        <img
                                            src={imgUrl}
                                            alt={service.name}
                                            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    ) : (
                                        <div className="h-full w-full flex flex-col items-center justify-center bg-[#EAF2F4] text-[#0B6E8F]">
                                            <span className="text-[11px] font-bold">{DISPLAY_LABELS[service.id]}</span>
                                            <span className="text-[10px] opacity-70">Image missing: {service.image?.split("/").pop()}</span>
                                        </div>
                                    )}
                                </div>
                                <div className="flex flex-1 flex-col p-4 sm:p-5">
                                    <h3 className="text-[15px] font-bold" style={{ color: BRAND.ink }}>{DISPLAY_LABELS[service.id]}</h3>
                                    <p className="mt-1.5 flex-1 text-[12px] leading-[18px] line-clamp-3" style={{ color: BRAND.inkSoft }}>{service.content.summary}</p>
                                    <span className="mt-4 inline-flex gap-1 text-[11.5px] font-bold" style={{ color: BRAND.primary }}>Explore Service →</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}