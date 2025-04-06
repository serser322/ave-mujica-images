import { RootState } from '@/store/store';
import { useSelector } from 'react-redux';
import AveMujicaPage from './AveMujicaPage';
import MyGOPage from './MyGOPage';

export default function AnimeImagesPage() {
  const tab = useSelector((state: RootState) => state.contentLayout.tab);
  return tab === 'ave-mujica' ? <AveMujicaPage /> : <MyGOPage />;
}
