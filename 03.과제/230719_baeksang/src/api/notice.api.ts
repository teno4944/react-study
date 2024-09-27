import { createMainClient } from '@/api/client';
import {
  GetBoardCommentParams,
  BoardItemModel,
  BoardListModel,
  BoardListParams,
  PostBoardCommentParams,
  CommentParam,
  CommentListModel,
  PostBoardItemParams,
} from '@/models/board.model';

const httpClient = createMainClient();

export const getNoticeList = async (params: BoardListParams) => {
  return await httpClient.get<BoardListModel>('notice', {
    params,
  });
};

export const getNoticeItem = async (id: string) => {
  return await httpClient.get<BoardItemModel>('notice/' + id);
};

export const postComment = async (data: PostBoardCommentParams) => {
  return await httpClient.post<PostBoardCommentParams>('notice/' + data.pr_id + '/comment/add', data);
};

export const getCommentList = async (params: GetBoardCommentParams) => {
  return await httpClient.get<CommentListModel>('notice/' + params.pr_id + '/comment', { params });
};

export const putCommentLike = async (params: CommentParam) => {
  return await httpClient.put<CommentParam>('notice/' + params.pr_id + '/comment/like/' + params.id, params);
};

export const putCommentDisLike = async (params: CommentParam) => {
  return await httpClient.put<CommentParam>('notice/' + params.pr_id + '/comment/dislike/' + params.id, params);
};

export const postNoticeItem = async (data: PostBoardItemParams) => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  };
  return await httpClient.post<PostBoardItemParams>('notice/add', data, config);
};
