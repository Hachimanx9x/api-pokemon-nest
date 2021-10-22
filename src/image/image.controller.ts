import {
  Controller,
  Get,
  StreamableFile,
  Response,
  Query,
} from '@nestjs/common';
import { createReadStream } from 'fs';
import { join } from 'path';

@Controller('image')
export class ImageController {
  @Get('/')
  getFile(
    @Response({ passthrough: true }) res,
    @Query('id') id: string,
  ): StreamableFile {
    //  console.log(process.env.PORT);
    const file = createReadStream(
      join(process.cwd(), `/assets/photo_${id}.jpg`),
    );
    res.set({
      'Content-Type': 'application/json',
      'Content-Disposition': `attachment; filename="photo_${id}.jpg"`,
    });

    return new StreamableFile(file);
  }
}
