// import next/react
import Image from 'next/image';
import PropTypes from 'prop-types';

const CarouselSlide = ({ image, altImage }) => (
  <Image
    src={image}
    layout="fill"
    objectFit="contain"
    alt={altImage}
    className="image"
  />
);
export default CarouselSlide;

CarouselSlide.propTypes = {
  image: PropTypes.object.isRequired,
  altImage: PropTypes.string.isRequired,
};
