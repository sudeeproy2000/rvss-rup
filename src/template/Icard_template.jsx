import React, { useState, useContext, useEffect } from 'react';
import Carousel from 'react-multi-carousel'; // Import as default
import 'react-multi-carousel/lib/styles.css';
import Template1 from './Template1';
import Template2 from './Template2';
import Template3 from './Template3';
import { IcardContext } from '../Context/DataProvider.jsx';

const componentsToShow = [
  <Template1 key="template1" />,
  <Template2 key="template2" />,
  <Template3 key="template3" />,
];

function Icard_template() {
  const { idcardtemplate, setIdcardtemplate, isUserLoggedIn, schoolData } = useContext(IcardContext);

  const [selectedId, setSelectedId] = useState(null);

  const handleComponentClick = (componentKey) => {
    if (componentKey === selectedId) {
      // If clicked component is already selected, deselect it
      setSelectedId(null);
      setIdcardtemplate(null); // Clear the selected template ID in context
    } else {
      // Otherwise, select the clicked component
      setSelectedId(componentKey);
      setIdcardtemplate(componentKey); // Store the selected template ID in context
    }
  };

  useEffect(() => {
    // If user is logged in and icard_template is available in schoolData, select it by default
    if (isUserLoggedIn && schoolData?.icard_template) {
      setSelectedId(schoolData.icard_template);
      setIdcardtemplate(schoolData.icard_template);
    }
  }, [isUserLoggedIn, schoolData, setIdcardtemplate]);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel
      responsive={responsive}
      selectedItem={selectedId}
      autoPlay // Enable auto-rotation
      autoPlaySpeed={3000} // Adjust the rotation speed in milliseconds (e.g., 3000ms = 3 seconds)
    >
      {componentsToShow.map((component, index) => (
        <div
          key={component.key}
          style={{
            width: '100%',
            marginBottom: '25px',
            border: '3px solid',
            backgroundColor: component.key === selectedId ? 'blue' : '#7F7F7F',
            cursor: 'pointer',
          }}
          onClick={() => handleComponentClick(component.key)}
        >
          <div style={{
            marginLeft: '35%'
          }}>
            {component}
          </div>
        </div>
      ))}
    </Carousel>
  );
}

export default Icard_template;
