import { sponsorItems } from '@/constants/sponsorItems';
import { FooterSponsorItem } from '@/components/common/FooterSponsorItem';

export const FooterSponsor = () => {
  return (
    <div className="sponsor">
      {sponsorItems.map((item) => {
        return (
          <dl>
            <dt>{item.title}</dt>
            <dd>
              {item.child.map((child) => {
                return <FooterSponsorItem {...child} />;
              })}
            </dd>
          </dl>
        );
      })}
    </div>
  );
};
