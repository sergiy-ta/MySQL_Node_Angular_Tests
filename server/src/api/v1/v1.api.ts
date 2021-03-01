import express from 'express';

import departmentAPI from './department.api';
import employeesAPI from './employees.api';

const router: express.Router = express.Router();

router.use('/', departmentAPI);
router.use('/', employeesAPI);

export default router;