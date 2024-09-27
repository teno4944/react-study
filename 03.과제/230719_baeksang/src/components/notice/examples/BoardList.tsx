{
  /* <template>
	<table v-if="info">
		<caption>{{ info.title }} 게시판 : 번호, 제목, 작성일</caption>
		<colgroup>
			<col style="width:18%;">
			<col style="">
			<col style="width:18%;">
		</colgroup>
		<thead>
			<tr>
				<th scope="col">번호</th>
				<th scope="col">제목</th>
				<th scope="col">작성일</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="item in info.list" :key="item.id">
				<td>{{ item.id }}</td>
				<td class="title">
					<router-link :to="{ name: `${info.routeName}_view`, params: { 'id': item.id } }">
						{{ item.title }}
					</router-link>
				</td>
				<td>{{ formatDate(item.created_at) }}</td>
			</tr>
		</tbody>
	</table>
</template>

<script>
export default {
	props: [ 'info' ],
	methods: {
		formatDate(time, displayFormat = 'YYYY-MM-DD') {
			// 리팩토링한 코드에서는 moment.js 플러그인을 활용
			// 게시글 작성일이 기준일과 같거나 기준일보다 나중이면 'N일 전'과 같이 fromNow() 형식으로 표기
			// 게시글 작성일이 기준일보다 전이면 'YYYY-MM-DD' 형식으로 표기

			// ex) 3일 전 작성된 게시글까지 fromNow() 형식으로 표기하려면 아래와 같이 작성
			// subtract()는 특정 날짜로부터 N년, N달, N일을 뺀 날짜를 계산
			// 즉, 오늘로부터 3일 전까지의 날짜를 compareDate에 저장하고 게시글 작성일과 isSameOrAfter()를 사용해 비교
			let created_at = this.$moment(time)
			let compareDate = this.$moment().subtract(3, 'days')

			if (created_at.isSameOrAfter(compareDate, 'day')) {
				return created_at.fromNow()
			}
			return created_at.format(displayFormat)

			// 기존 코드와 diff(), fromNow()를 조합한다면 아래와 같이 작성 (위 방법과 동일한 결과)
			// let today = this.$moment()
			// let created_at = this.$moment(time)
			// let diff = today.diff(created_at, 'days')

			// if (diff <= 3) { 
			// 	// return `${diff}일 전` (24시간 내 작성된 게시글은 0일 전 대신 N 시간/분/초 전으로 표현하기 위해 fromNow()를 사용하면 좋아요!)
			// 	return created_at.fromNow()
			// }
			// return created_at.format(displayFormat)
		}
	}
}
</script> */
}
