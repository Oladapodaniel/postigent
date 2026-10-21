'use client';

import { EventEmitter } from 'events';
import { useEffect, useState } from 'react';
import { useVariables } from '@gitroom/react/helpers/variable.context';
import { useT } from '@gitroom/react/translation/get.transation.service.client';
import { ChatbaseComponent } from '@gitroom/frontend/components/layout/chatbase.component';
export const supportEmitter = new EventEmitter();
export const Support = () => {
  const [show, setShow] = useState(true);
  const { discordUrl, isChatBase } = useVariables();
  const t = useT();

  useEffect(() => {
    supportEmitter.on('change', setShow);
    return () => {
      supportEmitter.off('state', setShow);
    };
  }, []);
  if (isChatBase) {
    return <ChatbaseComponent />;
  }
  if (!discordUrl || !show) return null;
  return (
    <div
      id="support-discord"
      className="bg-customColor39 w-[194px] h-[58px] fixed end-[20px] bottom-[20px] z-[500] text-[16px] text-customColor40 rounded-[30px] !rounded-br-[0] cursor-pointer flex justify-center items-center gap-[10px]"
      onClick={() => window.open(discordUrl)}
    >
      <div>
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mb-[2px]"
        >
          <rect x="3" y="5" width="18" height="14" rx="3" stroke="currentColor" strokeWidth="2" />
          <path d="M4 7.5L12 13L20 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div>{t('postigent_contact_support', 'Contact Support')}</div>
    </div>
  );
};
