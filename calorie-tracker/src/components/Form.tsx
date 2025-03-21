import { categories } from "../data/categories";

export default function () {
  return (
    <form className="space-y-5 bg-white shadow p-10 rounded-lg">
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="category">Categoria:</label>
        <select
          className="border border-slate-300 p-2 rounded-lg w-full bg-white"
          id="category"
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="activity" className="font-bold">
          Actividad:
        </label>
        <input
          id="activity"
          type="text"
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
          className="border border-slate-300 p-2 rounded-lg"
          placeholder="Calorias Ej. 500, 200"
        ></input>
      </div>
      <input
        className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white"
        type="submit"
        value="Enviar"
      ></input>
    </form>
  );
}
