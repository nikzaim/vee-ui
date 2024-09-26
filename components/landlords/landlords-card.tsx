import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { MapPinned } from 'lucide-react';
import { Button } from '../ui/button';
import PropertiesListing from '../property/properties-listing';

const LandlordsCard = () => {
  return (
    <div className="flex gap-4">
      <Card className="w-1/3 h-fit flex flex-col items-center">
        <CardHeader className="flex flex-col items-center ">
          <CardTitle>Nik Zaim</CardTitle>
          <CardDescription className="flex gap-2">
            <MapPinned size={16} />
            Shah Alam
          </CardDescription>
        </CardHeader>
        <CardContent className="">
          <Avatar className="size-20">
            <AvatarImage src="https://github.com/nikzaim.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </CardContent>
        <CardFooter>
          <Button className="bg-app">Contact</Button>
        </CardFooter>
      </Card>
      <PropertiesListing className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3" />
    </div>
  );
};

export default LandlordsCard;
