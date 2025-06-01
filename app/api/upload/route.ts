import path from 'path';
import fs from 'fs';
import { NextRequest, NextResponse } from 'next/server';
import cloudinary from '@/app/lib/cloudinary';

const uploadDir = path.join(process.cwd(), 'public', 'uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();
        const file = formData.get('file') as File;

        if (!file || typeof file === 'string') {
            return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
        }

        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        const uniqueName = `${Date.now()}-${file.name}`;
        const filePath = path.join(uploadDir, uniqueName);

        fs.writeFileSync(filePath, buffer);

        const result = await cloudinary.uploader.upload(filePath, {
            folder: 'project_hub/images',
        });

        fs.unlinkSync(filePath);

        return NextResponse.json({
            message: 'Upload successful',
            cloudinaryUrl: result.secure_url,
        });
    } catch (error) {
        console.error('Upload error:', error);
        return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
    }
}
