import React from 'react'
import {Icon} from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'

export const View = ({caps, deleteCap}) => {
    return caps.map(cap=>(
        <tr key={cap.cap_name}>
            <td>{cap.cap_name}</td>
            <td>{cap.brand}</td>
            <td>{cap.color}</td>
            <td>{cap.price}</td>
            <td className='delete-btn' onClick={()=>deleteCap(cap.cap_name )}>
                <Icon icon={trash}/>
            </td>
        </tr>
    ))
}