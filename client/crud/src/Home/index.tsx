import { useState, useEffect } from 'react'
import Axios from 'axios'
import {
  ButtonRegistration,
  CardSeparation,
  H1,
  HomeContainer,
  InputAction,
  RegisterInput,
  TitleTable,
} from './styles'
import { Card } from '../components/cards'

export function Home() {
  const [values, setValues] = useState('')
  const [listGames, setListGames] = useState([])

  const handleChangeValues = (value: any) => {
    setValues((prevValue: any) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }))
  }

  const handleClickButton = () => {
    Axios.post('http://localhost:3000/register', {
      name: values.name,
      cost: values.cost,
      category: values.category,
    }).then((response) => {
      console.log(response)
    })

    setValues({
      name: '',
      cost: '',
      category: '',
    })

    document.location.reload()
  }

  // pega os valores dentro do BD
  useEffect(() => {
    Axios.get('http://localhost:3000/getCards').then((response) => {
      setListGames(response.data)
    })
  }, [])

  return (
    <HomeContainer>
      <RegisterInput>
        <H1>Cliente Shop</H1>
        <InputAction
          type="text"
          name="name"
          placeholder="Nome"
          onChange={handleChangeValues}
          value={values.name}
        />
        <InputAction
          type="text"
          name="cost"
          placeholder="Preço"
          onChange={handleChangeValues}
          value={values.cost}
        />
        <InputAction
          type="text"
          name="category"
          placeholder="Categoria"
          onChange={handleChangeValues}
          value={values.category}
        />

        <ButtonRegistration onClick={() => handleClickButton()}>
          Cadastrar
        </ButtonRegistration>
      </RegisterInput>

      <h2>Base Cadastrada</h2>

      <TitleTable>
        <table>
          <thead>
            <tr>
              <th>Game</th>
              <th>Preço</th>
              <th>Categoria</th>
            </tr>
          </thead>
        </table>
      </TitleTable>

      <CardSeparation>
        {typeof listGames !== 'undefined' &&
          listGames.map((value) => {
            return (
              <Card
                key={value.id}
                listCard={listGames}
                setListCard={setListGames}
                id={value.id}
                name={value.name}
                cost={value.cost}
                category={value.category}
              ></Card>
            )
          })}
      </CardSeparation>
    </HomeContainer>
  )
}
