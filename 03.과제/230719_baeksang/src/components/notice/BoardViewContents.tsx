type Props = {
  contents: string;
};
export const BoardViewContents = ({ contents }: Props) => {
  return (
    <div className="view_cont">
      <div className="view_cont_txt">
        <div dangerouslySetInnerHTML={{ __html: contents || '' }}></div>
      </div>
    </div>
  );
};
