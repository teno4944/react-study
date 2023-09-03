// 근데 왜 다른 건 다 id인데 여기만 item.id냐는 게 궁금한 거죠? ㅋㅋㅋㅋㅋㅋㅋㅋ
// 			그건 얘가 1차 router-view 컴포넌트가 아니라서.. 그럼당...

// 			$route.params.id를 바탕으로 서버에서 get 요청으로 가져온 실제 데이터가 item이잖아요.
// 			그 item에 게시글 id정보가 있고,

// 			댓글을 삭제하거나 추천/비추천 할 때, 2가지 교차 검증이 필요하거든요.
// 			ex) 7번 게시글을 보는 중
// 			1. 삭제, 추천, 비추천할 댓글의 부모 게시글이 7번 게시글이 맞는가?
// 			2. 이 댓글의 id가 3번인데 3번 댓글은 7번 게시글의 자식이 맞는가?

// 			교차 검증을 해야 하는데 route.params.id와 실제 데이터의 id가 다를 수 있으니
// 			가져온 data를 바탕으로 처리해야 하기 때문에 item.id를 pr_id에 넣어준 것입니다!

// 			이번 예제에서는 부모 게시글 id값과 route.params.id를 동일하게 설정해주었지만
// 			db에서 보면 _id라고 각 데이터 document의 고유 _id가 있어요. 보여드릴게요.

// 			저게 실제 데이터의 고유 id값이구요, 저는 쉽게 데이터를 프론트에 내려주려고 라우트 id랑 게시글 id랑 일치시킨 거예요. ㅋㅋㅋㅋㅋㅋ 만약 저게 구현이 안 되어있으면, _id 고유 값을 사용해야 합니다. (이걸 auto increment by primary key라고 합니다.)

// 			http://localhost:8080/notice/view/12 이게 아니라
// 			http://localhost:8080/notice/view/5f01fa8ffcd78e5f04e251ae

// 			근데 사용자가 보기 불편하니까 백단에서 새로운 게시글이 작성될 때마다
// 			직전 게시글 번호 +1을 해서 0부터 n까지 고유키를 자동 증가시켜주는 거예요.

{
  /* <div class="tb_view">
  <BoardViewHeader :item="item" />
  <BoardViewContents :item="item" />
  <BoardViewFooter />
  <BoardViewComments :pr_id="item.id" :comments="item.comments" :key="refreshKey" @forceKeyUpdate="changeRefreshKey" />
</div> */
}
