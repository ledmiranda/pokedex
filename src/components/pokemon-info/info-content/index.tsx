import { useState } from 'react';
import { InfoTabs } from '../../../models/tabs';
import InfoContentStyles from './info-content.style';
import InfoAbout from '../info-about';
import InfoStats from '../info-stats';
import InfoEvolutions from '../info-evolutions';

interface IInfoContent {
  name: string;
  photo: string;
  color: string;
}

const InfoContent = ({ name, photo, color }: IInfoContent) => {
  const [currentTab, setCurrentTab] = useState(InfoTabs.about);
  const { InfoContainer, Photo, TabsContainer, Tab } = InfoContentStyles;

  const changeTab = (tabName: InfoTabs) => {
    setCurrentTab(tabName);
  };

  const getCurrentTab = () => {
    switch (currentTab) {
      case InfoTabs.about:
        return <InfoAbout />;
      case InfoTabs.stats:
        return <InfoStats />;
      case InfoTabs.evolutions:
        return <InfoEvolutions />;
      default:
        return null;
    }
  };

  return (
    <InfoContainer>
      <Photo src={photo} alt={name} />
      <TabsContainer>
        {Object.values(InfoTabs).map((tab) => (
          <Tab
            key={tab}
            $isActive={tab === currentTab}
            $typeColor={color}
            onClick={() => changeTab(tab)}
          >
            {tab}
          </Tab>
        ))}
      </TabsContainer>
      {getCurrentTab()}
    </InfoContainer>
  );
};

export default InfoContent;
