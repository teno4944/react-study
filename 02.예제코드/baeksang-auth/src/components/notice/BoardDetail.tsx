import { BoardItemProps } from '@/models/board.model';

export const BoardDetail = ({ title, contents }: Partial<BoardItemProps>) => {
  return (
    <>
      <div className="tb_view">
        <h3 className="veiw_tit">{title}</h3>
        <div className="view_cont">
          <div className="view_cont_txt">
            <div dangerouslySetInnerHTML={{ __html: contents || '' }}></div>
          </div>
        </div>
      </div>
      <div className="button">
        <a className="box-btn" href="/notice">
          <span>목록</span>
        </a>
      </div>
    </>
  );
};
