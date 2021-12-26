import React from 'react'
import Chart from '../../components/Chart/Chart'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import './Home.css'
import {userData} from "../../dummyData"
import WidgetSmall from '../../components/widgetSmall/WidgetSmall'
import WidgetLarge from '../../components/widgetLarge/WidgetLarge'

export default function Home() {
    return (
        <div className="home">
            <FeaturedInfo/>
            <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
            <div className="homeWidgets">
                <WidgetSmall/>
                {/* <WidgetLarge/> */}
                <WidgetLarge></WidgetLarge>
            </div>
        </div>
    )
}
