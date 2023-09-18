import express from 'express';
const router = express.Router();

router.use(express.static('./public'));

router.get('/', (req, res) => {
	res.render('kinesitherapie');
});

router.get('/werkwijze', (req, res) => {
	res.render('kine-werkwijze');
});

router.get('/indicaties', (req, res) => {
	res.render('kine-indicaties');
});

router.get('/proef2move', (req, res) => {
	res.render('kine-proef2move');
});

export default router;
