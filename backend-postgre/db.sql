CREATE DATABASE obamadna;

CREATE TABLE disease (
  id serial primary key,
  name text,
  sequence text
);

CREATE TABLE test (
  id serial primary key,
  date text,
  patient text,
  disease text,
  similarity text,
  result text
);