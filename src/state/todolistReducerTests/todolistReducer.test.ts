
import {v1} from 'uuid';
import {TodolistType} from '../../App';
import { todolistReducer, testRemoveTodolist, addTodolist } from './todolistReducer';

test.skip('correct todolist should be removed', () => {
   let todolistId1 = v1();
   let todolistId2 = v1();

   const startState: TodolistType = [
       {id: todolistId1, title: "What to learn", filter: "all"},
       {id: todolistId2, title: "What to buy", filter: "all"}
   ]

   const endState = todolistReducer(startState, testRemoveTodolist(todolistId1))


   expect(endState.length).toBe(1);
   expect(endState[0].id).toBe(todolistId2);
});


test('correct todolist should be added', () => {
   let todolistId1 = v1();
   let todolistId2 = v1();

   let newTodolistTitle = "New Todolist";

   const startState: TodolistType = [
       {id: todolistId1, title: "What to learn", filter: "all"},
       {id: todolistId2, title: "What to buy", filter: "all"}
   ]

   const endState = todolistReducer(startState, addTodolist(newTodolistTitle))

   expect(endState.length).toBe(3);
   expect(endState[2].title).toBe(newTodolistTitle);
});
