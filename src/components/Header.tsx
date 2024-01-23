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
import HeaderNavigation from './HeaderMenuItem';
import HeaderToggleContent from './HeaderToggleContent';

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
                        <HeaderToggleContent params={liveName} />
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              {links.map((link) => (
                <HeaderNavigation key={link.href} params={link} />
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
        <div className='ml-auto md:ml-2'>
          <ModeToggle />
        </div>
      </div>
      <div className='md:hidden border-t'>Mobile画面ならMenueが入る予定</div>
    </header>
  );
};

export default Header;
