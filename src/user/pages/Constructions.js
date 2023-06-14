import React from 'react'
import LayoutMain from '../layouts/LayoutMain'
import ConstructionLayout from '../layouts/dashboard/Construction'

function Constructions() {
  return (
    <React.Fragment>
        <LayoutMain>
            <ConstructionLayout />
        </LayoutMain>
    </React.Fragment>
  )
}

export default Constructions