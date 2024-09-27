import { sponsorItems } from '@/constants/sponsorItems';
import { FooterSponsorItem } from '@/components/common/FooterSponsorItem';

export const FooterSponsor = () => {
  return (
    <div className="sponsor">
      {sponsorItems.map((item) => {
        return (
          <dl key={item.title}>
            <dt>{item.title}</dt>
            <dd>
              {item.child.map((child, index) => {
                return <FooterSponsorItem key={index} {...child} />;
              })}
            </dd>
          </dl>
        );
      })}
    </div>
  );
};
