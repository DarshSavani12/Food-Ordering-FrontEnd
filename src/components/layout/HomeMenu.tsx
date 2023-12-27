import Image from 'next/image';
import React from 'react';
import { MenuItems } from '@food/components/menu';
import { SectionHeader } from '@food/components/layout';

function HomeMenu() {
  return (
    <section className="">
      <div className="absolute left-0 right-0 w-full justify-start">
        <div className="absolute left-0 -top-[70px] text-left -z-10">
          <Image src={'/sallad1.png'} width={109} height={189} alt="" />
        </div>
        <div className="absolute -top-[100px] right-0 -z-10">
          <Image src={'/sallad2.png'} width={107} height={195} alt="" />
        </div>
      </div>
      <div className="text-center">
        <SectionHeader subHeader="Check out" mainHeader="Menu" />
      </div>
      <div className="grid grid-cols-3 gap-4 my-4">
        <MenuItems />
        <MenuItems />
        <MenuItems />
        <MenuItems />
        <MenuItems />
        <MenuItems />
      </div>
    </section>
  );
}

export default HomeMenu;
