import ErrorRepository from '../basic.js'

const errors = [
    [400, 'Bad Request'], 
    [401, 'Unauthorized'], 
    [402, 'Payment Required'], 
    [403, 'Forbidden'],
    [404, 'Not Found']
]

test('поиск существующей ошибки', () => {
    const err = new ErrorRepository(errors); 
    expect(err.translate(401)).toEqual('Unauthorized');
  });

test('поиск несуществующей ошибки', () => {
    const err = new ErrorRepository(errors); 
    expect(err.translate(101)).toEqual('Unknown error');
});