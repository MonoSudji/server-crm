import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../store/store';

/*
* Хук для получения состояния приложения с типизацией.
* Используйте этот хук вместо useSelector для обеспечения
* корректного типизации состояния.
*/

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
