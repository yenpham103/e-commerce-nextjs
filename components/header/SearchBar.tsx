'use client';
import React, { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Search, X } from 'lucide-react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';
import useSWR, { Fetcher } from 'swr';
import { Product } from '@/types';
import Image from 'next/image';
import { getBestPriceWithDiscountFromProduct } from '@/lib/utils';
import Loading from '../custom/Loading';
interface SearchBarProps {
  openSearchBar: boolean;
  setOpenSearchBar: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function SearchBar({
  openSearchBar,
  setOpenSearchBar,
}: SearchBarProps) {
  const [search, setSearch] = useState('');
  const router = useRouter();
  //client side data fetching
  const fetcher: Fetcher<Product[], string> = (args) =>
    fetch(args)
      .then((res) => res.json())
      .then((res) => res.data);

  const { data, error, isLoading } = useSWR<Product[]>(
    process.env.NEXT_PUBLIC_API_URL + '/api/products?search=' + search,
    fetcher
  );
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    //Todo: Call Api
    //use Debounce
    setSearch(e.currentTarget.value);
  };
  if (error) return <div>data fetching error!</div>;
  return (
    <>
      {isLoading && <Loading isLoading={true} />}
      <Dialog open={openSearchBar}>
        <DialogContent className='lg:max-w-screen-xl z-[99999] [&>.closeBtn]:hidden '>
          <div className='flex items-center w-full gap-4'>
            <Search className='text-slate-300' />
            <Input
              className='outline-none text-slate-500 focus-visible:ring-transparent font-medium text-xl'
              onInput={handleSearch}
              placeholder='Search products here...'
            />
            <Button
              className='hover:bg-primary-500 group'
              variant='outline'
              size={'icon'}
              onClick={() => setOpenSearchBar(!openSearchBar)}
            >
              <X className='group-hover:text-white' />
            </Button>
          </div>
          <div className='flex overflow-y-auto w-full py-12 gap-12 flex-col justify-start h-[600px] px-8 '>
            {data &&
              data.map((item: Product) => (
                <div
                  key={item._id}
                  className='group flex flex-col justify-start gap-8 px-8 items-center lg:h-fit lg:flex-row lg:justify-between cursor-pointer hover:border-gray-50 hover:scale-105 transition-all hover:shadow-lg py-4 '
                  role='button'
                  onClick={() => router.push(`/products/${item.slug}`)}
                >
                  <Image
                    src={item.subProducts[0].options[0].images[0]}
                    width={60}
                    height={80}
                    alt={item.name}
                    className='object-contain'
                  />
                  <span className='text-center'>
                    {item.name.substring(0, 100)}
                  </span>
                  <div className='w-40 text-center  font-bold text-xl text-primary-900  '>
                    {getBestPriceWithDiscountFromProduct(item)}
                  </div>
                </div>
              ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
