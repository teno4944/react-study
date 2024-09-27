import { FooterSponsor } from '@/components/common/FooterSponsor';

export const Footer = () => {
  return (
    <div className="footer-wrap">
      <div className="container-inner">
        <div className="publisher">
          <div className="logo">제59회 백상예술대상</div>
          <div className="copyright">Copyrightⓒ2023 JTBC All Rights Reserved</div>
        </div>
        <FooterSponsor />
      </div>
    </div>
  );
};
