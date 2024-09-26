import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const PropertyDetailsPage = () => {
  return (
    <div className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
      <div className="flex flex-col gap-6 m-4">
        <div className="w-full">
          <Image
            src="/beach-house.jpg"
            alt="Product Image"
            className="aspect-square object-cover w-full rounded-lg h-96"
            width="500"
            height="500"
          />
        </div>
        <div className="flex flex-col-reverse gap-4 md:flex-row md:gap-4">
          <div className="w-full md:w-1/2">
            <Card>
              <CardContent className="p-4">
                <h2 className="text-2xl font-bold mb-2">Eco Villa</h2>
                <p className="text-gray-700 mb-4">
                  4 guest - 2 bedrooms - 1 bathroom
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="w-full md:w-1/2">
            <Card>
              <CardContent className="p-4">
                <h2 className="text-2xl font-bold mb-2">$200 per night</h2>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="variant"
                  >
                    Guest
                  </label>
                  <select
                    className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="variant"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                </div>
                <Button className="w-full bg-app">Book</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailsPage;
