const page = () => {
    return (
        <div className="flex flex-col gap-16 text-lg text-foreground/75">
            <div className="flex flex-col gap-8">
                <h2 className="text-6xl font-poppins-bold text-foreground">
                    Maths tuition
                </h2>
                <div className="flex flex-col gap-4">
                    <p>
                        I tutor both GCSE and A-Level maths. I have worked with
                        a wide range of students, some of which with learning
                        difficulties and others trying to push forward relative
                        to their class. I guided students to outcomes such as
                        improving confidence in their maths abilities and others
                        to higher grades in their GCSE and A-Level results.
                    </p>
                </div>
                <h3 className="text-3xl font-poppins-bold text-foreground pt-8">
                    Lesson structure
                </h3>
                <div className="flex flex-col gap-4">
                    <p>
                        Typically, lessons last one hour. Lessons are conducted
                        online, using Whatsapp for video calls and
                        ChalkieChalkie.com for an online collaborative workspace
                        and lesson scheduling. Before the lesson begins, we
                        discuss your desired outcome, whether that be revision
                        or teaching a new topic. After the lesson, I leave
                        feedback on ChalkieChalkie.com for you to view if you
                        wish.
                    </p>
                </div>
                <h3 className="text-3xl font-poppins-bold text-foreground pt-8">
                    Pricing & payment
                </h3>
                <div className="flex flex-col gap-4">
                    <p>
                        I conduct our first lesson prior to any payment being
                        made, you only pay for this lesson if you decide to
                        continue with tuition past this point. This gives you
                        the ability to get a feel for my tutoring style before
                        making a commitment.
                    </p>
                    <p>
                        With the exception of the first lesson, payment for each
                        must be made prior to commencement.
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="border-2 border-foreground/30 p-4 rounded-sm flex flex-col gap-4 bg-foreground/5">
                        <p className="">Pay as you go</p>
                        <div className="flex items-baseline gap-2">
                            <p className="text-5xl font-poppins-bold text-foreground">
                                £30
                            </p>
                            <p className="-translate-y-0.5">per hour</p>
                        </div>
                    </div>
                    <div className="border-2 border-foreground/30 p-4 rounded-sm flex flex-col gap-4 bg-foreground/5 relative">
                        <p className="">Block purchase</p>
                        <div className="flex items-baseline gap-2">
                            <p className="text-5xl font-poppins-bold text-foreground">
                                £270
                            </p>
                            <p className="-translate-y-0.5">for 10 hours</p>
                        </div>
                        <div className="absolute -top-4 right-2 border py-1 px-3 text-foreground rounded-full bg-[#9bbbdc]">
                            Most popular
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <p>
                        Both payment packages get the same effort and quality of
                        tutoring, no preferential treatment is made between
                        payment options.
                    </p>
                    <p>
                        Lessons cancelled with less than 2 days notice will be
                        charged in full. This policy is applied at my
                        discretion.
                    </p>
                </div>
                <h3 className="text-3xl font-poppins-bold text-foreground pt-8">
                    Additonal information
                </h3>
                <div className="flex flex-col gap-4">
                    <p>
                        Through my experience I find that having direct contact
                        with the student, through Whatsapp is the most
                        efficient. I don't contact the student outside of
                        lessons unless previously arranged, however I am happy
                        to answer a student's work-related questions outside of
                        tutoring hours. This removes the need for parents to act
                        as a messenger. Your child's safety is of the utmost
                        importance, for this reason, I don't require direct
                        contact if you don't feel comfortable with this
                        arrangement. I also have an up to date DBS check, which
                        can be requested by you at any point.
                    </p>
                </div>
                <h3 className="text-3xl font-poppins-bold text-foreground pt-8">
                    Testimonials
                </h3>
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-2">
                        <p className="font-poppins-bold text-foreground">
                            Simon, GCSE Maths
                        </p>
                        <p>
                            We started the maths tutoring lessons with Harry in
                            the Summer term earlier this year for our son who is
                            in Year 8. Harry has been great with our son. He
                            explains everything clearly for him and is very
                            approachable too. Our son's confidence with maths
                            has certainly increased and we very much hope this
                            will continue in the forthcoming lessons heading
                            into this new academic year. Thanks Harry!
                        </p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="font-poppins-bold text-foreground">
                            Heather, A-Level Maths
                        </p>

                        <p>
                            My son was struggling after receiving poor mock
                            results so we contacted Harry and asked for his
                            help. He worked with my son for 20 lessons and we
                            were so delighted with the result as he was able to
                            bump up his grades 2 places! Harry is very patient,
                            able to put his students at ease, provides clear
                            explanations and is able to relate and communicate
                            both with my son and ourselves at a very high level.
                            He is always prompt with timings and willing to go
                            the extra mile with his students. He was contactable
                            outside of lesson times to speak with my son and
                            help with his questions. He also provided clear and
                            precise feedback to us so we were always kept in the
                            loop with his progress. I'd absolutely recommend
                            Harry as we were very happy with the service he
                            provided.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
