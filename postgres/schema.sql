create table workouts (
  id serial primary key,
  workout varchar(128) not null,
  workout_date date not null,
  duration interval not null,
  calories int not null,
  fat_burn_time interval not null,
  fitness_time interval not null,
  avg_heart_rate int not null,
  max_heart_rate int not null,
  workout_type varchar(8) not null
);

