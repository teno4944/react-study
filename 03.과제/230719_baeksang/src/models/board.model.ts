export type BoardListParams = {
  page?: number;
  size?: number;
};

// 게시판 페이징 타입
export type BoardPagingModel = {
  totalItemCount: number;
  itemPerPage: number;
  totalPageCount: number;
  currentPage: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: null | number;
  nextPage: null | number;
};

// 공지사항 게시판 item response 타입
export type BoardListItemModel = {
  cnt: BoardCountModle;
  author: {
    _id: string;
    name: string;
  };
  title: string;
  likes: string[];
  dislikes: string[];
  created_at: string;
  id: number;
};

// notice API를 호출했을 때 response 타입
export type BoardListModel = {
  itemsList: BoardListItemModel[];
} & BoardPagingModel;

export type BoardItemModel = {
  itemsList: BoardItemDetailModel[];
  totalItemCount: number;
  itemPerPage: number;
  currentPage: number;
  pagingCounter: number;
  hasPrevPage: number;
  hasNextPage: number;
  prevPage: number;
  nextPage: number;
};

export type BoardItemCommentItemModel = {
  _id: string;
  author: {
    _id: string;
    name: string;
  };
  display_name: string;
  contents: string;
  cnt: {
    like: number;
    dislike: number;
  };
  created_at: string;
  id: number;
};

export type BoardItemCommentItemList = BoardItemCommentItemModel[];
export type BoardAuthorModel = {
  _id: string;
  name: string;
};

export type BoardCountModel = {
  comment: number;
  view: number;
  like: number;
  dislike: number;
};

//export type BoardItemListProps = BoardItemProps[];
export type BoardItemPreviewModel = {
  title: string;
  cnt: BoardCountModel;
  id: number;
};

export type BoardItemDetailModel = {
  _id: string;
  ip: string;
  author?: BoardAuthorModel;
  title: string;
  contents: string;
  comments: BoardItemCommentItemList;
  files: string[];
  likes: string[];
  dislikes: string[];
  cnt: BoardCountModel;
  tags: string[];
  created_at: string;
  updated_at: string;
  id: string;
  prevItem: BoardItemPreviewModel;
  nextItem: BoardItemPreviewModel;
};

export type PostBoardCommentParams = {
  pr_id: number;
  name?: string;
  password?: string;
  contents: string;
};

export type GetBoardCommentParams = {
  pr_id: number;
  page?: number;
  size?: number;
};

export type CommentParam = {
  pr_id: number;
  id: number;
};

export type CommentListModel = {
  itemsList: BoardItemCommentItemList;
};

export type PostBoardItemParams = {
  title: string;
  images?: File;
  contents: string;
};
