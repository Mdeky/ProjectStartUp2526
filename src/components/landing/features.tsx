import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { GalleryHorizontal, Star, Users, CalendarCheck } from "lucide-react";

const features = [
  {
    icon: <GalleryHorizontal className="h-8 w-8 text-primary" />,
    title: "Swipe voor keuzes",
    description: "Net als Tinder, maar dan voor het plannen van uitjes. Swipe door voorstellen en geef direct je voorkeur aan."
  },
  {
    icon: <Star className="h-8 w-8 text-primary" />,
    title: "Stem met sterren",
    description: "Rate voorstellen met 1 tot 5 sterren. De groepsvoorkeur wordt direct visueel en democratisch duidelijk."
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Gezamenlijke beslissingen",
    description: "Het voorstel met de hoogste gemiddelde rating wint. Geen discussie meer, de app beslist voor jullie."
  },
  {
    icon: <CalendarCheck className="h-8 w-8 text-primary" />,
    title: "Plannen zonder gedoe",
    description: "Van restaurant tot vakantiebestemming, plan elke groepsactiviteit snel, leuk en overzichtelijk."
  }
];

export function Features() {
  return (
    <section id="features" className="w-full py-20 md:py-32 bg-white/50 dark:bg-black/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Belangrijkste Functies</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Hoe het werkt</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              LinkUp transformeert groepsplanning van een lastige klus in een leuke, interactieve ervaring.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-4 mt-12">
          {features.map((feature, index) => (
            <Card key={index} className="h-full transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
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
