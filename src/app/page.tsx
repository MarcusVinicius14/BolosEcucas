import { getData } from '../infra/database'

export default async function Home() {
  const products = await getData()
  console.log(products)
  return (
    <div>Ola</div>
  )
}
