import { Injectable } from '@nestjs/common';
import { CACHE_MANAGER, Inject } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { CacheEntry } from './models/cache.model';


@Injectable()
export class CacheConfigService {
    constructor(
        @Inject(CACHE_MANAGER) private cacheManager: Cache
    ) { };

    async addToCache(key: string, value: string) {
        await this.cacheManager.set(key, value);
    }

    async getFromCache(key: string): Promise<CacheEntry> {
        return await this.cacheManager.get(key);
    }
}
