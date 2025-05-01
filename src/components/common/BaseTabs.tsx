import { SyntheticEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { setCurrentTab } from '@/layout/contentLayoutSlice';
import { Badge, Box, Tab, Tabs } from '@mui/material';
import TabImage from '@/components/images/TabImage';
import aveMujicaLogo from '@/assets/ave_mujica_logo.png';
import myGoLogo from '@/assets/mygo_logo.png';
import underConstructionImg from '@/assets/under-construction-symbol-icon.png';

export default function BaseTabs() {
  const dispatch = useDispatch();
  const currentTab = useSelector((state: RootState) => state.contentLayout.currentTab);
  const searchResultNum = useSelector((state: RootState) => state.contentLayout.searchResultNum);
  //   const [tabValue, setTabValue] = useState(currentTab);
  const tabHandler = (_: SyntheticEvent, value: string) => {
    // setTabValue(value);
    dispatch(setCurrentTab(value));
  };

  //   useEffect(() => {
  //     dispatch(setCurrentTab(tabValue));
  //   }, [tabValue]);

  return (
    <Box
      className="come-in-animation"
      sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}
    >
      <Tabs value={currentTab} onChange={tabHandler}>
        <Tab
          value="ave-mujica"
          label={
            <Box sx={{ display: 'flex', alignItems: 'center', mr: 1.5 }}>
              <TabImage image={aveMujicaLogo} />
              <Box sx={{ mr: 3, fontSize: '1.1rem', fontWeight: 600, textTransform: 'capitalize' }}>Ave Mujica</Box>
              <Badge badgeContent={searchResultNum.aveMujica} color="primary" showZero />
            </Box>
          }
          sx={{ mr: 1 }}
        />
        <Tab
          value="mygo"
          label={
            <Box sx={{ display: 'flex', alignItems: 'center', mr: 1.5 }}>
              <TabImage image={myGoLogo} />
              <Box sx={{ mr: 3, fontSize: '1.1rem', fontWeight: 600, textTransform: 'capitalize' }}>MyGO!!!!!</Box>
              <Badge badgeContent={searchResultNum.myGO} color="primary" showZero />
              <Box sx={{ width: '35px', height: '31px', ml: 3 }}>
                <img src={underConstructionImg} alt="" style={{ width: '100%' }} />
              </Box>
            </Box>
          }
        />
      </Tabs>
      {/* <Box className="come-in-animation" sx={{ ml: 1.5, mb: 1, color: '#dadada', fontSize: 12 }}>
        相關結果：000 張圖
      </Box> */}
    </Box>
  );
}
