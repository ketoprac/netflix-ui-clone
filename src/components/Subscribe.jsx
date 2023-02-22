import React from 'react'
import Button from './Button'

const Subscribe = () => {
  return (
    <div className="text-center bg-[#C8CFEC] mb-[180px] rounded-3xl py-12 font-body">
    <h1 className="text-[#1A1C22] font-semibold text-xl mb-6">
      Berlangganan Untuk Mendapatkan Informasi Terbaru dan
      <br /> Menjadi Anggota Kami
    </h1>
    <div className="flex flex-col md:flex-row gap-y-3 p-5 items-center justify-center">
      <input
        className="py-2.5 px-4 rounded-2xl lg:mr-6 md:w-[345px]"
        type="email"
        placeholder="Enter Your Email"
      />
      <Button>
        Berlangganan
      </Button>
    </div>
  </div>
  )
}

export default Subscribe