'use client';
import { CircleUser, Menu, Search, TreePalm } from 'lucide-react';
import Link from 'next/link';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleActionClick = (action: string) => {
    // Create a new URLSearchParams object
    const newSearchParams = new URLSearchParams(searchParams);

    if (action === 'sign-in') {
      // Add or update the 'sign-in' query parameter
      newSearchParams.set('sign-in', 'true');
    } else {
      newSearchParams.set('sign-up', 'true');
    }

    // Use the router to navigate with the updated search params
    router.push(`${pathname}?${newSearchParams.toString()}`);
  };

  return (
    <header className="top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          <TreePalm className="h-6 w-6 text-app" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <Link
          href="/"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Dashboard
        </Link>
        <Link
          href="/landlords/2"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Landlords
        </Link>
        <Link
          href="/my-reservations"
          className="w-28 text-muted-foreground transition-colors hover:text-foreground"
        >
          <h1>My Reservations</h1>
        </Link>
        <Link
          href="/my-properties"
          className="w-24 text-muted-foreground transition-colors hover:text-foreground"
        >
          <h1>My Properties</h1>
        </Link>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="#"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <TreePalm className="h-6 w-6 text-app" />
              <span className="sr-only">Acme Inc</span>
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              Dashboard
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              Orders
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              Products
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              Customers
            </Link>
            <Link href="#" className="hover:text-foreground">
              Settings
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <form className="ml-auto flex-1 sm:flex-initial">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
            />
          </div>
        </form>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              <CircleUser className="h-5 w-5" />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <Link href={'/inbox'}>
              <DropdownMenuItem className="focus:cursor-pointer">
                Inbox
              </DropdownMenuItem>
            </Link>
            <DropdownMenuItem
              className="focus:cursor-pointer"
              onClick={() => handleActionClick('sign-in')}
            >
              Sign In
            </DropdownMenuItem>

            <DropdownMenuItem
              className="focus:cursor-pointer"
              onClick={() => handleActionClick('sign-up')}
            >
              Sign Up
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Navbar;
