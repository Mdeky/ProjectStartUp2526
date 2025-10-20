'use server';

import { z } from 'zod';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { generatePersonalizedConfirmation } from '@/ai/flows/personalized-form-submission-confirmation';

const SignUpSchema = z.object({
  name: z.string().min(2, { message: "Naam moet minimaal 2 karakters lang zijn." }).max(50, { message: "Naam is te lang." }),
  email: z.string().email({ message: "Voer een geldig e-mailadres in." }),
});

export type SignUpState = {
  status: 'idle' | 'success' | 'error';
  message: string;
  confirmation?: string;
  errors?: {
    name?: string[];
    email?: string[];
  };
};

export async function signUpForPrerelease(
  prevState: SignUpState,
  formData: FormData
): Promise<SignUpState> {
  // This is a slow action to simulate network latency.
  // await new Promise(resolve => setTimeout(resolve, 1000));
  
  const validatedFields = SignUpSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
  });

  if (!validatedFields.success) {
    return {
      status: 'error',
      message: 'Controleer je invoer.',
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email } = validatedFields.data;

  try {
    // Check if Firebase is configured
    if (!process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID) {
      console.warn("Firebase not configured. Skipping Firestore write. Using mock AI response.");
      
      const personalizedConfirmation = await generatePersonalizedConfirmation({ name });
      
      return {
        status: 'success',
        message: 'Success! (Mock Response)',
        confirmation: personalizedConfirmation.confirmationMessage,
      };
    }
      
    await addDoc(collection(db, 'preregistrations'), {
      name,
      email,
      createdAt: serverTimestamp(),
    });

    const { confirmationMessage } = await generatePersonalizedConfirmation({ name });
    
    return {
      status: 'success',
      message: 'Success!',
      confirmation: confirmationMessage,
    };

  } catch (error) {
    console.error('Firebase or AI Error:', error);
    return {
      status: 'error',
      message: 'Er is iets misgegaan. Probeer het later opnieuw.',
    };
  }
}
