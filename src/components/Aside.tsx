import { links } from '@/data/links';
import { liveNames } from '@/data/live';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Aside = () => {
  return (
    <div className='relative overflow-hidden h-full' data-testid='sideNav'>
      <div className={cn('pb-2', 'hidden lg:block')}>
        <div className='space-y-2'>
          <div className='px-3'>
            {links.map((link) => (
              <Link to={link.href} key={link.href} style={{ textDecoration: 'none' }}>
                <Button
                  variant='ghost'
                  className='w-full justify-start mb-2 px-4 text-lg font-semibold tracking-tight'
                >
                  {link.title}
                </Button>
              </Link>
            ))}
          </div>
          <h2 className='relative px-7 text-lg font-semibold tracking-tight'>セトリ一覧</h2>
          <ScrollArea className='h-[300px] px-1'>
            <div className='space-y-2 p-2'>
              {liveNames?.map((liveName) => (
                <Link
                  to={`set-list/${liveName.id}`}
                  key={liveName.id}
                  style={{ textDecoration: 'none' }}
                >
                  <Button variant='ghost' className='w-full justify-start font-normal'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='mr-2 h-4 w-4'
                    >
                      <path d='M21 15V6' />
                      <path d='M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z' />
                      <path d='M12 12H3' />
                      <path d='M16 6H3' />
                      <path d='M12 18H3' />
                    </svg>
                    {liveName.name}
                  </Button>
                </Link>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};

export default Aside;
