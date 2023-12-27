import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import { Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react';
// Locale Files
import { EnterpriseCard } from '../../Constants/EnterpriseCard';
import { ColumnBox, RowBox } from '../../Shared/CustomBox';
import {
  ArrowIcon,
  CustomCard,
  CustomCardContent,
  CustomCardMedia,
  EnterpriseTemplateContainer,
  Img,
  TitleContainer,
  TitleText,
} from './Enterprise.styles';

const EnterpriseTemplate = () => {
  const theme = useTheme();
  const screensize = useMediaQuery(theme.breakpoints.down('lg'));

  const maxSteps = EnterpriseCard.length - 1;
  const [startStep, setStartStep] = useState(0);
  const [activeStep, setActiveStep] = useState(1);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    if (screensize) {
      setStartStep(activeStep - 1);
    } else if (!screensize) {
      setStartStep(Math.sign(activeStep - 3) === -1 ? 0 : activeStep - 3);
    }

    setCards(EnterpriseCard.slice(startStep, activeStep));
  }, [startStep, activeStep, screensize]);

  const handleNext = () => {
    if (screensize) {
      setStartStep((prev) => prev + 1);
      setActiveStep((prev) => prev + 1);
    } else {
      setStartStep(2);
      setActiveStep(5);
    }
  };

  const handleBack = () => {
    if (screensize) {
      setStartStep((prev) => prev - 1);
      setActiveStep((prev) => prev - 1);
    } else {
      setStartStep(0);
      setActiveStep(3);
    }
  };

  return (
    <EnterpriseTemplateContainer data-aos="fade-up">
      <TitleContainer>
        <TitleText variant="h1">
          An enterprise template to ramp up your company website
        </TitleText>
        <RowBox sx={{ gap: '28px' }}>
          <ArrowIcon
            onClick={handleBack}
            disabled={screensize ? activeStep === 1 : activeStep === 3}
          >
            <ArrowBackOutlinedIcon />
          </ArrowIcon>
          <ArrowIcon
            onClick={handleNext}
            disabled={screensize ? activeStep === 6 : activeStep === maxSteps}
          >
            <ArrowForwardOutlinedIcon />
          </ArrowIcon>
        </RowBox>
      </TitleContainer>
      <RowBox
        sx={{
          justifyContent: 'center',
          gap: '22px',
          mt: '72px',
        }}
      >
        {cards.map(({ id, img, text, name, role }) => (
          <CustomCard key={id}>
            <CustomCardContent>
              <Typography
                variant="h3"
                sx={{ lineHeight: '36px', width: '270px' }}
              >
                {text}
              </Typography>
              <CustomCardMedia>
                <Img src={img} />
                <ColumnBox
                  sx={{
                    alignItems: 'flex-start',
                    marginLeft: '16px',
                  }}
                >
                  <Typography variant="h5" sx={{ fontWeight: 700 }}>
                    {name}
                  </Typography>
                  <Typography variant="h5">{role}</Typography>
                </ColumnBox>
              </CustomCardMedia>
            </CustomCardContent>
          </CustomCard>
        ))}
      </RowBox>
    </EnterpriseTemplateContainer>
  );
};

export default EnterpriseTemplate;
