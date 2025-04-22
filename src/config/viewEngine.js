import { join } from 'path';
import express from 'express';

const configViewEngine = (app) => {
	app.set('views', join('./src', 'views'))
	app.set('view engine', 'ejs')
	app.use(express.static(join('./src', 'public'))) //declare so that express will know that we storage static files in /public folder
}

export default configViewEngine;
