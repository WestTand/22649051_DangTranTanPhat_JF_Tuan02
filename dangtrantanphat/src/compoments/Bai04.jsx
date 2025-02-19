import React, { useState } from 'react'

const Bai04 = () => {
    const [infomation, setInfomation] = useState('')
    var list = {
        JSX: 'JSX là viết tắt của JavaScript XML. Đây là một phần mở rộng của ngôn ngữ JavaScript. JSX giúp viết HTML trong JavaScript.',
        Component: 'Component là một phần của giao diện người dùng. Một ứng dụng React chia thành nhiều component nhỏ để quản lý dễ dàng hơn.',
        Props: 'Props là viết tắt của Properties. Props là các thuộc tính của một component. Props giúp truyền dữ liệu từ component cha sang component con.',
        State: 'State là trạng thái của một component. State là dữ liệu có thể thay đổi trong quá trình chạy của ứng dụng.',
    }
    function handleClick(e) {
        let key = e.target.innerText
        setInfomation(list[key])

    }

    return (
        <div>
            <h1>Bài 4</h1>
            <button onClick={handleClick}>JSX</button>
            <button onClick={handleClick}>Component</button>
            <button onClick={handleClick}>Props</button>
            <button onClick={handleClick}>State</button>
            <br />
            <span>Thông tin : {infomation}</span>


        </div>
    )
}

export default Bai04