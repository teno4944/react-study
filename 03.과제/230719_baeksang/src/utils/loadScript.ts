/**
 * DOM에 스크립트를 동적으로 생성
 * @param {String} src - 동적으로 생성할 스크립트 경로
 * @return {Promise} <script> Element 반환
 * @example
 * <script> 안에서
    import { loadScript } from '@/utils/loadScript';

    loadScript({ src: 'script.js' })
      .then(script => {
      }).catch((error)) => {
      });
 */

type LoadScriptType = {
  id: string;
  src: string;
};

export const loadScript = ({ id = 'script1', src }: LoadScriptType) => {
  return new Promise((resolve, reject) => {
    let shouldAppend = false;
    let el: HTMLScriptElement | null = document.querySelector('script[src="' + src + '"]');

    if (!el) {
      el = document.createElement('script');
      el.type = 'text/javascript';
      el.id = id;
      el.src = src;
      el.async = true;
      el.defer = true;
      shouldAppend = true;
    } else if (el.hasAttribute('data-loaded')) {
      resolve(el);
      return;
    }

    el.addEventListener('error', reject);
    el.addEventListener('abort', reject);
    el.addEventListener('load', () => {
      if (el) {
        el.setAttribute('data-loaded', 'loaded');
      }
      resolve(el);
    });

    if (shouldAppend) {
      document.head.appendChild(el);
    }
  });
};

export const removeScript = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.parentNode?.removeChild(el);
  }
};
