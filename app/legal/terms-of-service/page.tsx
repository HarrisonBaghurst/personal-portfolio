import type { Metadata } from "next";
import Link from "next/link";

import ContactEmail from "@/components/legal/ContactEmail";
import Section from "@/components/legal/Section";
import Subheading from "@/components/legal/Subheading";

export const metadata: Metadata = {
    title: "Terms of service | Harrison Baghurst",
    description:
        "The terms governing use of this website, maths tuition, freelance web development and photography licensing.",
};

const page = () => {
    return (
        <div className="flex flex-col gap-8 text-body">
            <div className="flex flex-col gap-4">
                <h2 className="text-title">Terms of service</h2>
                <p className="text-foreground/50">
                    Last updated 2 September 2026
                </p>
            </div>

            <div className="flex flex-col gap-4 text-justify">
                <p>
                    These terms explain the basis on which you may use this
                    website, and the terms on which I provide maths tuition,
                    freelance web development and photography. Please read them
                    before using the site or booking any service. If there is
                    anything here you do not understand or would like changed,
                    contact me at <ContactEmail /> before we agree anything.
                </p>
            </div>

            <Section title="1. Who I am">
                <div className="flex flex-col gap-4 text-justify">
                    <p>
                        This website is operated by Harrison Baghurst, trading
                        as Harrison Baghurst Digital, based in Durham, England.
                        Throughout these terms, &quot;I&quot;, &quot;me&quot;
                        and &quot;my&quot; refer to Harrison Baghurst, and
                        &quot;you&quot; and &quot;your&quot; refer to the person
                        using this site or booking a service.
                    </p>
                    <p>
                        You can reach me by email at <ContactEmail />. My full
                        postal address is available on request by email, and I
                        will provide it before we enter into any contract.
                    </p>
                </div>
            </Section>

            <Section title="2. Accepting these terms">
                <div className="flex flex-col gap-4 text-justify">
                    <p>
                        By using this website you accept these terms. If you do
                        not accept them, please do not use the site.
                    </p>
                    <p>
                        This site is intended for people aged 18 or over. If you
                        are under 18, please ask a parent or guardian to contact
                        me on your behalf.
                    </p>
                </div>
            </Section>

            <Section title="3. Using this website">
                <div className="flex flex-col gap-4 text-justify">
                    <p>
                        You may use this site for your own personal,
                        non-commercial purposes. You must not:
                    </p>
                    <ul className="flex flex-col gap-2 list-disc pl-6">
                        <li>
                            use automated systems to scrape, harvest or
                            systematically copy content from the site
                        </li>
                        <li>
                            attempt to circumvent the rate limiting, spam
                            protection or any other security measure on the site
                        </li>
                        <li>
                            attempt to gain unauthorised access to the site, its
                            server or any connected system
                        </li>
                        <li>
                            introduce viruses, malicious code or anything else
                            designed to harm the site or its users
                        </li>
                        <li>
                            use the site unlawfully, fraudulently, or in a way
                            that interferes with anyone else&apos;s use of it
                        </li>
                    </ul>
                    <p>
                        If you breach these terms, I may withdraw your right to
                        use the site.
                    </p>
                </div>
            </Section>

            <Section title="4. Intellectual property">
                <div className="flex flex-col gap-4 text-justify">
                    <p>
                        All content on this site, including the text,
                        photographs, design, layout and underlying code, is
                        owned by me or licensed to me, and is protected by
                        copyright and other intellectual property rights.
                    </p>
                    <p>
                        You may view pages and print or download extracts for
                        your own personal reference. You may not otherwise copy,
                        reproduce, republish, distribute or exploit any part of
                        this site without my written permission. Specific terms
                        for the photographs are set out in section 8.
                    </p>
                    <p>
                        Third-party names, logos, screenshots and trade marks
                        appearing on this site belong to their respective
                        owners, and are shown for identification and
                        illustration only.
                    </p>
                </div>
            </Section>

            <Section title="5. Contacting me">
                <div className="flex flex-col gap-4 text-justify">
                    <p>
                        The contact form on this site is provided for genuine
                        enquiries. You must not use it to send unlawful,
                        abusive, misleading or deliberately misleading content,
                        or to send spam or unsolicited marketing.
                    </p>
                    <p>
                        The form is rate limited to protect it from misuse, so
                        it may be temporarily unavailable if those limits are
                        reached. I aim to reply promptly, but I do not guarantee
                        a reply or any particular response time, and you should
                        not rely on the form for anything urgent.
                    </p>
                    <p>
                        Please do not send confidential or sensitive personal
                        information through the form. Messages are delivered to
                        me by email across the internet. How I handle what you
                        send is set out in my{" "}
                        <Link
                            href="/legal/privacy-policy"
                            className="text-link"
                        >
                            privacy policy
                        </Link>
                        .
                    </p>
                </div>
            </Section>

            <Section title="6. Maths tuition">
                <div className="flex flex-col gap-4 text-justify">
                    <p>
                        This section sets out the full terms on which I provide
                        maths tuition. It applies alongside the rest of these
                        terms.
                    </p>
                </div>

                <Subheading>6.1 Who the contract is with</Subheading>
                <div className="flex flex-col gap-4 text-justify">
                    <p>
                        The tuition contract is between me and the person who
                        books and pays for the lessons. Where the student is
                        under 18, that person must be a parent or legal
                        guardian, who is responsible for agreeing these terms
                        and for payment. A student under 18 cannot enter into
                        this contract themselves.
                    </p>
                    <p>
                        Where the student is 18 or over, they may book and pay
                        for lessons directly.
                    </p>
                </div>

                <Subheading>6.2 Booking and forming a contract</Subheading>
                <div className="flex flex-col gap-4 text-justify">
                    <p>
                        Nothing on this website is an offer to provide tuition.
                        The descriptions, pricing and other information on the
                        maths tuition page are provided for general information
                        only. Making an enquiry does not create a contract.
                    </p>
                    <p>
                        A contract is formed only when I confirm to you in
                        writing, by email or by message, that I have accepted
                        your booking and agreed a lesson time with you. Lessons
                        are scheduled through ChalkieChalkie.com.
                    </p>
                </div>

                <Subheading>6.3 The first lesson</Subheading>
                <div className="flex flex-col gap-4 text-justify">
                    <p>
                        I deliver the first lesson before any payment is made,
                        so that you can get a feel for my tutoring before
                        committing to anything. You only pay for the first
                        lesson if you decide to continue with tuition after it.
                    </p>
                    <p>
                        If you decide not to continue, the first lesson is free
                        and nothing is owed.
                    </p>
                    <p>
                        If you continue on a pay as you go basis, the first
                        lesson becomes chargeable at £30 and is payable
                        alongside your next booking. If you continue by taking a
                        block purchase instead, the first lesson is absorbed
                        into that block and counts as the first of its ten
                        hours, so there is no separate charge for it. Taking a
                        block after the first lesson therefore costs £270 for
                        ten hours in total, rather than the £300 those same ten
                        hours would come to at the pay as you go rate.
                    </p>
                </div>

                <Subheading>6.4 How lessons are delivered</Subheading>
                <div className="flex flex-col gap-4 text-justify">
                    <p>
                        Lessons last one hour unless we agree otherwise, and are
                        delivered online. Video calls take place over WhatsApp,
                        and ChalkieChalkie.com is used as a collaborative
                        workspace and for scheduling. Before each lesson we
                        discuss the outcome you are looking for, whether that is
                        revision or teaching a new topic. After each lesson I
                        leave written feedback on ChalkieChalkie.com.
                    </p>
                    <p>
                        You will need a reliable internet connection, a device
                        with a working camera and microphone, and access to
                        WhatsApp and ChalkieChalkie.com. If a lesson is
                        significantly disrupted by a technical problem on my
                        side, I will reschedule it or credit the time at no
                        charge. If the disruption is on your side, I will do
                        what I reasonably can within the booked time, but the
                        lesson remains chargeable.
                    </p>
                </div>

                <Subheading>6.5 Pricing</Subheading>
                <div className="flex flex-col gap-4 text-justify">
                    <p>
                        Tuition is offered on a pay as you go basis at £30 per
                        hour, or as a block purchase of 10 hours for £270, which
                        works out at £27 per hour. Both options receive the same
                        effort and quality of tutoring, and no preferential
                        treatment is given between them.
                    </p>
                    <p>
                        Prices shown on this website may change. The price that
                        applies to you is the one in force at the time I confirm
                        your booking. A price change never affects hours you
                        have already purchased.
                    </p>
                </div>

                <Subheading>6.6 Payment</Subheading>
                <div className="flex flex-col gap-4 text-justify">
                    <p>
                        Payment is made by bank transfer. I will provide my bank
                        details when payment is due. No payment details are ever
                        collected through this website.
                    </p>
                    <p>
                        With the exception of the first lesson, payment must be
                        received before a lesson begins. Block purchases are
                        paid in full in advance. If payment has not been
                        received by the time a lesson is due to start, I may
                        decline to deliver it, and the cancellation terms in
                        section 6.8 may apply.
                    </p>
                </div>

                <Subheading>6.7 Block purchases: expiry and refunds</Subheading>
                <div className="flex flex-col gap-4 text-justify">
                    <p>
                        Block purchase hours do not expire. There is no deadline
                        by which you must use them.
                    </p>
                    <p>
                        You may ask me to refund your unused hours at any time.
                        Because the £27 hourly rate is a discount for buying ten
                        hours together, that discount does not survive a refund:
                        refunds are calculated at the pay as you go rate of £30
                        for the lessons you have already had. In other words,
                        your refund is £270 less £30 for each lesson delivered,
                        and is never less than zero. Where your first lesson was
                        absorbed into the block under section 6.3, it counts as
                        one of the lessons delivered for this purpose.
                    </p>
                    <p>
                        By way of example, if you have had 4 lessons, your
                        refund is £270 less £120, which is £150. If you have had
                        9 lessons, your refund is £270 less £270, which is nil.
                        This means that in practice the tenth lesson carries no
                        refund value, because it represents the benefit of the
                        discount itself.
                    </p>
                    <p>
                        Refunds are paid by bank transfer within 14 days of us
                        agreeing the amount.
                    </p>
                </div>

                <Subheading>6.8 Cancelling and rescheduling lessons</Subheading>
                <div className="flex flex-col gap-4 text-justify">
                    <p>
                        If you need to cancel or move a lesson, please give me
                        at least 2 clear days&apos; notice. Lessons cancelled
                        with at least that much notice are rescheduled or
                        credited at no charge. Lessons cancelled with less than
                        2 days&apos; notice are charged in full. This policy is
                        applied at my discretion, and I will normally be
                        flexible in cases of illness or emergency.
                    </p>
                    <p>
                        If I need to cancel a lesson, I will give you as much
                        notice as I reasonably can, and will either reschedule
                        it at no charge or credit or refund the lesson,
                        whichever you prefer.
                    </p>
                </div>

                <Subheading>
                    6.9 Your legal right to cancel within 14 days
                </Subheading>
                <div className="flex flex-col gap-4 text-justify">
                    <p>
                        Because we agree tuition at a distance rather than face
                        to face, you have a legal right under the Consumer
                        Contracts (Information, Cancellation and Additional
                        Charges) Regulations 2013 to cancel the contract within
                        14 days of it being formed, without giving any reason.
                        This is separate from, and in addition to, the
                        arrangements in sections 6.7 and 6.8.
                    </p>
                    <p>
                        To cancel, simply tell me in writing, by email at{" "}
                        <ContactEmail /> or by message, before the 14 days are
                        up. A clear statement that you are cancelling is enough;
                        you do not have to use any particular form of words.
                    </p>
                    <p>
                        If you ask me to begin lessons within that 14 day
                        period, you are expressly requesting that the service
                        starts before the cancellation period ends. You keep
                        your right to cancel, but you must pay for the lessons
                        already delivered, charged at the pay as you go rate of
                        £30 per hour in proportion to what has been supplied.
                    </p>
                    <p>
                        I will refund any balance due to you within 14 days of
                        being told that you are cancelling, using the same
                        payment method you used, unless we agree otherwise.
                        Nothing in these terms removes your statutory rights.
                    </p>
                </div>

                <Subheading>6.10 Ending tuition</Subheading>
                <div className="flex flex-col gap-4 text-justify">
                    <p>
                        Either of us may stop tuition at any time by telling the
                        other. There is no notice period and no cancellation
                        fee. Any unused block purchase hours are refunded on the
                        basis set out in section 6.7.
                    </p>
                </div>

                <Subheading>
                    6.11 Safeguarding and contact with students
                </Subheading>
                <div className="flex flex-col gap-4 text-justify">
                    <p>
                        Your child&apos;s safety is of the utmost importance to
                        me. I hold a current DBS check, which you may request to
                        see at any point.
                    </p>
                    <p>
                        In my experience, having direct contact with the student
                        through WhatsApp is the most efficient arrangement, as
                        it removes the need for a parent to act as a messenger.
                        I do not contact the student outside of lessons unless
                        this has been arranged in advance, though I am happy to
                        answer a student&apos;s work-related questions between
                        lessons.
                    </p>
                    <p>
                        If you would prefer that I did not have direct contact
                        with your child, tell me and all communication will go
                        through you instead. This will not affect the tuition in
                        any way. As a parent or guardian you may ask to see
                        lesson feedback at any time; it is posted on
                        ChalkieChalkie.com after each lesson.
                    </p>
                </div>

                <Subheading>6.12 What I do and do not promise</Subheading>
                <div className="flex flex-col gap-4 text-justify">
                    <p>
                        I will provide tuition with reasonable care and skill,
                        as required by the Consumer Rights Act 2015.
                    </p>
                    <p>
                        I cannot guarantee any particular grade, mark or exam
                        outcome. Results depend on many things outside my
                        control, not least the student&apos;s own work between
                        lessons. Any testimonials shown on this site describe
                        the experience of individual students and are not a
                        promise that you will achieve a similar result.
                    </p>
                </div>
            </Section>

            <Section title="7. Web development services">
                <div className="flex flex-col gap-4 text-justify">
                    <p>
                        The web development page on this site describes my
                        experience and previous work. It is background
                        information, not an offer of services, and no contract
                        arises from it.
                    </p>
                    <p>
                        Freelance work is agreed individually. Each engagement
                        is covered by its own written agreement setting out the
                        scope of work, timescales, fees, payment schedule, and
                        ownership of the intellectual property in what is
                        produced. Ownership of that intellectual property is
                        agreed on a project by project basis in that agreement,
                        so there is no default position stated here. Please make
                        sure you are satisfied with those terms before work
                        begins.
                    </p>
                    <p>
                        The projects shown in my portfolio are illustrative.
                        Some were built for clients and remain their property;
                        others are personal projects. Where work was done for a
                        client, it is shown with their agreement.
                    </p>
                </div>
            </Section>

            <Section title="8. Photography and image licensing">
                <div className="flex flex-col gap-4 text-justify">
                    <p>
                        All photographs on this site are my own work and I own
                        the copyright in them. You may not copy, download,
                        reproduce, redistribute, modify or use them for any
                        purpose without my permission. Saving an image from the
                        gallery does not give you a licence to use it.
                    </p>
                    <p>
                        Full quality copies of gallery photographs are available
                        on request. Pricing is quoted per request, as it depends
                        on the image and on what you intend to use it for.
                    </p>
                    <p>
                        Unless we agree otherwise in writing, buying a copy
                        gives you a personal, non-exclusive, non-transferable
                        licence to keep, display and print that image for your
                        own private use. It does not transfer copyright, which
                        remains with me. Under a personal licence you may not
                        resell or sub-license the image, use it commercially or
                        in advertising, use it on an account or channel that
                        promotes a business, or make it available for others to
                        download.
                    </p>
                    <p>
                        Commercial licences are available by separate agreement
                        and are priced case by case. If you would like to use a
                        photograph commercially, contact me at <ContactEmail />{" "}
                        and we can discuss it.
                    </p>
                </div>
            </Section>

            <Section title="9. Links to other websites">
                <div className="flex flex-col gap-4 text-justify">
                    <p>
                        This site links to other websites, including
                        ChalkieChalkie.com and pages relating to my projects.
                        Those links are provided for convenience and
                        information. I have no control over the content of those
                        sites and accept no responsibility for them or for any
                        loss arising from your use of them.
                    </p>
                </div>
            </Section>

            <Section title="10. Availability of this website">
                <div className="flex flex-col gap-4 text-justify">
                    <p>
                        This website is made available free of charge and on an
                        &quot;as is&quot; basis. I do not guarantee that it will
                        always be available, uninterrupted or free from errors,
                        and I may change, suspend or withdraw all or any part of
                        it without notice.
                    </p>
                    <p>
                        The content is provided for general information only.
                        While I take reasonable care to keep it accurate and up
                        to date, I make no warranty that it is complete,
                        accurate or current, and it is not advice on which you
                        should rely.
                    </p>
                </div>
            </Section>

            <Section title="11. My liability to you">
                <div className="flex flex-col gap-4 text-justify">
                    <p>
                        Nothing in these terms limits or excludes my liability
                        for:
                    </p>
                    <ul className="flex flex-col gap-2 list-disc pl-6">
                        <li>
                            death or personal injury caused by my negligence
                        </li>
                        <li>fraud or fraudulent misrepresentation</li>
                        <li>
                            any other matter for which it would be unlawful to
                            limit or exclude liability
                        </li>
                    </ul>
                    <p>
                        If you are a consumer, I am responsible for loss or
                        damage you suffer that is a foreseeable result of my
                        breaking these terms or failing to use reasonable care
                        and skill, but I am not responsible for loss or damage
                        that is not foreseeable. I do not in any way exclude or
                        limit your statutory rights, including your rights under
                        the Consumer Rights Act 2015.
                    </p>
                    <p>
                        This website is supplied for domestic and private use.
                        If you use it for any commercial or business purpose, I
                        have no liability to you for loss of profit, loss of
                        business, business interruption or loss of business
                        opportunity.
                    </p>
                    <p>
                        Subject to the paragraphs above, my total liability in
                        connection with a tuition contract is limited to the
                        amount you have paid me under that contract. For
                        freelance web development work, liability is set out in
                        the individual written agreement for that engagement.
                    </p>
                </div>
            </Section>

            <Section title="12. Your privacy">
                <div className="flex flex-col gap-4 text-justify">
                    <p>
                        How I collect and use personal data through this site is
                        set out in my{" "}
                        <Link
                            href="/legal/privacy-policy"
                            className="text-link"
                        >
                            privacy policy
                        </Link>
                        , which forms part of these terms.
                    </p>
                </div>
            </Section>

            <Section title="13. Changes to these terms">
                <div className="flex flex-col gap-4 text-justify">
                    <p>
                        I may update these terms from time to time. The version
                        that applies to your use of the site is the one
                        published at the time you use it, and the version that
                        applies to a service is the one in force when your
                        contract was formed. Changes do not apply
                        retrospectively to an existing tuition contract unless
                        we both agree. The date at the top of this page shows
                        when it was last revised.
                    </p>
                </div>
            </Section>

            <Section title="14. Governing law">
                <div className="flex flex-col gap-4 text-justify">
                    <p>
                        These terms are governed by the law of England and
                        Wales, and the courts of England and Wales have
                        jurisdiction over any dispute arising from them. If you
                        are a consumer living in Scotland or Northern Ireland,
                        you may also bring proceedings in the courts of the
                        country you live in.
                    </p>
                </div>
            </Section>

            <Section title="15. How to contact me">
                <div className="flex flex-col gap-4 text-justify">
                    <p>
                        If you have any questions about these terms, email me at{" "}
                        <ContactEmail />. I am based in Durham, England, and my
                        full postal address is available on request.
                    </p>
                </div>
            </Section>
        </div>
    );
};

export default page;
