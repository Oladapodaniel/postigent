import React from 'react';
import { PostigentMark } from '@gitroom/frontend/components/new-layout/logo';

export const LogoTextComponent = () => {
  return (
    <div className="flex items-center gap-[8px] h-[33px]">
      <PostigentMark size={33} />
      <span className="text-[22px] font-[700] tracking-[-0.02em] leading-none">
        Postigent
      </span>
    </div>
  );
};
