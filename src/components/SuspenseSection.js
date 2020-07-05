import React, { useState, Suspense } from 'react';
// import SuspenseText2 from './SuspenseText2';
import { H1 } from './StyledH1';
import { H2 } from './StyledH2';

const SuspenseSection = () => {
   const SuspenseText1 = React.lazy(() => import('./SuspenseText1'))
   const [textShown, setTextShown] = useState(false)
   return (
      <section className="suspense" style={{ textAlign: 'center' }}>
         <H1>React Suspense</H1>
         <div className="react-lazy">
            <H2>React.lazy()</H2>
            <button style={{ marginBottom: 20 }} onClick={() => setTextShown(!textShown)}>Pokaż text</button>
            <Suspense fallback={<div>Ładowanie...</div>}>
               {textShown && <SuspenseText1 />}
            </Suspense>
         </div>
         <div className="react-query">
            <H2>useQuery</H2>
            <Suspense fallback={<div>Ładowanie...</div>}>
               <SuspenseText1 />
            </Suspense>
         </div>
      </section>
   );
}

export default SuspenseSection;