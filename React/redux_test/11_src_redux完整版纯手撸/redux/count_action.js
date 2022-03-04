import {INCREAMENT,DECREAMENT} from './constants'
export const createIncrementAction=(data)=>{
  console.log({type:INCREAMENT,value:data})
  return {type:INCREAMENT,value:data}
}
export function createDecrementAction(data){
  return {type:DECREAMENT,value:data}
}