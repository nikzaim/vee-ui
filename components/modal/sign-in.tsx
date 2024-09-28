'use client';

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useRouter, useSearchParams } from 'next/navigation';
import { X } from 'lucide-react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const formSchema = z.object({
  username: z.string().min(2).max(50),
  password: z.string().min(2).max(50),
});

const SignInForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full bg-app">
          Submit
        </Button>
      </form>
    </Form>
  );
};

const SignIn = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleClose = () => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.delete('sign-in');
    router.push(
      `${window.location.pathname}${newSearchParams.toString() ? `?${newSearchParams.toString()}` : ''}`
    );
  };

  // Read the 'sign-in' parameter from the URL
  const isSigningIn = searchParams.get('sign-in') === 'true';
  return (
    <Dialog open={isSigningIn}>
      <DialogTrigger className="hidden">Sign In</DialogTrigger>
      <DialogContent>
        <DialogClose className="absolute right-0 p-4" onClick={handleClose}>
          <X size={16} />
        </DialogClose>
        <DialogHeader>
          <DialogTitle>Sign In</DialogTitle>
          <DialogDescription>
            <SignInForm />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default SignIn;
