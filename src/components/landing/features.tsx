import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { GalleryHorizontal, Star, Users, CalendarCheck } from "lucide-react";

const features = [
  {
    icon: <GalleryHorizontal className="h-8 w-8 text-primary" />,
    title: "Swipe to choose",
    description:
      "Just like Tinder, but for planning hangouts. Swipe through suggestions and show what you like right away.",
  },
  {
    icon: <Star className="h-8 w-8 text-primary" />,
    title: "Rate with stars",
    description:
      "Give each idea a score from 1 to 5 stars. Everyone’s opinion counts, and you instantly see the group’s favorites.",
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Decide together",
    description:
      "The idea with the highest average rating wins. No more debates — the app makes the choice for you.",
  },
  {
    icon: <CalendarCheck className="h-8 w-8 text-primary" />,
    title: "Stress-free planning",
    description:
      "From restaurants to weekend trips, plan any group activity fast, fun, and totally hassle-free.",
  },
];

export function Features() {
  return (
    <section
      id="features"
      className="w-full py-20 md:py-32 bg-white/50 dark:bg-black/50"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              Key Features
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
              How it works
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              LinkUp turns group planning from a headache into a fun, interactive experience.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-4 mt-12">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="h-full transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              <CardHeader className="flex flex-col items-center text-center gap-4">
                {feature.icon}
                <div className="space-y-1">
                  <CardTitle className="font-headline">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
