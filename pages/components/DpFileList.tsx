import React, { useEffect, useState } from 'react';

export default function DpFileListComponent() {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)

    type MetaData = {
        path: string;
        published_at: string;
    }
    const [metaData, setMetaData] = useState<MetaData[]>([])
    const [isMetaLoading, setMetaLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        // fetch('https://api.github.com/repos/masukendp/archives/contents/dp')
        fetch('gh.json')
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setLoading(false)
            })
        setMetaLoading(true)
        // fetch('https://api.github.com/repos/masukendp/archives/contents/dp')
        fetch('meta.json')
            .then((res) => res.json())
            .then((metaData) => {
                setMetaData(metaData)

                setMetaLoading(false)
            })
    }, [])


    if (isLoading || isMetaLoading) return (
        <tr>
            <td>読み込んでいます...</td>
            <td></td>
            <td></td>
        </tr>
    )
    if (!data || !metaData) return (
        <tr>
            <td>データがありません。</td>
            <td></td>
            <td></td>
        </tr>
    )

    return (
        <>
            {/* @ts-expect-error Server Component */}
            {data.map(content => {
                let published_at = "-"
                for (let i = 0; i < metaData.length; i++) {
                    if (metaData[i].path === content.path) {
                        published_at = metaData[i].published_at
                    }
                }
                return (
                    <tr key={content.sha}>
                        <td><a href={content.download_url}>Dispatch Place vol.{content.name.replace('.pdf', '')}</a></td>
                        <td>{published_at}</td>
                        <td><code>{content.size}</code> バイト</td>
                    </tr>
                )
            }
            )}
        </>
    );
}