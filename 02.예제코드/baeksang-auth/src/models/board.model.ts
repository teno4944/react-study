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
  cnt: {
    comment: number;
    view: number;
    like: number;
    dislike: number;
  };
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

export type BoardItemProps = {
  id: string;
  title: string;
  contents: string;
  date: string;
};

export type BoardItemListProps = BoardItemProps[];
