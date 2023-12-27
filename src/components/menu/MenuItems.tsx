/* eslint-disable @next/next/no-img-element */
import { Button, Image } from '@nextui-org/react';
import React from 'react';

export default function MenuItems() {
  return (
    <div className="bg-gray-200 p-4 rounded-lg text-center group hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all transform hover:scale-105">
      <div className="text-center">
        <Image
          isZoomed
          src="/pizza.png"
          alt=""
          className="max-h-auto max-h-34 block mx-auto"
        />
      </div>
      <h4 className="font-semibold text-xl my-3">Pepperoni Pizza</h4>
      <p className="text-gray-500 text-sm">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit
      </p>
      <Button className="mt-4 bg-gradient-to-tr from-orange-500 to-red-600 text-white rounded-full px-8 py-2 shadow-lg">
        Add to cart $12
      </Button>
    </div>
  );
}
