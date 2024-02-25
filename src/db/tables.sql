create table trips (
  id serial primary key,
  name text not null,
  description text not null,
  image text not null,
  user_id integer references users(id),
  created_at timestamp not null default now(),
  updated_at timestamp not null default now()
);

create table tags (
  id serial primary key,
  name text not null,
  description text not null
);

-- a many to many relationship between trips and tags
CREATE TABLE trip_tags (
  trip_id integer references trips(id),
  tag_id integer references tags(id),
  PRIMARY KEY (trip_id, tag_id)
);

create table ratings (
  id serial primary key,
  value integer not null,
  user_id integer references users(id),
  trip_id integer references trips(id),
  created_at timestamp not null default now(),
  updated_at timestamp not null default now()
);

create table comments (
  id serial primary key,
  text text not null,
  user_id integer references users(id),
  trip_id integer references trips(id),
  created_at timestamp not null default now(),
  updated_at timestamp not null default now()
);