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

const X = styled.div`
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
  opacity: 0.8;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
`;

const RightArrow = styled.div`
  flex: 1;
  user-select: none;
  opacity: 0.8;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
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
            src='https://www.dlf.pt/png/big/9/92021_black-overlay-png.jpg' />
        </Background>
        <X>
          <img id='close-button' height={20} width={20} onClick={props.buttonHandler}
            src='https://image.flaticon.com/icons/svg/458/458595.svg' />
        </X>
        <Display>
          <LeftArrow>
            <img id='left-arrow' height={40} width={40} onClick={props.buttonHandler}
              src='https://www.materialui.co/materialIcons/hardware/keyboard_arrow_left_grey_192x192.png' />
          </LeftArrow>
          <Image>
            <img id='viewer-image' src={props.place.urls[props.currentIndex]} height={500} width={500} />
          </Image>
          <RightArrow>
            <img id='right-arrow' height={40} width={40} onClick={props.buttonHandler}
              src='https://www.materialui.co/materialIcons/hardware/keyboard_arrow_right_grey_192x192.png' />
          </RightArrow>
        </Display>
      </div>
    )
  } else {
    return null;
  }
}

export default Viewer;
