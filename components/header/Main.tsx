'use client';
import React, { useState } from 'react';
import Container from '../custom/Container';
import Logo from '../custom/Logo';
import MobileButton from './MobileButton';
import Row from '../custom/Row';
import IconsGroups from './IconsGroups';
import MainMenu from './MainMenu';

export default function Main() {
  const [openSearchBar, setOpenSearchBar] = useState(false);
  const [openCartBar, setOpenCartBar] = useState(false);
  return (
    <section className='h-full'>
      <Container>
        <Row className='justify-between'>
          <MobileButton />
          <Logo />
          <MainMenu />
          <IconsGroups
            openSearchBar={openSearchBar}
            setOpenSearchBar={setOpenSearchBar}
            openCartBar={openCartBar}
            setOpenCartBar={setOpenCartBar}
          />
        </Row>
      </Container>
    </section>
  );
}
