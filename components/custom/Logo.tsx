import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Logo() {
  return (
    <Link className='' href={'/'}>
      <Image
        src='/assets/images/logo.svg'
        width={100}
        height={100}
        alt='logo'
      />
    </Link>
  );
}
