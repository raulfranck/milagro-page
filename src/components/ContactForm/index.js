import React from 'react';
import './style.css';

import MailIcon from '../../assets/contact/mailWithCircle.svg';
import PhoneIcon from '../../assets/contact/phoneWithCircle.svg';
import LocationIcon from '../../assets/contact/locationWithCircle.svg';

import { Section, Form, AddresSection } from './style';
import { Container } from '../../styles/GlobalStyle';

import Input from '../Form/input';

const ContactForm = () => {
  function handleSubmit(data) {
    console.log(data)
  }

  return (
    <>
      <Container>
        <Section>
          <AddresSection>
            <div>
              <img src={MailIcon} alt="email icon" />
              <div>
                <h2>E-mail:</h2>
                <span>contact@milagro.cc</span>
              </div>
            </div>

            <div>
              <img src={PhoneIcon} alt="email icon" />
              <div>
                <h2>Phone:</h2>
                <span>+55 11 3081-4328</span>
              </div>
            </div>

            <div>
              <img src={LocationIcon} alt="email icon" />
              <div>
                <h2>E-mail:</h2>
                <span>Rua Cristiano Viana, 401 cj 803</span>
                <span>Pinheiros - São Paulo - Brazil</span>
              </div>
            </div>


          </AddresSection>
          <Form onSubmit={handleSubmit}>
            <Input name="name" className="input-name" placeholder="Name" />
            <Input name="email" className="input-email" placeholder="E-mail" />
            <div>
              <Input name="phone" className="input-phone" placeholder="Phone" />
              <Input name="country" className="input-country" placeholder="Country" />
            </div>
            <Input name="company" className="input-company" placeholder="Company" />
            <Input name="message" multiline className="input-textarea" placeholder="Message" />
            <button type="submit" className="button-submit">Send Message</button>
          </Form>
        </Section>
      </Container>
    </>
  )
}

export default ContactForm;