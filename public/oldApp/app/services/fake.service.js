(function () {
  'use strict';

  angular.module('app')
    .factory('FakeService', [
      '$q',
      function FakeService($q) {
        var dummyData = {
          athletes: {
            data: [
              {
                id: 2,
                name: 'name2',
                lastname: 'lastname2',
                email: 'email2@email.com',
                phone: '12345678',
                gender: 'female',
                isMonthPaid: false,
                havePrograms: false,
                haveMeasurements: false
              },
              {
                id: 3,
                name: 'name3',
                lastname: 'lastname3',
                email: 'email3@email.com',
                phone: '86663234',
                gender: 'male',
                isMonthPaid: true,
                havePrograms: true,
                haveMeasurements: false
                //TODO: Athletes programs and measurements should be a list.
              },
              {
                id: 1,
                name: 'name1',
                lastname: 'lastname1',
                email: 'email1@email.com',
                phone1: '62631231',
                gender: 'male',
                isMonthPaid: true,
                havePrograms: true,
                haveMeasurements: false
              },
              {
                id: 4,
                name: 'name4',
                lastname: 'lastname4',
                email: 'email4@email.com',
                phone: '86663234',
                gender: 'male',
                isMonthPaid: false,
                havePrograms: false,
                haveMeasurements: false
              },
              {
                id: 5,
                name: 'name5',
                lastname: 'lastname5',
                email: 'email5@email.com',
                phone: '86663234',
                gender: 'male',
                isMonthPaid: false,
                havePrograms: true,
                haveMeasurements: false
              },
              {
                id: 6,
                name: 'name6',
                lastname: 'lastname6',
                email: 'email6@email.com',
                phone: '86663234',
                gender: 'male',
                isMonthPaid: true,
                havePrograms: false,
                haveMeasurements: false
              },
              {
                id: 7,
                name: 'name7',
                lastname: 'lastname7',
                email: 'email7@email.com',
                phone: '86663234',
                gender: 'male',
                isMonthPaid: false,
                havePrograms: false,
                haveMeasurements: false
              },
              {
                id: 8,
                name: 'name8',
                lastname: 'lastname8',
                email: 'email8@email.com',
                phone: '86663234',
                gender: 'male',
                isMonthPaid: true,
                havePrograms: false,
                haveMeasurements: false
              },
              {
                id: 9,
                name: 'name9',
                lastname: 'lastname9',
                email: 'email9@email.com',
                phone: '86663234',
                gender: 'male',
                isMonthPaid: true,
                havePrograms: false,
                haveMeasurements: false
              },
              {
                id: 10,
                name: 'name10',
                lastname: 'lastname10',
                email: 'email10@email.com',
                phone: '86663234',
                gender: 'male',
                isMonthPaid: true,
                havePrograms: false,
                haveMeasurements: false
              },
              {
                id: 11,
                name: 'name11',
                lastname: 'lastname11',
                email: 'email11@email.com',
                phone: '86663234',
                gender: 'male',
                isMonthPaid: true,
                havePrograms: false,
                haveMeasurements: false
              }
            ]
          },
          programs: {
            data: [
              {
                id: 1,
                userId: 3,
                routinesIds: [1, 2, 3] //TODO: [FE-BE Validation] Cannot have more than 7
              },
              {
                id: 2,
                userId: 1,
                routinesIds: [4]
              },
              {
                id: 3,
                userId: 1,
                routinesIds: [5, 6]
              }
            ]
          },
          routines: {
            data: [
              {
                id: 1,
                description: 'First Day routine',
                exercisesIds: [1, 2]
              },
              {
                id: 2,
                description: 'routine 2 description',
                exercisesIds: [3]
              },
              {
                id: 3,
                description: 'routine 3 description',
                exercisesIds: [4, 8]
              },
              {
                id: 4,
                description: 'routine 4 description',
                exercisesIds: [5]
              },
              {
                id: 5,
                description: 'routine 5 description',
                exercisesIds: [6]
              },
              {
                id: 6,
                description: 'routine 6 description',
                exercisesIds: [7]
              }
            ]
          },
          exercises: {
            data: [
              {
                id: 1,
                name: 'Press Plano',
                machine: 'N 10',
                weight: 30,
                series: 4,
                repetitions: 7,
                description: 'Bajar despacio y subir lento'
              },
              {
                id: 2,
                name: 'Seated Barbell Press',
                machine: 'N 3',
                weight: 10,
                series: 4,
                repetitions: 5,
                description: 'Hacerlo con calma'
              },
              {
                id: 3,
                name: 'Pull Ups',
                machine: 'N 23',
                weight: 0,
                series: 4,
                repetitions: 3,
                description: 'No detenerse hasta terminar la serie'
              },
              {
                id: 4,
                name: 'Bulgarian split squat',
                machine: '',
                weight: 5,
                series: 4,
                repetitions: 10,
                description: 'Que la pierna sobre la banca quede en angulo de 90 grados antes de iniciar'
              },
              {
                id: 5,
                name: 'Run',
                machine: '',
                weight: 0,
                series: 1,
                repetitions: 1,
                description: 'Correr 2 km'
              },
              {
                id: 6,
                name: 'Abs',
                machine: '',
                weight: 0,
                series: 6,
                repetitions: 20,
                description: ''
              },
              {
                id: 7,
                name: 'Close Push Ups',
                machine: '',
                weight: 0,
                series: 4,
                repetitions: 10,
                description: 'Close hands'
              },
              {
                id: 8,
                name: 'Open Push Ups',
                machine: '',
                weight: 0,
                series: 4,
                repetitions: 10,
                description: 'Open hands'
              }
            ]
          }
        };

        function createResponse(segment) {
          return $q.when(dummyData[segment]);
        }

        function createResponseGetById(segment, id) {
          return $q.when({data: _.find(dummyData[segment].data, {id: id})});
        }

        function createResponseGetByIdCustom(segment, id, idProperty) {
          var config = {};
          config[idProperty] = parseInt(id);
          return $q.when({data: _.filter(dummyData[segment].data, config)});
        }

        return {
          createResponse: createResponse,
          createResponseGetById: createResponseGetById,
          createResponseGetByIdCustom: createResponseGetByIdCustom
        };
      }
    ]);
})();