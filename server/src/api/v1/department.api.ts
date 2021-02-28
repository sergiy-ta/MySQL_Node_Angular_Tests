import express from 'express';
import APIService from  '../../service/api.service';
import DepartmentService from '../../service/department/department.service';

const router: express.Router = express.Router();

router.post('/department', async (req: express.Request, res: express.Response) => {
    if (!req.body) res.status(400).json({ data: null, message: 'not been entered data to form'});

    const departmentService: DepartmentService = new DepartmentService();
    APIService.processingOnAPIOfDataModels({ req, res, method: departmentService.create(req.body), dataError: null });
});

export default router;