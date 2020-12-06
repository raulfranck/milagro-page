import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 150px;

  background: var(--white);

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 32%;
    height: 100%;

    margin: -50px auto 0;
  }
`

export const VideoButton = styled.button`
    background-color: #ffffff;
    border-radius: 15%/60%;
    border: 2px solid var(--text);
    color: var(--text);
    font-weight: bold;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    outline-color: #ddd;
    
    transition: .3s;
    outline: none;

    width: 200px;
    height: 60px;

    &:hover {
      background-color: #f34b5e;
      color: #fff;
    }

    > img {
      margin-left: 5px;
    }
`

export const FeaturesButton = styled.button`
    background-color: var(--text);
    border-radius: 15%/50%;
    margin-left: 10px;
    color: #ffffff;
    font-weight: bold;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    outline-color: #ddd;
    position: relative;
    transition: .3s;
    
    width: 200px;
    height: 60px;

    &:hover {
      background-color: #d44152;
      color: #fff;
    }

    > img {
      margin-left: 5px;
    }
`