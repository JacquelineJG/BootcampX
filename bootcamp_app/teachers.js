const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

pool.query(
  const queryString = 
  `SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
  FROM teachers
  JOIN assistance_requests ON teacher_id = teachers.id
  JOIN students ON student_id = students.id
  JOIN cohorts ON cohort_id = cohorts.id
  WHERE cohorts.name = $1
  ORDER BY teacher;
`)
.then(res => {
  res.rows.forEach(row => {
    const cohortName = process.argv[2];
    const values = [`%${cohortName}%`];
    console.log(`${row.cohort}: ${row.teacher}`);
  })
});
pool.query(queryString, values);