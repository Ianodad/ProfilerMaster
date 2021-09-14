import ContentLoader from 'react-content-loader';

const ProfileLoader = (props) =>(
        <ContentLoader 
        speed={2}
        width={860}
        height={400}
        viewBox="0 0 760 400"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      >
        <rect x="49" y="97" rx="0" ry="0" width="1903" height="311" /> 
        <circle cx="407" cy="110" r="69" /> 
      </ContentLoader>
    )

export default ProfileLoader
