import express from 'express';

import departmentAPI from './department.api';

const router: express.Router = express.Router();

router.use('/', departmentAPI);

export default router;