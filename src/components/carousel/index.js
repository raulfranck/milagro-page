import React from 'react';
import Carousel from 'styled-components-carousel';

import ClientA from '../../assets/clients/client-a.jpg';
import ClientB from '../../assets/clients/client-b.jpg';
import ClientC from '../../assets/clients/client-c.jpg';

import { Container, Card } from './style';

const CarouselContainer = () => {
  return (
    <>
      <Container>
        <div>
          <Carousel
            infinite
            slidesToShow={2}
          >
            <Card>
              <section>
                <img src={ClientA} alt="gol logo" />
              </section>
              <div>
                <p>“Milagro is an incredible tool. People who work with retail understand the importance of agility when developing pieces. Milagro’s intuitive interface guarantees fast deliveries. Besides, its animated presets increase the quality of any creative line.”</p>
                <h3>Gregory Calabraro</h3>
                <span>Art Director</span>
              </div>
            </Card>
            <Card>
              <section>
                <img src={ClientB} alt="gol logo" />
              </section>
              <div>
                <p>“We deal with our campaigns with outstanding agility and we no longer depend on production companies to work on HTML outputs. SLA is also superior to the one we used before, and specs validation happens with more quality and safety.  Besides it all, we now manage to export impressive MP4 motion pieces to social media. Milagro is EXCELLENT!”</p>
                <h3>Alex Messias</h3>
                <span>Operations Manager</span>
              </div>
            </Card>
            <Card>
              <section>
                <img src={ClientA} alt="gol logo" />
              </section>
              <div>
                <p>“Milagro’s brought true upgrade to our output process. In a precise way, the tool’s given us everything we needed to deliver animated banners with maximum quality in the shortest time. This actually is Milagro’s greatest feature. With it, we spent ¼ of the time we would normally spend with SLA.”</p>
                <h3>Renato Prado</h3>
                <span>House Coordinator / Marketing</span>
              </div>
            </Card>
            <Card>
              <section>
                <img src={ClientC} alt="gol logo" />
              </section>
              <div>
                <p>“Milagro is unique! There is no other software able to do what it does. With Milagro, my motion team focuses on being creative. They animate one “main” banner and the rest of the formats can be produced almost automatically. They don’t waste time editing code or animating banners one by one.”</p>
                <h3>Marcelo Mandruca</h3>
                <span>Senior Producer at A Madre</span>
              </div>
            </Card>
          </Carousel>
        </div>
      </Container>
    </>
  )
}

export default CarouselContainer;