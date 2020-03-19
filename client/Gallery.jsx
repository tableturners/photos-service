import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  max-width: 650px;
  max-height: 300px;
  margin: auto;
  user-select: none;
`;

const SmallColumn = styled.div`
  flex: 2;
  flex-flow: column wrap;
  align-items: center;
`;

const MediumColumn = styled.div`
  flex: 3;
  flex-flow: column wrap;
  align-items: center;
`;

const LargeColumn = styled.div`
  flex: 6;
  align-items: center;
`;

const Picture = styled.div`
  flex: 1;
  cursor: pointer;
  padding: 0px;
  border: 0px;
  margin: 0px;
`;

const Gallery = ({ place, clickHandler }) => (
  (place.urls.length) ? (
    <div id="gallery">
      <h1 align="center">{place.urls.length} Photos</h1>
      <Wrapper>
        <div className="medium-column">
          <MediumColumn>
            <Picture>
              <img
                id="picture-0"
                alt={place.name}
                height={150}
                width={150}
                className="picture"
                onClick={clickHandler}
                src={place.urls[0]}
              />
            </Picture>
            <Picture>
              <img
                id="picture-1"
                alt={place.name}
                height={150}
                width={150}
                className="picture"
                onClick={clickHandler}
                src={place.urls[1]}
              />
            </Picture>
          </MediumColumn>
        </div>

        <div className="large-column">
          <LargeColumn>
            <Picture>
              <img
                id="picture-2"
                alt={place.name}
                height={300}
                width={300}
                className="picture"
                onClick={clickHandler}
                src={place.urls[2]}
              />
            </Picture>
          </LargeColumn>
        </div>

        <div className="small-column">
          <SmallColumn>
            <Picture>
              <img
                id="picture-3"
                alt={place.name}
                height={100}
                width={100}
                className="picture"
                onClick={clickHandler}
                src={place.urls[3]}
              />
            </Picture>
            <Picture>
              <img
                id="picture-4"
                alt={place.name}
                height={100}
                width={100}
                className="picture"
                onClick={clickHandler}
                src={place.urls[4]}
              />
            </Picture>
            <Picture>
              <img
                id="picture-5"
                alt={place.name}
                height={100}
                width={100}
                className="picture"
                onClick={clickHandler}
                src={place.urls[5]}
              />
            </Picture>
          </SmallColumn>
        </div>

        <div className="small-column">
            <SmallColumn>
              <Picture>
                <img
                  id="picture-6"
                  alt={place.name}
                  height={100}
                  width={100}
                  className="picture"
                  onClick={clickHandler}
                  src={place.urls[6]}
                />
              </Picture>
              <Picture>
                <img
                  id="picture-7"
                  alt={place.name}
                  height={100}
                  width={100}
                  className="picture"
                  onClick={clickHandler}
                  src={place.urls[7]}
                />
              </Picture>
              <Picture>
                <img
                  id="picture-8"
                  alt={place.name}
                  height={100}
                  width={100}
                  className="picture"
                  onClick={clickHandler}
                  src={place.urls[8]}
                />
              </Picture>
            </SmallColumn>
          </div>

      </Wrapper>
    </div>
  ) : (null)
);

export default Gallery;
