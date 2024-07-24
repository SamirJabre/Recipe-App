import axios from 'axios';


export const recipeRemote={
    getAllRecipes : async () => {
        const { data } = await axios.get("http://localhost/Recipe-App/back/API/getrecipes.php");
        return data;
    },
};