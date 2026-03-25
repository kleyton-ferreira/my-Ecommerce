import styled from 'styled-components'

export const CategoriesContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
`

export const CategoriesContent = styled.div`
  height: 100%;
  width: 1920px;
  display: grid;
  grid-template-columns: repeat(2, minmax(auto, 100%));
  grid-auto-rows: 300px;
  justify-content: center ;
  grid-template-areas:
    'a b'
    'c c'
    'd e';
  grid-gap: 15px;
  padding: 30px;

  & div:nth-child(1) {
    grid-area: a;
    grid-column: 1 / 1;
    grid-row: 1 / 3;
  }

  & div:nth-child(2) {
    grid-column: 2 / 2;
  }

  & div:nth-child(3) {
    grid-area: c;
    grid-column: 3 / 2;
  }

  & div:nth-child(4) {
    grid-area: d;
  }
  & div:nth-child(5) {
    grid-area: e;
  }
`

