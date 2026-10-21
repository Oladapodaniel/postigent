'use client';

/* eslint-disable @next/next/no-img-element */
export const PostigentMark = ({ size = 60 }: { size?: number }) => {
  return (
    <img
      src="/postigent-mark.png"
      width={size}
      height={size}
      alt="Postigent"
      draggable={false}
    />
  );
};

export const Logo = () => {
  return (
    <div className="mt-[8px] min-w-[60px] min-h-[60px] flex items-center justify-center">
      <PostigentMark size={52} />
    </div>
  );
};
