'use client';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import type { FormValues, LiveAndVenuesInfo } from '@/types';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

type Props = {
  params: LiveAndVenuesInfo[];
};

export default function VenueCheckBoxForm({ params }: Props) {
  const form = useForm<FormValues<string>>({
    defaultValues: {
      items: [],
    },
  });

  const router = useRouter();

  const handleButtonClick = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const selectedItems = form.watch('items');
    const queryParams = new URLSearchParams();
    queryParams.append('venue_id', selectedItems.join(','));
    router.push(`/result?${queryParams.toString()}`);
  };

  return (
    <Form {...form}>
      <FormField
        control={form.control}
        name='items'
        render={() => (
          <FormItem>
            {params.map((param) => (
              <div key={param.liveName}>
                <div className='mt-4 mb-2'>
                  <FormLabel className='font-bold text-xl'>{param.liveName}</FormLabel>
                </div>
                {param.venues.map((venue, venueIndex) => (
                  <FormField
                    key={venue.id}
                    control={form.control}
                    name='items'
                    render={({ field }) => (
                      <FormItem
                        key={venue.name}
                        className='flex flex-row items-start space-x-3 space-y-0 py-1 pb-6'
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(venue.id)}
                            onCheckedChange={(checked) =>
                              checked
                                ? field.onChange([...field.value, venue.id])
                                : field.onChange(field.value?.filter((value) => value !== venue.id))
                            }
                          />
                        </FormControl>
                        <FormLabel className='font-normal'>{venue.name}</FormLabel>
                      </FormItem>
                    )}
                  />
                ))}
              </div>
            ))}
          </FormItem>
        )}
      />
      <Button
        variant='default'
        className='w-full items-center justify-center p-6 mt-6 mb-2 tracking-tight'
        disabled={form.watch('items').length === 0}
        onClick={handleButtonClick}
      >
        結果を見る
      </Button>
      <Link href='/live'>
        <Button
          variant='secondary'
          className='w-full items-center justify-center p-6 my-2 tracking-tight'
        >
          ライブを選び直す
        </Button>
      </Link>
      <Link href='/'>
        <Button
          variant='outline'
          className='w-full items-center justify-center p-6 my-2 tracking-tight'
        >
          最初に戻る
        </Button>
      </Link>
    </Form>
  );
}
