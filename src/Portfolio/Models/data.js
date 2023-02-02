import RandomUser from "../../assets/randomUser.png";
import taskList from "../../assets/taskList.png";
import pokedex from "../../assets/pokedex.png";

const ProjectsData = [
  {
    id: 1,
    name: "Random User Generator",
    link: "randomUser",
    description: "Fetching https://randomuser.me/api/ to get fake user data",
    img: RandomUser,
  },
  {
    id: 2,
    name: "Pokedex",
    link: "pokedex",
    description:
      "Pokedex application, fetching https://pokeapi.co/ to get pokemon data, react-router-dom and useParams() to manage navigation ",
    img: pokedex,
  },
  {
    id: 3,
    name: "Task List",
    link: "taskList",
    description:
      "Simple task list application, using React Context, useContext() and useReducer() to manage state",
    img: taskList,
  },
];
export default ProjectsData;
