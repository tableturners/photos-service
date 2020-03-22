import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: auto;
  user-select: none;
  width: 663px;
  height: 310px;
  @media (max-width: 768px) {
    width: 100%;
    height: 50%;
  }
`;

const SmallColumn = styled.div`
  flex: 2;
  flex-flow: column wrap;
  align-items: center;
  display: block;
`;

const MediumColumn = styled.div`
  flex: 3;
  flex-flow: column wrap;
  align-items: center;
  display: block;
`;

const LargeColumn = styled.div`
  flex: 6;
  align-items: center;
  display: block;
`;

const SmallPicture = styled.img`
  cursor: pointer;
  display: block;
  width: 100px;
  height: 100px;
  padding: 1px;
  @media (max-width: 768px) {
    width: 97.3%;
    height: auto;
    padding: 1px;
  }
`;

const MediumPicture = styled.img`
  cursor: pointer;
  display: block;
  width: 151px;
  height: 151px;
  padding: 1px;
  @media (max-width: 768px) {
    width: 98%;
    height: auto;
    padding: 1px;
  }
`;

const LargePicture = styled.img`
  cursor: pointer;
  display: block;
  width: 304px;
  height: 304px;
  padding: 1px;
  @media (max-width: 768px) {
    width: 98.7%;
    height: auto;
  }
`;

const Gallery = ({ place, clickHandler }) => (
  (place.pics.length) ? (
    <div id="gallery">
      <h1
        align="center"
        style={{
          fontSize: '24px',
          fontFamily: 'Gill Sans',
          fontWeight: '600'
        }}
      >
        {`${place.name} - ${place.pics.length} Photos`}
      </h1>
      <Wrapper id="gallery-wrapper">
        <MediumColumn id="medium-column">
          <MediumPicture
            id="picture-0"
            src={place.pics[0].url}
            alt={place.name}
            onClick={clickHandler}
          />
          <MediumPicture
            id="picture-1"
            src={place.pics[1].url}
            alt={place.name}
            onClick={clickHandler}
          />
        </MediumColumn>

        <LargeColumn id="large-column">
          <LargePicture
            id="picture-2"
            src={place.pics[2].url}
            alt={place.name}
            onClick={clickHandler}
          />
        </LargeColumn>

        <SmallColumn id="small-column-1">
          <SmallPicture
            id="picture-3"
            src={place.pics[3].url}
            alt={place.name}
            onClick={clickHandler}
          />
          <SmallPicture
            id="picture-4"
            src={place.pics[4].url}
            alt={place.name}
            onClick={clickHandler}
          />
          <SmallPicture
            id="picture-5"
            src={place.pics[5].url}
            alt={place.name}
            onClick={clickHandler}
          />
        </SmallColumn>

        <SmallColumn id="small-column-2">
          <SmallPicture
            id="picture-6"
            src={place.pics[6].url}
            alt={place.name}
            onClick={clickHandler}
          />
          <SmallPicture
            id="picture-7"
            src={place.pics[7].url}
            alt={place.name}
            onClick={clickHandler}
          />
          <SmallPicture
            id="picture-8"
            src={place.pics[8].url}
            alt={place.name}
            onClick={clickHandler}
          />
        </SmallColumn>

      </Wrapper>
    </div>
  ) : (null)
);

Gallery.propTypes = {
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
  clickHandler: PropTypes.func
};

Gallery.defaultProps = {
  place: { _id: 0, name: 'test', pics: [] },
  clickHandler: () => {}
};

export default Gallery;
