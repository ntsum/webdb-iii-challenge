exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {id: 1, name: 'Mary', cohort_id:'WEB18'},
        {id: 2, name: 'Lidiia', cohort_id: 'WEB17'},
        {id: 3, name: 'Ben', cohort_id:'WEB17'}
      ]);
    });
};