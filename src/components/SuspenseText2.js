import React from 'react';
import { useQuery } from 'react-query';
import fetchData from './fetchData';

const SuspenseText2 = () => {
   const { data } = useQuery(['apiData', {}], fetchData)
   console.log(data.json)
   return (
      <p style={{ padding: '0 10%' }}>
         {/* {JSON.stringify(fetchData)} */}
         ok
      </p>
   );
}

export default SuspenseText2;