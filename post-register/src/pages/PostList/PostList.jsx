import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import TextInput from "../../components/TextInput/TextInput";
import * as s from "./styles"

function PostList() {

    return (
        < div>
            <Header />
            <main>
                {/* 상단 배너 부분 */}
                <article css={s.topPosting}>

                </article>
                <div css={s.searchContainer}>
                    <TextInput />
                    <Button>검색</Button>
                </div>
                <ul css={s.postListContainer}>
                    <li css={s.card}>
                        <div> 
                        </div>
                        <footer>
                        </footer>
                    </li>
                    <li css={s.card}>E</li>
                    <li css={s.card}>L</li>
                    <li css={s.card}>L</li>
                    <li css={s.card}>O</li>
                </ul>
                <div css={s.pagination}>
                    <Button><FiChevronLeft /></Button>
                    <Button>1</Button>
                    <Button>2</Button>
                    <Button>3</Button>
                    <Button>4</Button>
                    <Button>5</Button>
                    <Button><FiChevronRight /></Button>
                </div>
            </main>
        </ div>
    )
}

export default PostList;