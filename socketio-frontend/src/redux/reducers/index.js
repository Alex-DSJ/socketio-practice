import { combineReducers } from "redux";
import user from './user';
import general from "./general";
import socket from './socket';

export default combineReducers({ user, general, socket });