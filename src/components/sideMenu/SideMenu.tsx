import React from "react";
import styles from './SideMenu.module.css'
import {sideMenuList} from './mockup'
import {Menu} from 'antd'
import {GifOutlined} from "@ant-design/icons/lib";
/*首页侧边菜单组件*/
export const SideMenu: React.FC = () => {
    return <Menu mode='vertical' className={styles['side-menu']}>
        {
            sideMenuList.map((m, index) => {
                return <Menu.SubMenu
                    key={`side-menu-${index}`}
                    title={<span><GifOutlined/>{m.title}</span>}
                >
                    {
                        m.subMenu.map((sm, smindex) => {
                            return <Menu.SubMenu
                                key={`sub-menu-${smindex}`}
                                title={<span><GifOutlined/>{m.title}</span>}
                            >
                                {
                                    sm.subMenu.map((sms, smsindex) => (
                                        <Menu.Item
                                            key={`sub-menu-${smsindex}`}
                                        >
                                            <span><GifOutlined/>{sms}</span>
                                        </Menu.Item>
                                    ))
                                }
                            </Menu.SubMenu>
                        })
                    }

                </Menu.SubMenu>
            })
        }
    </Menu>
}
