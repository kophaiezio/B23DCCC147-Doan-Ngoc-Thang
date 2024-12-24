import React from 'react'

export default function Table(props) {

    return (
        <div className='flex justify-center pb-8 font-F1R text-lg md:text-xs '>
            <div class="relative w-10/12 overflow-x-auto sm:rounded-xl border border-gray-300">
                <table class="w-full text-[8px] sm:text-[14px] text-left rtl:text-right text-gray-500 ">
                    <colgroup>
                        <col style={{width: "30%"}} /> 
                        <col style={{width: "50%"}} /> 
                    </colgroup>
                    <thead class="text-[12px] md:text-lg uppercase " style={{ color: props.color }}>
                        <tr>
                            <th scope="col" class="px-6 py-3 bg-gray-50 border-b border-gray-200 " colspan="2">
                                {props.tableName}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.chasisInfo.map((value, index) => {
                            if (value.info == '') {
                                return (
                                    <tr key={index} class="text-[12px] md:text-lg uppercase border-b border-gray-200 " style={{ color: props.color }}>
                                        <td scope="col" class="px-6 py-3 bg-gray-50" colspan="2">
                                            {value.title}
                                        </td>
                                    </tr>
                                )
                            }
                            else {
                                return (
                                    <tr key={index} class="border-b border-gray-200 ">
                                        <td scope="row" class="px-6 py-4 font-medium text-gray-900 bg-gray-50">
                                            {value.title}
                                        </td>
                                        <td class="px-6 py-4">
                                            {value.info}
                                        </td>
                                    </tr>
                                )
                            }
                        }
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
