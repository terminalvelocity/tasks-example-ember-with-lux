import { Controller } from 'lux-framework';
import cors from '../middleware/cors';

class ApplicationController extends Controller {
  beforeAction = [
    cors
  ];
}

export default ApplicationController;
