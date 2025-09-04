import React from 'react'
import Transition from './Transition'
import ScrolledInText from './ScrolledInText'
import ExpandingSelector from './ExpandingSelector'
import Button from './Button'

const HowItWorks = () => {
const pricingOptions = [
    {
      title: "Lesson format",
      text: "Lessons are delivered online using video conferencing tools, with screen sharing and a digital whiteboard to make explanations clear and interactive. Sessions typically last an hour but can be extended if needed to cover more complex topics. After each lesson, I can provide practice questions or notes to help reinforce what we've covered."
    },
    {
      title: "Flexibility",
      text: "I understand that schedules can change, so lessons can be rearranged if needed. If you're unable to attend a session, just let me know in advance and we'll find a suitable alternative time. This flexible approach ensures that you learning fits smoothly around your other commitments."
    },
    {
      title: "Payment options",
      text: "Payments can be made securely by bank transfer or PayPal. You can choose to pay per lesson, or save by purchasing a block of lessons in advance. All payment details are provided clearly with no hidden fees."
    },
    {
      title: "Getting started",
      text: "Getting started is simple. Just reach out through the contact form to arrange your first lesson. We'll discuss your goals, current level and any specific areas you'd like to focus on. From there, we'll set up your first session and begin building a plan tailored to your needs."
    },
  ]

  return (
    <div className='bg-light-blue'>
      <Transition flipped={true} />

      <div 
      id='how-it-works'
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
                text='How It Works'
                size='regular'
                center={false}
                />
              <p className='font-bold paragraph-large'>
                Simple, flexible and tailored to you
              </p>
            </div>
            <p className='paragraph-small'>
              All lessons take place online, making them convenient and accessible wherever you are.
              Sessions are typically one hour long, with the option to extend if needed.
              Before starting, we'll discuss your goals and current level to create a personalised learning plan.
              Each lesson combines clear explanations, worked examples and practice questions, ensuring you fully understand the material.
              Whether you're preparing for exams or learning programming as a new skill, the pace and focus of lessons are always tailored to you.
            </p>
            <Button
            text='Contact Me'
            link='contact form'
            />
          </div>
        </div>
        <div className='flex items-center'>
          <ExpandingSelector 
          options={pricingOptions}
          />
        </div>
      </div>
      <Transition />
    </div>
  )
}

export default HowItWorks