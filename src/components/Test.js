import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function Test({ data }) {
  const [state, setState] = useState('');
  console.debug('GATSBY_API_KEY', process.env.GATSBY_API_KEY);
  console.debug('GATSBY_CLOUD_KEY', process.env.GATSBY_CLOUD_KEY);

  useEffect(() => {
    setState(data);
    console.log('data', data);
  }, [data]);

  return (
    <h1>
      {data} - {state} - {process.env.GATSBY_API_KEY} - {process.env.GATSBY_CLOUD_KEY}
    </h1>
  );
}

Test.propTypes = {
  data: PropTypes.string
};

export default Test;
