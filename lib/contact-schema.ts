import { z } from "zod";

export const contactLimits = {
    name: 50,
    email: 254,
    messageMin: 10,
    message: 2000,
} as const;

export const contactSchema = z.object({
    firstName: z
        .string()
        .trim()
        .min(1, "First name is required")
        .max(contactLimits.name, "First name is too long"),
    lastName: z
        .string()
        .trim()
        .min(1, "Last name is required")
        .max(contactLimits.name, "Last name is too long"),
    email: z
        .string()
        .trim()
        .min(1, "Email is required")
        .max(contactLimits.email, "Email is too long")
        .pipe(z.email("Enter a valid email address")),
    message: z
        .string()
        .trim()
        .min(
            contactLimits.messageMin,
            `Please write at least ${contactLimits.messageMin} characters`,
        )
        .max(
            contactLimits.message,
            `Message must be ${contactLimits.message} characters or fewer`,
        ),
});

export const contactRequestSchema = contactSchema.extend({
    website: z.string().max(contactLimits.name).optional(),
    elapsedMs: z.number().int().nonnegative(),
});

export type ContactValues = z.infer<typeof contactSchema>;
export type ContactRequest = z.infer<typeof contactRequestSchema>;
