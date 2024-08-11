import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { FormValues, SelectLiveNameAndVenueProps } from '@/types';

const VenueCheckBoxForms = ({ params }: { params: SelectLiveNameAndVenueProps[] }) => {
  const navigate = useNavigate();

  const form = useForm<FormValues>({
    defaultValues: {
      items: [],
    },
  });

  const handleButtonClick = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const selectedItems = form.watch('items');
    const queryParams = new URLSearchParams();
    selectedItems.forEach((item) => queryParams.append('venue_id', item));

    navigate(`/result?${queryParams.toString()}`);
  };

  return (
    <Form {...form}>
      <FormField
        control={form.control}
        name='items'
        render={() => (
          <FormItem>
            {params.map((param, index) => (
              <div key={index}>
                <div className='mt-4 mb-2'>
                  <FormLabel className='font-bold text-xl'>{param.liveName}</FormLabel>
                </div>
                {param.venues.map((venue, venueIndex) => (
                  <FormField
                    key={venueIndex}
                    control={form.control}
                    name='items'
                    render={({ field }) => (
                      <FormItem
                        key={venueIndex}
                        className='flex flex-row items-start space-x-3 space-y-0 pb-6'
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
        次へ進む
      </Button>
      <Link to='/live' style={{ textDecoration: 'none' }}>
        <Button
          variant='secondary'
          className='w-full items-center justify-center p-6 my-2 tracking-tight'
        >
          ライブを選び直す
        </Button>
      </Link>
      <Link to='/' style={{ textDecoration: 'none' }}>
        <Button
          variant='outline'
          className='w-full items-center justify-center p-6 my-2 tracking-tight'
        >
          最初に戻る
        </Button>
      </Link>
    </Form>
  );
};

export default VenueCheckBoxForms;
