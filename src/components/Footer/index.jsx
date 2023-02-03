const Footer = (props) => {
  const { purchases } = props
  const filteredPurchase = purchases.filter((purchase) => purchase.isChecked === true)

  return(
    <div className=' bg-zinc-100 py-14 relative bottom-0'>
      <div className='max-w-3xl mx-auto px-1'>
        <p className="text-black text-xl sm:text-2xl font-semibold text-center border-2 border-cyan-500 rounded py-5">Товаров из списка добавлено в корзину: {filteredPurchase.length}/{purchases.length}</p>
      </div>
    </div>
  )
}

export default Footer