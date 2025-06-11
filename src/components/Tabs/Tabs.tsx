"use client";
import { useState } from 'react';
import styles from './Tabs.module.scss';
import clsx from 'clsx';

type Tab = {
  label: string;
  content: React.ReactNode;
};

type TabProps = {
  tabs: Array<Tab>;
};

export const Tabs = ({ tabs }: TabProps) => {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <div>
      {/* Header */}
      <div className={styles.Tabs}>
        {tabs.map((tab, index) => (
          <button
            className={clsx({
              [styles.active]: currentTab === index,
              [styles.tab]: true,
            })}
            onClick={() => setCurrentTab(index)} key={index} >{tab.label}
          </button>
        ))}
      </div>


      {/* content */}
      <div className={styles.content}>
        {tabs[currentTab].content}
      </div>
    </div >
  );
};
