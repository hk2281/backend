"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const constants_1 = require("./config/constants");
const config_1 = require("@nestjs/config");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: true });
    const configService = app.get(config_1.ConfigService);
    const port = +configService.get(constants_1.SERVER_PORT);
    await app.listen(port);
    console.log(`listen on port ${await app.getUrl()}`);
}
bootstrap();
//# sourceMappingURL=main.js.map