"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { companies } from "@/constants";

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <>
      <div className="container mx-auto grid min-h-[80vh] max-w-6xl grid-cols-2 gap-8 max-md:grid-cols-1 max-md:pt-32">
        <div className="flex flex-col space-y-4 self-center">
          <h1 className="font-space-grotesk text-5xl font-bold">
            {t("heroTitle")}{" "}
            <span className="text-blue-500">{t("heroTitleSpan")}</span>
          </h1>

          <p className="text-muted-foreground">{t("heroDescription")}</p>

          <div className="flex gap-4">
            <Link href="/courses">
              <Button variant="outline" size="lg" className="rounded-full">
                {t("findCourses")}
              </Button>
            </Link>

            <Link href="/blogs">
              <Button size="lg" className="rounded-full">
                {t("blogs")}
              </Button>
            </Link>
          </div>
        </div>

        <Image
          src="/assets/hero.png"
          alt="hero"
          width={528}
          height={528}
          className="self-end object-cover"
        />
      </div>

      <div className="w-full bg-secondary">
        <Carousel
          opts={{ align: "start", loop: true }}
          className="container mx-auto w-full max-w-6xl"
          plugins={[Autoplay({ delay: 2000 })]}
        >
          <CarouselContent>
            {companies.map((Icon, idx) => (
              <CarouselItem
                key={idx}
                className="basis-1/3 md:basis-1/4 lg:basis-1/6"
              >
                <Icon className="h-24 w-full text-muted-foreground" />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </>
  );
}
