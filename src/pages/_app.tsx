import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Router from 'next/router';
import 'nprogress/nprogress.css';
import NProgress from 'nprogress';

NProgress.configure({ showSpinner: false, trickleSpeed: 100 });

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
