import useData from "./useData";
import genres from "../data/Genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => ({ data: genres, isLoading: false, error: null });
export default useGenres;

//const useGenres = () => useData<Genre>("/genres"); to bylo przed dodaniem shipping staic data genres w czyli folderu data i z nim zwiazanych zmian
