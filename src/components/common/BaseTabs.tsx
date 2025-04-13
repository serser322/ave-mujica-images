import { SyntheticEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { setCurrentTab } from '@/layout/contentLayoutSlice';
import { Badge, Box, Tab, Tabs } from '@mui/material';
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
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
      <Tabs value={currentTab} onChange={tabHandler}>
        <Tab
          value="ave-mujica"
          label={
            <Box sx={{ display: 'flex', alignItems: 'center', mr: 1.5 }}>
              <Box sx={{ mr: 3, textTransform: 'capitalize' }}>Ave Mujica</Box>
              <Badge badgeContent={searchResultNum.aveMujica} color="primary" showZero />
            </Box>
          }
        />
        <Tab
          value="mygo"
          label={
            <Box sx={{ display: 'flex', alignItems: 'center', mr: 1.5 }}>
              <Box sx={{ mr: 3, textTransform: 'capitalize' }}>MyGO!!!!!</Box>
              <Badge badgeContent={searchResultNum.myGO} color="primary" showZero />
            </Box>
          }
        />
      </Tabs>
      <Box className="come-in-animation" sx={{ ml: 1.5, mb: 1, color: '#dadada', fontSize: 12 }}>
        相關結果：000 張圖
      </Box>
    </Box>
  );
}
