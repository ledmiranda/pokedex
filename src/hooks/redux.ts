import { TypedUseSelectorHook, useDispatch } from 'react-redux';
import { AppDispatch, RooState } from '../store';
import { useSelector } from 'react-redux';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RooState> = useSelector;
