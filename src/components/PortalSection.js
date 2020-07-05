import React from 'react';
import { H1 } from './StyledH1'

const PortalSection = () => {
   return (
      <section className="portal" style={{
         minHeight: 0, background: '#333', paddingBottom: 0, color: 'white'
      }}>
         <H1>To jest modal (React Portals)</H1>
      </section >
   );
}

export default PortalSection;