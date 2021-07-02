// this component will be used as a anchor tag with an image,inside the Modal's header section
const ImageLink = ({ image, link, alt }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <img style={{ height: 16, width: 16 }} src={image} alt={alt} />
    </a>
  );
};

export default ImageLink;
