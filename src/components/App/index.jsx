import './App.css'
import Card from 'components/Card';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Input from 'components/Input';
import { useState } from 'react';

const App = () => {
  const [purchases, setPurchases] = useState([])
  const [userInput, setUserInput] = useState('')

  // функция добавления новой покупки в список с помощью input
  const addNewPurchase = (element) => {
    let maxId = purchases.reduce((max, purchase) => purchase.id > max ? purchase.id : max, 0) 
    let purchaseId = maxId + 1
    const newPurchase = {
      id: purchaseId,
      name: userInput,
    }
    element.preventDefault()
      if(userInput.trim() !== '') {
        setPurchases([...purchases, newPurchase])
        setUserInput("")
      }
  }

  // функция удаления покупки из списка
  const deletePurchase = (id) => {
    const filteredPurchase = purchases.filter(purchase => purchase.id !== id)
    setPurchases(filteredPurchase)
  }
 
  return (
    <div className='bg-zinc-50 max-h-screen'>
      <Header /> 
      <Input  addNewPurchase={addNewPurchase} userInput={userInput} setUserInput={setUserInput} />
      <div className='pb-20 min-h-[60vh] max-h-screen bg-zinc-50'>
        { purchases.length === 0 && (<div className='max-w-3xl mx-auto text-2xl font-semibold text-center'>В Вашем списке отсутсвуют запланированные покупки</div>)}
        { purchases.length > 0 && purchases.map((purchase) => 
          <Card key={purchase.id} setPurchases={setPurchases} purchase={purchase} purchases={purchases} deletePurchase={deletePurchase} userInput={userInput}/>
        ) }
      </div>
      <Footer total={purchases.length} />
    </div>
  )
}

export default App;
 