const Card = (props) => {
    const { purchase, purchases, addToList, deletePurchase } = props
    let index = purchases.indexOf(purchase)
    let count = index + 1

    return (
        <div className="max-w-3xl mx-auto">
            <div className="flex justify-between px-2 py-5 sm:p-5 hover:bg-zinc-100 border-b-2 border-zinc-300">
                <p className="text-xl sm:text-2xl font-semibold w-1/2"><span className="text-xl">{ count }.</span> { purchase.name }</p>
                <div className="flex gap-5">
                    { purchase.isChecked === true && (
                        <button onClick={() => addToList(purchase.id)} className="text-white font-semibold border border-cyan-500 bg-cyan-500 rounded p-2 hover:bg-cyan-600 hover:border-cyan-600 duration-500 h-10 sm:h-11">
                            Куплено!
                        </button>)
                    }
                    { purchase.isChecked === false && (
                        <button onClick={() => addToList(purchase.id)}  className="border border-cyan-500 bg-cyan-500 rounded p-2 hover:bg-cyan-600 hover:border-cyan-600 duration-500 h-10 w-10 sm:h-11 sm:w-11">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 sm:w-6 sm:h-6 text-white">
                            <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                        </svg>
                        </button>)
                    }
                    <button onClick={() => deletePurchase(purchase.id)} className="border border-red-200 bg-red-50 rounded p-2 hover:bg-red-200 duration-500 h-10 w-10 sm:h-11 sm:w-11">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 sm:w-6 sm:h-6 text-red-600">
                            <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card