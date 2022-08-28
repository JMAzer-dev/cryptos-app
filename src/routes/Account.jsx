import React from 'react'
import SavedCoins from '../components/SavedCoins'

const Account = () => {
  return (
    <div className='max-w-[1140px] mx-auto'>
      <div className='flex justify-between items-end my-12 py-8 rounded-div'>
        <div>
          <h2 className='text-2xl font-bold py-2'>Minha Conta</h2>
          <div>
            <p>Bem vindo, user</p>
          </div>
        </div>
        <div>
          <button className='border border-input px-6 py-2 rounded-2xl shadow-lg hover:shadow-2xl'>Sair</button>
        </div>
      </div>
      <div className='flex justify-between items-center my-12 py-8 rounded-div'>
        <div className='w-full min-h-[300px]'>
          <h2 className='text-2xl font-bold py-4'>Favoritos</h2>
          <SavedCoins/>
        </div>
      </div>
    </div>
  )
}

export default Account