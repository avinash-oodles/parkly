import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  role: z.enum(["driver", "host"]).refine((val) => val !== undefined, {
    message: "Please select a user type",
  }),
});

export type ContactFormValues = z.infer<typeof contactSchema>;