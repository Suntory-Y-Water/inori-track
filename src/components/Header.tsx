import { ModeToggle } from './ui/mode-toggle';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Link } from 'react-router-dom';
import { links } from '@/data/links';
import { liveNames } from '@/data/live';
import MobileMenu from './MobileMenu';

const Header = () => {
  return (
    <header
      data-testid='header'
      className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'
    >
      <div className='container px-4 flex h-14 items-center'>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <h1 className='flex ml-3 text-3xl title-font font-medium items-center md:mb-0'>
            Inori Track
          </h1>
        </Link>

        <nav className='hidden md:flex md:ml-auto items-center text-base justify-center font-medium'>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>セトリ一覧</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className='gap-3 p-6 md:w-[400px] lg:w-[300px] lg:grid-cols-[.75fr_1fr]'>
                    {liveNames.map((liveName) => (
                      <li key={liveName.id}>
                        <Link
                          to={`set-list/${liveName.id}`}
                          style={{ textDecoration: 'none' }}
                          className='group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50'
                        >
                          {liveName.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              {links.map((link) => (
                <NavigationMenuItem key={link.href}>
                  <Link
                    to={link.href}
                    style={{ textDecoration: 'none' }}
                    className='group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 key={link.href}'
                  >
                    {link.title}
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
        <div className='ml-auto md:ml-2'>
          <ModeToggle />
        </div>
      </div>
      <div className='md:hidden border-t'>
        <MobileMenu />
      </div>
    </header>
  );
};

export default Header;
