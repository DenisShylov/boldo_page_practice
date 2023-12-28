import React from 'react';
//Locale Files
import AboutTitleSection from '../../Shared/AboutTitleSection/AboutTitleSection';

// Props for AboutTitleSection
const title = 'Our story';
const subtitle = 'Handshake infographic mass market crowdfunding iteration.';
const description = `Conversion angel investor entrepreneur first mover advantage. 
Handshake infographic mass market crowdfunding iteration.
Traction stock user experience deployment beta innovator incubator focus.
Sales user experience branding growth hacking holy grail monetization conversion prototype stock network effects. 
Learning curve network effects return on investment bootstrapping business-to-consumer.`;

const OurStory = () => {
  return (
    <AboutTitleSection title={title} subtitle={subtitle} descr={description} />
  );
};

export default OurStory;
