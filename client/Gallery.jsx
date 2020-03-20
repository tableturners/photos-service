import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  max-width: 660px;
  max-height: 310px;
  margin: auto;
  user-select: none;
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

const Picture = styled.img`
  cursor: pointer;
  display: block;
  padding: 1px;
`;

const Gallery = ({ place, clickHandler }) => (
  (place.pics.length) ? (
    <div id="gallery">
      <h1 align="center">{place.name} - {place.pics.length} Photos</h1>
      <Wrapper id="gallery-wrapper">
        <MediumColumn id="medium-column">
          <Picture
            id="picture-0"
            src={place.pics[0].url}
            alt={place.name}
            height={150}
            width={150}
            onClick={clickHandler}
          />
          <Picture
            id="picture-1"
            src={place.pics[1].url}
            alt={place.name}
            height={150}
            width={150}
            onClick={clickHandler}
          />
        </MediumColumn>

        <LargeColumn id="large-column">
          <Picture
            id="picture-2"
            src={place.pics[2].url}
            alt={place.name}
            height={300}
            width={300}
            onClick={clickHandler}
          />
        </LargeColumn>

        <SmallColumn id="small-column-1">
          <Picture
            id="picture-3"
            src={place.pics[3].url}
            alt={place.name}
            height={100}
            width={100}
            onClick={clickHandler}
          />
          <Picture
            id="picture-4"
            src={place.pics[4].url}
            alt={place.name}
            height={100}
            width={100}
            onClick={clickHandler}
          />
          <Picture
            id="picture-5"
            src={place.pics[5].url}
            alt={place.name}
            height={100}
            width={100}
            onClick={clickHandler}
          />
        </SmallColumn>

        <SmallColumn id="small-column-2">
          <Picture
            id="picture-6"
            src={place.pics[6].url}
            alt={place.name}
            height={100}
            width={100}
            onClick={clickHandler}
          />
          <Picture
            id="picture-7"
            src={place.pics[7].url}
            alt={place.name}
            height={100}
            width={100}
            onClick={clickHandler}
          />
          <Picture
            id="picture-8"
            src={place.pics[8].url}
            alt={place.name}
            height={100}
            width={100}
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
