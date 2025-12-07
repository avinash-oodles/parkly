import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
