'use client';
import React from 'react';
import Row from '../custom/Row';
import { CiSearch, CiShoppingCart, CiUser } from 'react-icons/ci';
import { Button } from '../ui/button';
import SearchBar from './SearchBar';
import CartBar from './CartBar';
import { useRouter } from 'next/navigation';

interface IconsGroupsProps {
  openSearchBar: boolean;
  setOpenSearchBar: React.Dispatch<React.SetStateAction<boolean>>;
  openCartBar: boolean;
  setOpenCartBar: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function IconsGroups({
  openSearchBar,
  setOpenSearchBar,
  openCartBar,
  setOpenCartBar,
}: IconsGroupsProps) {
  const router = useRouter();
  return (
    <section className='flex items-center gap-12 relative '>
      <Row className='lg:gap-4 '>
        <SearchBar
          openSearchBar={openSearchBar}
          setOpenSearchBar={setOpenSearchBar}
        />
        <Button
          variant='nostyle'
          size='icon'
          onClick={() => setOpenSearchBar(!openSearchBar)}
        >
          <CiSearch
            size='40'
            className='hover:text-primary-700 flex-1 text-right'
          />
        </Button>
        <Button
          variant='nostyle'
          size='icon'
          className='hidden lg:block relative'
          onClick={() => setOpenCartBar(!openCartBar)}
        >
          <CiShoppingCart size='40' className='hover:text-primary-700' />
          <span className='absolute flex items-center justify-center text-white bg-primary-500 w-6 h-6 rounded-full -top-1 -right-1'>
            0
          </span>
        </Button>
        <Button
          variant='nostyle'
          size='icon'
          onClick={() => router.push('/account/dashboard')}
          className='hidden lg:block'
        >
          <CiUser size='40' className=' lg:block hover:text-primary-700' />
        </Button>
        <CartBar openCartBar={openCartBar} setOpenCartBar={setOpenCartBar} />
      </Row>
    </section>
  );
}
