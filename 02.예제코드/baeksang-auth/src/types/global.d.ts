import { GetServerSidePropsContext, GetServerSidePropsResult, PreviewData, Redirect } from 'next';
import { ParsedUrlQuery } from 'querystring';

import { MetaInfoType, NextPageLayoutOptions } from '@/types';

declare global {
  interface Window {
    isFlutterReady?: boolean;
    flutter_inappwebview?: any;
    Kakao?: any;
    kakaoPixel?: any;
    fbq?: any;
    AppleID?: any;
    IMP: any;
    PaypleCpayAuthCheck: any;
    VgControllerClient?: any;
    $: any;
    jQuery: any;
  }
  namespace NodeJS {
    interface Global {
      document: Document;
      window: Window;
      navigator: Navigator;
    }
    interface ProcessEnv {
      [key: string]: string;
    }
  }

  export type ServerSideProps = NextPageLayoutOptions & {
    [key: string]: any;
    redirect?: Redirect;
    notFound?: boolean;
  };

  // metaInfo, custom Title Bar 속성을 포함한 getServerSideProps type
  export type TGetServerSideProps<
    P extends ServerSideProps = ServerSideProps,
    Q extends ParsedUrlQuery = ParsedUrlQuery,
    D extends PreviewData = PreviewData,
  > = (context: GetServerSidePropsContext<Q, D>) => Promise<{ props: P }> | { props: P };
}

export {};
