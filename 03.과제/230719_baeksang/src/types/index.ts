import { GetServerSidePropsContext, NextPage as NextPageOriginal, PreviewData, Redirect } from 'next';
import { AppProps } from 'next/app';
import { ParsedUrlQuery } from 'querystring';
import {
  AnimationEvent,
  ChangeEvent,
  ClipboardEvent,
  CompositionEvent,
  DragEvent,
  FC,
  FocusEvent,
  FormEvent,
  KeyboardEvent,
  MouseEvent,
  PointerEvent,
  ReactElement,
  ReactNode,
  TouchEvent,
  TransitionEvent,
  UIEvent,
  WheelEvent,
} from 'react';

import { UserModel } from '@/models';
import { CSSInterpolation } from '@emotion/serialize';
import { QueryObserverOptions } from '@tanstack/react-query';

// React Component에 사용할 type
type DefaultComponentProps = {
  children?: ReactNode;
  css?: CSSInterpolation;
  className?: string;
  tw?: string;
};

export type ReactEventType<T = HTMLElement> = {
  clipboard: ClipboardEvent<T>;
  composition: CompositionEvent<T>;
  drag: DragEvent<T>;
  focus: FocusEvent<T>;
  form: FormEvent<T>;
  change: ChangeEvent<T>;
  keyboard: KeyboardEvent<T>;
  mouse: MouseEvent<T>;
  touch: TouchEvent<T>;
  pointer: PointerEvent<T>;
  ui: UIEvent<T>;
  wheel: WheelEvent<T>;
  animation: AnimationEvent<T>;
  transition: TransitionEvent<T>;
};

export type MetaInfoType = {
  siteName?: string;
  title?: string;
  description?: string;
  url?: string;
  path?: string;
  appIconImage?: string;
  image?: string;
  imageWidth?: string;
  imageHeight?: string;
  facebookVerification?: string;
  keyword?: string;
};

export type NextPageLayoutOptions = {
  type?: 'blank' | 'titleBar';
  metaInfo?: MetaInfoType;
  title?: string;
  headerTitle?: string;
  headerTitleLink?: string;
  iconType?: 'back' | 'close' | 'home';
  methodType?: 'back' | 'close';
  backLinkUrl?: string;
  titleBarBgColor?: string;
  showTitleBarInApp?: boolean; // type === 'blank' 일 때만 사용
  disableTitleBar?: false | 'always' | 'inFlutter';
  disableHeaderTitle?: boolean;
  forceDisableTitleBar?: boolean;
  forceDisableHeaderTitle?: boolean;
  forceDisableAsideButton?: boolean;
  leftActionButton?: boolean;
  rightActionButton?: boolean;
  globalNavigation?: boolean;
  fullWidth?: boolean;
  footer?: boolean;
};

export type NextPageServerSideProps = {
  user: {
    userInfo: UserModel;
  };
  tokens: {
    apiCallToken: string;
    userAccessToken: string;
    userRefreshToken: string;
  };
};

export type GetAdditionalServerSideProps<
  P extends { [key: string]: any } = { [key: string]: any },
  Q extends ParsedUrlQuery = ParsedUrlQuery,
  D extends PreviewData = PreviewData,
> = (
  context: GetServerSidePropsContext<Q, D>,
) => Promise<{ props?: P | Promise<P> } & { redirect?: Redirect } & { notFound?: boolean }>;

// user, tokens를 각 page 컴포넌트 props에서 사용
export type NextPage<P = {}, IP = P> = NextPageOriginal<P & NextPageServerSideProps, IP> & {
  disableBasicLayout?: boolean;
  layout?: (page: ReactElement) => ReactNode;
  layoutOptions?: NextPageLayoutOptions;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPage;
  pageProps: {
    protected: boolean;
  };
};

export type ComponentProps<T> = DefaultComponentProps & TObject<T>;

export type FCProps<T = void> = FC<T extends void ? DefaultComponentProps : ComponentProps<T>>;

export type Page = FC<ReactElement>;

// enum 대신 TUnion이라는 custom 제네릭 type을 사용
export type TUnion<T> = T[keyof T];
export type TReverseUnion<T> = keyof T;

// 특정 object에서 NonNullable 속성을 제외
export type TRequiredNonNullableObject<T extends object> = {
  [Property in keyof Required<T>]: NonNullable<T[Property]>;
};

// 기본 Object type
export type TObject<T = void> = T extends void ? Record<string, unknown> : { [Property in keyof T]: T[Property] };

// 매개변수 문자열로 HTML Element type을 반환 (ex. TElement<'a'>는 HTMLAnchorElement type을 반환)
export type TElement<T> = T extends keyof HTMLElementTagNameMap
  ? HTMLElementTagNameMap[T]
  : T extends keyof SVGElementTagNameMap
  ? SVGElementTagNameMap[T]
  : HTMLElement;

// 매개변수 문자열로 React Event type을 반환 (ex. TEvent<'input', 'change'>는 ChangeEvent<HTMLInputElement> type을 반환)
export type TEvent<T = 'button', U = 'mouse'> = U extends keyof ReactEventType
  ? ReactEventType<TElement<T>>[U]
  : ReactEventType<TElement<T>>['mouse'];

export type SocialLoginResolveParams = {
  provider: string;
  data?: TObject;
};

// React Query의 Lazy Query 기능을 사용할 때 쓰기 위한 callback type을 반환
export type TFetchOptions<T = TObject, U = TObject> = {
  params?: Partial<T>;
  enabled?: boolean;
  onSuccess?: QueryObserverOptions<U>['onSuccess'];
  onError?: QueryObserverOptions<U>['onError'];
  onSettled?: QueryObserverOptions<U>['onSettled'];
};
