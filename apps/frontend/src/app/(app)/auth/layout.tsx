import { getT } from '@gitroom/react/translation/get.translation.service.backend';

export const dynamic = 'force-dynamic';
import { ReactNode } from 'react';
import loadDynamic from 'next/dynamic';
import { LogoTextComponent } from '@gitroom/frontend/components/ui/logo-text.component';
import { MantineWrapper } from '@gitroom/react/helpers/mantine.wrapper';
import { Toaster } from '@gitroom/react/toaster/toaster';
const ReturnUrlComponent = loadDynamic(() => import('./return.url.component'));
export default async function AuthLayout({
  children,
}: {
  children: ReactNode;
}) {
  const t = await getT();

  return (
    <MantineWrapper>
      <Toaster />
      <div className="bg-[#0E0E0E] flex flex-1 p-[12px] gap-[12px] min-h-screen w-screen text-white">
        {/*<style>{`html, body {overflow-x: hidden;}`}</style>*/}
        <ReturnUrlComponent />
        <div className="flex flex-col py-[40px] px-[20px] flex-1 lg:w-[600px] lg:flex-none rounded-[12px] text-white p-[12px] bg-[#1A1919]">
          <div className="w-full max-w-[440px] mx-auto justify-center gap-[20px] h-full flex flex-col text-white">
            <LogoTextComponent />
            <div className="flex">{children}</div>
          </div>
          <div className="text-center text-[12px] text-[#A3A3A3] mt-[24px]">
            Postigent is built on{' '}
            <a className="underline" href="https://github.com/gitroomhq/postiz-app" target="_blank" rel="noreferrer">
              Postiz
            </a>{' '}
            (AGPL-3.0) &middot;{' '}
            <a className="underline" href="https://github.com/Oladapodaniel/postigent" target="_blank" rel="noreferrer">
              Source code
            </a>
          </div>
        </div>
        <div className="flex-1 px-[40px] py-[40px] hidden lg:flex flex-col items-center justify-center">
          <div className="text-center text-[36px] leading-[1.25]">
            Plan once.{' '}
            <span className="text-[#f97316]">Post everywhere.</span>
            <br />
            Postigent keeps your socials on schedule.
          </div>
          <div className="mt-[48px] grid grid-cols-2 gap-[16px] max-w-[640px] w-full text-[16px]">
            {[
              ['One calendar', 'Plan and schedule posts for every channel from a single view.'],
              ['Many channels', 'Facebook, Instagram, LinkedIn, X, TikTok, Telegram, Discord and more.'],
              ['Team ready', 'Invite teammates and clients, and keep approvals in one place.'],
              ['Track results', 'See how your posts perform without switching apps.'],
            ].map(([title, text]) => (
              <div key={title} className="rounded-[12px] bg-[#1A1919] p-[20px]">
                <div className="font-[600] text-[18px] mb-[6px]">{title}</div>
                <div className="text-[#A3A3A3]">{text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MantineWrapper>
  );
}
