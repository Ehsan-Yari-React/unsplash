const ImageList = ({ images }) => {
  const image = images.map(({ id, urls, alt_description }) => {
    return <img key={id} src={urls["regular"]} alt={alt_description} />;
  });
  return <div>{image}</div>;
};

export default ImageList;
