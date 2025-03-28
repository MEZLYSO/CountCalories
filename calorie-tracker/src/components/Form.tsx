import { FormEvent, ChangeEvent, useState, Dispatch } from "react";
import { categories } from "../data/categories";
import { Activity } from "../types";
import { ActivityActions } from "../reducers/activityReducer";

type FormProps = {
  dispatch: Dispatch<ActivityActions>;
};

const initialState = {
  category: 1,
  name: "",
  calories: 0,
};

export default function ({ dispatch }: FormProps) {
  const [activity, setActivity] = useState<Activity>({
    category: 1,
    name: "",
    calories: 0,
  });

  //Almacenar en activity y setear tipo
  const handleChange = (
    //Coreccion del tipo de dato de e en este caso es EventChange
    f: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>,
  ) => {
    const isNumberField = ["category", "calories"].includes(f.target.id);
    setActivity({
      //Desconozco el cambio entre este operador
      ...activity,
      //Y la defincion de los valores de el target
      [f.target.id]: isNumberField ? +f.target.value : f.target.value,
    });
  };

  const isValidActivity = () => {
    const { name, calories } = activity;
    return name.trim() !== "" && calories > 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: "save-activity", payload: { newActivity: activity } });
    setActivity(initialState);
  };

  return (
    <form
      className="space-y-5 bg-white shadow p-10 rounded-lg"
      onSubmit={handleSubmit}
    >
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="category">Categoria:</label>
        <select
          className="border border-slate-300 p-2 rounded-lg w-full bg-white"
          id="category"
          value={activity.category}
          onChange={handleChange}
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="name" className="font-bold">
          Actividad:
        </label>
        <input
          id="name"
          type="text"
          value={activity.name}
          onChange={handleChange}
          className="border border-slate-300 p-2 rounded-lg"
          placeholder="Ej. Comida,Jugo,Ensalda, Ejericio, Pesas,Gym"
        ></input>
      </div>
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="calories" className="font-bold">
          Calorias:
        </label>
        <input
          id="calories"
          type="number"
          onChange={handleChange}
          value={activity.calories}
          className="border border-slate-300 p-2 rounded-lg"
          placeholder="Calorias Ej. 500, 200"
        ></input>
      </div>
      <input
        className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer disabled:opacity-25"
        type="submit"
        disabled={!isValidActivity()}
        value={activity.category === 1 ? "Guardar comida" : "Guardar ejericio"}
      ></input>
    </form>
  );
}
