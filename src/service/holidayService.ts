import IAnswer from "../interfaces/IAnswer";
import IHoliday from "../interfaces/IHoliday"; 
import holidays from "../data/holidays";

export const getHolidays = (answers: IAnswer[]): Promise<IHoliday[]> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(holidays);
        }, 1500)
    })
}