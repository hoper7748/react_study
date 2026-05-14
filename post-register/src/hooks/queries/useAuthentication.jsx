import { useQuery } from "@tanstack/react-query";

async function requestAuthentication( accessToken ) {
    const secret = "abcd1234"; 
    // localStorage.getItem("accessToken");

    // 로그인 된 적이 있는지 체크하는 요청
    if (!accessToken ) {
        throw {
            status:403,
            data: "AccessToken이 유효하지 않습니다.",
        }
    }
    const accessTokenObj = JSON.parse(accessToken);

    if (secret !== accessTokenObj.secret) {
        throw {
            status: 403,
            data: "AccessToken이 유효하지 않습니다.",
        }
    }
    const users = JSON.parse(localStorage.getItem("users"));
    const foundUser = users.find(user => user.id === accessTokenObj.userId);
    
    return {
        status: 200,
        data: foundUser,
    }
}

// react-query 캐시의 키 값에 토큰을 받아와 
export function useAuthentication(accessToken) {

  return useQuery({
    queryKey: ["authentication", accessToken],
    queryFn: async () => {
        try {
            return await requestAuthentication(accessToken)
        } catch(error) {
            return error;
        }
    },
    staleTime: 1000 * 60 *2, // 지정된 시간이 지나면 해당 데이터는 오래된 데이터란 뜻
    gcTime: 1000 * 60 * 5,   // 가비지 컬렉터 수집 시간. 해당 시간이 지나면 가비지 컬렉터에서 수거해간다.
    
  });
}
