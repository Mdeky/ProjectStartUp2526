'use client';

import { useEffect, useRef, useState, FormEvent } from 'react';
import { supabase } from '@/lib/supabaseClient';

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Loader2, PartyPopper } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

type Status = 'idle' | 'pending' | 'success' | 'error';

type FieldErrors = {
  name?: string[];
  email?: string[];
};

function SubmitButton({ pending }: { pending: boolean }) {
  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Sending...
        </>
      ) : (
        'Sign up for prerelease'
      )}
    </Button>
  );
}

export function SignUpForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');
  const [confirmation, setConfirmation] = useState<string | null>(null);
  const [errors, setErrors] = useState<FieldErrors | null>(null);

  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  const pending = status === 'pending';

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    console.log('SUPABASE_URL =', process.env.NEXT_PUBLIC_SUPABASE_URL);
    event.preventDefault();
    setStatus('pending');
    setMessage('');
    setConfirmation(null);
    setErrors(null);

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get('name') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();

    const newErrors: FieldErrors = {};
    if (!name) newErrors.name = ['Name is required'];
    if (!email) newErrors.email = ['Email is required'];

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setStatus('error');
      return;
    }

    const { error } = await supabase.from('registrations').insert({
      name,
      email,
    });

    if (error) {
      console.error(error);
      setStatus('error');
      setMessage('Something went wrong while saving your signup.');
      toast({
        variant: 'destructive',
        title: 'Oh no! Something went wrong.',
        description: 'Please try again later.',
      });
    } else {
      setStatus('success');
      setConfirmation('Thanks for signing up! We will notify you as soon as LinkUp goes live.');
      formRef.current?.reset();
    }
  };

  useEffect(() => {
    if (status === 'error' && message && !errors) {
      toast({
        variant: 'destructive',
        title: 'Oh no! Something went wrong.',
        description: message,
      });
    }
  }, [status, message, errors, toast]);

  if (status === 'success' && confirmation) {
    return (
      <Card className="w-full max-w-md shadow-lg">
        <CardContent className="p-6 text-center">
          <PartyPopper className="mx-auto mb-4 h-12 w-12 text-accent" />
          <p className="text-lg text-muted-foreground">{confirmation}</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline text-2xl">Be the First</CardTitle>
        <CardDescription>
          Sign up and get notified as soon as LinkUp goes live.
        </CardDescription>
      </CardHeader>

      <form onSubmit={handleSubmit} ref={formRef}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" placeholder="Your name" required />
            {errors?.name && (
              <p className="text-sm font-medium text-destructive">
                {errors.name[0]}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Your email address"
              required
            />
            {errors?.email && (
              <p className="text-sm font-medium text-destructive">
                {errors.email[0]}
              </p>
            )}
          </div>
        </CardContent>

        <CardFooter className="flex flex-col items-start">
          <SubmitButton pending={pending} />
          <p className="mt-2 text-xs text-muted-foreground">
            We respect your privacy. No spam, ever.
          </p>
        </CardFooter>
      </form>
    </Card>
  );
}
