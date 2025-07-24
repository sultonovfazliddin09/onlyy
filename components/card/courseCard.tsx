import { ICourse } from "@/types";
import Link from "next/link";

import Image from "next/image";
import { Separator } from "../ui/separator";
import { Card, CardContent } from "../ui/card";

function CourseCard(course: ICourse) {
  return (
    <Link href={`/courses/reactjs`}>
      <Card className="group w-full">
        <CardContent className="relative h-56 w-full">
          <Image
            fill
            src={course.previewImage}
            alt={course.title}
            className="object-cover"
          />
        </CardContent>

        <div className="my-4 flex flex-col space-y-2 px-2">
          <h2 className="line-clamp-1 font-space-grotesk text-2xl font-bold">
            {course.title}
          </h2>

          <Separator />

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image
                src={course.author.image}
                alt={course.author.name}
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
              <p className="text-sm text-muted-foreground">
                {course.author.name}
              </p>
            </div>

            <div className="flex gap-2">
              <div className="self-start font-space-grotesk text-xs text-muted-foreground line-through">
                {course.oldPrice.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </div>

              <div className="font-space-grotesk text-sm font-bold">
                {course.currentPrice.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </div>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
}

export default CourseCard;
