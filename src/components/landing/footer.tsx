import { Logo } from "@/components/logo";
import { Twitter, Instagram, Facebook } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-muted/50 py-12">
      <div className="container grid max-w-7xl grid-cols-1 gap-8 px-4 text-sm md:grid-cols-3 md:px-6">
        <div className="flex flex-col gap-4">
          <Logo />
          <p className="text-muted-foreground">
            Plan samen, beslis slim. De toekomst van groepsplanning is hier.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
            <div>
                <h4 className="font-semibold mb-2">Contact</h4>
                <a href="mailto:contact@linkup.app" className="block text-muted-foreground hover:text-primary">contact@linkup.app</a>
            </div>
            <div>
                <h4 className="font-semibold mb-2">Legal</h4>
                <Link href="#" className="block text-muted-foreground hover:text-primary">Privacybeleid</Link>
            </div>
        </div>
        <div className="flex flex-col items-start md:items-end gap-4">
          <div className="flex gap-4">
            <Link href="#" aria-label="Twitter">
              <Twitter className="h-6 w-6 text-muted-foreground hover:text-primary" />
            </Link>
            <Link href="#" aria-label="Instagram">
              <Instagram className="h-6 w-6 text-muted-foreground hover:text-primary" />
            </Link>
            <Link href="#" aria-label="Facebook">
              <Facebook className="h-6 w-6 text-muted-foreground hover:text-primary" />
            </Link>
          </div>
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} LinkUp. Alle rechten voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  );
}
