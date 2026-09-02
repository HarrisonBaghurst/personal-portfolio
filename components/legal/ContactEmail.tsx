const ContactEmail = () => {
    const email = process.env.CONTACT_EMAIL;

    if (!email) {
        return <>my email address</>;
    }

    return (
        <a href={`mailto:${email}`} className="text-link">
            {email}
        </a>
    );
};

export default ContactEmail;
