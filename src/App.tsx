import './App.css'
import InputField from './components/InputField'

const App:React.FC = ()=>{
  return(
    <div className="App">
      <span className="heading">My Todos (created by HENRY)</span>

      <InputField />
    </div>
  )
}

export default App
