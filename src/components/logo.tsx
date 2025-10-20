import Link from 'next/link';
import { Shuffle } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2 text-xl font-bold font-headline text-foreground", className)}>
      <div className="p-1.5 bg-primary/10 rounded-lg">
        <Shuffle className="h-5 w-5 text-primary" />
      </div>
      <span className="text-primary">Link</span><span className="text-foreground">Up</span>
    </Link>
  );
}
