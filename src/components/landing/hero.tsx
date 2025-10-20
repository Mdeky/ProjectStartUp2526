import { SignUpForm } from './sign-up-form';

export function Hero() {
  return (
    <section id="hero" className="w-full py-20 md:py-32 lg:py-40">
      <div className="container px-4 md:px-6">
        <div className="mx-auto grid max-w-4xl items-center gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-accent/20 px-3 py-1 text-sm font-medium text-accent-foreground">
              Nieuwe Manier van Plannen
            </div>
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Plan samen, beslis slim.
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              LinkUp maakt groepsbeslissingen leuk en efficiënt. Geen eindeloze discussies meer. Swipe, stem en geniet van jullie perfecte plan.
            </p>
          </div>
          <div className="w-full">
            <SignUpForm />
          </div>
        </div>
      </div>
    </section>
  );
}
