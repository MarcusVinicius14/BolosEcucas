export function Header() {
  return (
    <div className=" w-full flex justify-between px-3 border-b-2 h-16 items-center">
      <h1 className=" text-4xl">Bolos E Cucas</h1>
      <div className=" flex gap-5">
        <button className=" text-4xl">Home</button>
        <button className=" text-4xl">Produtos</button>
        <button className=" text-4xl">sobre</button>
      </div>
      <button className=" text-4xl">Carrinho</button>
    </div>
  )
}