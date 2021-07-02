// this component will be used as a anchor tag with an image,inside the Modal's header section
const ImageLink = ({ image, link, alt }) => {
  return (
    <a href={link}>
      <img src={image} alt={alt} />
    </a>
  );
};

export default ImageLink;
