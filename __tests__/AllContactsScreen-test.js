import AllContactsScreen from '../Contacts';

describe('AllContactsScreen',function(){
  it('test result  should be...',function () {
    let screen = new AllContactsScreen;
    expect(screen.test()).toBe(10);
    console.log('test resut '+screen.test());
  });
});