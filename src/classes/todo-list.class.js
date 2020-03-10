import { Todo } from "./todo.class";

export class TodoList {

    constructor() {
        this.cargarLocaleStorage();
    }

    nuevoTodo(todo) {
        this.todos.push(todo);
        this.guardarLocaleStorage();
    }

    eliminarTodo(id) {
        this.todos = this.todos.filter(todo => todo.id != id);
        this.guardarLocaleStorage();
    }

    marcarCompletado(id) {

        for (const todo of this.todos) {
            if (todo.id == id) {

                todo.completado = !todo.completado;
                this.guardarLocaleStorage();
                break;
            }
        }

    }

    eliminarCompletados() {

        this.todos = this.todos.filter(todo => !todo.completado);
        this.guardarLocaleStorage();
    }

    guardarLocaleStorage() {

        localStorage.setItem('todo', JSON.stringify(this.todos));

    }

    cargarLocaleStorage() {

        this.todos = (localStorage.getItem('todo')) ? JSON.parse(localStorage.getItem('todo')) :
            this.todos = [];

        this.todos = this.todos.map(obj => Todo.fromJson(obj));
    }
}