import { Injectable } from '@nestjs/common';
import { Model } from 'src/models/model';
import dataFile from '../../../data/data.json'
import * as fs from 'fs/promises';
import * as path from 'path';

@Injectable()
export class CarambarService {
    private filePath = path.join(process.cwd(), 'data', 'data.json');

    async getAllData(): Promise<Model[]> {
        return dataFile
    }

    async getById(id: string): Promise<Model | undefined> {
        const data = await this.getAllData();
        return data.find(item => item.id === id);
    }

    async getDataRandom(): Promise<Model> {
        const data = await this.getAllData();
        console.log(data)
        const randomIndex = Math.floor(Math.random() * data.length);
        return data[randomIndex];
    }

    async addData(data: Model): Promise<Model> {
        const currentData = [...dataFile];
        currentData.push(data);
        await fs.writeFile(this.filePath, JSON.stringify(currentData, null, 2));
        return data;
    }
}
