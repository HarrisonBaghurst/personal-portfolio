import React from 'react'
import Transition from './Transition'
import ScrolledInText from './ScrolledInText'
import Button from './Button'
import ExpandingSelector from './ExpandingSelector'

const FAQ = () => {
  const questions = [
    {
      title: "How long does it take?",
      text: "Project timelines very based on size and complexity. Simple portfolio sites usually take 2-4 weeks, e-commerce sites 8-12 weeks and complex web applications may take longer. A detailed timeline is provided after we discuss your project."
    },
    {
      title: "Can I update my website myself?",
      text: "Depending on the project, you may be able to make changes yourself. E-commerce sites include admin tools for updating listings and web applications may feature dashboards for managing content. These requirements are discussed during planning. The source code is availiable throughout and after the project but I recommend requesting changes through me to ensure everything functions correctly."
    },
    {
      title: "Can you redesign my existing website?",
      text: "Yes. I can revamp your existing site to improve design, performance and functionality using modern tools and techniques."
    },
    {
      title: "How many revisions do you allow?",
      text: "I don't set a fixed limit on revisions and am happy to make adjustments as needed. From the start, I ensure we're aligned on the project's direction and check in at agreed milestones. You'll have access to the site during development, so you can see progress in real time and request changes along the way. Minor adjustments are always welcome but major revisions - such as a complete home page redesign - are requested after prior approval, these may incur and additional cost."
    },
    {
      title: "How do I get started?",
      text: "Simply reach out via the contact form and we will arrange a free consultation. We'll discuss your goals, review options and create a plan tailored to your needs.",
    }
  ]

  return (
    <div className='bg-light-blue'>
      <Transition flipped={true} />

      <div 
      id='faq'
      className='
      px-6 py-12 flex flex-col gap-12
      2xl:p-32 2xl:grid 2xl:grid-cols-2 2xl:gap-32 2xl:h-300
      '>
        <div className='flex items-center'>
          <div className='
          flex flex-col 
          gap-6
          2xl:gap-12
          '>  
            <div>
                <ScrolledInText 
                text='Common Questions'
                size='regular'
                center={false}
                />
              <p className='font-bold paragraph-large'>
                Everything you need to know before starting your project
              </p>
            </div>
            <p className='paragraph-small'>
              This section addresses the most common questions clients have about my web development and online services.
              These answers are designed to help you understand the process, make informed decisions and feel confident moving forward with your project.
              If you have any further queries feel free to contact me for an answer.
            </p>
            <Button
            text='Contact Me'
            link=''
            />
          </div>
        </div>
        <div className='flex items-center'>
          <ExpandingSelector 
          options={questions}
          />
        </div>
      </div>
      <Transition />
    </div>
  )
}

export default FAQ
