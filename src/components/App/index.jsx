import './App.css'
import Card from 'components/Card';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Input from 'components/Input';
import { useEffect, useState } from 'react';

const App = () => {
  const [purchases, setPurchases] = useState(localStorage.getItem('purchases') ? JSON.parse(localStorage.getItem('purchases')) : [])

  useEffect(() => {
    localStorage.setItem('purchases', JSON.stringify(purchases))
  }, [purchases])

  // функция добавления новой покупки в список с помощью input
  const addNewPurchase = (newPurchase) => {
    setPurchases([...purchases, newPurchase])
  }

  return (
    <div className='bg-zinc-100 max-h-screen'>
      <Header /> 
      <Input addNewPurchase={addNewPurchase}/>
      <div className='pb-14 min-h-[40vh] sm:min-h-[50vh] max-h-screen bg-zinc-100'>
        { purchases.length === 0 && (<div className='max-w-3xl mx-auto text-xl sm:text-2xl font-semibold text-center px-2'>В Вашем списке отсутсвуют запланированные покупки</div>)}
        { purchases.length > 0 && purchases.map((purchase) => 
          <Card key={purchase.id} purchase={purchase} purchases={purchases} setPurchases={setPurchases}/>
        ) }
      </div>
      <Footer purchases={purchases} />
    </div>
  )
}

export default App;
 