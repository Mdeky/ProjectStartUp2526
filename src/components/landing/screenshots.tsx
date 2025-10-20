import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const screenshots = PlaceHolderImages.filter((img) => img.id.startsWith("app-"));

function PhoneMockup({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[10px] rounded-[2.5rem] h-[632px] w-[312px] shadow-xl">
      <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[13px] top-[72px] rounded-l-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[13px] top-[124px] rounded-l-lg"></div>
      <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[13px] top-[142px] rounded-r-lg"></div>
      <div className="rounded-[2rem] overflow-hidden w-[292px] h-[612px] bg-white dark:bg-gray-800">
        {children}
      </div>
    </div>
  );
}

export function Screenshots() {
  return (
    <section id="screenshots" className="w-full py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
              A look inside the app
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              See how LinkUp makes planning simple from start to finish — from
              suggestions to the final choice.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-sm items-center gap-8 py-12 sm:max-w-4xl sm:grid-cols-2 lg:max-w-none lg:grid-cols-3 lg:gap-12">
          {screenshots.map((screenshot, index) => (
            <div
              key={screenshot.id}
              className="transform transition-transform duration-300 hover:scale-105"
            >
              <PhoneMockup>
                <Image
                  src={screenshot.imageUrl}
                  alt={screenshot.description}
                  data-ai-hint={screenshot.imageHint}
                  width={375}
                  height={812}
                  className="object-cover w-full h-full"
                />
              </PhoneMockup>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
