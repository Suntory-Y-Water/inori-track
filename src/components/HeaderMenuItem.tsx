import { NavigationMenuItem } from '@/components/ui/navigation-menu';
import { HeaderNavigationProps } from '@/types';
import { Link } from 'react-router-dom';

function HeaderNavigation({ params }: { params: HeaderNavigationProps }) {
  return (
    <NavigationMenuItem>
      <Link
        to={params.href}
        style={{ textDecoration: 'none' }}
        className='group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50'
      >
        {params.title}
      </Link>
    </NavigationMenuItem>
  );
}

export default HeaderNavigation;
