import * as React from 'react';
import NoSsr from '@mui/material/NoSsr';
import Divider from '@mui/material/Divider';
import Head from 'src/modules/components/Head';
import AppHeader from 'src/layouts/AppHeader';
import Hero from 'src/components/home/Hero';
import References, { CORE_CUSTOMERS } from 'src/components/home/References';
import ProductSuite from 'src/components/home/ProductSuite';
import ValueProposition from 'src/components/home/ValueProposition';
import DesignSystemComponents from 'src/components/home/DesignSystemComponents';
import Testimonials from 'src/components/home/Testimonials';
import Sponsors from 'src/components/home/Sponsors';
import HeroEnd from 'src/components/home/HeroEnd';
import AppFooter from 'src/layouts/AppFooter';
import BrandingCssVarsProvider from 'src/BrandingCssVarsProvider';
import NewsletterToast from 'src/components/home/NewsletterToast';
import AppHeaderBanner from 'src/components/banner/AppHeaderBanner';

export default function Home() {
  return (
    <BrandingCssVarsProvider>
      <Head
        title="MUI: The React component library you always wanted"
        description="MUI provides a simple, customizable, and accessible library of React components. Follow your own design system, or start with Material Design."
      >
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'MUI',
              url: 'https://mui.com/',
              logo: 'https://mui.com/static/logo.png',
              sameAs: [
                'https://twitter.com/MUI_hq',
                'https://github.com/mui/',
                'https://opencollective.com/mui',
              ],
            }),
          }}
        />
      </Head>
      <NoSsr>
        <NewsletterToast />
      </NoSsr>
      <AppHeaderBanner />
      <AppHeader />
      <main id="main-content">
        <Hero />
        <References companies={CORE_CUSTOMERS} />
        <Divider />
        <ProductSuite />
        <Divider />
        <ValueProposition />
        <Divider />
        <DesignSystemComponents />
        <Divider />
        <Testimonials />
        <Divider />
        <Sponsors />
        <Divider />
        <HeroEnd />
        <Divider />
      </main>
      <AppFooter />
    </BrandingCssVarsProvider>
  );
}
