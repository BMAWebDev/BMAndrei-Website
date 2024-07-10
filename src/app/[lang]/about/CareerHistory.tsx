import Image from 'next/image';
import { useTranslation } from 'react-i18next';
// models
import { SectionProps } from '@models/layout';
// components
import Section from '@components/Section';
import { Title, Text } from '@components/Texts';
import CodeImg from '@assets/code.png';
import TeamImg from '@assets/team.png';
// style
import Style from './style';

const CareerHistory: React.FC<SectionProps> = ({ index }) => {
  const { t } = useTranslation();

  return (
    <Section index={index} direction="column" gap={40}>
      <Title>{t('aboutpage.career_history.title')}</Title>

      <Style.CareerHistoryPosition>
        <Style.CareerHistoryColumn>
          <Image
            src={CodeImg}
            className="full-size"
            alt="Software development image"
          />
        </Style.CareerHistoryColumn>

        <Style.CareerHistoryColumn align="flex-end">
          <Title align="right">
            {t('aboutpage.career_history.software_developer.title')}
          </Title>

          <Text align="right">
            {t('aboutpage.career_history.software_developer.description')}
          </Text>
        </Style.CareerHistoryColumn>
      </Style.CareerHistoryPosition>

      <Style.CareerHistoryPosition isReversed>
        <Style.CareerHistoryColumn>
          <Title align="right">
            {t('aboutpage.career_history.team_leader.title')}
          </Title>

          <Text>{t('aboutpage.career_history.team_leader.description')}</Text>
        </Style.CareerHistoryColumn>

        <Style.CareerHistoryColumn>
          <Image src={TeamImg} className="full-size" alt="Team image" />
        </Style.CareerHistoryColumn>
      </Style.CareerHistoryPosition>
    </Section>
  );
};

export default CareerHistory;
