'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';

interface HomeCardProps {
  className?: string;
  img: string;
  title: string;
  description: string;
  handleClick?: () => void;
  gradientType?: 'blueToGreen' | 'orangeToPink' | 'purpleToBlue'; // New prop for gradient type
}

const HomeCard = ({ className, img, title, description, handleClick, gradientType }: HomeCardProps) => {
  // Assign different gradient classes based on the gradientType prop
  const gradientClass = {
    blueToGreen: 'bg-gradient-to-r from-blue-400 to-teal-400',
    orangeToPink: 'bg-gradient-to-r from-orange-400 via-red-300 to-pink-400',
    purpleToBlue: 'bg-gradient-to-r from-purple-500 via-indigo-400 to-blue-400',
  }[gradientType || 'blueToGreen']; // Default to 'blueToGreen' if no gradient is provided

  return (
    <section
      className={cn(
        `${gradientClass} px-4 py-6 flex flex-col justify-between w-full xl:max-w-full min-h-[260px] rounded-[14px] cursor-pointer`,
        className
      )}
      onClick={handleClick}
    >
      <div className="flex-center glassmorphism size-12 rounded-[10px]">
        <Image src={img} alt="meeting" width={27} height={27} />
      </div>
      
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold text-white">{title}</h1>
        <p className="text-lg font-normal text-white">{description}</p>
      </div>
    </section>
  );
};

export default HomeCard;
