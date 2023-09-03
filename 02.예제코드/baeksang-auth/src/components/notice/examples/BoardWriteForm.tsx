{
  /* <template>
	<div class="write-wrap">
		<div class="container-inner">
			<div class="tlb-wrap">
				<!-- DEV: 글쓰기 START!! -->
				<div class="tb_view board_write">
					<h3 class="veiw_tit">글쓰기</h3>
					<div class="bw_header">
						<!--
							이름, 비밀번호칸은 비회원일 때만 보여주세요.
						-->
						<div class="ipt_wrap">
							<label for="post-name" class="ipt_label">이름</label>
							<input id="post-name" name="name" type="text" class="ipt_keyword ipt_name"  v-model="name" n4maxlength="10" placeholder="이름을 입력해 주세요." required>
							<label for="post-password" class="ipt_label">비밀번호</label>
							<input id="post-password" name="password" type="password" class="ipt_keyword ipt_password" v-model="password" autocomplete="new-password" n4maxlength="50" placeholder="비밀번호를 입력해 주세요." required>
						</div>
						<div class="ipt_wrap">
							<label for="post-title" class="ipt_label">제목</label>
							<input id="post-title" name="title" type="text" class="ipt_keyword ipt_title" v-model="title" n4maxlength="40" placeholder="제목을 입력해 주세요. (40자까지 입력 가능)" required>
						</div>
						<div class="ipt_wrap">
							<label for="post-images" class="ipt_label">첨부파일</label>
							<input id="post-images" name="images" type="file" class="ipt_keyword ipt_images" n4maxlength="40" ref="boardImage" @change="handleImages" placeholder="첨부파일 불러오기" required>
						</div>

						<!-- 제가 설명을 하나 더 하겠습니당!
						프론트엔드의 꽃! 파일첨부!!!! 
						요것을 할 때는 리액트든 뷰든 
						폼데이터를 새로 만들어서 (자바스크립트)
						해당 폼데이터에 키, 값을 append 한 후에
						그 내용을 axios로 전달하게 됩니다. (묶어서)
						아까 도원님이 이렇게 해도 되냐고 물어본 부분 (기존에는 json이었는데, 첨부파일이 들어가면서 formdata로 변경되는 부분)

						const formData = new Formdata() -->
					</div>
					<div class="bw_editor">
						<textarea class="ipt_contents" name="contents" v-model="contents" minlength="3" placeholder="내용을 입력해 주세요."></textarea>
					</div>
					<div class="bw_footer">
						<div class="button">
							<router-link :to="{ name: 'notice' }" class="box-btn">
								<span>목록</span>
							</router-link>
							<a href="#" class="box-btn primary" @click.prevent="addNotice"><span>글쓰기</span></a>
						</div>
					</div>
					<!-- //.bw_footer -->
				</div>
				<!-- DEV: 글쓰기 END!! -->
			</div>
		</div><!-- .container-inner -->
	</div>
</template>

<script>
const API_URI = (window.location.protocol === 'https:') ? process.env.VUE_APP_HTTPS_API_URI : process.env.VUE_APP_API_URI
import { mapGetters, mapActions, mapState } from 'vuex'

export default {
	name: 'notice_add',
	props: [ 'item' ],
	components: {
	},
	data: () => ({
		name: null,
		password: null,
		title: null,
		contents: null,
		images: ''
	}),
	watch: {
	},
	computed: {
		...mapGetters(
			'auth', [ 'token', 'currentUser', 'isLogged' ]
		)
	},
	created() {
		this.fetchItem()
	},
	methods: {
		fetchItem() {
			if (this.item) {
				this.name = this.item.name
			}
		},
		handleImages() {
			console.log('파일첨부에서 뭔가 바꼈구나...?!')
			this.images = this.$refs.boardImage.files[0]
		},
		// 글쓰기를 구현해 보세요옹 (얄미운 옹)
		addNotice() {
			if (!this.isLogged) {
				return alert('로그인 해 주세요!')
			}
			// 이렇게 데이터를 묶어서!
			const formData = new FormData()
			formData.append('title', this.title)
			formData.append('contents', this.contents)
			formData.append('images', this.images)

			const headers = {
				'Content-Type': 'multipart/form-data',
				'x-access-token': this.token
			}

			this.axios.post(`${API_URI}/notice/add`, formData, {
				headers: headers
			}).then((res) => {
				this.$router.push({ name: 'notice_view', params: { id: res.data.id } })
				console.log(res.data)
			}).catch((err) => {
				alert(err.response.data.message)
			})
		}
	}
}
</script> */
}
