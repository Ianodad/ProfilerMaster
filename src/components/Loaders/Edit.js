import ContentLoader from 'react-content-loader';

const EditLoader = (props) => {
  return (
    <ContentLoader
      speed={2}
      width={600}
      height={860}
      viewBox="0 0 600 860"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      <rect x="29" y="95" rx="20" ry="20" width="532" height="600" />
    </ContentLoader>
  );
};

export default EditLoader;
