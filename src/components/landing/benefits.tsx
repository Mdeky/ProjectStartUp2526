import { CheckCircle2 } from "lucide-react";

const benefits = [
    {
      title: "Minder discussie, meer actie",
      description: "Stop met eindeloze chats over 'waar gaan we eten?'. LinkUp stroomlijnt het keuzeproces zodat jullie sneller kunnen genieten."
    },
    {
      title: "Perfect voor elke groep",
      description: "Of je nu een weekendje weg met vrienden plant, een familiediner organiseert of een teamuitje regelt, LinkUp past zich aan."
    },
    {
      title: "Slimme, overzichtelijke planning",
      description: "Alle voorstellen, stemmen en de uiteindelijke keuze op één plek. Zeg vaarwel tegen chaos en hallo tegen duidelijkheid."
    }
  ];

export function Benefits() {
  return (
    <section id="benefits" className="w-full py-20 md:py-32 bg-white/50 dark:bg-black/50">
        <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Voordelen</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Waarom je LinkUp nodig hebt</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Ontdek hoe LinkUp de manier waarop je plannen maakt voorgoed verandert.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-4xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col justify-start space-y-4">
              <div className="flex items-center gap-4">
                <CheckCircle2 className="h-8 w-8 text-accent" />
                <h3 className="text-xl font-bold font-headline">{benefit.title}</h3>
              </div>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
