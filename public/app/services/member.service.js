'use strict';

class MembersService {
  constructor(FakeService) {
    this.FakeService = FakeService;
  }

  getMembers() {
    return this.FakeService.createResponse('athletes');
  }

  getMember(memberId) {
    return this.FakeService.createResponseGetById('athletes', memberId);
  }

  createMember(member) {
    return null;
  }

  updateMember(member) {
    return null;
  }

  deleteMember() {
    return null;
  }
}

MembersService.$inject = ['FakeService'];
export default MembersService;