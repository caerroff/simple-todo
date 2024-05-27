import NavBar from './components/NavBar';
import './App.css'
import Explorer from './components/Explorer';
import TextEditor from './components/TextEditor';

function App() {
  return (
    <>
      <NavBar />

      <h1 className="text-4xl font-bold p-2">Todo App</h1>
      <div className="flex items-center justify-center h-screen p-5">
        <Explorer />
        <TextEditor />
      </div>
    </>
  )
}

export default App
