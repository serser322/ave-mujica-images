import { SyntheticEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { setTab } from '@/layout/contentLayoutSlice';
import { Box, Tab, Tabs } from '@mui/material';
export default function BaseTabs() {
  const dispatch = useDispatch();
  const tab = useSelector((state: RootState) => state.contentLayout.tab);
  const tabHandler = (_: SyntheticEvent, value: string) => {
    dispatch(setTab(value));
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Tabs value={tab} onChange={tabHandler}>
        <Tab value="ave-mujica" label="Ave Mujica" />
        <Tab value="my-go" label="MyGO!!!!!" />
      </Tabs>
      <Box className="come-in-animation" sx={{ ml: 1.5, mb: 1, color: '#dadada', fontSize: 12 }}>
        相關結果：000 張圖
      </Box>
    </Box>
  );
}
