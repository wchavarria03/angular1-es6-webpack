(function() {
  'use strict';

  angular.module('app')
    .factory('ProgramsService', [
      'FakeService',
      function ProgramsService(
        FakeService
      ) {
        function getPrograms() {
          return FakeService.createResponse('programs');
        }

        function getProgramsByUserId(programId) {
          return FakeService.createResponseGetByIdCustom('programs', programId, 'userId');
        }

        function getProgram(programId) {
          return FakeService.createResponseGetById('programs', programId);
        }

        function createProgram(program) {
          return null;
        }

        function updateProgram(program) {
          return null;
        }

        function deleteProgram() {
          return null;
        }
        return {
            createProgram: createProgram,
            deleteProgram: deleteProgram,
            getProgram: getProgram,
            getPrograms: getPrograms,
            getProgramsByUserId: getProgramsByUserId,
            updateProgram: updateProgram
        };
      }
    ]);
})();