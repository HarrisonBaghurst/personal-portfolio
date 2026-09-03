"use client";

import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
    Field,
    FieldError,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    contactLimits,
    contactSchema,
    type ContactValues,
} from "@/lib/contact-schema";

const ContactForm = () => {
    const mountedAt = useRef(0);
    const honeypot = useRef<HTMLInputElement>(null);

    useEffect(() => {
        mountedAt.current = Date.now();
    }, []);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<ContactValues>({
        resolver: zodResolver(contactSchema),
        mode: "onTouched",
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            message: "",
        },
    });

    const onSubmit = async (values: ContactValues) => {
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...values,
                    website: honeypot.current?.value ?? "",
                    elapsedMs: Date.now() - mountedAt.current,
                }),
            });

            const data = (await response.json()) as { error?: string };

            if (!response.ok) {
                toast.error(data.error ?? "Something went wrong.");
                return;
            }

            toast.success("Message sent — I'll get back to you soon.");
            reset();
        } catch {
            toast.error("Couldn't reach the server. Please try again.");
        }
    };

    return (
        <form
            onSubmit={(event) => void handleSubmit(onSubmit)(event)}
            noValidate
        >
            <div
                aria-hidden="true"
                className="absolute left-[-9999px] h-0 w-0 overflow-hidden"
            >
                <input
                    ref={honeypot}
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                />
            </div>
            <FieldGroup className="gap-6 text-foreground/75">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <Field data-invalid={!!errors.firstName}>
                        <FieldLabel
                            htmlFor="firstName"
                            className="text-base text-foreground"
                        >
                            First name
                        </FieldLabel>
                        <Input
                            id="firstName"
                            autoComplete="given-name"
                            maxLength={contactLimits.name}
                            aria-invalid={!!errors.firstName}
                            className="h-12 text-base md:text-base bg-foreground/5 dark:bg-foreground/5"
                            {...register("firstName")}
                        />
                        <FieldError errors={[errors.firstName]} />
                    </Field>
                    <Field data-invalid={!!errors.lastName}>
                        <FieldLabel
                            htmlFor="lastName"
                            className="text-base text-foreground"
                        >
                            Last name
                        </FieldLabel>
                        <Input
                            id="lastName"
                            autoComplete="family-name"
                            maxLength={contactLimits.name}
                            aria-invalid={!!errors.lastName}
                            className="h-12 text-base md:text-base bg-foreground/5 dark:bg-foreground/5"
                            {...register("lastName")}
                        />
                        <FieldError errors={[errors.lastName]} />
                    </Field>
                </div>
                <Field data-invalid={!!errors.email}>
                    <FieldLabel
                        htmlFor="email"
                        className="text-base text-foreground"
                    >
                        Email
                    </FieldLabel>
                    <Input
                        id="email"
                        type="email"
                        autoComplete="email"
                        maxLength={contactLimits.email}
                        aria-invalid={!!errors.email}
                        className="h-12 text-base md:text-base bg-foreground/5 dark:bg-foreground/5"
                        {...register("email")}
                    />
                    <FieldError errors={[errors.email]} />
                </Field>
                <Field data-invalid={!!errors.message}>
                    <FieldLabel
                        htmlFor="message"
                        className="text-base text-foreground"
                    >
                        Message
                    </FieldLabel>
                    <Textarea
                        id="message"
                        rows={8}
                        maxLength={contactLimits.message}
                        aria-invalid={!!errors.message}
                        className="min-h-48 resize-y text-base md:text-base bg-foreground/5 dark:bg-foreground/5"
                        {...register("message")}
                    />
                    <FieldError errors={[errors.message]} />
                </Field>
                <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-fit sm:self-end text-lg rounded-full"
                >
                    {isSubmitting ? "Sending..." : "Send message"}
                </Button>
            </FieldGroup>
        </form>
    );
};

export default ContactForm;
