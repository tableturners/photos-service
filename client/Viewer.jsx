import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Background = styled.img`
  height: 100%;
  width: 100%;
  z-index: 1;
  top: 0;
  left: 0;
  position: absolute;
  user-select: none;
  opacity: 0.95;
`;

const CloseButton = styled.img`
  top: 45px;
  right: 35px;
  height: 20px;
  width: 20px;
  z-index: 2;
  user-select: none;
  opacity: 0.3;
  cursor: pointer;
  position: absolute;
`;

// Holds Scroller and InfoBar
const Display = styled.div`
  display: flex;
  flex-direction: column;
  top: 35px;
  z-index: 2;
  position: absolute;
  margin-left: 25%;
`;

// Holds Arrows and Image
const Scroller = styled.div`
  flex: 16;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Arrow = styled.img`
  height: 45px;
  width: 45px;
  flex: 1;
  user-select: none;
  opacity: 0.6;
  cursor: pointer;
  &:hover {
    opacity: 0.4;
  }
`;

const InactiveArrow = styled.img`
  height: 45px;
  width: 45px;
  flex: 1;
  user-select: none;
  opacity: 0.2;
`;

const Image = styled.img`
  flex: 10;
  user-select: none;
  max-height: 80%;
  width: auto;
`;

// Holds Avatar, ImageInfo, and Flag
const InfoBar = styled.div`
  padding-top: 10px;
  flex: 4;
  display: flex;
  flex-direction: row;
`;

const Avatar = styled.img`
  height: 50px;
  width: 50px;
  display: block;
  user-select: none;
`;

const ImageInfo = styled.div`
  flex: 8;
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  padding-left: 15px;
`;

const Flag = styled.img`
  height: 30px;
  width: 30px;
  display: block;
  user-select: none;
  cursor: pointer;
`;

const DateToString = (ISOstring) => {
  const date = ISOstring.split('T')[0].split('-');
  const months = {
    '01': 'January',
    '02': 'February',
    '03': 'March',
    '04': 'April',
    '05': 'May',
    '06': 'June',
    '07': 'July',
    '08': 'August',
    '09': 'September',
    '10': 'October',
    '11': 'November',
    '12': 'December',
  };
  const day = date[2];
  const month = months[date[1]];
  const year = date[0];

  return `${month} ${day}, ${year}`;
};

class Viewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showViewer: undefined,
      place: undefined,
      currentIndex: undefined
    };
    this.buttonHandler = this.buttonHandler.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.keypressHandler.bind(this));
  }

  // allows App to update Viewer state using ViewerRef
  updateState(newState) {
    this.setState({
      showViewer: newState.showViewer,
      place: newState.place,
      currentIndex: newState.currentIndex
    });
  }

  // captures "button" image clicks in Viewer
  buttonHandler(event) {
    const eventId = event.target.id;
    if (eventId === 'left-arrow') {
      this.advanceDisplay('left');
    } else if (eventId === 'right-arrow') {
      this.advanceDisplay('right');
    } else if (eventId === 'close-button') {
      this.setState({ showViewer: false });
    } else if (eventId === 'viewer-background') {
      this.setState({ showViewer: false });
    }
  }

  // changes displayed image in Viewer based on button/key presses
  advanceDisplay(string) {
    const { place, currentIndex } = this.state;
    if (string === 'left' && currentIndex > 0) {
      this.setState({ currentIndex: currentIndex - 1 });
    } else if (string === 'right' && currentIndex < place.pics.length - 1) {
      this.setState({ currentIndex: currentIndex + 1 });
    }
  }

  // captures key presses in Viewer
  keypressHandler(event) {
    if (this.state.showViewer) {
      if (event.key === 'ArrowLeft') {
        this.advanceDisplay('left');
      } else if (event.key === 'ArrowRight') {
        this.advanceDisplay('right');
      } else if (event.key === 'Escape') {
        this.setState({ showViewer: false });
      }
    }
  }

  render() {
    const { showViewer, place, currentIndex } = this.state;
    if (showViewer) {
      return (
        <div id="viewer-wrapper">
          <Background
            id="viewer-background"
            alt=""
            onClick={this.buttonHandler}
            src="https://eric-liu-turntable.s3-us-west-1.amazonaws.com/viewer/viewer_background.jpg"
          />
          <CloseButton
            id="close-button"
            alt=""
            onClick={this.buttonHandler}
            src="https://eric-liu-turntable.s3-us-west-1.amazonaws.com/viewer/close_button.svg"
          />
          <Display>
            <Scroller>
              {(currentIndex === 0) ? (
                <InactiveArrow
                  id="inactive-left-arrow"
                  alt=""
                  onClick={this.buttonHandler}
                  src="https://eric-liu-turntable.s3-us-west-1.amazonaws.com/viewer/left_arrow.png"
                />
              ) : (
                <Arrow
                  id="left-arrow"
                  alt=""
                  onClick={this.buttonHandler}
                  src="https://eric-liu-turntable.s3-us-west-1.amazonaws.com/viewer/left_arrow.png"
                />
              )}
              <Image
                id="viewer-image"
                alt=""
                src={place.pics[currentIndex].url}
              />
              {(currentIndex === place.pics.length - 1) ? (
                <InactiveArrow
                  id="inactive-right-arrow"
                  alt=""
                  onClick={this.buttonHandler}
                  src="https://eric-liu-turntable.s3-us-west-1.amazonaws.com/viewer/right_arrow.png"
                />
              ) : (
                <Arrow
                  id="right-arrow"
                  alt=""
                  onClick={this.buttonHandler}
                  src="https://eric-liu-turntable.s3-us-west-1.amazonaws.com/viewer/right_arrow.png"
                />
              )}
            </Scroller>
            <InfoBar>
              <Avatar
                id="avatar-image"
                alt=""
                src="https://eric-liu-turntable.s3-us-west-1.amazonaws.com/profile_picture.png"
              />
              <ImageInfo id="image-info">
                <strong style={{ color: 'white' }}>
                  {`Taken by ${place.pics[currentIndex].username}`}
                </strong>
                <strong style={{ color: 'white' }}>
                  {DateToString(place.pics[currentIndex].date)}
                </strong>
              </ImageInfo>
              <Flag
                id="report-button"
                alt=""
                onClick={this.buttonHandler}
                src="https://eric-liu-turntable.s3-us-west-1.amazonaws.com/flag.png"
              />
            </InfoBar>
          </Display>
        </div>
      );
    }
    return null;
  }
}

Viewer.propTypes = {
  showViewer: PropTypes.bool,
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
  showViewer: false,
  place: { _id: 0, name: 'test', pics: [] },
  currentIndex: 1,
  buttonHandler: () => { }
};

export default Viewer;
