import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Model } from 'src/models/model';
import { CarambarService } from 'src/services/carambar/carambar.service';

@Controller('carambar')
export class CarambarController {

    constructor(private readonly _carambarService: CarambarService) { }


    @Get('all')
    getAllData(): Promise<Model[]> {
        return this._carambarService.getAllData();
    }

    @Get(':id')
    getById(@Param('id') id: string): Promise<Model | undefined> {
        return this._carambarService.getById(id);
    }

    @Get('random')
    getDataRandom(): Promise<Model> {

        console.log('Avant appel du service');
        return this._carambarService.getDataRandom();
    }

    @Post('add')
    async addData(@Body() model: Model) {
        return this._carambarService.addData(model);
    }
}
