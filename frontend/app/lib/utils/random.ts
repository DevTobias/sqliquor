export const generateSimpleId = () => Math.random().toString(36);

export const getRandomNumber = (min: number, max: number) => Math.floor(Math.random() * (max - min) + min);

export const probability = (percent: number) => getRandomNumber(0, 100) < percent;
