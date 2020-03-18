/* eslint-disable */
import React from 'react';
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

const Display = styled.div`
  display: flex;
  flex-direction: row;
  top: 40px;
  z-index: 2;
  position: absolute;
  margin-left: 25%;
  align-items: center;
`;

const LeftArrow = styled.div`
  flex: 1;
  user-select: none;
  opacity: 0.6;
  cursor: pointer;
  &:hover {
    opacity: 0.4;
  }
`;

const RightArrow = styled.div`
  flex: 1;
  user-select: none;
  opacity: 0.6;
  cursor: pointer;
  &:hover {
    opacity: 0.4;
  }
`;

const Image = styled.div`
  flex: 4;
  user-select: none;
  cursor: pointer;
  margin: 22px;
`;

const Viewer = (props) => {
  if (props.show) {
    return (
      <div id="viewer-wrapper">
        <Background>
          <img id='viewer-background' height={'100%'} width={'100%'} onClick={props.buttonHandler}
            src='https://eric-liu-turntable.s3-us-west-1.amazonaws.com/viewer/viewer_background.jpg' />
        </Background>
        <CloseButton>
          <img id='close-button' height={20} width={20} onClick={props.buttonHandler}
            src='https://eric-liu-turntable.s3-us-west-1.amazonaws.com/viewer/close_button.svg' />
        </CloseButton>
        <Display>
          <LeftArrow>
            <img id='left-arrow' height={40} width={40} onClick={props.buttonHandler}
              src='https://eric-liu-turntable.s3-us-west-1.amazonaws.com/viewer/left_arrow.png' />
          </LeftArrow>
          <Image>
            <img id='viewer-image' src={props.place.urls[props.currentIndex]} height={500} width={500} />
          </Image>
          <RightArrow>
            <img id='right-arrow' height={40} width={40} onClick={props.buttonHandler}
              src='https://eric-liu-turntable.s3-us-west-1.amazonaws.com/viewer/right_arrow.png' />
          </RightArrow>
        </Display>
      </div>
    )
  } else {
    return null;
  }
}

export default Viewer;
