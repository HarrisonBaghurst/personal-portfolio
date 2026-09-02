import type { Metadata } from "next";
import Link from "next/link";

import ContactEmail from "@/components/legal/ContactEmail";
import Section from "@/components/legal/Section";
import Subheading from "@/components/legal/Subheading";

export const metadata: Metadata = {
    title: "Privacy policy | Harrison Baghurst",
    description:
        "What personal data this website collects, why, how long it is kept, and your rights under UK GDPR.",
};

const page = () => {
    return (
        <div className="flex flex-col gap-8 text-body">
            <div className="flex flex-col gap-4">
                <h2 className="text-title">Privacy policy</h2>
                <p className="text-foreground/50">
                    Last updated 2 September 2026
                </p>
            </div>

            <div className="flex flex-col gap-4 text-justify">
                <p>
                    This policy explains what personal data I collect through
                    this website, why I collect it, who it is shared with, how
                    long I keep it, and the rights you have over it. It is
                    written to comply with the UK General Data Protection
                    Regulation and the Data Protection Act 2018.
                </p>
                <p>
                    In short: this site sets no cookies and runs no analytics or
                    tracking of any kind. The only personal data I collect is
                    what you choose to send me through the contact form, plus
                    the technical information needed to stop that form being
                    abused.
                </p>
            </div>

            <Section title="1. Who I am and how to contact me">
                <div className="flex flex-col gap-4 text-justify">
                    <p>
                        This website is operated by Harrison Baghurst, trading
                        as Harrison Baghurst Digital, based in Durham, England.
                        I am the data controller for the personal data described
                        in this policy, which means I decide how and why it is
                        used.
                    </p>
                    <p>
                        For anything relating to this policy, including any
                        request to exercise your rights, email me at{" "}
                        <ContactEmail />. My full postal address is available on
                        request by email.
                    </p>
                </div>
            </Section>

            <Section title="2. What this policy covers">
                <div className="flex flex-col gap-4 text-justify">
                    <p>
                        This policy covers personal data collected through this
                        website. If you go on to book maths tuition or freelance
                        web development work, additional information is handled
                        as part of that arrangement, which is explained in
                        section 8.
                    </p>
                </div>
            </Section>

            <Section title="3. What I collect">
                <Subheading>Information you send me</Subheading>
                <div className="flex flex-col gap-4 text-justify">
                    <p>
                        When you use the contact form, I collect your first
                        name, last name, email address and the content of your
                        message. These are the only fields on the form, and it
                        is entirely your choice what you put in the message.
                    </p>
                    <p>
                        Once your message has been sent, it arrives in my email
                        inbox and is stored there in the same way as any other
                        email I receive.
                    </p>
                </div>

                <Subheading>Anti-spam checks</Subheading>
                <div className="flex flex-col gap-4 text-justify">
                    <p>
                        The form includes a hidden field that people cannot see
                        but automated bots tend to fill in, and it measures how
                        long the form took you to complete. Both are used only
                        to decide whether a submission is automated. Neither is
                        stored after the submission has been dealt with.
                    </p>
                </div>

                <Subheading>Your IP address</Subheading>
                <div className="flex flex-col gap-4 text-justify">
                    <p>
                        When you submit the form, your IP address is used to
                        apply a rate limit, currently 3 submissions per hour per
                        visitor, alongside a site-wide limit. This stops the
                        form being used to send bulk spam.
                    </p>
                    <p>
                        Your IP address is held only as a short-lived counter in
                        a rate-limiting database. It is not stored alongside
                        your message, is not used to identify or profile you,
                        and is deleted automatically when the relevant time
                        window expires.
                    </p>
                </div>

                <Subheading>Server logs</Subheading>
                <div className="flex flex-col gap-4 text-justify">
                    <p>
                        Like any website, this site is served by a hosting
                        provider that keeps standard technical logs of requests.
                        These can include your IP address, browser and device
                        type, the page requested, the time of the request and
                        the response. These logs are used for security and
                        troubleshooting.
                    </p>
                </div>

                <Subheading>What I do not collect</Subheading>
                <div className="flex flex-col gap-4 text-justify">
                    <p>
                        There are no user accounts on this site. I do not
                        collect payment or card details through it, I do not
                        build profiles of visitors, and I do not deliberately
                        collect any special category data such as information
                        about health, ethnicity or beliefs. Please do not send
                        information of that kind through the contact form.
                    </p>
                </div>
            </Section>

            <Section title="4. Cookies and tracking">
                <div className="flex flex-col gap-4 text-justify">
                    <p>
                        This website sets no cookies of its own. It uses no
                        analytics, no tracking pixels, no advertising, and no
                        third-party embeds that profile you. Fonts are served
                        from this site rather than from a third party. There is
                        nothing here for you to consent to or opt out of.
                    </p>
                    <p>
                        If this ever changes, I will update this policy and put
                        an appropriate consent mechanism in place before the
                        change goes live.
                    </p>
                </div>
            </Section>

            <Section title="5. Why I use your data, and my lawful basis">
                <div className="flex flex-col gap-4 text-justify">
                    <p>
                        Data protection law requires me to have a lawful basis
                        for using your personal data. My bases are:
                    </p>
                    <ul className="flex flex-col gap-2 list-disc pl-6">
                        <li>
                            <span className="text-foreground">
                                Replying to your enquiry.
                            </span>{" "}
                            Legitimate interests, namely responding to someone
                            who has deliberately contacted me. Where your
                            enquiry is about booking a service, this is also
                            taking steps at your request before entering into a
                            contract.
                        </li>
                        <li>
                            <span className="text-foreground">
                                Preventing spam and abuse, and keeping the site
                                secure.
                            </span>{" "}
                            Legitimate interests, namely protecting the site and
                            my inbox from misuse. I have considered your
                            interests here, and use the minimum data needed for
                            the shortest time that works.
                        </li>
                        <li>
                            <span className="text-foreground">
                                Keeping records where an enquiry leads to paid
                                work.
                            </span>{" "}
                            Legal obligation, namely my tax and accounting
                            record-keeping duties.
                        </li>
                    </ul>
                    <p>
                        I do not use your data for marketing, and I will not add
                        you to a mailing list.
                    </p>
                </div>
            </Section>

            <Section title="6. Who your data is shared with">
                <div className="flex flex-col gap-4 text-justify">
                    <p>
                        I use a small number of service providers to run this
                        site. They process data on my instructions and are not
                        permitted to use it for their own purposes:
                    </p>
                    <ul className="flex flex-col gap-2 list-disc pl-6">
                        <li>
                            <span className="text-foreground">Vercel</span> —
                            hosts this website, serves it to your browser, and
                            keeps the server logs described above.
                        </li>
                        <li>
                            <span className="text-foreground">Resend</span> —
                            delivers your contact form message to me by email.
                        </li>
                        <li>
                            <span className="text-foreground">Upstash</span> —
                            stores the short-lived rate-limiting counters keyed
                            to your IP address.
                        </li>
                        <li>
                            <span className="text-foreground">
                                My email provider
                            </span>{" "}
                            — stores your message once it has been delivered to
                            my inbox.
                        </li>
                    </ul>
                    <p>
                        I do not sell your personal data, and I do not share it
                        with anyone for their own marketing. I may disclose it
                        where I am legally required to, for example in response
                        to a valid legal request.
                    </p>
                </div>
            </Section>

            <Section title="7. Transfers outside the UK">
                <div className="flex flex-col gap-4 text-justify">
                    <p>
                        Some of the providers listed above are based in, or
                        store data in, the United States or other countries
                        outside the UK. Where personal data is transferred
                        outside the UK, I rely on the safeguards each provider
                        has put in place, which are generally the International
                        Data Transfer Addendum to the EU standard contractual
                        clauses, or an adequacy decision covering the country
                        concerned. The details are set out in each
                        provider&apos;s data processing terms, and I can point
                        you to them on request.
                    </p>
                </div>
            </Section>

            <Section title="8. Tuition, students and under-18s">
                <div className="flex flex-col gap-4 text-justify">
                    <p>
                        This website is intended for adults. I do not knowingly
                        collect personal data from anyone under 18 through it,
                        and tuition enquiries should be made by a parent or
                        guardian. If you believe a child has submitted
                        information through the contact form, contact me and I
                        will delete it.
                    </p>
                    <p>
                        Tuition itself is delivered using WhatsApp for video
                        calls and messaging, and ChalkieChalkie.com for
                        scheduling, the collaborative workspace and lesson
                        feedback. Those services handle data under their own
                        privacy policies, and this policy does not cover them.
                    </p>
                    <p>
                        If you go on to book tuition, I will agree with you, as
                        the parent or guardian, what information I hold about
                        the student and how it is used, before lessons begin.
                        That includes whether I have direct contact with the
                        student, which is always your choice. The relevant
                        tuition terms are in section 6 of my{" "}
                        <Link
                            href="/legal/terms-of-service"
                            className="text-link"
                        >
                            terms of service
                        </Link>
                        .
                    </p>
                </div>
            </Section>

            <Section title="9. How long I keep your data">
                <div className="flex flex-col gap-4 text-justify">
                    <ul className="flex flex-col gap-2 list-disc pl-6">
                        <li>
                            <span className="text-foreground">
                                Contact form enquiries
                            </span>{" "}
                            are kept for 12 months from our last correspondence,
                            then deleted.
                        </li>
                        <li>
                            <span className="text-foreground">
                                Records relating to paid work
                            </span>{" "}
                            are kept for as long as I need them for tax and
                            accounting purposes, which is normally 6 years from
                            the end of the tax year they relate to.
                        </li>
                        <li>
                            <span className="text-foreground">
                                Rate-limiting records
                            </span>{" "}
                            expire automatically, after one hour for per-visitor
                            counters and 24 hours for the site-wide counter. No
                            action is needed to remove them.
                        </li>
                        <li>
                            <span className="text-foreground">Server logs</span>{" "}
                            are kept by the hosting provider under their own
                            retention periods, which are short.
                        </li>
                    </ul>
                </div>
            </Section>

            <Section title="10. Your rights">
                <div className="flex flex-col gap-4 text-justify">
                    <p>Under UK data protection law you have the right to:</p>
                    <ul className="flex flex-col gap-2 list-disc pl-6">
                        <li>
                            be told how your data is used, as in this policy
                        </li>
                        <li>
                            ask for a copy of the personal data I hold about you
                        </li>
                        <li>have inaccurate data corrected</li>
                        <li>ask me to delete your data</li>
                        <li>ask me to restrict how I use it</li>
                        <li>
                            object to my using it, including where I rely on
                            legitimate interests
                        </li>
                        <li>
                            ask me to transfer it to you or another provider in
                            a portable format
                        </li>
                    </ul>
                    <p>
                        To exercise any of these, email me at <ContactEmail />.
                        I will respond within one month, and there is normally
                        no charge. I may need to confirm your identity first, so
                        that I do not disclose your data to someone else.
                    </p>
                </div>
            </Section>

            <Section title="11. Complaints">
                <div className="flex flex-col gap-4 text-justify">
                    <p>
                        If you are unhappy with how I have handled your personal
                        data, please tell me first so that I have the chance to
                        put it right.
                    </p>
                    <p>
                        You also have the right to complain to the Information
                        Commissioner&apos;s Office, the UK regulator for data
                        protection. You can reach them at{" "}
                        <a
                            href="https://ico.org.uk"
                            className="text-link"
                            target="_blank"
                            rel="noreferrer"
                        >
                            ico.org.uk
                        </a>
                        , by telephone on 0303 123 1113, or by post at Wycliffe
                        House, Water Lane, Wilmslow, Cheshire, SK9 5AF.
                    </p>
                </div>
            </Section>

            <Section title="12. How your data is kept secure">
                <div className="flex flex-col gap-4 text-justify">
                    <p>
                        This site is served over an encrypted HTTPS connection.
                        Contact form submissions are validated and
                        length-limited, rate limited per visitor and site-wide,
                        checked for automated submission, and accepted only from
                        this site&apos;s own pages. No payment details are ever
                        collected through this website.
                    </p>
                    <p>
                        No system can be completely secure. Please do not send
                        confidential or sensitive personal information through
                        the contact form.
                    </p>
                </div>
            </Section>

            <Section title="13. Links to other websites">
                <div className="flex flex-col gap-4 text-justify">
                    <p>
                        This site links to other websites. This policy applies
                        only to this site, and I am not responsible for the
                        privacy practices of any site you reach by following a
                        link. Please read their own policies.
                    </p>
                </div>
            </Section>

            <Section title="14. Changes to this policy">
                <div className="flex flex-col gap-4 text-justify">
                    <p>
                        I may update this policy from time to time. The date at
                        the top of this page shows when it was last revised. If
                        I make a material change to how your data is used, I
                        will make that clear here.
                    </p>
                </div>
            </Section>
        </div>
    );
};

export default page;
