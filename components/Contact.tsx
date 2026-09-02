import ContactForm from "@/components/ContactForm";

const Contact = () => {
    return (
        <section
            id="contact"
            className="mt-32 sm:mt-48 lg:mt-64 scroll-mt-24 sm:scroll-mt-32 flex flex-col gap-8 text-body"
        >
            <h2 className="text-title">Get in touch</h2>
            <p className="text-flow">
                Feel free to contact me with any questions or enquiries you
                might have. I'll reply to your message via email as soon as
                possible.
            </p>
            <ContactForm />
        </section>
    );
};

export default Contact;
