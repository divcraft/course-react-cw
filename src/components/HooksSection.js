import React, { useState, useEffect } from 'react';
import { H1 } from './StyledH1';
import { H2 } from './StyledH2';

const HooksSection = () => {
   const [squareShown, setSquareShown] = useState(true)
   const [api, setApi] = useState(null)
   const [apiFlague, setApiFlague] = useState(false)
   const squareStyle = {
      width: 200,
      height: 200,
      background: 'red',
      margin: '30px auto'
   }
   const handleToggleSquare = () => {
      setSquareShown(!squareShown)
   }
   const handleToggleApi = () => {
      if (api) {
         setApi(null)
      } else {
         setApiFlague(!apiFlague)
      }
   }
   useEffect(() => {
      console.log('did update')
   })
   useEffect(() => {
      console.log('update api')
      fetch('https://jsonplaceholder.typicode.com/todos/1')
         .then(response => response.json())
         .then(json => setApi(json))
   }, [apiFlague])
   const square = squareShown ? <div className="square" style={squareStyle}></div> : null
   return (
      <section className="hooks" style={{ textAlign: 'center' }}>
         <H1>React hooks</H1>
         <div className="use-state">
            <H2>useState</H2>
            <button onClick={handleToggleSquare}>Pokaż kwadrat</button>
            {square}
         </div>
         <div className="use-effect">
            <H2>useEffect</H2>
            <button onClick={handleToggleApi}>Schowaj API</button>
            {api && <div style={{ margin: '20px auto' }}>{JSON.stringify(api)}</div>}
         </div>
      </section >
   );
}

export default HooksSection;