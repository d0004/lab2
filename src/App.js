import './App.css';
import Logo from "./components/Logo";
import ToDoList from "./components/ToDoList";
import Wrapper from "./components/Wrapper";

function App() {
    return (
        <Wrapper>
            <Logo />
            <ToDoList />
        </Wrapper>
    );
}

export default App;
