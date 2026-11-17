import {readFile, writeFile} from 'node:fs/promises';

const DATA_PATH = new URL ('../data/products.json', import.meta.url);

export const findAll = async () =>{
    const data = await readFile(DATA_PATH, 'utf-8');
    return JSON.parse(data);
};

export const saveAll = async (productos) => {
    await writeFile(DATA_PATH, JSON.stringify(productos, null, 2),'utf-8'
    );
};