{
  /* <template>
	<div class="comment_wrap">
		<!--
			댓글이 0일 경우
		-->
		<!-- <h3 class="comment_count">댓글을 남겨 주세요.</h3> -->
		<h3 class="comment_count">댓글 <strong>{{comments.length}}</strong></h3>
		<div class="comment_refresh">
			<button type="button" class="btn btn-comment_refresh"><span>댓글 새로고침</span></button>
		</div>
		<div class="comment_write">
			<!--
				이름, 비밀번호칸은 비회원일 때만 보여주세요.
			-->
			<div class="ipt_wrap" v-if="!isLogged">
				<label for="comment-name" class="ipt_label">이름</label>
				<input id="comment-name" v-model="name" name="comment_name" type="text" class="ipt_keyword ipt_name" n4maxlength="10" placeholder="이름을 입력해 주세요." required>
				<label for="comment-password" class="ipt_label">비밀번호</label>
				<input id="comment-password" v-model="password" name="comment_password" type="password" class="ipt_keyword ipt_password" n4maxlength="50" placeholder="비밀번호를 입력해 주세요." required>
			</div>
			<textarea name="comment_contents" v-model="contents" class="ipt_contents" placeholder="디자인을 너무 오랜만에 하다 보니 온몸이 뻐근하다. 전에 본 무릉이 생각나서 사진첩을 열었더니 쩌-억짤이 등장해서 심쿵해버리고 말았다."></textarea>
			<a href="#" class="box-btn primary" @click.prevent="addComments">댓글쓰기</a>
		</div>
		<ul class="comment_list">
			<li v-for="comment in comments" :key="comment.id">
				<div class="comment_header">
					<div class="info">
						<span class="nickname">{{ comment.display_name }}</span>
						<span class="date">{{ formatDate(comment.created_at, 'YY-MM-DD HH:mm') }}</span>
					</div>
					<div class="btns">
						<!--
							비회원이 댓글 삭제할 때는 버튼 누르면 comment_delete_password에 v-if로 보이게 처리 + 비밀번호 입력칸으로 focus 처리해 주세요.
							비밀번호 input에 문자 입력하면 삭제 버튼에 active 처리, 누르면 최종 삭제 되게해 주세요.

							비회원이 작성한 댓글은 무조건 삭제 버튼(+ 비밀번호 입력칸)이 있고,
							회원이 작성한 댓글은 본인 댓글에만 삭제 버튼을 보여 주세요.
						-->
						<template>
							<input name="comment_delete_password" type="password" ref="deletPasswordInput" v-model="deletePassword" class="ipt_keyword ipt_password" n4maxlength="50" placeholder="댓글의 비밀번호를 입력해 주세요." required="">
							<button type="button" class="btn btn-delete active" @click="removeComments(comment.id)"><span>삭제</span></button>
							<button type="button" class="btn btn-cancel" @click="removeDeleteInput(comment.id)"><span>취소</span></button>
						</template>

					</div>
				</div>
				<div class="comment_contents">
					<p>{{ comment.contents }}</p>
				</div>
				<div class="comment_footer">
					<button type="button" class="btn btn-upvote" @click="like(comment.id)">좋아요<span>{{ comment.cnt.like }}</span></button>
					<button type="button" class="btn btn-downvote" @click="dislike(comment.id)">싫어요<span>{{ comment.cnt.dislike }}</span></button>
				</div>
			</li>
		</ul>
	</div>
</template>


<script>
const API_URI = (window.location.protocol === 'https:') ? process.env.VUE_APP_HTTPS_API_URI : process.env.VUE_APP_API_URI
import { mapGetters } from 'vuex'

export default {
	props: [ 'pr_id', 'comments' ],
	components: {
	},
	data: () => ({
		name: null,
		password: null,
		contents: null,
		deletePassword: null
	}),
	computed: {
		// 자, 지금 도원님이 로그인/로그아웃부터 생각하느냐고 머리가 복잡해서 vuex를 먼저 작업하시는 거 같은데,
		// 기본은 '비회원'이므로
		// 비회원일 때 댓글을 작성하는 것부터 먼저 하시면은
		// 개발이 훨씬 수월해 질 겁니다요bundleRenderer.renderToStream

		// 비회원으로 댓글 작성 -> 작성된 댓글의 출력 -> 회원으로 댓글 작성 고고고고고고

		...mapGetters('auth', [ 'isLogged', 'currentUser', 'token' ])
	},
	watch: {
	},
	created() {
	},
	methods: {
		fetchComments() {
			
		},
		addComments() {
			// isLogged는 vuex에서 가져옵니다!
			// token도 vuex에서 가져옵니다!
			// const는 수정을 할 수 없으니 let을 씁니다.
			let formData = {
				contents: this.contents
			}
			let headers = {
				'x-access-token': 'guest'
			}
			if (!this.isLogged) {
				if (!this.name){
					alert('이름을 입력해주세요.')
					return false
				}
				if (!this.password){
					alert('비밀번호를 입력해주세요.')
					return false
				}
				if (!this.contents){
					alert('댓글을 입력해주세요.')
					return false
				}
			}

			if (this.isLogged) {
				// 키값에 -가 들어가니 아래처럼 변경했어요.
				headers['x-access-token'] = this.token
			} else {
				formData.name = this.name
				formData.password = this.password
			}

			console.log(this.pr_id)
			this.axios.post(`${API_URI}/notice/${this.pr_id}/comment/add`, formData, { 
				headers: headers })
			.then((res) => {
				// console.log(res.data)
				this.$emit('forceKeyUpdate')

				// 블로그 글이랑은 좀 다른데요..
				// 라우트에서 동일 url로 이동하는 건 history API pushstate 정책 위반이래요.. ㅠㅠ
				// 그래서 push 에러를 없애봤는데 재이동은 안되는 걸로 판명나서
				// 블로그 글을 보니 key를 강제업데이트 하라고 하는데, 우리는 BoardViewComments.vue 안의 input 박스를 통으로 리렌더링 해야 하잖아요, 댓글 목록이랑?
				// 그래서 그걸 통합해서 새로고침 해야하니까 상위 컴포넌트로 업데이트 이벤트를 $emit으로 발생시켜서
				// 컴포넌트를 뿅하고 새로 만드는 겁니다.
				// 그러면 댓글이 작성되고 나면 mounted 또는 watch 이벤트를 타게 되거든요. 다시금?
				// created도 타는지 확인해 봅시다.

				// console.log(formData)

				// this.$router.push({ name: 'notice_view', params: { 'id': this.pr_id } }).catch(() => {})
			}).catch((err) => {
				console.log(err)
			})

		},
		removeComments(id) {
			let formData = {
				password : this.deletePassword
			}
			let headers = {
				'x-access-token': 'guest'
			}
			
			if (this.isLogged) {
				headers['x-access-token'] = this.token
			}

			this.axios.delete(`${API_URI}/notice/${this.pr_id}/comment/delete/${id}`, formData, { 
				headers: headers })
			.then((res) => {
				console.log(res.data)
			}).catch((err) => {
				console.error(err.response.data.message)
			})			
		},
		like(id) {
			let headers = {
				'x-access-token': 'guest'
			}

			if (this.isLogged) {
				headers['x-access-token'] = this.token
			}
			this.axios.put(`${API_URI}/notice/${this.pr_id}/comment/like/${id}`, null, {
				headers: headers
			})
			.then((res) => {
				this.$emit('forceKeyUpdate')
			}).catch((err) => {
				alert(err.response.data.message)
			})
		},
		dislike(id) {
			let headers = {
				'x-access-token': 'guest'
			}

			if (this.isLogged) {
				headers['x-access-token'] = this.token
			}
			this.axios.put(`${API_URI}/notice/${this.pr_id}/comment/dislike/${id}`, null, {
				headers: headers
			})
			.then((res) => {
				this.$emit('forceKeyUpdate')
			}).catch((err) => {
				alert(err.response.data.message)
			})
		},
		formatDate(time, displayFormat = 'YYYY-MM-DD') {
			// BoardList.vue에도 formatDate 메서드를 중복 사용하는데, 어떻게 하면 코드를 한 번만 호출할 수 있을까요?
			let created_at = this.$moment(time)
			let compareDate = this.$moment().subtract(1, 'days')

			if (created_at.isSameOrAfter(compareDate, 'day')) {
				return created_at.fromNow()
			}
			return created_at.format(displayFormat)
		}
	}
}
</script> */
}
