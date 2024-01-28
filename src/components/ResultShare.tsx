import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Form, FormField, FormItem, FormLabel } from '@/components/ui/form';

interface FormValues {
  items: number[];
}

export default function ResultShare({ params }: { params: { id: string; title: string }[] }) {
  const form = useForm<FormValues>({
    defaultValues: {
      items: [],
    },
  });

  const tweetText = `あなたが聴いたことのない曲は77曲中${params.length}曲でした!\r\nhttps://my-portfolio-rouge-phi.vercel.app/live-checker\r\n#水瀬いのりライブチェッカー`;
  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;

  return (
    <Form {...form}>
      <FormField
        control={form.control}
        name='items'
        render={() => (
          <FormItem>
            <div className='mt-4 mb-2'>
              <FormLabel className='font-bold text-xl'>あなたが聴いたことのない曲は…</FormLabel>
            </div>
            {params.map((param) => (
              <FormField
                key={param.id}
                control={form.control}
                name='items'
                render={() => (
                  <FormItem
                    key={param.id}
                    className='flex flex-row items-start space-x-3 space-y-0 py-1'
                  >
                    <FormLabel className='font-normal'>{param.title}</FormLabel>
                  </FormItem>
                )}
              />
            ))}
          </FormItem>
        )}
      />
      <Link to={tweetUrl} style={{ textDecoration: 'none' }}>
        <Button
          variant='default'
          className='w-full items-center justify-center p-6 my-2 tracking-tight'
        >
          結果をX(Twitter)で共有する
        </Button>
      </Link>
      <Link to='/' style={{ textDecoration: 'none' }}>
        <Button
          variant='secondary'
          className='w-full items-center justify-center p-6 my-2 tracking-tight'
        >
          最初に戻る
        </Button>
      </Link>
    </Form>
  );
}
