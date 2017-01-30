(function() {
  'use strict';

  angular.module('app')
    .factory('MembersService', [
      'FakeService',
      function MembersService(
        FakeService
      ) {
        function getMembers() {
          return FakeService.createResponse('athletes');
        }

        function getMember(memberId) {
          return FakeService.createResponseGetById('athletes', memberId);
        }

        function createMember(member) {
          return null;
        }

        function updateMember(member) {
          return null;
        }

        function deleteMember() {
          return null;
        }
        return {
          member: {
            createMember: createMember,
            deleteMember: deleteMember,
            getMember: getMember,
            getMembers: getMembers,
            updateMember: updateMember
          },
          collaborator: {

          },
          administrative: {

          }
        };
      }
    ]);
})();