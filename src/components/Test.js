import React from 'react'
import PropTypes from 'prop-types'

function Test({data}) {
  console.log('GATSBY_API_KEY', process.env.GATSBY_API_KEY);

  return (
    <h1>
      {data} - {process.env.GATSBY_API_KEY} - {process.env.CLOUD_KEY}
    </h1>
  )
}

Test.propTypes = {
  data: PropTypes.string
}

export default Test

