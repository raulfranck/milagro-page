import styled from 'styled-components';

import banner from '../../assets/images/pattern_tela.png';

export const VideoContainer = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	
	background-image: url(${banner});
`
export const VideoStyle = styled.video`
	position: fixed;
	
	min-width: 100%;
	width: auto;
	height: auto;
	
	z-index: -1000;
	
`

export const BannerCount = styled.div`
	position: absolute;
	top: 40%;
	left: 18%;
	text-align: center;


	> p {
		position: relative;
		max-width: 850px;
		margin-bottom: 108px;
		font-size: 45px;
		color: #ffffff;
		font-weight: normal;

		> span {
		color: #f34b5e;
		font-weight: bold;
	}
		}
`

export const ButtonBanner = styled.button`
	top: 80%;
	left: 40%;
	position: absolute;
  width: 200px;
  height: 60px;
  background-color: #f34b5e;
  color: #fff;
  border-radius: 15%/50%;
  margin-right: 10px;
  font-weight: bold;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  outline-color: #ddd;
  transition: .3s;
	outline: none;
	
	> img {
		margin-left: 8px;
	}
`