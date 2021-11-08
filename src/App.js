import logo from './logo.svg'
import './App.css'
import ChildComponent from './components/ChildComponent'
// we have to import ChildComponent without the curly brackets because it's the default
// export of ChildComponent.jsx

let strive = 'School'

// props --> they can provide dynamic info to a component
// the same component can display different things, be styled differently, behave differently
// always for the sake of DRY

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{strive}</p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <ChildComponent color="red" count={0} title="Hello React!" />
        <ChildComponent color="green" count={100} title="Second title" />
      </header>
    </div>
  )
}

export default App
