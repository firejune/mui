import * as React from 'react';
import Typography from '@mui/material/Typography';
import Section from 'src/layouts/Section';
import SectionHeadline from 'src/components/typography/SectionHeadline';
import GradientText from 'src/components/typography/GradientText';

export default function HeroPricing() {
  return (
    <Section cozy>
      <SectionHeadline
        alwaysCenter
        overline="Pricing"
        title={
          <Typography variant="h2" component="h1" sx={{ mx: 'auto' }}>
            Start using MUI&apos;s products <GradientText>for free!</GradientText>
          </Typography>
        }
        description="Switch to a commercial plan to access advanced features & technical support."
      />
    </Section>
  );
}
