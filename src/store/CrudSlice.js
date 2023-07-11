import { createSlice } from "@reduxjs/toolkit";
const CrudSlice = createSlice({
    name: "input",
    initialState: [],
    reducers:{
        addUser: (state, action) => {
            console.log(action)
            const { id,name, email } = action.payload;
      state.push({ name, email ,id});
        },
        deleteUser:(state,action)=>{
            
            const {id} = action.payload;
            console.log(action.payload);
            const uuid= state.find(input => input.id == id)
            if(uuid){
            return state.filter((user)=> user.id !== id)
            }
        },

           
        updateUser: (state, action) => {
            const { id, name, email } = action.payload;
            const user = state.find(user => user.id === id);
            if (user) {
              user.name = name;
              user.email = email;
            }
          },
        
      
    }
})
export const {addUser,deleteUser,updateUser} = CrudSlice.actions;
export default CrudSlice.reducer;