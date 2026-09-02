const page = () => {
    return (
        <div className="flex flex-col gap-16 text-body">
            <div className="flex flex-col gap-8">
                <h2 className="text-title">About me</h2>
                <div className="flex flex-col gap-4 text-justify">
                    <p>
                        I'm a final year student studying Computer Science at
                        Durham university. I am pursuing a career in software
                        engineering once I have completed my bachelor's degree.
                        Alongside university, I work part-time, build personal
                        web-development projects, take on freelance software
                        engineering work and tutor GCSE & A-Level maths.
                    </p>
                    <p>
                        I have recently completed a summer internship at
                        BlackRock in London, joining the Aladdin wealth tech
                        team. I spent my time building upon next-gen reporting
                        capabilities with front-end technologies.
                    </p>
                    <p>
                        Outside of my working life I have also taken up
                        photography, some of my favourite photographs can be
                        viewed in the <a className="text-link">gallery page</a>{" "}
                        on this site.
                    </p>
                    <p>
                        If you would like to contact me regarding any of the
                        above, you can <a className="text-link">email me</a> or
                        use my <a className="text-link">contact form</a>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default page;
