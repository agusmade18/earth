import React from 'react'
import LayoutMain from '../layouts/LayoutMain'
import ContactLayout from '../layouts/dashboard/EmailForm'

function Contact() {
  return (
    <React.Fragment>
        <LayoutMain>
            <ContactLayout />
        </LayoutMain>
    </React.Fragment>
  )
}

export default Contact