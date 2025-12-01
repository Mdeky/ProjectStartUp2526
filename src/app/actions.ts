'use server';

import { z } from 'zod';
import fs from 'fs/promises';
import path from 'path';

const SignUpSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Naam moet minimaal 2 karakters lang zijn.' })
    .max(50, { message: 'Naam is te lang.' }),
  email: z.string().email({ message: 'Voer een geldig e-mailadres in.' }),
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

const dataFile = path.join(
  process.cwd(),
  'src',
  'data',
  'prerelease-signups.json'
);

async function readSignups() {
  try {
    const file = await fs.readFile(dataFile, 'utf8');
    return JSON.parse(file) as Array<{
      name: string;
      email: string;
      createdAt: string;
    }>;
  } catch {
    // Als bestand nog niet bestaat of leeg/corrupt is: begin met lege lijst
    return [];
  }
}

async function writeSignups(data: unknown) {
  await fs.writeFile(dataFile, JSON.stringify(data, null, 2), 'utf8');
}

export async function signUpForPrerelease(
  _prevState: SignUpState,
  formData: FormData
): Promise<SignUpState> {
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
    const signups = await readSignups();

    signups.push({
      name,
      email,
      createdAt: new Date().toISOString(),
    });

    await writeSignups(signups);

    return {
      status: 'success',
      message: 'Success!',
      confirmation: 'Bedankt! Je staat op de prerelease-lijst.',
    };
  } catch (error) {
    console.error('Error saving signup:', error);
    return {
      status: 'error',
      message: 'Er is iets misgegaan. Probeer het later opnieuw.',
    };
  }
}
