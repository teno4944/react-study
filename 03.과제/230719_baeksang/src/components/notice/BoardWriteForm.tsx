import { postNoticeItem } from '@/api/notice.api';
import { PostBoardItemParams } from '@/models/board.model';
import { FormEventHandler, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const BoardWriteForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<PostBoardItemParams>({
    title: '',
    contents: '',
  });

  const handleWriteForm: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    try {
      await postNoticeItem(formData);
      navigate('/notice');
      // 댓글 refresh 필요
    } catch (err) {
      toast.error('notice 작성중 에러가 발생했어요.....');
    }
  };

  const onChangeInputValue = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const onChangeInputFileValue = (key: string, value: FileList | null) => {
    const files = value && value[0];
    console.log(files);
    setFormData((prev) => ({ ...prev, [key]: files }));
  };

  return (
    <div className="write-wrap">
      <div className="container-inner">
        <div className="tb_view board_write">
          <h3 className="veiw_tit">글쓰기</h3>
          <form onSubmit={handleWriteForm}>
            <div className="bw_header">
              <div className="pt-5 ipt_wrap">
                <label htmlFor="post-title" className="pl-1 pr-5 ipt_label ">
                  제목
                </label>
                <input
                  id="post-title"
                  name="title"
                  type="text"
                  className="ipt_keyword ipt_title "
                  value={formData.title}
                  onChange={(e) => onChangeInputValue('title', e.target.value)}
                  placeholder="제목을 입력해 주세요."
                  required
                />
              </div>
              <div className="pt-5 ipt_wrap ">
                <label htmlFor="post-images" className="pl-1 pr-5 ipt_label ">
                  첨부파일
                </label>
                <input
                  id="post-images"
                  name="images"
                  type="file"
                  className="ipt_keyword ipt_images"
                  //    ref="boardImage"
                  onChange={(e) => onChangeInputFileValue('images', e.target.files)}
                  placeholder="첨부파일 불러오기"
                />
              </div>
            </div>
            <div className="pt-5 bw_editor ">
              <textarea
                className="w-full h-96 ipt_contents"
                name="contents"
                value={formData.contents}
                onChange={(e) => onChangeInputValue('contents', e.target.value)}
                placeholder="내용을 입력해 주세요."
              ></textarea>
            </div>
            <div className="bw_footer">
              <div className="button">
                <a href="/notice" className="pt-5 pb-5 box-btn">
                  목록
                </a>

                <button type="submit" className="">
                  <a className="pt-5 pb-5 box-btn primary">쓰기</a>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
