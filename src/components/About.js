import React, {Component} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {hot} from 'react-hot-loader';
import Home from './Home.js';
import CustomModal from './Modal';
import {ModalTitle, ModalContent} from './styled/ModalComponents'
import Sel from '../static/sel.png';

const AboutModalContent = styled(ModalContent)`
    display: flex;

    a {
        color: #dd9593;
        text-decoration: none;
    }
`;

const BioImg = styled.img`
    height: 200px;
    margin: 10px 0px 10px 10px;
    border-radius: 50%;
`;

const Name = styled.span`
    font-size: 30px;
`;

const About = () => {
  return (
  <div>
    <Home/>
    <CustomModal>
      <AboutModalContent>
        <div>
          <Name>Selene Ross (she/her)</Name> is an audio producer and writer from Berkeley, California,
          and a big believer in the power of story and sound. Her audio stories have aired on Radiotopia's
          The Kitchen Sisters, KALW, and NPR, and her writing appears in Literary Hub, Terrain.org, and
          other publications. Her work has been supported by residencies with the Spring Creek Project,
          Voices of the Wilderness, and Storyknife Writers Retreat. She was senior audio producer at
          Dipsea, where she directed voice actors, managed sound-design, and led the development of a new
          genre of sleep audio. Her Oakland-based musical trio Artemisia features harp, violin, and tight
          vocal harmonies with a strong Appalachian influence.
          Selene teaches podcast storytelling and writing at Oregon State University and Portland
          Community College. She has a BA in Environmental Studies and Sociology from the University of
          California, Santa Barbara, an MFA in Creative Writing: Fiction from Oregon State University, and
          a love of all things weird and wonderful.
        </div>
        <BioImg src={Sel}/>
      </AboutModalContent>
    </CustomModal>
  </div>
  );
}

export default hot(module)(About);
