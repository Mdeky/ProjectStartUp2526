'use client';

import { useEffect, useRef } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { signUpForPrerelease, type SignUpState } from '@/app/actions';

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Loader2, PartyPopper } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const initialState: SignUpState = {
  status: 'idle',
  message: '',
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Verzenden...
        </>
      ) : (
        'Meld je aan voor prerelease'
      )}
    </Button>
  );
}

export function SignUpForm() {
  const [state, formAction] = useFormState(signUpForPrerelease, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (state.status === 'success') {
      formRef.current?.reset();
    }
    if (state.status === 'error' && state.message && !state.errors) {
      toast({
        variant: "destructive",
        title: "Oh nee! Er is iets misgegaan.",
        description: state.message,
      })
    }
  }, [state, toast]);

  if (state.status === 'success' && state.confirmation) {
    return (
      <Card className="w-full max-w-md shadow-lg">
        <CardContent className="p-6 text-center">
            <PartyPopper className="mx-auto h-12 w-12 text-accent mb-4" />
            <p className="text-lg text-muted-foreground">{state.confirmation}</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline text-2xl">Wees de Eerste</CardTitle>
        <CardDescription>Meld je aan en ontvang een notificatie wanneer LinkUp live gaat.</CardDescription>
      </CardHeader>
      <form action={formAction} ref={formRef}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Naam</Label>
            <Input id="name" name="name" placeholder="Jouw naam" required />
            {state.errors?.name && <p className="text-sm font-medium text-destructive">{state.errors.name[0]}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <Input id="email" name="email" type="email" placeholder="Jouw e-mailadres" required />
             {state.errors?.email && <p className="text-sm font-medium text-destructive">{state.errors.email[0]}</p>}
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-start">
          <SubmitButton />
          <p className="mt-2 text-xs text-muted-foreground">
            We respecteren je privacy. Geen spam.
          </p>
        </CardFooter>
      </form>
    </Card>
  );
}
