import {Constant} from '../Constants';

describe('Constant',function(){
  it('http should be...',function () {
    expect(Constant.http).toBe('http://www.baidu.com');
    console.log('http '+Constant.http);
  });
});