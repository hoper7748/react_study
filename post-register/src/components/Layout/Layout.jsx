import { Link, Navigate } from "react-router";
import * as s from "./styles";

function Layout({children}) {
    // const nav = navigate();
    
    return (
        <>
            <div css={s.layout}>
                <div css={s.container(PiAlignCenterHorizontalSimple.startsWith("/auth/")? "none" : "full")} >
                    {children}
                </div>
            </div>
        </>
    )
}

export default Layout