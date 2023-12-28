import { useMediaQuery, useTheme } from '@mui/material';
import React, { Fragment } from 'react';
import Marquee from 'react-fast-marquee';
// Locale Files
import { LogoTickerIds } from '../../Constants/LogoTickerIds';
import { RowBox } from '../../Shared/CustomBox';
import {
  BoldoLogo,
  LogoText,
  LogoTickerContainer,
  LogoWrapper,
  PrestoLogo,
} from './LogoTicker.styles';

const LogoTicker = () => {
  const theme = useTheme();
  const screenSize = useMediaQuery(theme.breakpoints.down('sm'));
  const conditionForGradientSize = screenSize ? 75 : 200;

  return (
    <Marquee
      speed={100}
      gradient={true}
      gradientColor="#0A2640, #0A2640"
      gradientWidth={conditionForGradientSize}
      autoFill
    >
      <LogoTickerContainer>
        <RowBox sx={{ justifyContent: 'center' }}>
          {LogoTickerIds.map(({ id }) => (
            <Fragment key={id}>
              <LogoWrapper>
                <BoldoLogo />
                <LogoText variant={'span'}>Boldo</LogoText>{' '}
              </LogoWrapper>
              <LogoWrapper>
                <PrestoLogo />
                <LogoText variant={'span'}>Presto</LogoText>
              </LogoWrapper>
            </Fragment>
          ))}
        </RowBox>
      </LogoTickerContainer>
    </Marquee>
  );
};

export default LogoTicker;
