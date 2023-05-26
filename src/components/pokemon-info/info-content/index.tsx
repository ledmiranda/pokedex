import { useState } from 'react';
import { InfoTabs } from '../../../models/tabs';
import InfoContentStyles from './info-content.style';

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
    </InfoContainer>
  );
};

export default InfoContent;
