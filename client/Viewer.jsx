import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Background = styled.div`
  height: 100%;
  width: 100%;
  z-index: 1;
  top: 0;
  left: 0;
  position: absolute;
  user-select: none;
  opacity: 0.95;
`;

const CloseButton = styled.div`
  top: 45px;
  right: 35px;
  z-index: 2;
  user-select: none;
  opacity: 0.3;
  cursor: pointer;
  position: absolute;
`;

const Scroller = styled.div`
  display: flex;
  flex-direction: row;
  top: 30px;
  z-index: 2;
  position: absolute;
  margin-left: 25%;
  align-items: center;
`;

const Arrow = styled.div`
  flex: 1;
  user-select: none;
  opacity: 0.6;
  cursor: pointer;
  &:hover {
    opacity: 0.4;
  }
`;

const InactiveArrow = styled.div`
  flex: 1;
  user-select: none;
  opacity: 0.2;
`;

const Display = styled.div`
  display: flex;


`;

const Image = styled.div`
  flex: 4;
  user-select: none;
  cursor: pointer;
  margin: 22px;
`;

const Viewer = ({ show = false, place, currentIndex, buttonHandler }) => (
  (show) ? (
    <div id="viewer-wrapper">
      <Background>
        <img
          id="viewer-background"
          alt=""
          height="100%"
          width="100%"
          onClick={buttonHandler}
          src="https://eric-liu-turntable.s3-us-west-1.amazonaws.com/viewer/viewer_background.jpg"
        />
      </Background>
      <CloseButton>
        <img
          id="close-button"
          alt=""
          height={20}
          width={20}
          onClick={buttonHandler}
          src="https://eric-liu-turntable.s3-us-west-1.amazonaws.com/viewer/close_button.svg"
        />
      </CloseButton>
      <Scroller>
        {(currentIndex === 0) ? (
          <InactiveArrow>
            <img
              id="inactive-left-arrow"
              alt=""
              height="45"
              width="45"
              onClick={buttonHandler}
              src="https://eric-liu-turntable.s3-us-west-1.amazonaws.com/viewer/left_arrow.png"
            />
          </InactiveArrow>
        ) : (
          <Arrow>
            <img
              id="left-arrow"
              alt=""
              height="45"
              width="45"
              onClick={buttonHandler}
              src="https://eric-liu-turntable.s3-us-west-1.amazonaws.com/viewer/left_arrow.png"
            />
          </Arrow>
        )}
        <Image>
          <img
            id="viewer-image"
            alt=""
            height="500"
            width="500"
            src={place.pics[currentIndex].url}
          />
        </Image>
        {(currentIndex === place.pics.length - 1) ? (
          <InactiveArrow>
            <img
              id="inactive-right-arrow"
              alt=""
              height="45"
              width="45"
              onClick={buttonHandler}
              src="https://eric-liu-turntable.s3-us-west-1.amazonaws.com/viewer/right_arrow.png"
            />
          </InactiveArrow>
        ) : (
          <Arrow>
            <img
              id="right-arrow"
              alt=""
              height="45"
              width="45"
              onClick={buttonHandler}
              src="https://eric-liu-turntable.s3-us-west-1.amazonaws.com/viewer/right_arrow.png"
            />
          </Arrow>
        )}
      </Scroller>
    </div>
  ) : (null)
);

Viewer.propTypes = {
  show: PropTypes.bool,
  place: PropTypes.shape({
    _id: PropTypes.number,
    pics: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string,
        username: PropTypes.string,
        date: PropTypes.any
      })
    ),
    name: PropTypes.string
  }),
  currentIndex: PropTypes.number,
  buttonHandler: PropTypes.func
};

Viewer.defaultProps = {
  show: false,
  place: { _id: 0, name: 'test', pics: [] },
  currentIndex: 1,
  buttonHandler: () => {}
};

export default Viewer;
