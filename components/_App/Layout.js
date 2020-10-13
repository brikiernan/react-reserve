import Head from 'next/head';
import { Container } from 'semantic-ui-react';

import Header from './Header';

function Layout({ children, user }) {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <link rel='icon' href='https://bkiernan.s3.amazonaws.com/favicon.ico' />
        <meta name='theme-color' content='#00df94' />
        <link
          rel='stylesheet'
          href='//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css'
        />
        <title>ReactReserve</title>
      </Head>
      <Header user={user} />
      <Container text style={{ paddingTop: '1em' }}>
        {children}
      </Container>
    </>
  );
}

export default Layout;
