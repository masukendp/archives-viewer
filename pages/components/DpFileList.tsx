import React, { useEffect, useState } from 'react';

export default function DpFileListComponent() {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch('https://api.github.com/repos/masukendp/archives/contents/dp')
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setLoading(false)
            })
    }, [])


    if (isLoading) return <div>リポジトリを読み込んでいます...</div>
    if (!data) return <div>データがありません。</div>

    return (
        <>
            {/* @ts-expect-error Server Component */}
            {data.map(content =>
                <tr key={content.sha}>
                    <td><a href={content.download_url}>Dispatch Place vol.{content.name.replace('.pdf', '')}</a></td>
                    <td><code>{content.size}</code> バイト</td>
                </tr>
            )}
        </>
    );
}