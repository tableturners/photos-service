/* eslint-disable */
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  max-width: 650px;
  max-height: 300px;
  margin: auto;
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
`;

const Gallery = (props) => (
  < Wrapper>
    <div id='wrapper'>
      <MediumColumn>
        <div className='medium-column'>
          <Picture>
            <div id='building,0' className='picture' onClick={props.clickHandler} >
              <img src={props.place.photos_building[0]} height={150} width={150} />
            </div>
          </Picture>
          <Picture>
            <div id='building,1' className='picture' onClick={props.clickHandler} >
              <img src={props.place.photos_building[1]} height={150} width={150} />
            </div>
          </Picture>
        </div>
      </MediumColumn>

      <LargeColumn>
        <div className='large-column'>
          <Picture>
            <div id='building,2' className='picture' onClick={props.clickHandler} >
              <img src={props.place.photos_building[2]} height={300} width={300} />
            </div>
          </Picture>
        </div>
      </LargeColumn>

      <SmallColumn>
        <div className='small-column'>
          <Picture>
            <div id='food,0' className='picture' onClick={props.clickHandler} >
              <img src={props.place.photos_food[0]} height={100} width={100} />
            </div>
          </Picture>
          <Picture>
            <div id='food,1' className='picture' onClick={props.clickHandler}>
              <img src={props.place.photos_food[1]} height={100} width={100} />
            </div>
          </Picture>
          <Picture>
            <div id='food,2' className='picture' onClick={props.clickHandler}>
              <img src={props.place.photos_food[2]} height={100} width={100} />
            </div>
          </Picture>
        </div>
      </SmallColumn>

      <SmallColumn>
        <div className='small-column'>
          <Picture>
            <div id='food,3' className='picture' onClick={props.clickHandler} >
              <img src={props.place.photos_food[3]} height={100} width={100} />
            </div>
          </Picture>
          <Picture>
            <div id='food,4' className='picture' onClick={props.clickHandler} >
              <img src={props.place.photos_food[4]} height={100} width={100} />
            </div>
          </Picture>
          <Picture>
            <div id='food,5' className='picture' onClick={props.clickHandler} >
              <img src={props.place.photos_food[5]} height={100} width={100} />
            </div>
          </Picture>
        </div>
      </SmallColumn>
    </div>
  </Wrapper >
)

export default Gallery;
