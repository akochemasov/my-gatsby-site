import React from 'react'
import PropTypes from 'prop-types'

function Test({data}) {
  console.debug('GATSBY_API_KEY', process.env.GATSBY_API_KEY);
  console.debug('GATSBY_CLOUD_KEY', process.env.GATSBY_CLOUD_KEY);

  return (
    <h1>
      {data} - {process.env.GATSBY_API_KEY} - {process.env.GATSBY_CLOUD_KEY}
    </h1>
  )
}

Test.propTypes = {
  data: PropTypes.string
}

export default Test

