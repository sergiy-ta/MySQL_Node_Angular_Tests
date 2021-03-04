import express from 'express';
import APIService from  '../../service/api.service';
import DepartmentService from '../../service/department/department.service';

const router: express.Router = express.Router();

router.get('/department', async (req: express.Request, res: express.Response) => {
    const departmentService: DepartmentService = new DepartmentService();
    APIService.processingOnAPIOfDataModels({ req, res, method: departmentService.getList(), dataError: null });
});

router.get('/department/:id', async (req: express.Request, res: express.Response) => {
    const departmentService: DepartmentService = new DepartmentService();
    APIService.processingOnAPIOfDataModels({ req, res, method: departmentService.get({ dpID: +req.params.id }), dataError: null });
});

router.post('/department', async (req: express.Request, res: express.Response) => {
    if (!req.body) res.status(400).json({ data: null, message: 'not been entered data to form'});

    const departmentService: DepartmentService = new DepartmentService();
    APIService.processingOnAPIOfDataModels({ req, res, method: departmentService.create(req.body), dataError: null });
});

router.delete('/department/:id', async (req: express.Request, res: express.Response) => {
    const departmentService: DepartmentService = new DepartmentService();
    APIService.processingOnAPIOfDataModels({ req, res, method: departmentService.delete({ dpID: +req.params.id }), dataError: null });
});

export default router;