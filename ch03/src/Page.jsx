import './Page.css'

function Page() {
    
    
    return (
        <>
            <div class="card">
                {/* 회원가입 폼*/}
                <div id="formView">
                    <div class="logo">
                        <svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    </div>
                    <h1>회원가입</h1>
                    <p class="subtitle">계정을 만들고 시작해보세요. </p>

                    <div class="form-group">
                        {/* 이름 / 닉네임 */}
                        <div class="row">
                            <div for="field">
                                <label for="name">이름</label>
                                <div class="input-wrap">
                                    <input type="text" id="name" placeholder="홍길동"></input>
                                    <svg viewBox="0 0 24 24" style="left:13px"><path d="M20 21v-2a4 4 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                </div>
                                <span class="hint" id = "nameHint"></span>
                            </div>
                            <span class="hint" id="nameHint"></span>
                        </div>
                        <div class="field">
                            <label for="nick">닉네임</label>
                            <div class="input-wrap">
                                <input type="text" id="nick" placeholder='내닉네임' />
                                {/* <svg viewBox="0 0 24 24" style="left:13px"> <circle cx="12" cy="8" r="4"></circle><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"> </path></svg> */}
                            </div>
                            <span class="hint" id = "nickHint"></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Page;