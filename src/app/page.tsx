import { getData } from '../infra/database'

export default async function Home() {
  const products = await getData()
  return (
    <div>
      <div>
        <h1>Ofertas</h1>
      </div>
      <div>
        <h1>Destaques</h1>
      </div>

    </div>
  )
}
