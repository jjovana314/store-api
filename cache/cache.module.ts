import { Module } from '@nestjs/common';
import { CacheConfigController } from './cache.controller';
import { CacheModule } from '@nestjs/common';
import { CacheConfigService } from './cache.service';

@Module({
    imports: [CacheModule.register()],
    controllers: [CacheConfigController],
    providers: [CacheConfigService]
})
export class CacheConfigModule {}
