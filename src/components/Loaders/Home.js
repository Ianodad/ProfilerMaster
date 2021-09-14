/* eslint-disable react/jsx-props-no-spreading */
// import React from 'react'
// import _ from 'lodash';
import ContentLoader from 'react-content-loader';

const MyLoader = (props) =>(

    <ContentLoader
      speed={4}
      width={360}
      height={300}
      viewBox="0 0 360 300"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="31" y="32" rx="0" ry="0" width="262" height="251" />
    </ContentLoader>
    
  );

export default MyLoader;
