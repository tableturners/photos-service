/* eslint-disable */
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
`;

const Gallery = (props) => {
  if (props.place.urls) {
    return (
      <Wrapper>

        <div className='medium-column'>
          <MediumColumn>
            <Picture>
              <img id='picture-0' className='picture' onClick={props.clickHandler}
                src={props.place.urls[0]} height={150} width={150} />
            </Picture>
            <Picture>
              <img id='picture-1' className='picture' onClick={props.clickHandler}
                src={props.place.urls[1]} height={150} width={150} />
            </Picture>
          </MediumColumn>
        </div>

        <div className='large-column'>
          <LargeColumn>
            <Picture>
              <img id='picture-2' className='picture' onClick={props.clickHandler}
                src={props.place.urls[2]} height={300} width={300} />
            </Picture>
          </LargeColumn>
        </div>

        <div className='small-column'>
          <SmallColumn>
            <Picture>
              <img id='picture-3' className='picture' onClick={props.clickHandler}
                src={props.place.urls[3]} height={100} width={100} />
            </Picture>
            <Picture>
              <img id='picture-4' className='picture' onClick={props.clickHandler}
                src={props.place.urls[4]} height={100} width={100} />
            </Picture>
            <Picture>
              <img id='picture-5' className='picture' onClick={props.clickHandler}
                src={props.place.urls[5]} height={100} width={100} />
            </Picture >
          </SmallColumn >
        </div >

        <div className='small-column'>
          <SmallColumn>
            <Picture>
              <img id='picture-6' className='picture' onClick={props.clickHandler}
                src={props.place.urls[6]} height={100} width={100} />
            </Picture>
            <Picture>
              <img id='picture-7' className='picture' onClick={props.clickHandler}
                src={props.place.urls[7]} height={100} width={100} />
            </Picture>
            <Picture>
              <img id='picture-8' className='picture' onClick={props.clickHandler}
                src={props.place.urls[8]} height={100} width={100} />
            </Picture >
          </SmallColumn >
        </div >

      </Wrapper >
    )
  }
}

export default Gallery;
