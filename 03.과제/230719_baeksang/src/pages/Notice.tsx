export const Notice = () => {
  return (
    <div className="container-wrap sub-page">
      <div className="notice-page">
        <div className="notice-title-wrap sub-title">
          <div className="container-inner">
            <h2>공지사항</h2>
          </div>
        </div>
        <div className="notice-title sector-title">
          <div className="container-inner">
            <strong>백상예술대상의 새로운 소식을 전해드립니다.</strong>
          </div>
        </div>
        <div className="tlb-wrap">
          <div className="container-inner">
            <table>
              <colgroup>
                <col></col>
                <col></col>
                <col></col>
              </colgroup>
              <thead>
                <tr>
                  <th scope="col">번호</th>
                  <th scope="col">제목</th>
                  <th scope="col">작성일</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td className="title">
                    <a href="/notice?id=65">'제59회 백상예술대상' 디지털 생중계 안내</a>
                  </td>
                  <td>2023.04.27</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td className="title">
                    <a href="/notice?id=64">제59회 백상예술대상 4월 28일 개최</a>
                  </td>
                  <td>2023.04.05</td>
                </tr>
              </tbody>
            </table>
            <div className="paging">
              <a className="btn-paging-prev">
                <span className="sp_ico btn-prev">first page</span>
              </a>
              <a className="curpage active">1</a>
              <a className="btn-paging-next">
                <span className="sp_ico btn-next">last page</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container-inner">
        <a href="#" className="top-wrap">
          <img src="https://images.jtbc.co.kr/baeksang/go_top.png" alt="위로" />
        </a>
      </div>
    </div>
  );
};
