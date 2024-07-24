import React from 'react'
import { TabContent, TabPane } from 'reactstrap'
import { SimpleTabContentProp } from '../../../../Types/UiKits.type'
import { verticalTabData } from '../../../../Data/UiKits/Tabs'

export default function VerticalTabContent({ tabId }:SimpleTabContentProp) {
    return (
        <TabContent activeTab={tabId}>
            {verticalTabData && verticalTabData.map((item, index) => (
                <TabPane className={`fade ${tabId === item.id ? 'show' : ''}`} tabId={item.id} key={index}>
                    {item.text}
                </TabPane>
            ))}
        </TabContent>
    )
}

