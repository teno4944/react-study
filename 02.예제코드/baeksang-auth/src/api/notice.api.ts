import { createMainClient } from '@/api/client';
import { BoardListModel, BoardListParams } from '@/models/board.model';

const httpClient = createMainClient();

export const getNoticeList = async (params: BoardListParams) => {
  return await httpClient.get<BoardListModel>('notice', {
    params,
  });
};
