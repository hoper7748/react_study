import { Route, Routes } from "react-router";
import { Link, Outlet } from "react-router";
 
function MainLayout(){
  return <>
    <header>
      <Link to={"/"}> 홈</Link>
      <Link to={"/about"}> 소개</Link>
      <Link to={"/product"}> 상품 정보</Link>
      <Link to={"/mypage"}> 마이 페이지</Link>

    </header>
    <main>
      <Outlet>
      <h3>회사 소개</h3>
      </Outlet>
    </main>
    <footer>

    </footer>
  </>
}

function App() {

  // outlet
  // 서브라우트를 사용해 레이아웃을 잡는 방법

  return (
      <>
        <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route path="" element={<>홈화면</>} />
              <Route path="about" element={<>소개화면</>} />
              <Route path="product" element={<>상품정보화면</>} />
              <Route path="mypage" element={<>마이페이지화면</>} />
            </Route>
        </Routes>
      </>
  )
}

export default App