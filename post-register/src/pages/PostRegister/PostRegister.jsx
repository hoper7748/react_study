import MDEditor from "@uiw/react-md-editor";
import Header from "../../components/Header/Header";
import * as s from "./styles"
import { useEffect, useState } from "react";
import TextInput from "../../components/TextInput/TextInput";
import { BiImage, BiImageAdd } from "react-icons/bi";
import Button from "../../components/Button/Button";
import Select from "react-select";
import { PiPaperPlaneTiltLight } from "react-icons/pi";
import { useAuthentication } from "../../hooks/queries/useAuthentication";
import { replace, useNavigate } from "react-router";

function PostRegister() {
    const authentication = useAuthentication(localStorage.getItem("accessToken"));

    const [ interval, setInterval ] = useState(null);
    const [ title, setTitle ] = useState("");
    const [ value, setValue ] = useState("");
    const [ thumbnail, setThumbnail ] = useState({
        file: null,
        dataUrl: null,
    });
    const [ category, setCategory ] = useState('common');
 
    const navigate = useNavigate();


    const options = [
        { value: 'common', label: '일반게시글' },
        { value: 'backend', label: 'Backend' },
        { value: 'frontend', label: 'Frontend' },
        { value: 'database', label: 'Database' }
    ];
    
    // Promise 
    // 파일을 불러오는 함수
    const readFileDataUrl = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.onload = (e) => {
                // 불러온 데이터의 결과는 e.target.result에 들어있음.
                resolve(e.target.result);
            } 
            // 파일에 대한 데이터 URL을 읽으면 Load가 일어나도록 설정하고 Load가 일어나고 
            // 해당 결과를 onload에서 실행한다. 
            fileReader.readAsDataURL(file);
        });
    };

    // Handler
    const handleTitleOnChange = (e) => {
        setTitle(e.target.value);
    }

    const handleThumbnailOnClick = (e) => {
        // 가상으로 설정한 Tag의 Elements를 생성하는 것.
        const input = document.createElement("input");
        // 인풋의 타입을 "file"로 잡아줌 => 만약 특정 파일들만 보이게 하고 싶으면 Excel
        input.setAttribute("type", "file");
        input.setAttribute("accept", "image/*");

        // delegate callback eventFunction
        // 변경이 일어나면 onchange callback 함수가 실행된다.
        input.onchange = (e) => {
            // 파일을 꺼내는 기능
            const files = Array.from(e.target.files);
            // 파일의 0번 인덱스가 이미지이다.
            readFileDataUrl(files[0])
            .then((dataUrl) => {
                setThumbnail(prev => ({
                    ...prev,
                    file:files[0],
                    dataUrl: dataUrl,
                }));
            } );
        }

        // 클릭 상호작용으로 작동하도록 기능을 부여
        input.click();

        console.log("Hello World");
    }


    // 카테고리 State에서 관리 
    const handleCategoryOnChange = (option) => {
        setCategory(option.value);
    }
    
    // 임시 저장
    const handleTempSaveOnClick = () => {
        const tempPost = {
            "title": title,
            "content": value,
            "thumbnail": thumbnail,
            "category": category,
        };
        localStorage.setItem("tempPost",JSON.stringify(tempPost));
        
        console.log("aaa"+category);
        alert("게시글 임시저장 완료");
    }
    // 발행하기
    const handleSubmitOnClick = () => {
        let posts = JSON.parse(localStorage.getItem("posts"));
        posts = posts ?? [];
        const newPost = {
            "title": title,
            "content": value,
            "thumbnail": thumbnail,
            "category": category,
            "postingDate": new Date(),
            "user": authentication.data,
        }
        posts = [...posts, newPost];
        console.log(posts);
        localStorage.setItem("posts", JSON.stringify(posts));
        alert("발행이 완료되었습니다.");
        clearInterval(interval);
        localStorage.removeItem("tempPost");
        navigate("/", {
            replace: true,
        } )
    }

    useEffect(() => {
        // localStorage에서 받아오기
        const tempPostJson  = localStorage.getItem("tempPost");
        // 존재 여부 확인
        if(!!tempPostJson) {
            const tempPost = JSON.parse(tempPostJson);
            // 객체로 변환 
            setTitle(tempPost.title);
            setValue(tempPost.content);
            setThumbnail(tempPost.thumbnail);
            setCategory(tempPost.category);
        }
        
    }, [])

    useEffect(() => {
        const itv = setInterval(() => {
            const tempPost = {
            "title": title,
            "content": value,
            "thumbnail": thumbnail,
            "category": category,
        }
        localStorage.setItem("tempPost", JSON.stringify(tempPost));
        }, 5000);
        setInterval(itv);
        return () => {
            clearInterval(itv);
        }
    },[title, value, thumbnail, category]);

    return (
        <div css ={s.wrap}>
            <Header />
            <div css={s.layout}>
                <main css={s.main}>
                    <div css={s.titleInput}>
                        <TextInput placeholder={"작성하실 글의 제목을 입력해주세요.(ㄴㄱㄴㄱㄴㄱ? 알 필요 없다.)"} value={title} onChange={handleTitleOnChange}/> 
                        {/* <TextInput title={"제목"} /> */}
                    </div>
                    <MDEditor
                        value={value}
                        onChange={setValue}
                        data-color-mode="light"
                        height={"500px"}
                        css={s.editor}
                   />
                    {/* <MDEditor.Markdown source={value} style={{ whiteSpacnpme: 'pre-wrap' }} /> */}
                </main>
                <aside css={s.sidebar}>
                    <div css={s.thumbnail(thumbnail.dataUrl)}>
                        <label >썸네일</label>
                        <div onClick={handleThumbnailOnClick}>
                            {
                                !thumbnail.dataUrl &&
                                <>
                                    <BiImageAdd />
                                    <p>이미지 업로드</p>
                                </>
                            }
                        </div>
                        <Button onClick={() => setThumbnail({file: null, dataUrl: null})}>썸네일 삭제</Button>
                    </div>
                    <div css={s.category}>
                        <label > 카테고리</label>
                        <Select options={options}
                                defaultValue={options[0]}
                                value={options.find(option => option.value === category)} 
                                onChange={handleCategoryOnChange}/>
                    </div>
                    <div css={s.submitButtonGroup}>
                        <Button onClick={handleTempSaveOnClick}>임시저장</Button>
                        <Button onClick={handleSubmitOnClick}><PiPaperPlaneTiltLight />발행하기</Button>
                    </div>
                </aside>
            </div >
        </div>
    )
}

export default PostRegister;