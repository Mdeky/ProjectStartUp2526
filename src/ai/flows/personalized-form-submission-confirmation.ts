'use server';

/**
 * @fileOverview Provides a personalized confirmation message after a user submits the prerelease registration form.
 *
 * - generatePersonalizedConfirmation - A function that generates a personalized confirmation message.
 * - PersonalizedConfirmationInput - The input type for the generatePersonalizedConfirmation function.
 * - PersonalizedConfirmationOutput - The return type for the generatePersonalizedConfirmation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedConfirmationInputSchema = z.object({
  name: z.string().describe('The name of the user who submitted the form.'),
});
export type PersonalizedConfirmationInput = z.infer<typeof PersonalizedConfirmationInputSchema>;

const PersonalizedConfirmationOutputSchema = z.object({
  confirmationMessage: z.string().describe('The personalized confirmation message to display to the user.'),
});
export type PersonalizedConfirmationOutput = z.infer<typeof PersonalizedConfirmationOutputSchema>;

export async function generatePersonalizedConfirmation(
  input: PersonalizedConfirmationInput
): Promise<PersonalizedConfirmationOutput> {
  return personalizedConfirmationFlow(input);
}

const personalizedConfirmationPrompt = ai.definePrompt({
  name: 'personalizedConfirmationPrompt',
  input: {schema: PersonalizedConfirmationInputSchema},
  output: {schema: PersonalizedConfirmationOutputSchema},
  prompt: `Thank you for preregistering, {{name}}! We're thrilled to have you join us.  You'll be among the first to know when LinkUp is released. Get ready to experience effortless group planning!`,
});

const personalizedConfirmationFlow = ai.defineFlow(
  {
    name: 'personalizedConfirmationFlow',
    inputSchema: PersonalizedConfirmationInputSchema,
    outputSchema: PersonalizedConfirmationOutputSchema,
  },
  async input => {
    const {output} = await personalizedConfirmationPrompt(input);
    return output!;
  }
);
