const Footer = (props) => {
  const { purchases } = props
  const filteredPurchase = purchases.filter((purchase) => purchase.isChecked === true)

  return(
    <div className=' bg-cyan-500 py-20 relative bottom-0'>
      <div className='max-w-3xl mx-auto px-1'>
        <p className="text-white text-xl sm:text-2xl font-semibold text-center">В Ваш список покупок добавлено товаров: {filteredPurchase.length}/{purchases.length}</p>
      </div>
    </div>
  )
}

export default Footer