import Image from 'next/image';
import { RightArrow } from '@food/components/icons';
import { Button } from '@nextui-org/react';

export default function Hero() {
  return (
    <section className="hero mt-10">
      <div className="py-12">
        <h1 className="text-4xl font-semibold">
          Everything <br />
          is better <br />
          with a&nbsp; <span className="text-primary">Pizza</span>
        </h1>
        <p className="my-4 text-gray-500 text-sm">
          Pizza is the missing place that makes every day complete, a simple yet
          delicious joy in life
        </p>
        <div className="flex gap-4">
          <Button className="bg-gradient-to-tr from-orange-500 to-red-600 shadow-lg flex gap-2 text-white px-4 py-2 rounded-full">
            Order Now
            <RightArrow />
          </Button>
        </div>
      </div>
      <div className="relative">
        <Image
          src={'/pizza(2).png'}
          layout={'fill'}
          objectFit={'contain'}
          alt={''}
        />
      </div>
    </section>
  );
}
