import { CheckCircle2 } from "lucide-react";

const benefits = [
  {
    title: "Less talking, more doing",
    description:
      "No more endless group chats about ‘where are we going?’. LinkUp makes choosing quick and easy so you can just enjoy the moment.",
  },
  {
    title: "Made for every group",
    description:
      "Planning a trip with friends or organizing a team-building activity? LinkUp makes vacation planning effortless and fun.",
  },
  {
    title: "Smart and simple planning",
    description:
      "All ideas, votes, and final picks in one clean place. Goodbye confusion, hello clarity.",
  },
];

export function Benefits() {
  return (
    <section
      id="benefits"
      className="w-full py-20 md:py-32 bg-white/50 dark:bg-black/50"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              Why you’ll love it
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
              Why LinkUp just makes sense
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              See how LinkUp makes planning with friends simple, fast, and actually fun.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-4xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col justify-start space-y-4">
              <div className="flex items-center gap-4">
                <CheckCircle2 className="h-8 w-8 text-accent" />
                <h3 className="text-xl font-bold font-headline">
                  {benefit.title}
                </h3>
              </div>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
