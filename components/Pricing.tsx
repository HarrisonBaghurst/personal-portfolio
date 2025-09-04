import React from 'react'
import Transition from './Transition'
import ScrolledInText from './ScrolledInText'
import Button from './Button'
import ExpandingSelector from './ExpandingSelector'

const Pricing = () => {
  const pricingOptions = [
    {
      title: "Simple Portfolio Sites",
      subtitle: "Starting at £500",
      text: "These are clean, professional websites designed to showcase your work, services or personal brand. Typically 3-7 pages, they include features like contact forms, social media integration and responsive design for mobile and desktop. Portfolio sites are ideal for freelancers, creatives or small business who want a polished online presence without extra complexity."
    },
    {
      title: "E-Commerce & Sales Sites",
      subtitle: "Starting at £750",
      text: "These websites are built to help you sell products or services online. They include product catalogs, shopping carts, secure checkout and payment integration. E-commerce sites may also feature customer accounts, promotional tools and basic analytics. These are perfect for businesses looking to reach customers online and grow sales efficiently."
    },
    {
      title: "Complex Web Applications",
      subtitle: "Starting at £1250",
      text: "These are fully custom websites with advanced functionality tailored to your business processes. Examples include booking systems, dashboards, interactive platforms and other software-style web applications. They are built using modern technologies for scalability, performance and security. Complex web applications are ideal for businesses with unique requirements that go beyond a standard website."
    }
  ]

  return (
    <div className='bg-light-blue'>
      <Transition flipped={true} />

      <div 
      id='web-dev-pricing'
      className=' 
      flex flex-col px-6 py-12 gap-12 h-fit
      2xl:grid 2xl:p-32 2xl:grid-cols-2 2xl:gap-32 2xl:h-225
      '>
        <div className='flex items-center'>
          <div className='
          flex flex-col 
          gap-6
          2xl:gap-12
          '>  
            <div>
                <ScrolledInText 
                text='Pricing Estimates'
                size='regular'
                center={false}
                />
              <p className='font-bold paragraph-large'>
                Affordable options to get you started online
              </p>
            </div>
            <p className='paragraph-small'>
              Please note that the prices listed here are rough estimates to give you an idea of what to expect.
              Every project is unique, so I provide a full, detailed pricing outline after a free consultation.
              This ensures your website or service package is tailored to your needs and budget, with no surprises along the way.
            </p>
            <Button 
            text='Contact Me'
            link='contact form'
            />
          </div>
        </div>
        <ExpandingSelector 
        options={pricingOptions}
        />
      </div>

      <Transition />
    </div>
  )
}

export default Pricing
