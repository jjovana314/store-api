import { Body, Controller, Get, Inject, Post, Param } from '@nestjs/common';
import { CacheConfigService } from './cache.service';
import { CacheEntry } from './models/cache.model';

@Controller('cache')
export class CacheConfigController {
    constructor(private readonly cacheService: CacheConfigService) { }

    @Post()
    async addToCache(@Body() cacheEntry: CacheEntry) {
        await this.cacheService.addToCache(cacheEntry.key, cacheEntry.item);
    }

    @Get('id')
    async getFromCache(@Param('id') id: string): Promise<CacheEntry> {
        return await this.cacheService.getFromCache(id);
    }

}
