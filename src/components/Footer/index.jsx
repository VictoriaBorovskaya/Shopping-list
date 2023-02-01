const Footer = (props) => {
  const { total } = props

    return(
        <div className=' bg-cyan-500 py-20 relative bottom-0'>
        <div className='max-w-3xl mx-auto'>
          <p className="text-white text-xl font-semibold text-center">В Ваш список покупок добавлено товаров: {total}</p>
        </div>
      </div>
    )
}

export default Footer