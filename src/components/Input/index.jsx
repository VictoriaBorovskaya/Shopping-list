// import { useState } from "react"

const Input = (props) => {

    const { addNewPurchase, userInput, setUserInput } = props

    const handleChange = (element) => {
        setUserInput(element.target.value)
    }

    return(
        <form onSubmit={addNewPurchase} className='max-w-3xl mx-auto flex justify-center py-16'>
            
          <input value={userInput} onChange={handleChange} type="text" className='h-10 border border-cyan-500 rounded-l rounded-r-none px-2 w-3/5 text-xl outline-none focus:border-2 focus:border-cyan-600' placeholder='В список покупок'/>
          <button className='bg-cyan-500 h-10 rounded-r px-3 text-white font-bold text-xl hover:bg-cyan-600 duration-500'>
            Добавить
          </button>
        </form>
    )
}

export default Input