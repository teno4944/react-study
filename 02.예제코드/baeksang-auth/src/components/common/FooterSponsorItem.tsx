type Props = {
  image: string;
  desc: string;
};

export const FooterSponsorItem = ({ image, desc }: Props) => {
  return (
    <span>
      <img src={image} alt={desc} />
    </span>
  );
};
