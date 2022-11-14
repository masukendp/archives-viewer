import React from 'react';
import { Alert } from 'react-bootstrap';

export default function InfoComponent() {
    return (
        <>
            <Alert variant="primary">
                <p>このページは、マスコミ研究会の過去の頒布物をアーカイブする目的で公開されています。<br />このページに掲載されている内容の削除申請は、お手数ですが Twitter アカウント: <a href="https://twitter.com/masukenDP">@masukenDP</a> のダイレクトメッセージまでお願いいたします。</p>
            </Alert>
        </>
    );
}
