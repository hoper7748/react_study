import { Route, Routes, useLocation, useNavigate } from "react-router"
import Layout from "../components/Layout/Layout"
import AuthRoutes from "./AuthRoutes"
import { useAuthentication } from "../hooks/queries/useAuthentication"
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import PostList from "../pages/PostList/PostList";
import PostRegister from "../pages/PostRegister/PostRegister";

function RootRoutes() {
  // 토큰 조회 (현재 서버에서 정상적으로 발급받은 토큰인지)
  const authenticationQuery = useAuthentication(localStorage.getItem("accessToken"));

  // 내가 현재 접속한 주소
  const { pathname } = useLocation();

  // 페이지를 이동케 하는 navigate
  const navigate = useNavigate();


  useEffect(() => {
    // 로딩이 끝났다.
    if(!authenticationQuery.isLoading){ 
      const status = authenticationQuery.data.status;
      // 정상적으로 토큰이 조회가 되지 않으면서 auth로 시작하지 않을 경우 
      if(status !== 200 && !pathname.startsWith("/auth/") ){
        // 로그인 화면으로 보낸다.
        // replace: true == 히스토리를 남기지 않겠다는 의미 (뒤로가기 X)
        navigate("/auth/signin", {
          replace: true,
        });
      }
      // 로그인 성공
      if(status === 200 && pathname.startsWith("/auth/")){
        navigate("/", {
          replace: true,
        })
      }
    }
  }, [authenticationQuery.isLoading]);
  
  // // 
  // const queryClient = useQueryClient();

  // console.log(queryClient.getQueryCache());

  // console.log(authenticationQuery.isLoading);
  // console.log(authenticationQuery.data);

  return (
    <>
    {
      authenticationQuery.isLoading ? <h1>로딩중</h1> : 
      <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/write" element={<PostRegister />} />
          <Route path="/auth/*" element ={<AuthRoutes />} />
          <Route path ="*" element={<>페이지를 찾을 수 없습니다.</>}></Route>
      </Routes>
    }
    </>
  )
}

export default RootRoutes