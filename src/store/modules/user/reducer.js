import { ADD_COMMENT } from "./actionTypes";

const initialState = { name: "Kenzie", comments: ["Olá, Kenzinho", "Bem vindo ao chat da Kenzie"] };

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
        const {updatedUser} = action;
        return updatedUser;
    default:
        return state;
  }
};

export default userReducer;