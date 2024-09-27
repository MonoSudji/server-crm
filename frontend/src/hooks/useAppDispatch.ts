import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";

/*
 * Хук для получения типизированного dispatch из Redux.
 * Используйте этот хук вместо useDispatch для обеспечения
 * корректного типизации действий.
*/

export const useAppDispatch = () => useDispatch<AppDispatch>();