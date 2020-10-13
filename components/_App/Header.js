import { Menu, Container, Image, Icon } from 'semantic-ui-react';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import nProgress from 'nprogress';
import { handleLogout } from '../../utils/auth';

Router.onRouteChangeStart = () => nProgress.start();
Router.onRouteChangeComplete = () => nProgress.done();
Router.onRouteChangeError = () => nProgress.done();

function Header({ user }) {
  const router = useRouter();
  const isRoot = user && user.role === 'root';
  const isAdmin = user && user.role === 'admin';
  const isRootOrAdmin = isRoot || isAdmin;

  function isActive(route) {
    return route === router.pathname;
  }

  return (
    <Menu stackable fluid id='menu' inverted>
      <Container text>
        <Link href='/'>
          <Menu.Item header active={isActive('/')}>
            <Image
              size='mini'
              src='https://bkiernan.s3.amazonaws.com/logo.svg'
              style={{ marginRight: '1em' }}
            />
            ReactReserve
          </Menu.Item>
        </Link>
        <Link href='/cart'>
          <Menu.Item header active={isActive('/cart')}>
            <Icon name='cart' size='large' />
            Cart
          </Menu.Item>
        </Link>
        {isRootOrAdmin && (
          <Link href='/create'>
            <Menu.Item header active={isActive('/create')}>
              <Icon name='add square' size='large' />
              Create
            </Menu.Item>
          </Link>
        )}
        {user ? (
          <React.Fragment>
            <Link href='/account'>
              <Menu.Item header active={isActive('/account')}>
                <Icon name='user' size='large' />
                Account
              </Menu.Item>
            </Link>

            <Menu.Item onClick={handleLogout} header>
              <Icon name='sign out' size='large' />
              Log Out
            </Menu.Item>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Link href='/login'>
              <Menu.Item header active={isActive('/login')}>
                <Icon name='sign in' size='large' />
                Log In
              </Menu.Item>
            </Link>
            <Link href='/signup'>
              <Menu.Item header active={isActive('/signup')}>
                <Icon name='signup' size='large' />
                Sign Up
              </Menu.Item>
            </Link>
          </React.Fragment>
        )}
      </Container>
    </Menu>
  );
}

export default Header;
