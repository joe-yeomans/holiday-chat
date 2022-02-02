import IHoliday from "../interfaces/IHoliday";

const holidays: IHoliday[] = [
    {
        id: 1,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula.',
        imageUrl: 'https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
        location: 'Spanish Beach Holiday',
        price: 2000
    },
    {
        id: 2,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula.',
        imageUrl: 'https://images.unsplash.com/photo-1531572753322-ad063cecc140?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1752&q=80',
        location: 'Rome City Break',
        price: 1000
    },
    {
        id: 3,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula.',
        imageUrl: 'https://images.unsplash.com/photo-1551524559-8af4e6624178?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1452&q=80',
        location: 'French Ski Holiday',
        price: 1750
    }
]

export default holidays;