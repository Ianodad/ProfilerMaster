import ContentLoader from 'react-content-loader';

const EditLoader = (props) => {
  return (
    <ContentLoader
      speed={2}
      width={600}
      height={560}
      viewBox="0 0 600 560"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      <rect x="29" y="95" rx="0" ry="0" width="532" height="328" />
    </ContentLoader>
  );
};

export default EditLoader;
