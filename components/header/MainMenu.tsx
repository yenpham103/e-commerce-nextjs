import { cn } from '@/lib/utils';
import { Category, Page, SubCategory } from '@/types';
import { AnimatePresence, m } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import useSWR, { Fetcher } from 'swr';

export default function MainMenu() {
  const [show, setShow] = useState<boolean>(false);

  const pathname = usePathname();
  const fetcher: Fetcher<Category[], string> = (args) =>
    fetch(args)
      .then((res) => res.json())
      .then((res) => res.data);

  const { data, error, isLoading } = useSWR<Category[]>(
    process.env.NEXT_PUBLIC_API_URL + '/api/categories',
    fetcher
  );
  const pageApi = useSWR<Category[]>(
    process.env.NEXT_PUBLIC_API_URL + '/api/pages',
    fetcher
  );

  if (error) return <div>data fetching error!</div>;
  if (pageApi.error) return <div>data fetching page error!</div>;
  return (
    <section className='hidden lg:flex relative z-[9] '>
      <ul className='flex gap-32 justify-between items-center'>
        {pageApi.data &&
          pageApi.data.map((item: Page) => (
            <li key={item._id} className='relative'>
              <Link
                href='/'
                className={cn(
                  'h-full duration-300 after:absolute after:top-[26px] after:left-0 after:w-0 after:h-1 after:bg-primary-700 after:duration-100 after:ease-linear hover:after:w-full capitalize',
                  pathname === item.link && 'border-b-4 border-primary-900'
                )}
              >
                {item.name}
              </Link>
            </li>
          ))}
        {/* categories */}
        <li className='group'>
          <button
            className='capitalize inline-flex items-center '
            onClick={() => setShow(!show)}
          >
            Categories
            <ChevronDown className='mt-1' />
          </button>
          <AnimatePresence>
            {show && (
              <m.div
                initial={{
                  opacity: 0,
                  y: -15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { type: 'spring', duration: 0.7 },
                  filter: 'blur(0px)',
                }}
                exit={{
                  opacity: 0,
                  y: 0,
                  transition: { ease: 'easeIn', duration: 0.22 },
                  filter: 'blur(5px)',
                }}
                className='grid grid-cols-4 justify-items-center grid-rows-auto absolute bg-white py-4 px-4 h-[660px] w-[1100px] z-[9999]  right-0 top-[54px] gap-12 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] shadow-neutral-500 '
              >
                {data &&
                  data.slice(0, 8).map((item: Category) => (
                    <ul key={item._id} className='flex flex-col gap-4 text-xl'>
                      <li>
                        <Link
                          href={`/categories/${item.link}/products`}
                          className='font-bold group/item w-full transition-all flex items-center gap-2 duration-100 ease-linear hover:translate-x-1 '
                        >
                          <h5 className='transition capitalize ease-in-out hover:text-primary-500'>
                            {item.name}
                          </h5>
                        </Link>
                        {item.submenu &&
                          item.submenu.length > 0 &&
                          item.submenu.map((subCat: SubCategory) => (
                            <li
                              key={subCat._id}
                              className='font-normal capitalize duration-300 hover:translate-x-1'
                            >
                              <Link
                                className='hover:text-primary-500'
                                href={`/categories/${subCat.link}/products`}
                              >
                                {subCat?.name}
                              </Link>
                            </li>
                          ))}
                      </li>
                    </ul>
                  ))}
              </m.div>
            )}
          </AnimatePresence>
        </li>
      </ul>
    </section>
  );
}
