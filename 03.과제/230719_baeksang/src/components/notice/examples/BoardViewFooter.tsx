{
  /* <template>
	<Fragment>
		<div class="tbl_other">
			<ul>
				<li class="prev">
					<strong>이전글</strong>
					<span>
						<a href="/noticeView/6">제56회 백상예술대상 레드카펫 생중계 안내</a>
					</span>
				</li>
				<li class="next">
					<strong>다음글</strong>
					<span>
						<a href="/noticeView/6">도원님 이것은 다음글입니다요?</a>
					</span>
				</li>
			</ul>
		</div>
		<!--
			'목록' 버튼 클릭 시, 직전 게시판 목록의 페이지로 이동하려면 page값을 어떻게 가져와야 할까요?
			ex) 2페이지의 7번글 클릭 -> 하단 목록 버튼 클릭 -> 1페이지가 아닌 /notice/list/2로 이동
		-->
		<div class="button">
			<a class="box-btn" href="/notice/list/1">
				<span>목록</span>
			</a>
		</div>
	</Fragment>
</template>

<script>
import { mapGetters } from 'vuex'

import { Fragment } from 'vue-fragment'

export default {
	components: {
		Fragment
	},
	data: () => ({
	}),
	watch: {
	},
	created() {
	},
	computed: {
		////////////////////////////////////////////////////////////////////////////////
		// computed에 this.$store.state.currentPage값을 가져오세요.
		// state는 vuex의 getters를 이용해 가져옵니다.
		// 가져온 vuex page값을 <template> 목록 버튼에 <router-link>에 삽입하면 끝..?
		////////////////////////////////////////////////////////////////////////////////

	},
	methods: {
	}
}
</script> */
}
