import React from 'react';
import { m, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Trash } from 'lucide-react';
import CurrencyFormat from '../custom/CurrencyFormat';
import Link from 'next/link';
import { Button } from '../ui/button';
interface CartBarProps {
  openCartBar: boolean;
  setOpenCartBar: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function CartBar({ openCartBar, setOpenCartBar }: CartBarProps) {
  const handleRemoveItem = () => {};
  return (
    <AnimatePresence>
      {openCartBar && (
        <m.div
          onMouseLeave={() => setOpenCartBar(false)}
          initial={{ opacity: 0, y: -15 }}
          animate={{
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: { type: 'spring', duration: 0.7 },
          }}
          exit={{
            opacity: 0,
            y: -20,
            filter: 'blur(5px)',
            scale: 'scale(0',
            transition: { ease: 'easeIn', duration: 0.22 },
          }}
          className='absolute top-[54px] right-0 h-fit w-[360px] bg-white p-4 shadow-2xl'
        >
          <div className='flex flex-col justify-between gap-8'>
            <span className='text-center '>
              You have <strong>0</strong> items in your cart
            </span>
            {/* Todo: List cart item */}
            <div className='flex flex-col gap-6 border-b snap-y border-gray-200 pb-4 max-h-[360px]  overflow-y-auto '>
              <div className='flex justify-between gap-4 snap-center cursor-grab '>
                <Image
                  src=''
                  alt='prod'
                  width={200}
                  height={200}
                  className='h-20 w-20 object-cover'
                />
                <div className='flex flex-col gap-1 '>
                  <span className='capitalize'>name here</span>
                  <div className='inline-flex gap-4 font-bold'>
                    <span className='font-bold'>2</span>
                    <span>X</span>
                    <span className='font-bold'>$200</span>
                  </div>
                  <div className='inline-flex justify-between'>
                    <div className='inline-flex justify-between gap-1 items-center'>
                      <span>Style:</span>
                      <span className='font-bold'>style</span>
                    </div>
                    <div className='inline-flex gap-1'>
                      <span>Option:</span>
                      <span className='font-bold'>option name</span>
                    </div>
                  </div>
                </div>
                <div
                  className='flex items-start'
                  role='button'
                  onClick={() => handleRemoveItem()}
                >
                  <Trash className='hover:text-primary-500' size={20} />
                </div>
              </div>
              <div className='flex justify-between gap-4 snap-center cursor-grab '>
                <Image
                  src=''
                  alt='prod'
                  width={200}
                  height={200}
                  className='h-20 w-20 object-cover'
                />
                <div className='flex flex-col gap-1 '>
                  <span className='capitalize'>name here</span>
                  <div className='inline-flex gap-4 font-bold'>
                    <span className='font-bold'>2</span>
                    <span>X</span>
                    <span className='font-bold'>$200</span>
                  </div>
                  <div className='inline-flex justify-between'>
                    <div className='inline-flex justify-between gap-1 items-center'>
                      <span>Style:</span>
                      <span className='font-bold'>style</span>
                    </div>
                    <div className='inline-flex gap-1'>
                      <span>Option:</span>
                      <span className='font-bold'>option name</span>
                    </div>
                  </div>
                </div>
                <div
                  className='flex items-start'
                  role='button'
                  onClick={() => handleRemoveItem()}
                >
                  <Trash className='hover:text-primary-500' size={20} />
                </div>
              </div>
              <div className='flex justify-between gap-4 snap-center cursor-grab '>
                <Image
                  src=''
                  alt='prod'
                  width={200}
                  height={200}
                  className='h-20 w-20 object-cover'
                />
                <div className='flex flex-col gap-1 '>
                  <span className='capitalize'>name here</span>
                  <div className='inline-flex gap-4 font-bold'>
                    <span className='font-bold'>2</span>
                    <span>X</span>
                    <span className='font-bold'>$200</span>
                  </div>
                  <div className='inline-flex justify-between'>
                    <div className='inline-flex justify-between gap-1 items-center'>
                      <span>Style:</span>
                      <span className='font-bold'>style</span>
                    </div>
                    <div className='inline-flex gap-1'>
                      <span>Option:</span>
                      <span className='font-bold'>option name</span>
                    </div>
                  </div>
                </div>
                <div
                  className='flex items-start'
                  role='button'
                  onClick={() => handleRemoveItem()}
                >
                  <Trash className='hover:text-primary-500' size={20} />
                </div>
              </div>
              <div className='flex justify-between gap-4 snap-center cursor-grab '>
                <Image
                  src=''
                  alt='prod'
                  width={200}
                  height={200}
                  className='h-20 w-20 object-cover'
                />
                <div className='flex flex-col gap-1 '>
                  <span className='capitalize'>name here</span>
                  <div className='inline-flex gap-4 font-bold'>
                    <span className='font-bold'>2</span>
                    <span>X</span>
                    <span className='font-bold'>$200</span>
                  </div>
                  <div className='inline-flex justify-between'>
                    <div className='inline-flex justify-between gap-1 items-center'>
                      <span>Style:</span>
                      <span className='font-bold'>style</span>
                    </div>
                    <div className='inline-flex gap-1'>
                      <span>Option:</span>
                      <span className='font-bold'>option name</span>
                    </div>
                  </div>
                </div>
                <div
                  className='flex items-start'
                  role='button'
                  onClick={() => handleRemoveItem()}
                >
                  <Trash className='hover:text-primary-500' size={20} />
                </div>
              </div>
              <div className='flex justify-between gap-4 snap-center cursor-grab '>
                <Image
                  src=''
                  alt='prod'
                  width={200}
                  height={200}
                  className='h-20 w-20 object-cover'
                />
                <div className='flex flex-col gap-1 '>
                  <span className='capitalize'>name here</span>
                  <div className='inline-flex gap-4 font-bold'>
                    <span className='font-bold'>2</span>
                    <span>X</span>
                    <span className='font-bold'>$200</span>
                  </div>
                  <div className='inline-flex justify-between'>
                    <div className='inline-flex justify-between gap-1 items-center'>
                      <span>Style:</span>
                      <span className='font-bold'>style</span>
                    </div>
                    <div className='inline-flex gap-1'>
                      <span>Option:</span>
                      <span className='font-bold'>option name</span>
                    </div>
                  </div>
                </div>
                <div
                  className='flex items-start'
                  role='button'
                  onClick={() => handleRemoveItem()}
                >
                  <Trash className='hover:text-primary-500' size={20} />
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-6'>
              <div className='flex justify-between font-bold'>
                <div className='text-xl'>Subtotal</div>
                <strong>
                  <CurrencyFormat value={200} className='text-right' />
                </strong>
              </div>
              <div className='flex flex-col gap-2'>
                <Link
                  href='/cart'
                  className='rounded-sm py-4 flex justify-center hover:bg-primary-500 hover:text-white  border border-border text-base capitalize'
                >
                  view cart
                </Link>
                <Button
                  variant='default'
                  size='lg'
                  className='rounded-sm py-8 capitalize text-base'
                >
                  checkout
                </Button>
              </div>
            </div>
          </div>
        </m.div>
      )}
    </AnimatePresence>
  );
}
