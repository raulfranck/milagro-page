import React from 'react';

import Logo from '../../assets/images/logo-milagro-white.png'
import SeloStartupGrind from '../../assets/images/startup-selo.png'

import { Container, SubscribeContainer, SectionList, SectionA, SectionB, MenuA, MenuB, CopyRight } from './style'

const Rodape = () => {
  return (
    <>
      <Container>
        <SubscribeContainer>
          <span>Follow us for further information</span>
          <input type="email" name="EMAIL" placeholder="yourname@domain.com"></input>
          <button>Subscribe</button>
        </SubscribeContainer>

        <SectionList>
          <SectionA>
            <img src={Logo} alt="milagro logo" />
            <p>Milagro is the world’s <span>only design software</span> that saves up to 70% of campaign creating
							time. Its <span>cutting edge technology</span> boosts the production of pieces for digital media through
							<span>autonomization</span>, so that you can focus on what really matters: <span>Creativity</span>.
						</p>
          </SectionA>
          <SectionB>
            <MenuA>
              <ul>
                <p>It`s a Milagro</p>
                <a href="/">
                  <li>About Us</li>
                </a>
                <a href="/">
                  <li>Features</li>
                </a>
                <a href="/">
                  <li>Gallery</li>
                </a>
                <a href="/">
                  <li>Why Milagro</li>
                </a>
                <a href="/">
                  <li>Suport</li>
                </a>
                <a href="/">
                  <li>Support</li>
                </a>
              </ul>
            </MenuA>
            <MenuB>
              <ul>
                <p>It`s a Milagro</p>
                <a href="/youtubebanner">
                  <li>Youtube Banner Maker</li>
                </a>
                <a href="/facebookbanner">
                  <li>Facebook Banner</li>
                </a>
                <a href="/InstagramAds">
                  <li>Instagram Ads</li>
                </a>
                <a href="/twitterads">
                  <li>Twitter Ads</li>
                </a>
                <a href="/displayads">
                  <li>Display Ads</li>
                </a>
              </ul>
              <div>
                <img src={SeloStartupGrind} alt="startup grind selo" />
              </div>
            </MenuB>
          </SectionB>

        </SectionList>
        <CopyRight>© 2020 Milagro. All Rights Reserved.</CopyRight>
      </Container>
    </>
  )
}

export default Rodape;