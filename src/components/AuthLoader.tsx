import { Spin } from "antd";


export default function AuthLoader() {
    return (
        <div className="AuthLoader">
            <Spin tip="Loading" size="large" >
                {/* <div className="content" /> */}
            </Spin>
            
        </div>
    )
}