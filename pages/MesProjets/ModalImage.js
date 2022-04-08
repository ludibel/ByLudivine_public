// import react / next
import { forwardRef } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
// import Emotion styled
import styled from '@emotion/styled';
// import mui
import { Dialog, DialogContent, Slide } from '@mui/material';

const StyledDialog = styled(Dialog)({
  '& .MuiPaper-root': {
    height: '50%',
    '@media (min-width: 1220px)': {
      height: '80%',
    },
  },
  maxWidth: '100%',
});

const StyledDialogContent = styled(DialogContent)({
  position: 'relative',
});
// Transition utilise forwarRef afin d'obtenir la ref qui lui est passée et la transmettre à SLide DOM
const Transition = forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

function ModalImage({
  onClose, open, image, alt,
}) {
  return (
    <StyledDialog
      onClose={onClose}
      open={open}
      fullScreen
      TransitionComponent={Transition}
    >
      <StyledDialogContent>
        <Image src={image} layout="fill" objectFit="contain" alt={alt} />
      </StyledDialogContent>
    </StyledDialog>
  );
}

ModalImage.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
export default ModalImage;
