import { FilterValuesType } from './../../App';

import {v1} from 'uuid';
import {TodolistType} from '../../App';
import { todolistsReducer, testRemoveTodolist, addTodolist, changeTodolistTitle, changeTodolistFilter } from './todolistReducer';

//Проверяем корректность удаления todolist
test.skip('correct todolist should be removed', () => {
   let todolistId1 = v1();
   let todolistId2 = v1();

   const startState: TodolistType = [
       {id: todolistId1, title: "What to learn", filter: "all"},
       {id: todolistId2, title: "What to buy", filter: "all"}
   ]

   const endState = todolistsReducer(startState, testRemoveTodolist(todolistId1))


   expect(endState.length).toBe(1);
   expect(endState[0].id).toBe(todolistId2);
});

//Проверяем корректность добавления тудулиста
test.skip('correct todolist should be added', () => {
   let todolistId1 = v1();
   let todolistId2 = v1();

   let newTodolistTitle = "New Todolist";

   const startState: TodolistType = [
       {id: todolistId1, title: "What to learn", filter: "all"},
       {id: todolistId2, title: "What to buy", filter: "all"}
   ]

   const endState = todolistsReducer(startState, addTodolist(newTodolistTitle))

   expect(endState.length).toBe(3);
   expect(endState[2].title).toBe(newTodolistTitle);
});

//Проверяем корректность смены названия тудулиста
test.skip('correct todolist should change its name', () => {
   let todolistId1 = v1();
   let todolistId2 = v1();

   let newTodolistTitle = "New Todolist";

   const startState: TodolistType = [
       {id: todolistId1, title: "What to learn", filter: "all"},
       {id: todolistId2, title: "What to buy", filter: "all"}
   ]

   const endState = todolistsReducer(startState, changeTodolistTitle(todolistId2,newTodolistTitle));

   expect(endState[0].title).toBe("What to learn");
   expect(endState[1].title).toBe(newTodolistTitle);
});

//Проверяем корректно ли меняются фильтры в тудулисте
test('correct filter of todolist should be changed', ()=>{
   let todolistId1 = v1();
   let todolistId2 = v1();

   let newFilter: FilterValuesType = "completed";

   const startState: TodolistType = [
       {id: todolistId1, title: "What to learn", filter: "all"},
       {id: todolistId2, title: "What to buy", filter: "all"}
   ]


   const endState = todolistsReducer(startState, changeTodolistFilter(todolistId2, newFilter));

   expect(endState[0].filter).toBe("all");
   expect(endState[1].filter).toBe(newFilter);
})
