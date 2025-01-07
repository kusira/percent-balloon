import React from 'react'

const Header = () => {
    return (
    <div>
        {/* ヘッダー */}
        <header className="w-full bg-blue-500 text-white py-4">
          <h1 className="text-center text-2xl"><b>パーセントバルーン</b></h1>
        </header>
    </div>
    )
}

const Footer = () => {
    return (
    <div>
        {/* フッター */}
        <footer className="mt-12 w-full text-center text-gray-600 border-t">
          <hr className="border-gray-500"></hr>
          <p className="py-3">
            © 2024 PiedPiper-奪還鯖缶. All Rights Reserved.
          </p>
        </footer>
    </div>
    )
}

export default Header; Footer