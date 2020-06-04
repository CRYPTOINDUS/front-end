import { useState, useCallback, useEffect } from 'react';

import classnames from 'classnames';

import { _t } from '@/utils/lang';

import styles from './style.less';

const noop = () => {};

const TabFilters = ({ className, items, onChange = noop, value, size = 'middle'  }) => {
  const [activeFilter, updateActiveFilter] = useState(null);

  useEffect(() => {
    updateActiveFilter(value || null)
  }, []);

  useEffect(() => {
    updateActiveFilter(value);
  }, []);

  const handleFilterClick = useCallback(
    e => {
      const filterCode = e.target.dataset.filter;
      updateActiveFilter(filterCode);
      const filter = items.filter(item => item.code === filterCode);
      onChange(filterCode, filter);
    },
    [items, onChange],
  );
  const _lineClas = {
    small: 'small_filter',
    large: 'large_filter',
    middle: 'middle_filter',
  }

  const _wrapperClas = classnames(styles.cmpt_tab_filters, className);
  // const _itemClas = classnames(styles.filter_item, 'filter-item', )
  return (
    <div className={_wrapperClas}>
      {items.map(item => {
        return (
          <span
            data-filter={item.code}
            className={classnames( _lineClas[size], 'filter-item', activeFilter === item.code ? 'active' : '')}
            key={item.code}
            onClick={handleFilterClick}
          >
            {_t(item.name)}
          </span>
        );
      })}
    </div>
  );
};

TabFilters.displayName = 'TabFilters';

export default TabFilters;
