import * as React from 'react';
import TopLayoutCareers from 'src/modules/components/TopLayoutCareers';
import * as pageProps from 'src/pages/company/contact/contact.md?@mui/markdown';

export default function Page() {
  return <TopLayoutCareers {...pageProps} />;
}
