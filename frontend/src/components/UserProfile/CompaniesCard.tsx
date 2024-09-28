

import { AppstoreOutlined } from '@ant-design/icons';
import { Card, Menu, theme, Typography } from 'antd';
import { useState } from 'react';

 
const CompaniesCard = () => {

    const items = [
        {
        key: 'sub1',
        label: 'Navigation Two',
        icon: <AppstoreOutlined />,
        children: [
            { key: '1', label: 'Option 3' },
            { key: '2', label: 'Option 4' },
        ],
        },
    ];
    const [mode, setMode] = useState<'vertical' | 'inline'>('inline');
    const {token} = theme.useToken();

    return (
        <Card 
            style={{ backgroundColor: token.colorBgBase}}
            className='rounded-lg shadow-lg border-none h-full'
            title="Компании"
        >
            <Menu
                style={{ width: 256 }}
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                mode={mode}
                theme={theme}
                items={items}
            />
        </Card>
    );      

}

export default CompaniesCard