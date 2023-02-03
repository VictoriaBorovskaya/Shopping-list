import './App.css'
import Card from 'components/Card';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Input from 'components/Input';
import { useState } from 'react';

const App = () => {
  const [purchases, setPurchases] = useState(localStorage.getItem('purchases') ? JSON.parse(localStorage.getItem('purchases')) : [])
  const [userInput, setUserInput] = useState('')

  // для сохранения в localStorage
  const setPurchasesSave = (newPurchases) => {
    setPurchases(newPurchases)
    localStorage.setItem('purchases', JSON.stringify(newPurchases))
  }

  // функция добавления новой покупки в список с помощью input
  const addNewPurchase = (element) => {
    let maxId = purchases.reduce((max, purchase) => purchase.id > max ? purchase.id : max, 0) 
    let purchaseId = maxId + 1
    let newPurchase = {
      id: purchaseId,
      name: userInput,
      isChecked: false
    }
    element.preventDefault()
      if(userInput.trim() !== '') {
        const purchaseJSON = localStorage.getItem('purchases')
        JSON.parse(purchaseJSON)
        setPurchasesSave([...purchases, newPurchase])
        setUserInput("")
      }
  }

  // функция удаления покупки из списка
  const deletePurchase = (id) => {
    const filteredPurchase = purchases.filter(purchase => purchase.id !== id)
    setPurchasesSave(filteredPurchase)
  }

  //функция добавления/удаления покупки в корзину
  const addToList = (id) => {
    setPurchasesSave(
      purchases.map((purchase) => {
        if(purchase.id === id) {
          return {...purchase, isChecked: !purchase.isChecked}
        }
        return purchase
      })
    )
  }

  return (
    <div className='bg-zinc-100 max-h-screen'>
      <Header /> 
      <Input  addNewPurchase={addNewPurchase} userInput={userInput} setUserInput={setUserInput} />
      <div className='pb-14 min-h-[40vh] sm:min-h-[50vh] max-h-screen bg-zinc-100'>
        { purchases.length === 0 && (<div className='max-w-3xl mx-auto text-xl sm:text-2xl font-semibold text-center px-2'>В Вашем списке отсутсвуют запланированные покупки</div>)}
        { purchases.length > 0 && purchases.map((purchase) => 
          <Card key={purchase.id} purchase={purchase} purchases={purchases} deletePurchase={deletePurchase} addToList={addToList} />
        ) }
      </div>
      <Footer purchases={purchases}  />
    </div>
  )
}

export default App;
 