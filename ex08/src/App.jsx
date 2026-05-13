function fetchUser(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId <= 0) {
                reject("유효하지 않은 ID");
            } else {
                resolve({ id: userId, name: "유저" + userId, age: 20 + userId });
            }
        }, 1000);
    });
}

function E8 () {

    // .then() 방식
    // fetchUser(3).then(user => console.log(user));

    // async/await 방식으로 변환하시오
        
    async function main() {
        const fetchUser2 = async (userId) => {
            if(userId){
                return {id : userId, name: "유저" + userId, age: 20 + userId};
            }
            else {
                throw new Error("유효하지 않은 아이디");
            }
        }
        let prom = null;
        try{
            prom = await fetchUser2();
        } catch (error) {
            prom = error;
        }
        console.log(prom);
    }
    main();
}

function E9 () {
    async function getUser() {
        fectUser(-1);
    // fetchUser(-1) 호출
    // 에러 발생 시 "에러: 유효하지 않은 ID" 출력
    // 성공/실패 상관없이 "완료" 출력
    // 8번에서 에서 해결
    }
}

function E10 () {
    function fetchA(){
        return new Promise ((res) => setTimeout(() => res("A데이터"), 1000));
    }

    function fetchB(){
        return new Promise ((res) => setTimeout(() => res("B데이터"), 2000));
    }

    function fetchC(){
        return new Promise ((res) => setTimeout(() => res("C데이터"), 1500));
    }
    // 방식 A: 순차 실행 비동기
    async function sequential() {
        const a = await fetchA();  // 1초
        const b = await fetchB();  // 2초
        const c = await fetchC();  // 1.5초
        console.log(a, b, c);
    }
    sequential();
    // 총 소요 시간: ___초

    // 방식 B: 동시 실행 동기
    async function parallel() {
        const [a, b, c] = await Promise.all([fetchA(), fetchB(), fetchC()]);
        console.log(a, b, c);
    }
    parallel();
    // 총 소요 시간: ___초
}

function E11(){
    async function fetchAllUsers(ids) {
        const users = [];
        // console.log(ids.length);
        for( let i = 0 ; i < ids.length; i++){
            const user = await fetchUser(ids[i]);
            users.push(user);
        }
        // for문 + await로 순차 조회
        // 각 유저를 users에 push
        return users;
    }

    fetchAllUsers([1, 2, 3]).then(users => console.log(users));
    // [{ id:1, name:"유저1", ... }, { id:2, ... }, { id:3, ... }]
}

function E12() {
    async function fetchAllUsersParallel(ids) {
        // Promise.all + map 사용
        // 동시에 조회하여 결과 배열 리턴
        const users = Promise.all(ids.map((n) => fetchUser(n)));
        return users;
    }
    fetchAllUsersParallel([1, 2, 3]).then(users => {console.log("E12"); console.log( users);});

    // ★ 문제 11과 결과는 같지만 속도가 다르다! 왜?
}

function E13() {
    async function getData() {
        return "Hello";
    }

    const result = getData();
    console.log(result);

    getData().then(data => console.log(data));

    // 출력 1: ???
    //  출력 2: ???
    // ★ async 함수는 항상 Promise를 리턴한다!
}

function App() {
    E13();



    return (
        <>
            
        </>
    )
}

export default App