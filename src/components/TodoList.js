import TodoListItem from "./TodoListItem";
import './TodoList.scss';

const TodoList = ({todos, onRemove, onToggle}) => {
    return (
        <div className="TodoList">
            {todos.map(todo =>(
                <TodoListItem 
                key={todo.id} 
                todo={todo} 
                onRemove={onRemove} 
                onToggle={onToggle}>
                </TodoListItem>
            ))}
        </div>
    );
};

export default TodoList;