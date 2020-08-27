import fetchRequest from "../models/FetchRequest";

export const getScores : any = async (top : Number, period : 'month' | 'year') => {
  const all_ranking = (await fetchRequest({path: `/users/ranking?period=${period}`, method: "GET"})).ranking
  console.log(  all_ranking.splice(0, top) )
  return all_ranking.splice(0, top)
};