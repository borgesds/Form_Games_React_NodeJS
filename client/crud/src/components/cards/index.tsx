import { ResultRegistration, ResultContainer } from './styles'
import FormDialog from '../dialog'
import { useState } from 'react'

interface ResultBD {
  id: any
  name: string
  cost: number
  category: string
  listCard: []
  setListCard: string
}

export function Card({
  id,
  name,
  cost,
  category,
  listCard,
  setListCard,
}: ResultBD) {
  const [open, setOpen] = useState(false)

  // abre uma tela para editar assim que clicar em cima
  const handleClickCard = () => {
    setOpen(true)
  }

  return (
    <>
      <FormDialog
        open={open}
        setOpen={setOpen}
        name={name}
        cost={cost}
        category={category}
        listCard={listCard}
        setListCard={setListCard}
        id={id}
      />
      <ResultContainer>
        <ResultRegistration onClick={() => handleClickCard()}>
          <table>
            <tbody>
              <tr>
                <td>
                  <strong>{name}</strong>
                </td>
                <td>R$ {cost}</td>
                <td>{category}</td>
              </tr>
            </tbody>
          </table>
        </ResultRegistration>
      </ResultContainer>
    </>
  )
}
