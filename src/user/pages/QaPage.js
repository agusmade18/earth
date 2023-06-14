import React from 'react'
import LayoutMain from '../layouts/LayoutMain'
import QaLayout from '../layouts/dashboard/Qa'

function QaPage() {
  return (
    <React.Fragment>
        <LayoutMain>
            <QaLayout bgColor='bg-white' titleColor='text-black font-bold' answerColor='text-gray-500' />
        </LayoutMain>
    </React.Fragment>
  )
}

export default QaPage