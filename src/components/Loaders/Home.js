/* eslint-disable react/jsx-props-no-spreading */
// import React from 'react'
// import _ from 'lodash';
import ContentLoader from 'react-content-loader';

const MyLoader = (props) =>(

    <ContentLoader
      speed={4}
      width={360}
      height={500}
      viewBox="0 0 360 500"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="31" y="32" rx="20" ry="20" width="262" height="400" />
    </ContentLoader>
    
  );

export default MyLoader;
