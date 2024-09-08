'use client';
import React from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { CiMenuFries } from 'react-icons/ci';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import useSWR, { Fetcher } from 'swr';
import { Category, Page, SubCategory } from '@/types';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function SidebarMenu() {
  const [show, setShow] = useState<boolean>(false);
  const [subCategories, setSubCategories] = useState<SubCategory[]>();
  const router = useRouter();
  //client side data fetching
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

  //   const { data, error, isLoading } = useSWR<Page[]>(
  //     process.env.NEXT_PUBLIC_API_URL + '/api/pages',
  //     fetcher
  //   );

  return (
    <>
      {isLoading && <div>loading...</div>}
      <Sheet>
        <SheetTrigger>
          <CiMenuFries size={34} />
        </SheetTrigger>
        <SheetContent
          className={cn('px-4 w-full md:w-[400px]  [&>#closeBtn]:text-3xl ')}
        >
          <div className='mt-10'>
            <Tabs defaultValue='category' className='w-full'>
              <TabsList className='grid grid-cols-2 py-0'>
                <TabsTrigger value='category'>Categories</TabsTrigger>
                <TabsTrigger value='page'>Pages</TabsTrigger>
              </TabsList>

              <TabsContent value='category'>
                <div className='flex flex-col gap-8 h-full'>
                  {data &&
                    data.slice(0, 20).map((item: Category) => (
                      <div key={item._id} className='group px-4 py-2'>
                        <div className='flex items-center gap-4'>
                          <span
                            onClick={() =>
                              router.push(`/categories/${item.slug}`)
                            }
                            className='capitalize hover:text-primary-500 cursor-pointer'
                          >
                            {item.name}
                          </span>
                          {item?.submenu && item.submenu.length > 0 && (
                            <ChevronRight
                              className='text-icon ms-auto h-5 w-5'
                              onClick={() => {
                                setShow(!show);
                                setSubCategories(item?.submenu);
                              }}
                            />
                          )}
                        </div>
                      </div>
                    ))}
                </div>
              </TabsContent>
              <TabsContent value='page'>
                {pageApi.data &&
                  pageApi.data.map((item: Page) => (
                    <div
                      key={item._id}
                      className='group inline-flex items-center px-4 py-2 gap-4 w-full hover:text-primary-700 cursor-pointer capitalize '
                    >
                      <div className='flex items-center gap-4 w-full'>
                        <span
                          onClick={() =>
                            router.push(`categories/${item.link}/products`)
                          }
                        >
                          {item.name}
                        </span>
                        {item?.subpage && item.subpage.length > 0 && (
                          <ChevronRight
                            className='text-icon ms-auto'
                            size={14}
                          />
                        )}
                      </div>
                    </div>
                  ))}
              </TabsContent>
            </Tabs>
          </div>
        </SheetContent>
      </Sheet>

      <Sheet open={show}>
        <SheetTrigger></SheetTrigger>
        <SheetContent
          className='px-4 w-full [&>#closeBtn]:hidden md:w-[400px]'
          side='left'
        >
          <div className='duration-300 ease-in absolute top-0 h-screen left-0 bg-white w-[260px] p-8'>
            <Button
              onClick={() => setShow(!show)}
              variant='default'
              title='back'
              className='hover:bg-black hover:text-white'
            >
              <ChevronLeft size={24} />
            </Button>
            <div className='flex flex-col gap-8 justify-center mt-12'>
              {subCategories &&
                subCategories.map((item: SubCategory, idx: number) => (
                  <Link
                    className='capitalize hover:text-primary-800'
                    key={idx}
                    href={`/categories/${item.link}/products`}
                  >
                    {item.name}
                  </Link>
                ))}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
