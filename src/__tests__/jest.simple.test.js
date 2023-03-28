import {getResponse} from '../utils/utils';

let testObject = {
  ok: true, 
  json: function () {
    return Promise.resolve({
      result: 'OK'
    }
  )}
};

describe('check getResponse function', () => {
    test('should be success', async () => {
      const regresults = getResponse(testObject);
      return expect(regresults).resolves.toEqual({ result: 'OK'});
    });

    test('should be failed', async () => {
      testObject.ok = false;
      testObject.status = 500;
      const regresults = getResponse(testObject);
      return expect(regresults).rejects.toBe('Ошибка: 500');
    });
})
