import { Check } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const AboutPage = () => {
  const t = useTranslations("about");

  const services = t.raw("services") as Array<{
    title: string;
    description: string;
    important?: string;
  }>;

  const rules = t.raw("rules") as Array<{
    title: string;
    description: string;
  }>;

  const aboutParagraphs = t.raw("about-paragraphs") as string[];

  return (
    <main>
      <section className="container mt-10 p-4 mb-10 max-w-6xl mx-auto">
        <div className="mb-10">
          <Image
            src="/paralia1.avif"
            alt="about-img"
            width={700}
            height={500}
            className="w-full h-[400px] object-cover rounded-xl"
          />
        </div>

        <div>
          <h1 className="pb-8 text-4xl">{t("about-title")}</h1>
          <div className="leading-loose">
            {aboutParagraphs.map((p, i) => (
              <p key={i} className="pt-4 text-[14px] font-serif">
                {p}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <h1 className="text-4xl">{t("services-title")}</h1>
          {services.map((service, index) => (
            <div className="pt-4" key={index}>
              <div className="flex items-center gap-2">
                <Check className="text-primary" />
                <h2 className="text-xl text-primary"> {service.title}</h2>
              </div>
              <p className="pt-2 text-slate-400/70 font-serif">
                {service.description}
              </p>
              {service.important && (
                <p className="pt-2 text-red-600">{service.important}</p>
              )}
              <div className="h-[1px] bg-slate-300 w-full mt-4"></div>
            </div>
          ))}
          <h1 className="text-xl italic pt-4">{t("disclaimer")}</h1>
        </div>

        <div className="mt-10">
          <h1 className="text-4xl">{t("rules-title")}</h1>
          {rules.map((rule, index) => (
            <div className="pt-4" key={index}>
              <h2 className="text-xl text-red-500">{rule.title}</h2>
              <p className="pt-2 text-slate-400/70 font-serif">
                {rule.description}
              </p>
              <div className="h-[1px] bg-slate-300 w-full mt-4"></div>
            </div>
          ))}
        </div>
      </section>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#262626"
          fillOpacity="1"
          d="M0,256L60,261.3C120,267,240,277,360,277.3C480,277,600,267,720,229.3C840,192,960,128,1080,112C1200,96,1320,128,1380,144L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </main>
  );
};

export default AboutPage;
