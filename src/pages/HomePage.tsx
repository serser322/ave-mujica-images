import { Box } from '@mui/material';
import SearchBar from '@/components/SearchBar';
import { useEffect, useState } from 'react';
import { BaseImage } from '@/type';
import ImageItem from '@/components/ImageItem';

const defaultImageList = [
  {
    name: 'Mortis, 講一下今天的感言',
  },
  {
    name: '不是獲得空前成功嗎',
  },
  {
    name: '不用擔心,月光會將她喚醒',
  },
  {
    name: '不選今天要選什麼時候',
  },
  {
    name: '不需要跟我客氣, 好嗎',
  },
  {
    name: '世間可是很殘酷的',
  },
  {
    name: '之前明明就不肯和我組樂團',
  },
  {
    name: '你看, 通知一直響個不停喔',
  },
  {
    name: '先不要告訴任何人',
  },
  {
    name: '別說這種莫名其妙的話',
  },
  {
    name: '哪可能不被她知道啊',
  },
  {
    name: '因為再也沒有這種機會了嘛',
  },
  {
    name: '因為我的臉蛋也很漂亮',
  },
  {
    name: '好了, 振作一點',
  },
  {
    name: '好氣喔',
  },
  {
    name: '妳一定是會被慫恿買水晶的那種人吧',
  },
  {
    name: '妳怕會有人爆料嗎',
  },
  {
    name: '妳是我唯一找到的人',
  },
  {
    name: '妳真的什麼都不打算問嗎',
  },
  {
    name: '妳講話很大聲耶',
  },
  {
    name: '對不起瞞著妳',
  },
  {
    name: '就是這裡嗎',
  },
  {
    name: '就算看不到我也不想偷工減料啦',
  },
  {
    name: '工作的電話？',
  },
  {
    name: '幹嘛',
  },
  {
    name: '忘記所有一切',
  },
  {
    name: '我不是說過了嗎',
  },
  {
    name: '我們先走了',
  },
  {
    name: '我會一直陪著妳',
  },
  {
    name: '我沒興趣',
  },
  {
    name: '我的話還沒說完',
  },
  {
    name: '我看我還是消失比較好',
  },
  {
    name: '我知道了, 可以啊',
  },
  {
    name: '我認為沒有人比妳更適合了',
  },
  {
    name: '我都不知道耶',
  },
  {
    name: '拿到門票了, 真是奇蹟',
  },
  {
    name: '掛斷了',
  },
  {
    name: '收入實在太少了',
  },
  {
    name: '昨天還很喜歡, 今天就膩了',
  },
  {
    name: '根本沒有理由反對吧',
  },
  {
    name: '為什麼做出那種膚淺的行為',
  },
  {
    name: '現在還來的及過去',
  },
  {
    name: '當然不會有問題',
  },
  {
    name: '真是無趣的劇本',
  },
  {
    name: '真是的',
  },
  {
    name: '真的嗎',
  },
  {
    name: '祝夜晚愉快',
  },
  {
    name: '等一下等一下',
  },
  {
    name: '繼續拖拉下去觀眾也許會先厭倦喔',
  },
  {
    name: '自己好沒用',
  },
  {
    name: '記得強調是史上最快喔',
  },
  {
    name: '走開',
  },
  {
    name: '趁現在先習慣一下比較好喔',
  },
  {
    name: '這一點也不算是負擔喔',
  },
  {
    name: '那真是太好了',
  },
  {
    name: '難保不會有誰在偷看',
  },
  {
    name: '需不需要我把她叫醒',
  },
  {
    name: '已經...逃不掉了',
  },
  {
    name: '太精采了',
  },
  {
    name: '今後發言時請保有自己是專業人士的自覺',
  },
];

console.log(defaultImageList.length);

export default function HomePage() {
  const [keyword, setKeyword] = useState('');
  const [imageList, setImageList] = useState<BaseImage[]>(defaultImageList);

  const searchHandler = () => {
    const filteredImageList = defaultImageList.filter((item) => item.name.includes(keyword));
    setImageList(filteredImageList);
  };

  useEffect(() => {
    if (keyword === '') {
      setImageList(defaultImageList);
    }
  }, [keyword]);
  return (
    <>
      <Box>
        <SearchBar onChange={setKeyword} onSearch={searchHandler} />
      </Box>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {imageList.map((image) => (
          <ImageItem key={image.name} image={image} />
        ))}
      </Box>
    </>
  );
}
