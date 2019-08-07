import React from "react";
import { Button } from 'antd';

export default function Test(props) {
    return <>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="danger">Danger</Button>
        <Button type="link">Link</Button>
    </>;
}