import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import DpFileListComponent from './DpFileList'

export default function DpFileComponent() {
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


    if (isLoading) return <div>Loading...</div>
    if (!data) return <div>LoadingNO...</div>

    return (
        <>
            <Table striped hover>
                <thead>
                    <tr>
                        <th>項目名</th>
                        <th>ファイル サイズ</th>
                    </tr>
                </thead>
                <tbody>
                    <DpFileListComponent />
                </tbody>
            </Table>
        </>
    );
}