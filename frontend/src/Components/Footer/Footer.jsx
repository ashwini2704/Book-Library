import React from 'react'
import { Link } from 'react-router-dom';
import { Heading,VStack, HStack } from "@chakra-ui/react";
import { BsFacebook, BsInstagram, BsTwitter,BsApple, BsLinkedin } from "react-icons/bs";
import { Icon } from '@chakra-ui/react'
import { BiLogoPlayStore } from "react-icons/bi";
import "./footer.module.css";
import styled from 'styled-components';

const Footer = () => {
  return (
    <FOOT>
      <div>
            <h2>Library</h2>
            <div className='div'>
                  <Link className='Link' to={"/"}>Home</Link>
                  <Link className='Link' to={"/about"}>About</Link>
                  <Link className='Link' to={"/books"}>Books</Link>
            </div>
      </div>
      <div>
      <h2>Quick Links</h2>
            <div className='div'>
                  <Link className='Link' to={"/login"}>Login</Link>
                  <Link className='Link' to={"/signup"}>Signup</Link>
            </div>
      </div>
      <div>
        <h2>Top Categories</h2>
        <div className='div'>
          <p className='Link'>Fiction</p>
          <p className='Link'>Poetry</p>
          <p className='Link'>Mystery</p>
          <p className='Link'>Adventure</p>
        </div>
      </div>
      <div className='footer'>
      <VStack ml={"30%"} gap={5}>
                <VStack>
                    <Heading className="head" fontWeight={600} as={"h5"} size={"sm"} >GET MEDION APP ON</Heading>
                    <HStack>
                        <Icon color={"gray.700"} boxSize={22} as={BiLogoPlayStore} />
                        <Icon color={"gray.700"} boxSize={22} as={BsApple} />
                    </HStack>
                </VStack>
                <VStack>
                    <Heading className="head" fontWeight={600} as={"h5"} size={"sm"} >FOLLOW US ON</Heading>
                    <HStack gap={"9px"}>
                        <Icon color={"gray.700"} boxSize={22} as={BsFacebook} />
                        <Icon color={"gray.700"} boxSize={22} as={BsInstagram} />
                        <Icon color={"gray.700"} boxSize={22} as={BsTwitter} />
                        <Icon color={"gray.700"} boxSize={22} as={BsLinkedin} />
                    </HStack>
                </VStack>
                
            </VStack>
      </div>
    </FOOT>
  )
}

export default Footer

const FOOT = styled.div`
   background: linear-gradient(
        to bottom,
        #f2f8fb,
        #b6b7b8,
        #929496
      );
      padding: 50px 250px;
      display: flex;
      justify-content: space-around;
      h2{
        font-size: 18px;
        color: var(--heading-color);
        margin-bottom: 15px;
      }
      .div {
        display: flex;
        flex-direction: column;
      }
      .Link {
        color: var(--text-color);
        margin-bottom: 5px;
      }
`