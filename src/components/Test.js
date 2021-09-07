import React from 'react'
import PropTypes from 'prop-types'

function Test({data}) {
  return (
    <h1>
      {data}
    </h1>
  )
}

Test.propTypes = {
  data: PropTypes.string
}

export default Test

