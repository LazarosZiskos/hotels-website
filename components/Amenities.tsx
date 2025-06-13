import { amenities } from "@/constants/constants";
import { Card } from "./ui/card";
import { useTranslations } from "next-intl";

const Amenities = () => {
  const t = useTranslations("Amenities");
  return (
    <div className="mt-30">
      <h1 className="text-3xl md:text-6xl text-center tracking-wide">
        {t("title")}
      </h1>
      <div className="grid md:grid-cols-3 gap-8 mt-15 mb-30">
        {amenities.map((item, idx) => {
          const Icon = item.icon;
          return (
            <Card
              key={idx}
              className="flex flex-col justify-center items-center gap-8 shadow-xl hover:shadow-2xl border-0 rounded-md"
            >
              <div className="rounded-full bg-black p-6 text-center">
                <Icon className="w-8 h-8 mt-1 text-primary" />
              </div>

              <h2 className="text-2xl tracking-wide">
                {t(`items.${item.key}.title`)}
              </h2>
              <p className="max-w-[300px] text-center font-serif ">
                {t(`items.${item.key}.description`)}
              </p>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Amenities;
