import { useState } from "react"
import { Item, Container, TodoList, Input, Button, List } from './styles'

function App(){
    
    const [tasks, setTasks] = useState(['Abacate'])
    const [inputValue, setInputValue] = useState('')
    
    

  function inputChange(event) {
    setInputValue(event.target.value)
    
  }

  function buttonClick() {
        setTasks([... tasks, inputValue])
  }

  return (
    <Container>
        <TodoList>
            <Input placeholder="Digite Aqui" onChange={inputChange}/>
            <Button onClick={buttonClick}>Adicionar Tarefas</Button>

            <List>
              {
                  tasks.map((item, index) => (
                    <Item key={index}>{item}</Item>
                  ) )
              }
            </List>

        </TodoList>
    </Container>
  )
  }
export default App
  