class FakeService {
  constructor($q) {
    this.$q = $q;
    this.dummyData = {
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
      }
    };
  }

  createResponse(segment) {
    return this.$q.when(this.dummyData[segment]);
  }

  createResponseGetById(segment, id) {
    return this.$q.when({data: _.find(this.dummyData[segment].data, {id: id})});
  }

  createResponseGetByIdCustom(segment, id, idProperty) {
    let config = {};
    config[idProperty] = parseInt(id);
    return this.$q.when({data: _.filter(this.dummyData[segment].data, config)});
  }
}
FakeService.$inject = ['$q'];

export default FakeService;