/* eslint-disable @next/next/no-img-element */
import React from 'react';

// Postigent lockup: white wordmark in dark mode, dark wordmark in light mode.
export const LogoTextComponent = () => {
  return (
    <div className="h-[36px] flex items-center">
      <img
        src="/brand/postigent-lockup-dark.png"
        alt="Postigent"
        className="h-[36px] w-auto hidden dark:block"
        draggable={false}
      />
      <img
        src="/brand/postigent-lockup-light.png"
        alt="Postigent"
        className="h-[36px] w-auto block dark:hidden"
        draggable={false}
      />
    </div>
  );
};
