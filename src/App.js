import {useDispatch, useSelector} from "react-redux";
import {loadTodos} from "./actions";
import {useEffect} from "react";
import './App.css'

function App() {
    const todos = useSelector(state => state.todos);
    const loading = useSelector(state => state.loading)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadTodos())
    }, []);

    return (
        <div className="main">
            Список дел:
            {loading ? 'идет загрузка...' : (todos.map(todo => {
                return (
                    <div>
                        {todo.title}
                    </div>
                )
            }))}
        </div>
    );
}

export default App;
