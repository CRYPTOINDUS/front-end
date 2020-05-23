
import { useCallback } from 'react';
import router from 'umi/router';


import ConnectionPolkadotNotice from '@/components/ConnectionPolkadotNotice';

import Logo from '@/assets/logo.png';

import styles from './style.less';

const Tabs = [
  {
    name: '首页',
    url: '/',
    code: 'home',
  },
  {
    name: '玩法',
    url: '/play',
    code: 'play',
  },
  {
    name: '市集',
    url: '/market',
    code: 'market',
  },
  {
    name: '名录',
    url: '/directory',
    code: 'directory',
  },
  {
    name: '注册',
    url: '/signup',
    code: 'signup',
  },
  {
    name: '中/En',
    // url: '',
    code: 'lang',
  },
];

const Head = () => {

  const goPage = useCallback((e) => {
    const url = (e.target.dataset || {}).url;
    if(url) {
      router.push(url);
    }
  }, []);
  return (
    <div className={styles.head_wrapper}>
      <ConnectionPolkadotNotice />
      <div className={styles.header_wrapper}>
        <div>
          <img src={Logo}  className={styles.logo} />
        </div>
        <div className={styles.tabs_wrapper}>
          {Tabs.map(tab => {
            return (
              <div className={styles.tab} data-url={tab.url} onClick={goPage} key={tab.code}>
                {tab.name}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

Head.displayName = 'Head';
export default Head;
