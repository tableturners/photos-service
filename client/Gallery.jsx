/* eslint-disable */
import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  max-width: 650px;
  max-height: 300px;
  margin: auto;
`;

export const SmallColumn = styled.div`
  flex: 2;
  flex-flow: column wrap;
`;

export const MediumColumn = styled.div`
  flex: 3;
  flex-flow: column wrap;
`;

export const LargeColumn = styled.div`
  flex: 6;
`;

export const Picture = styled.div`
  flex: 1;
`;

export const Gallery = (props) => (
  <Wrapper>

    <MediumColumn>
      <Picture><img
      onClick={props.clickHandler}
      src={'https://cdn0.iconfinder.com/data/icons/ecology-1/110/Ladybug-512.png'}
      height={150}
      width={150}/>
      </Picture>
      <Picture><img
      onClick={props.clickHandler}
      src={'https://cdn0.iconfinder.com/data/icons/ecology-1/110/Ladybug-512.png'}
      height={150}
      width={150}/>
      </Picture>
    </MediumColumn>

    <LargeColumn>
      <Picture><img
      onClick={props.clickHandler}
      src={'https://cdn0.iconfinder.com/data/icons/ecology-1/110/Ladybug-512.png'}
      height={300}
      width={300}/>
      </Picture>
    </LargeColumn>

    <SmallColumn>
      <Picture><img
      onClick={props.clickHandler}
      src={'https://cdn0.iconfinder.com/data/icons/ecology-1/110/Ladybug-512.png'}
      height={100}
      width={100}/>
      </Picture>
      <Picture><img
      onClick={props.clickHandler}
      src={'https://cdn0.iconfinder.com/data/icons/ecology-1/110/Ladybug-512.png'}
      height={100}
      width={100}/>
      </Picture>
      <Picture><img
      onClick={props.clickHandler}
      src={'https://cdn0.iconfinder.com/data/icons/ecology-1/110/Ladybug-512.png'}
      height={100}
      width={100}/>
      </Picture>
    </SmallColumn>

    <SmallColumn>
      <Picture><img
      onClick={props.clickHandler}
      src={'https://cdn0.iconfinder.com/data/icons/ecology-1/110/Ladybug-512.png'}
      height={100}
      width={100}/>
      </Picture>
      <Picture><img
      onClick={props.clickHandler}
      src={'https://cdn0.iconfinder.com/data/icons/ecology-1/110/Ladybug-512.png'}
      height={100}
      width={100}/>
      </Picture>
      <Picture><img
      onClick={props.clickHandler}
      src={'https://cdn0.iconfinder.com/data/icons/ecology-1/110/Ladybug-512.png'}
      height={100}
      width={100}/>
      </Picture>
    </SmallColumn>

  </Wrapper>
)

export default Gallery;
