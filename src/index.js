import React from 'react';
import ReactDOM from 'react-dom'
import {observer,inject,Provider} from "mobx-react"
import {observable} from "mobx";

@observer
@inject("store")
class App extends React.Component{
    render() {
        const {store} = this.props;
        return (
            <div>
                <ul>
                    {store.map(todo => <TodoView todo={todo} key={todo.id}/> )}
                </ul>
            </div>
        );
    }
}

const TodoView = observer(
    ({todo}) => {
        return <li>{todo.title}</li>;
    }
);

const todos=observable([]);
todos.push({id: 1, title: "Task1"});
todos.push({id: 2, title: "Task2"});

ReactDOM.render(
    /*Provider向context中注入store对象*/
    <Provider store={todos}>
        <App />
    </Provider>,
    document.getElementById("root")
)