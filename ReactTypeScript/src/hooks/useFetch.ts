/*import { useEffect, useState } from "react";

interface FetchState<T> {

}
export function useFetch<T>(url: string): FetchState<T> {
    const [state, setState] = useState<FetchState<T>>({
        data: null,
        loading: true,
        error: null
    });
    //useEffect To Make Fetch Request

    return state
}*/

import { useEffect,useState } from "react";
interface FetchState<T>{

}
export function UseFetch<T>(url:string):FetchState<T>{
    const [state,setState] = useState<FetchState<T>>({
        data:null,
        loading:true,
        error:null
    })
    return state
}