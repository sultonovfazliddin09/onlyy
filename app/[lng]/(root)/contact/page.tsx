import TopBar from "@/components/shared/top-bar";
import { translation } from "@/i18next/server";
import { LngParams } from "@/types";
import { Mail, Phone } from "lucide-react";

async function Page({ params: { lng } }: LngParams) {
  const { t } = await translation(lng);

  return (
    <>
      <TopBar label="contacts" />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1362.0311355997549!2d31.3705553770935!3d30.060653711199444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583b06b5b45af3%3A0xc70430c240b0b871!2sEl%20Mohanllawy%20Hypermarket!5e0!3m2!1sru!2seg!4v1708040792517!5m2!1sru!2seg"
        loading="lazy"
        className="w-full"
      />

      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-1">
          <div className="flex-col">
            <h1 className="mb-2 font-space-grotesk text-4xl font-bold">
              {t("contactTitle")}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t("contactDescription")}
            </p>

            <div className="mt-12 flex items-center gap-3">
              <Mail className="size-4" />
              <span className="text-sm">info@example.com</span>
            </div>
            <div className="mt-2 flex items-center gap-3">
              <Phone className="size-4" />
              <span className="text-sm">+20 226 4902</span>
            </div>

            <h1 className="mb-2 font-space-grotesk text-4xl font-bold">
              {t("contactForm")}
            </h1>
            {/* <ContactForm /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
