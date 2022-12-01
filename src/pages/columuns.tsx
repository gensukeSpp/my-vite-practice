// import { HogePage } from '~/pages/hoge'
import { RootPage } from '~/pages/root'

import { MenuHeader } from './head/header'
import { TopicsArea } from './topics/main';

export const MyPage = () => (
    <>
      <MenuHeader />
      <TwoColumnLayout>
        {/* <HogePage /> */}
        <TopicsArea />
        <RootPage />
      </TwoColumnLayout>
    </>
  )
  
  const TwoColumnLayout:React.FC<Props> = ({ children }) => (
    <div style={{display: 'flex'}}>
      <div style={{flex: '1 1 70%'}}>{children[0]}</div>
      <div style={{flex: '1 1 30%'}}>{children[1]}</div>
    </div>
  )
  
  interface Props {
    children: React.ReactElement[];
  }