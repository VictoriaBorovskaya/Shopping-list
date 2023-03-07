import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';


const Input = ({addNewPurchase}) => {
    const [userInput, setUserInput] = useState('')
    const onChange = (element) => {
      setUserInput(element.target.value)
    }

    //для добавления новой покупки в список
    const handleClick = (element) => {
      element.preventDefault()

      let newPurchase = {
        id: uuidv4(),
        name: userInput,
        isChecked: false
      }
      if(userInput.trim() !== '') {
        addNewPurchase(newPurchase)
        setUserInput("")
      }
    }

    return(
        <form className='max-w-3xl mx-auto flex justify-center py-16 px-1'>
          <input value={userInput} onChange={onChange} type="text" className='h-10 border border-cyan-500 rounded-l rounded-r-none px-2 w-3/5 text-xl outline-none focus:border-2 focus:border-cyan-600' placeholder='В список покупок'/>
          <button onClick={handleClick} type="submit" className='bg-cyan-500 h-10 rounded-r px-3 text-white font-bold text-xl hover:bg-cyan-600 duration-500'>
            Добавить
          </button>
        </form>
    )
}

export default Input