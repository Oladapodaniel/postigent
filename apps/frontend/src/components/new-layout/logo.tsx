'use client';

// Postigent placeholder mark: brand-orange tile, white "P", spark for the agent.
export const PostigentMark = ({ size = 60 }: { size?: number }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 60 60"
      fill="none"
      aria-label="Postigent"
    >
      <rect x="2" y="2" width="56" height="56" rx="16" fill="#D9480F" />
      <path
        d="M22 45V16H32.5C38 16 41.5 19.6 41.5 24.75C41.5 29.9 38 33.5 32.5 33.5H22"
        stroke="white"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M47 6.5L48.6 10.4L52.5 12L48.6 13.6L47 17.5L45.4 13.6L41.5 12L45.4 10.4L47 6.5Z"
        fill="#FFD3B8"
      />
    </svg>
  );
};

export const Logo = () => {
  return (
    <div className="mt-[8px] min-w-[60px] min-h-[60px]">
      <PostigentMark />
    </div>
  );
};
