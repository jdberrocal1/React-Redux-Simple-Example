import { combineReducers } from 'redux';
import BookReducer from './books.reducer';
import ActiveBookReducer from './active_book.reducer';

const rootReducer = combineReducers({
  books: BookReducer,
  activeBook: ActiveBookReducer
});

export default rootReducer;
