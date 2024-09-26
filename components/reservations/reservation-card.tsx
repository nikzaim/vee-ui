import { Card, CardContent, CardFooter } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { MoveRight } from 'lucide-react';

const ReservationCard = () => {
  return (
    <Link href={'property/1'}>
      <Card className="flex overflow-hidden">
        <div className="overflow-hidden">
          <Image
            src="/beach-house.jpg"
            alt="Product Image"
            width={300}
            height={300}
            className="scale-[1.35] aspect-square object-cover hover:scale-150 transition md:scale-100 hover:md:scale-110"
          />
        </div>
        <div className="flex flex-col w-full">
          <CardContent className="p-4">
            <div className="text-sm">Property name</div>
            <div className="font-bold">Beautiful Creation</div>
            <p className="text-sm">
              A masterpiece of art, capturing the essence of beauty and
              creativity.
            </p>
            <div className="font-bold">$99</div>
          </CardContent>
          <CardFooter className="p-4 mt-auto">
            <Button className="w-full flex gap-2 items-center bg-app">
              Details
              <MoveRight />
            </Button>
          </CardFooter>
        </div>
      </Card>
    </Link>
  );
};

export default ReservationCard;
