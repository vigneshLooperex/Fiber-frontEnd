import { Button, Result } from 'antd';
import React from 'react'
import { useNavigate, useRouteError } from 'react-router-dom';

const ErrorPage: React.FC = () => {
    const error: any = useRouteError();
    const navigate = useNavigate();
    console.error(error);

    return (
        <div id="error-page">
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={<Button type="primary" onClick={() => navigate('/')}>Back Home</Button>}
            />
        </div>
    );
}

export default ErrorPage