import React, { PropsWithChildren } from 'react';

type UserPageProps = {
    title: string;
}

const UserPage = ({ children, title }: PropsWithChildren<UserPageProps>) => {
    return (
        <div>
            <h3>{title}</h3>
            <div>{children}</div>
        </div>
    )
}

export default UserPage;