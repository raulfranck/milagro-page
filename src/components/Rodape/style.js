import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 460px;
  width: 100%;
  background-color: #242944;
  text-align: center;
`

export const SubscribeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 155px;

  > span {
    color: #ffffff;
    font-weight: bold;
    font-size: 28px;
  }

  > input {
    height: 52px;
    width: 417px;
    border-radius: 15px;
    margin: 0 30px;
    outline-color: #ddd;
    padding-left: 20px;
    font-size: 18px;
    outline: 0;
  }

  > button {
    width: 200px;
    height: 60px;
    background-color: #242944;
    border-radius: 15%/50%;
    border: 2px solid #f34b5e;
    margin-right: 10px;
    color: #f34b5e;
    font-weight: bold;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    outline-color: #ddd;
    position: relative;
    transition: 0.3s;
    outline: 0;

    &:hover {
      background: #f34b5e;
      color: #ffffff;
    }
  }
`

export const SectionList = styled.div`
  position: relative;
  display: flex;
  width: 1232px;
  padding: 30px 0;
  border-top: 1px solid #464c6b;
  border-bottom: 1px solid #464c6b;
  margin: 0 auto;
`
export const SectionA = styled.div`
  position: relative;
  width: 100%;

  > img {
    display: block;
    text-align: left;
  }

  > p {
    margin: 30px 0px;
    font-weight: 100;
    color: #7a80a5;
    font-size: 17px;
    line-height: 22px;
    max-width: 500px;
    text-align: left;

    > span {
      font-size: 20px;
      font-weight: bold;
    }
  }
`

export const SectionB = styled.div`
  display: flex;
`;

export const MenuA = styled.div`
  position: relative;
  width: 190px;

  > ul {
    margin-top: 6px;
    list-style: none;
    text-align: left;
    color: #7a80a5;
    font-size: 16px;
    
    line-height: 25px;

    > p {
      color: #ffffff;
      font-weight: bold;
    }

    > a  {
      text-decoration: none;

      > li {
      font-weight: 100;
      color: #7a80a5;

      &:hover {
        color: var(--white);
      }
    }
    }

  }
`

export const MenuB = styled.div`
  position: relative;
  width: 300px;

  display: flex;
  justify-content: space-between;
  > ul {
    margin-top: 6px;
    list-style: none;
    text-align: left;
    color: #7a80a5;
    font-size: 16px;

    line-height: 25px;

    > p {
      color: #ffffff;
      font-weight: bold;
    }

    > a  {
      text-decoration: none;

      > li {
      font-weight: 100;
      color: #7a80a5;

      &:hover {
        color: var(--white);
      }
    }
    }
  }
`

export const CopyRight = styled.p`
  display: block;
  font-weight: normal;
  background-color: #242944;
  color: #7a80a5;
  font-size: 13px;
  padding: 20px 0px;
  text-align: center;
`
