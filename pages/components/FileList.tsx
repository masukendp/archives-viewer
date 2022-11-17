import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import DpFileListComponent from './DpFileList'

export default function FileListComponent() {
    return (
        <>
            <Table striped hover>
                <thead>
                    <tr>
                        <th>項目名</th>
                        <th>発行日</th>
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