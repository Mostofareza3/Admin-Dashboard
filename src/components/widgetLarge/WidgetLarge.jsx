import React from 'react'
import './WidgetLarge.css'

export default function WidgetLarge() {

    const Button = ({type}) =>{
        return <button className={"widgetLargeButton " + type}>{type}</button>
    }

    return (
        <div className="widgetLarge">
            <h3 className="widgetLargeTitle">
                Latest Transaction
            </h3>
            <table className="widgetLargeTable">
                <tr className="widgetLargeTr">
                    <th className="widgetLargeTh">
                        Customer
                    </th>
                    <th className="widgetLargeTh">
                        Date
                    </th>
                    <th className="widgetLargeTh">
                        Amount
                    </th>
                    <th className="widgetLargeTh">
                        Status
                    </th>
                </tr>

                <tr className="widgetLargeTr">
                    <td className="widgetLgUser">
                        <img className="widgetLargeImg" src="https://images.unsplash.com/photo-1611558709798-e009c8fd7706?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=391&q=80" alt="" />
                        <span className="widgetLargeName">
                            Susan Carol
                        </span>
                    </td>
                    <td className="widgetLargeDate">
                        2 Jan 2022
                    </td>
                    <td className="widgetLargeAmount">
                       $ 32.00
                    </td>
                    <td className="widgetLargeStatus">
                       <Button type="Approved"/>
                    </td>
                </tr>
                <tr className="widgetLargeTr">
                    <td className="widgetLgUser">
                        <img className="widgetLargeImg" src="https://images.unsplash.com/photo-1611558709798-e009c8fd7706?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=391&q=80" alt="" />
                        <span className="widgetLargeName">
                            Susan Carol
                        </span>
                    </td>
                    <td className="widgetLargeDate">
                        2 Jan 2022
                    </td>
                    <td className="widgetLargeAmount">
                       $ 32.00
                    </td>
                    <td className="widgetLargeStatus">
                       <Button type="Approved"/>
                    </td>
                </tr>
                <tr className="widgetLargeTr">
                    <td className="widgetLgUser">
                        <img className="widgetLargeImg" src="https://images.unsplash.com/photo-1611558709798-e009c8fd7706?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=391&q=80" alt="" />
                        <span className="widgetLargeName">
                            Susan Carol
                        </span>
                    </td>
                    <td className="widgetLargeDate">
                        2 Jan 2022
                    </td>
                    <td className="widgetLargeAmount">
                       $ 32.00
                    </td>
                    <td className="widgetLargeStatus">
                       <Button type="Pending"/>
                    </td>
                </tr>
                <tr className="widgetLargeTr">
                    <td className="widgetLgUser">
                        <img className="widgetLargeImg" src="https://images.unsplash.com/photo-1611558709798-e009c8fd7706?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=391&q=80" alt="" />
                        <span className="widgetLargeName">
                            Susan Carol
                        </span>
                    </td>
                    <td className="widgetLargeDate">
                        2 Jan 2022
                    </td>
                    <td className="widgetLargeAmount">
                       $ 32.00
                    </td>
                    <td className="widgetLargeStatus">
                       <Button type="Approved"/>
                    </td>
                </tr>
                <tr className="widgetLargeTr">
                    <td className="widgetLgUser">
                        <img className="widgetLargeImg" src="https://images.unsplash.com/photo-1611558709798-e009c8fd7706?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=391&q=80" alt="" />
                        <span className="widgetLargeName">
                            Susan Carol
                        </span>
                    </td>
                    <td className="widgetLargeDate">
                        2 Jan 2022
                    </td>
                    <td className="widgetLargeAmount">
                       $ 32.00
                    </td>
                    <td className="widgetLargeStatus">
                       <Button type="Declined"/>
                    </td>
                </tr>
            </table>
        </div>
    )
}
