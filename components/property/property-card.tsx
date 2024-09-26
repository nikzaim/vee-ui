import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

const PropertyCard = () => {
  return (
    <Link href={'property/1'}>
      <Card className="w-full max-w-xs overflow-hidden">
        <div className="overflow-hidden">
          <Image
            src="/beach-house.jpg"
            alt="Product Image"
            width={400}
            height={400}
            className="aspect-square object-cover hover:scale-110 transition"
          />
        </div>

        <CardContent className="p-4">
          <div className="text-sm">Artwork</div>
          <div className="font-bold">Beautiful Creation</div>
          <p className="text-sm">
            A masterpiece of art, capturing the essence of beauty and
            creativity.
          </p>
          <div className="font-bold">$99</div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default PropertyCard;
