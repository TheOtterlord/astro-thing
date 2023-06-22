import { createUploadthing } from 'uploadthing/server'
import type { FileRouter } from 'uploadthing/server'

process.env.UPLOADTHING_SECRET = import.meta.env.UPLOADTHING_SECRET
process.env.UPLOADTHING_ID = import.meta.env.UPLOADTHING_ID

const f = createUploadthing()

export const uploadRouter = {
	videoAndImage: f({
		image: {
			maxFileSize: '4MB',
			maxFileCount: 4,
		},
		video: {
			maxFileSize: '16MB',
		},
	}).onUploadComplete(data => {
		console.log('upload completed', data)
	}),
} satisfies FileRouter

export type OurFileRouter = typeof uploadRouter
