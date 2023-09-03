import {
  BoardItemCommentItemList,
  CommentParam,
  GetBoardCommentParams,
  PostBoardCommentParams,
} from '@/models/board.model';
import { UserContext } from '@/providers';
import { FormEventHandler, useCallback, useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { getCommentList, postComment, putCommentDisLike, putCommentLike } from '@/api/notice.api';
import { formatDate } from '@/utils';

type Props = {
  pr_id: number;
  comments: BoardItemCommentItemList;
};
export const BoardViewComments = ({ comments, pr_id }: Props) => {
  const { userInfo } = useContext(UserContext);
  const [commentList, setCommentList] = useState<BoardItemCommentItemList>();
  const [formData, setFormData] = useState<PostBoardCommentParams>({
    pr_id: pr_id,
    name: userInfo.name,
    password: '',
    contents: '',
  });

  useEffect(() => {
    // API를 호출해서 받은 데이터를 setListItems(API 데이터)로 설정한다.
    setCommentList(comments);
  }, [comments]);

  const handleCommentForm: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    try {
      await postComment(formData);
      setFormData({
        pr_id: pr_id,
        name: userInfo.name,
        password: '',
        contents: '',
      });
      refreshComment();
      // 댓글 refresh 필요
    } catch (err) {
      toast.error('코멘트작성중 에러가 발생했어요.....');
    }
  };

  const refreshComment = async () => {
    try {
      const param: GetBoardCommentParams = {
        pr_id: pr_id,
      };
      const { data } = await getCommentList(param);
      if (data) {
        setCommentList(data.itemsList);
      }
    } catch (err) {
      toast.error('코멘트 작성중 에러가 발생했어요.....');
    }
  };

  const onChangeInputValue = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleLike = async (id: number) => {
    const params: CommentParam = {
      pr_id: pr_id,
      id: id,
    };
    try {
      await putCommentLike(params);
      refreshComment();
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };
  const handleDisLike = async (id: number) => {
    const params: CommentParam = {
      pr_id: pr_id,
      id: id,
    };
    try {
      await putCommentDisLike(params);
      refreshComment();
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  return (
    <div className=" comment_wrap">
      {/* 댓글이 0 일 경우 */}
      {comments.length == 0 ? (
        <h3 className="p-10 text-center comment_count">댓글을 남겨 주세요.</h3>
      ) : (
        <h3 className="text-gray-400 comment_count">
          댓글 <strong>{commentList?.length}</strong>
        </h3>
      )}
      {/* <div className="comment_refresh">
        <button type="button" className="btn btn-comment_refresh" onCli>
          <span>새로고침</span>
        </button>
      </div> */}
      <div className="comment_write">
        <form onSubmit={handleCommentForm}>
          {!userInfo.id && (
            <div className="h-10 ipt_wrap">
              <label htmlFor="comment-name" className="pr-3 ipt_label">
                이름
              </label>
              <input
                id="comment-name"
                name="comment_name"
                type="text"
                className="ipt_keyword ipt_name"
                placeholder="이름을 입력해 주세요."
                value={formData.name}
                onChange={(e) => onChangeInputValue('name', e.target.value)}
                required
              />
              <label htmlFor="comment-password" className="pr-3 ipt_label">
                비밀번호
              </label>
              <input
                id="comment-password"
                name="comment_password"
                type="password"
                className="ipt_keyword ipt_password"
                placeholder="비밀번호를 입력해 주세요."
                value={formData.password}
                onChange={(e) => onChangeInputValue('password', e.target.value)}
                required
              />
            </div>
          )}
          <div className="">
            <textarea
              name="comment_contents"
              className="w-full border border-slate-500 ipt_contents"
              placeholder="내용을 입력해 주세요"
              value={formData.contents}
              onChange={(e) => onChangeInputValue('contents', e.target.value)}
            ></textarea>
            <button type="submit" className="">
              <a className="p-1 box-btn">댓글쓰기</a>
            </button>
          </div>
        </form>
      </div>
      <ul className="comment_list">
        {commentList?.map((comment) => {
          return (
            <li key={comment.id} className="p-3 m-3 border ">
              <div className="comment_header">
                <div className="info">
                  <span className="pr-4 nickname">{comment.display_name}</span>
                  <span className="date ">{formatDate(comment.created_at, 'YY-MM-DD HH:mm')}</span>
                </div>
              </div>
              <div className="btns">
                {/* <!--
							비회원이 댓글 삭제할 때는 버튼 누르면 comment_delete_password에 v-if로 보이게 처리 + 비밀번호 입력칸으로 focus 처리해 주세요.
							비밀번호 input에 문자 입력하면 삭제 버튼에 active 처리, 누르면 최종 삭제 되게해 주세요.

							비회원이 작성한 댓글은 무조건 삭제 버튼(+ 비밀번호 입력칸)이 있고,
							회원이 작성한 댓글은 본인 댓글에만 삭제 버튼을 보여 주세요.
						-->  */}

                {/* <input name="comment_delete_password" type="password" ref="deletPasswordInput" v-model="deletePassword" class="ipt_keyword ipt_password" n4maxlength="50" placeholder="댓글의 비밀번호를 입력해 주세요." required="">
							<button type="button" className="btn btn-delete active" onClick="removeComments(comment.id)"><span>삭제</span></button>
							<button type="button" className="btn btn-cancel" @click="removeDeleteInput(comment.id)"><span>취소</span></button>
            */}
              </div>
              <div className="comment_contents">
                <p>{comment.contents}</p>
              </div>
              <div className="pt-2 text-sm comment_footer">
                <button
                  type="button"
                  className="pr-4 btn btn-upplaceholder-violet-300"
                  onClick={() => {
                    handleLike(comment.id);
                  }}
                >
                  좋아요<span>{comment.cnt.like}</span>
                </button>
                <button
                  type="button"
                  className="btn btn-downvote"
                  onClick={() => {
                    handleDisLike(comment.id);
                  }}
                >
                  싫어요<span>{comment.cnt.dislike}</span>
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
