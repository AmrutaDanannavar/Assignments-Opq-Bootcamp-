create database opqtech_management_system;
use opqtech_management_system;

create table students(id int auto_increment primary key,
                      name varchar(200) not null,
                      email varchar(250) unique not null,
                      password varchar(250) not null,
                      batch_id int,
                      foreign key(batch_id) references batches(id) );
 
 INSERT INTO students (name, email,password, batch_id) VALUES
('John Doe', 'john.doe@example.com','John@123', 1),
('Alice Smith', 'alice.smith@example.com','Alice@123' ,2);

select * from students;
select *  from students  where id=1;

                      
create table batches(id int auto_increment primary key,
                     name varchar(250) not null  ,
                     email varchar(250) unique not null,
                      password varchar(250) not null);

alter table batches rename column email to  start_date ;
alter table batches rename column password to  end_date ;
alter table batches modify start_date  date;
alter table batches modify end_date  date;
 
INSERT INTO batches (name, start_date,end_date) VALUES
('Batch A', '2024-04-12', '2024-07-12'),
('Batch B', '2024-03-10', '2024-06-10');

select * from batches;

select  * from batches;
                     
                      
 create table instructors(id int auto_increment primary key,
                     name varchar(250) not null  ,
                     email varchar(250) unique not null
                      );  
INSERT INTO instructors (name, email) VALUES 
('Jane Smith', 'jane.smith@example.com'),
('Alice Johnson', 'alice.johnson@example.com'),
('Bob Brown', 'bob.brown@example.com'),
('Charlie Davis', 'charlie.davis@example.com'),
('Diana Evans', 'diana.evans@example.com'),
('Edward Harris', 'edward.harris@example.com'),
('Fiona Green', 'fiona.green@example.com'),
('George White', 'george.white@example.com'),
('Hannah Black', 'hannah.black@example.com');                      
               
ALTER TABLE instructors DROP COLUMN password;  

select * from instructors;             
                      
create table lectures(id int auto_increment primary key,
                     batch_id int,
                     instructor_id int,
                     topic varchar(250) not null  ,
                     date date not null,
                     duration time not null,
                     foreign key(batch_id) references batches(id),
                     foreign key(instructor_id) references instructors(id)
                     );    
select * from lectures;                     
                     
create table assignments(id int auto_increment primary key,
                     title varchar(250) not null  ,
                     description text not null,
                     batch_id int,
                     instructor_id int,
                     due_date date not null,
                     duration time not null,
                     foreign key(batch_id) references batches(id),
                     foreign key(instructor_id) references instructors(id)
                     );
                     select * from assignments;
  
  
  create table classes(id int auto_increment primary key,
                        instructor_id  int,
                        class_name varchar(250),
                        start_time time,
                        end_time time,
                        foreign key(instructor_id) references instructors(id));

INSERT INTO classes (instructor_id, class_name, start_time, end_time) VALUES
(1, 'Math 101', '09:00:00', '10:30:00'),
(2, 'History 201', '10:45:00', '12:15:00'),
(3, 'Biology 101', '13:00:00', '14:30:00'),
(1, 'Physics 101', '14:45:00', '16:15:00'),
(2, 'Chemistry 201', '16:30:00', '18:00:00');                        
                        
                       
 create table lessons(id int auto_increment primary key,
                     title varchar(250) not null  ,
                     content text not null,
                     instructor_id int, 
                     foreign key(instructor_id) references instructors(id)
                     );
                     ALTER TABLE lessons
                     ADD date date;
                     ALTER TABLE lessons
                     ADD duration time;
                     
                     select * from lessons;
create table attendence (id int auto_increment primary key,
                     student_id int,
                     status enum('Present','Absent') not null,
                     foreign key(student_id) references students(id)
                     );    
                     SELECT * FROM attendence ;
                     
					 select * from attendence;
                     ALTER TABLE attendence DROP FOREIGN KEY attendence_ibfk_2;
                     ALTER TABLE attendence DROP COLUMN lecture_id;
                     
                     
                     