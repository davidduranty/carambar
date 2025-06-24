import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { Model } from 'src/models/model';
import { CarambarService } from 'src/services/carambar/carambar.service';

@ApiTags('carambar')
@Controller('carambar')
export class CarambarController {
    constructor(private readonly _carambarService: CarambarService) { }

    @Get('all')
    @ApiOperation({ summary: 'Récupère toutes les blagues' })
    @ApiResponse({ status: 200, description: 'Liste de toutes les blagues.' })
    getAllData(): Promise<Model[]> {
        return this._carambarService.getAllData();
    }

    @Get('random')
    @ApiOperation({ summary: 'Récupère une blague aléatoire' })
    @ApiResponse({ status: 200, description: 'Une blague aléatoire.' })
    getDataRandom(): Promise<Model> {
        return this._carambarService.getDataRandom();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Récupère une blague par son ID' })
    @ApiParam({ name: 'id', type: String, description: 'ID de la blague' })
    @ApiResponse({ status: 200, description: 'Blague trouvée.' })
    @ApiResponse({ status: 404, description: 'Blague non trouvée.' })
    getById(@Param('id') id: string): Promise<Model | undefined> {
        return this._carambarService.getById(id);
    }

    @Post('add')
    @ApiOperation({ summary: 'Ajoute une nouvelle blague' })
    @ApiResponse({ status: 201, description: 'Blague ajoutée avec succès.' })
    addData(@Body() model: Model) {
        return this._carambarService.addData(model);
    }
}