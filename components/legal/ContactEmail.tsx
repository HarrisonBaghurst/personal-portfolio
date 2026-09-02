const ContactEmail = () => {
    const email = process.env.CONTACT_EMAIL;

    if (!email) {
        return <>my email address</>;
    }

    return (
        <a href={`mailto:${email}`} className="underline text-[#4285F4]">
            {email}
        </a>
    );
};

export default ContactEmail;
