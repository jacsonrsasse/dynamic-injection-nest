import { ApiService } from 'src/shared/api/api.service';
import { FifoService } from 'src/shared/aws/fifos/fifo.service';

enum DataDispatcherEnum {
  FIFO,
  API,
}

const dataDispatcherToken = 'DataDispatcherToken';

const dataDispatcherMapper = new Map();
dataDispatcherMapper.set(DataDispatcherEnum.FIFO, FifoService);
dataDispatcherMapper.set(DataDispatcherEnum.API, ApiService);

export { dataDispatcherToken, dataDispatcherMapper, DataDispatcherEnum };
